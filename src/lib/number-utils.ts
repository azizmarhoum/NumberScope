// Number-to-words conversion functions
const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

// Short scale large number names (US, modern British)
const scaleNames = [
  '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion',
  'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion',
  'quattuordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion',
  'vigintillion'
];

// Long scale large number names (traditional British, most European countries)
const longScaleNames = [
  '', 'thousand', 'million', 'milliard', 'billion', 'billiard', 'trillion', 'trilliard',
  'quadrillion', 'quadrilliard', 'quintillion', 'quintilliard', 'sextillion', 'sextilliard',
  'septillion', 'septilliard', 'octillion', 'octilliard', 'nonillion', 'nonilliard', 'decillion'
];

// Indian system scale names
const indianScaleNames = [
  '', 'thousand', 'lakh', 'crore', 'arab', 'kharab', 'nil', 'padma',
  'shankh'
];

/**
 * Converts a number less than 1000 to words
 */
function convertLessThanOneThousand(num: number): string {
  if (num === 0) {
    return '';
  }
  
  if (num < 20) {
    return units[num];
  }
  
  if (num < 100) {
    return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? '-' + units[num % 10] : '');
  }
  
  return units[Math.floor(num / 100)] + ' hundred' + 
    (num % 100 !== 0 ? ' and ' + convertLessThanOneThousand(num % 100) : '');
}

/**
 * Main function to convert a number to words using short scale
 */
export function numberToWords(num: number | string): string {
  // Handle 0 separately
  if (num === 0 || num === '0') {
    return 'zero';
  }
  
  // Convert string to number if needed
  const numValue = typeof num === 'string' ? parseFloat(num) : num;
  
  // Handle negative numbers
  if (numValue < 0) {
    return 'negative ' + numberToWords(Math.abs(numValue));
  }
  
  // Handle decimal numbers
  if (numValue !== Math.floor(numValue)) {
    const parts = numValue.toString().split('.');
    const integerPart = parseInt(parts[0]);
    const decimalPart = parts[1];
    
    let result = numberToWords(integerPart);
    
    if (decimalPart) {
      result += ' point';
      for (let i = 0; i < decimalPart.length; i++) {
        result += ' ' + units[parseInt(decimalPart[i])];
      }
    }
    
    return result;
  }
  
  // For very large numbers, use scientific notation
  if (numValue >= 1e66) {
    return toScientificNotation(numValue);
  }
  
  let result = '';
  let numToProcess = Math.floor(numValue);
  
  // Process the number in groups of 3 digits
  for (let i = 0; numToProcess > 0; i++) {
    const chunk = numToProcess % 1000;
    
    if (chunk !== 0) {
      const chunkInWords = convertLessThanOneThousand(chunk);
      result = chunkInWords + (i > 0 ? ' ' + scaleNames[i] + ' ' : '') + result;
    }
    
    numToProcess = Math.floor(numToProcess / 1000);
  }
  
  return result.trim();
}

/**
 * Convert number to Indian system naming (lakh, crore)
 */
export function numberToIndianSystem(num: number | string): string {
  // Convert string to number if needed
  const numValue = typeof num === 'string' ? parseFloat(num) : num;
  
  if (numValue === 0) {
    return 'zero';
  }
  
  if (numValue < 0) {
    return 'negative ' + numberToIndianSystem(Math.abs(numValue));
  }
  
  if (numValue < 1000) {
    return convertLessThanOneThousand(numValue);
  }
  
  // Handle thousands
  if (numValue < 100000) {
    const thousands = Math.floor(numValue / 1000);
    const remainder = numValue % 1000;
    return convertLessThanOneThousand(thousands) + ' thousand' + 
      (remainder !== 0 ? ' ' + convertLessThanOneThousand(remainder) : '');
  }
  
  // Handle lakhs (hundred thousands)
  if (numValue < 10000000) {
    const lakhs = Math.floor(numValue / 100000);
    const remainder = numValue % 100000;
    return convertLessThanOneThousand(lakhs) + ' lakh' + 
      (remainder !== 0 ? ' ' + numberToIndianSystem(remainder) : '');
  }
  
  // Handle crores (ten millions) and beyond
  const crores = Math.floor(numValue / 10000000);
  const remainder = numValue % 10000000;
  return convertLessThanOneThousand(crores) + ' crore' + 
    (remainder !== 0 ? ' ' + numberToIndianSystem(remainder) : '');
}

/**
 * Convert to scientific notation
 */
export function toScientificNotation(num: number): string {
  const scientificStr = num.toExponential();
  const parts = scientificStr.split('e');
  const coefficient = parseFloat(parts[0]).toFixed(2);
  const exponent = parseInt(parts[1]);
  
  return `${coefficient} × 10^${exponent}`;
}

/**
 * Convert to engineering notation
 */
export function toEngineeringNotation(num: number): string {
  const scientificStr = num.toExponential();
  const parts = scientificStr.split('e');
  const exponent = parseInt(parts[1]);
  
  // Adjust exponent to be a multiple of 3
  const remainder = exponent % 3;
  const adjustedExponent = exponent - remainder;
  const adjustedCoefficient = parseFloat(parts[0]) * Math.pow(10, remainder);
  
  return `${adjustedCoefficient.toFixed(2)} × 10^${adjustedExponent}`;
}

/**
 * Convert to Roman numerals (for numbers 1-3999)
 */
export function toRomanNumerals(num: number): string {
  if (num < 1 || num > 3999) {
    return 'Roman numerals typically represent numbers from 1 to 3999';
  }
  
  const romanNumerals = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM']
  ];
  
  return romanNumerals[3][Math.floor(num / 1000)] +
         romanNumerals[2][Math.floor((num % 1000) / 100)] +
         romanNumerals[1][Math.floor((num % 100) / 10)] +
         romanNumerals[0][num % 10];
}

/**
 * Break down a number into its place values
 */
export function getPlaceValues(num: number | string): Array<{place: string, value: number}> {
  const numStr = typeof num === 'string' ? num : num.toString();
  const result = [];
  
  // Handle the whole number part
  const parts = numStr.split('.');
  const wholeNumberPart = parts[0];
  
  for (let i = 0; i < wholeNumberPart.length; i++) {
    const digitValue = parseInt(wholeNumberPart[i]);
    const placeIndex = wholeNumberPart.length - 1 - i;
    const placeValue = Math.pow(10, placeIndex);
    
    if (digitValue !== 0) {
      let placeName;
      
      if (placeIndex === 0) placeName = 'ones';
      else if (placeIndex === 1) placeName = 'tens';
      else if (placeIndex === 2) placeName = 'hundreds';
      else if (placeIndex >= 3) {
        const scaleIndex = Math.floor((placeIndex - 1) / 3);
        const scaleName = scaleNames[scaleIndex] || `10^${placeIndex}`;
        
        if (placeIndex % 3 === 0) placeName = scaleName;
        else if (placeIndex % 3 === 1) placeName = `tens of ${scaleName}`;
        else placeName = `hundreds of ${scaleName}`;
      }
      
      result.push({
        place: placeName,
        value: digitValue * placeValue
      });
    }
  }
  
  // Handle decimal part if present
  if (parts.length > 1) {
    const decimalPart = parts[1];
    for (let i = 0; i < decimalPart.length; i++) {
      const digitValue = parseInt(decimalPart[i]);
      const placeIndex = -(i + 1);
      const placeValue = Math.pow(10, placeIndex);
      
      if (digitValue !== 0) {
        const placeName = `tenths${i > 0 ? '^' + (i + 1) : ''}`;
        result.push({
          place: placeName,
          value: digitValue * placeValue
        });
      }
    }
  }
  
  return result;
}

// Function to check if a string is a valid number
export function isValidNumber(str: string): boolean {
  // Allow empty string
  if (!str.trim()) return true;
  
  // Test for valid number format (including decimals and scientific notation)
  return /^-?\d*\.?\d+(?:[eE][-+]?\d+)?$/.test(str);
}