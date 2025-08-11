import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type GlossaryItem = {
  term: string;
  definition: string;
  category: string;
};

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const glossaryItems: GlossaryItem[] = [
    {
      term: "Binary",
      definition: "A number system that uses only two digits: 0 and 1. It is the foundation of digital computing and electronics.",
      category: "Number Systems"
    },
    {
      term: "Decimal",
      definition: "A number system with a base of 10, using digits from 0 to 9. It's the most commonly used number system worldwide.",
      category: "Number Systems"
    },
    {
      term: "Hexadecimal",
      definition: "A number system with a base of 16, using digits 0-9 and letters A-F. Commonly used in computing for representing binary values more compactly.",
      category: "Number Systems"
    },
    {
      term: "Octal",
      definition: "A number system with a base of 8, using digits 0-7. Historically used in computing and still relevant in certain programming contexts.",
      category: "Number Systems"
    },
    {
      term: "Long Scale",
      definition: "A system for naming large numbers where each new term greater than million is 1,000,000 times the previous term. Used in many European countries.",
      category: "Number Scales"
    },
    {
      term: "Short Scale",
      definition: "A system for naming large numbers where each new term greater than million is 1,000 times the previous term. Used in the US, UK (since 1974), and many English-speaking countries.",
      category: "Number Scales"
    },
    {
      term: "Place Value",
      definition: "The value of a digit based on its position in a number. In the decimal system, positions represent powers of 10.",
      category: "Number Concepts"
    },
    {
      term: "Scientific Notation",
      definition: "A way of writing numbers that are too large or too small in a more compact form, expressed as a × 10^b, where 1 ≤ a < 10 and b is an integer.",
      category: "Number Formats"
    },
    {
      term: "Engineering Notation",
      definition: "A form of scientific notation where the exponent of 10 is always a multiple of 3, making it align with SI unit prefixes.",
      category: "Number Formats"
    },
    {
      term: "SI Prefixes",
      definition: "Standardized prefixes used in the metric system to denote multiplication by powers of 10, such as kilo-, mega-, giga-, etc.",
      category: "Number Formats"
    },
    {
      term: "Roman Numerals",
      definition: "A numeral system originating in ancient Rome, using combinations of letters from the Latin alphabet (I, V, X, L, C, D, M) to represent numbers.",
      category: "Number Systems"
    },
    {
      term: "Crore",
      definition: "A unit in the Indian numbering system equal to 10 million (10,000,000) or 100 lakhs.",
      category: "Number Systems"
    },
    {
      term: "Lakh",
      definition: "A unit in the Indian numbering system equal to 100,000.",
      category: "Number Systems"
    },
    {
      term: "Positional Notation",
      definition: "A numeral system where the position of a digit determines its value. The value of each position increases by a fixed multiplier (the base).",
      category: "Number Concepts"
    },
    {
      term: "Non-positional Notation",
      definition: "A numeral system where the position of a symbol doesn't determine its value. Roman numerals are an example.",
      category: "Number Concepts"
    },
    {
      term: "Order of Magnitude",
      definition: "A scale used to compare quantities. Two values differ by one order of magnitude when one is about 10 times the size of the other.",
      category: "Number Concepts"
    },
    {
      term: "Myriad",
      definition: "A classical Greek number representing 10,000. Also used in East Asian numbering systems as a base unit (万, wan).",
      category: "Number Systems"
    },
    {
      term: "Cardinal Number",
      definition: "A number used to denote quantity (one, two, three, etc.).",
      category: "Number Types"
    },
    {
      term: "Ordinal Number",
      definition: "A number that represents position or rank (first, second, third, etc.).",
      category: "Number Types"
    },
    {
      term: "Nominal Number",
      definition: "A number used solely for identification without any numerical value or order (like jersey numbers, zip codes).",
      category: "Number Types"
    },
    {
      term: "Rational Number",
      definition: "Any number that can be expressed as the quotient or fraction p/q of two integers, with denominator q not equal to zero.",
      category: "Number Types"
    },
    {
      term: "Irrational Number",
      definition: "A real number that cannot be expressed as a ratio of integers. Examples include π, e, and √2.",
      category: "Number Types"
    },
    {
      term: "Transcendental Number",
      definition: "A number that is not algebraic, meaning it is not the root of any polynomial with rational coefficients. π and e are examples.",
      category: "Number Types"
    },
    {
      term: "Imaginary Number",
      definition: "A complex number that can be written as a real number multiplied by the imaginary unit i, which is defined as the square root of −1.",
      category: "Number Types"
    },
    {
      term: "Complex Number",
      definition: "A number that can be expressed in the form a + bi, where a and b are real numbers and i is the imaginary unit.",
      category: "Number Types"
    },
    {
      term: "Googol",
      definition: "The number 10^100 (1 followed by 100 zeros), coined by mathematician Edward Kasner's nine-year-old nephew.",
      category: "Large Numbers"
    },
    {
      term: "Googolplex",
      definition: "The number 10^googol (1 followed by a googol of zeros), one of the largest named numbers.",
      category: "Large Numbers"
    },
    {
      term: "Graham's Number",
      definition: "An enormous number named after mathematician Ronald Graham, so large that it cannot be expressed using standard notation.",
      category: "Large Numbers"
    },
    {
      term: "TREE(3)",
      definition: "A number far larger than Graham's number, arising from a problem in graph theory, considered one of the largest numbers used in serious mathematics.",
      category: "Large Numbers"
    },
    {
      term: "Infinity",
      definition: "A concept representing something without bound or limit. Not a number itself, but a mathematical concept describing endlessness.",
      category: "Mathematical Concepts"
    },
    {
      term: "Aleph Numbers",
      definition: "A sequence of numbers used to represent different sizes of infinity, developed by mathematician Georg Cantor.",
      category: "Large Numbers"
    },
    {
      term: "Quintillion",
      definition: "In the short scale, 10^18 or 1,000,000,000,000,000,000. In the long scale, 10^30.",
      category: "Large Numbers"
    },
    {
      term: "Sextillion",
      definition: "In the short scale, 10^21 or 1,000,000,000,000,000,000,000. In the long scale, 10^36.",
      category: "Large Numbers"
    },
    {
      term: "Base",
      definition: "The number of unique digits used in a number system. Decimal is base-10, binary is base-2, hexadecimal is base-16.",
      category: "Number Systems"
    },
    {
      term: "Exponent",
      definition: "A value that represents how many times a number is multiplied by itself. In 10^3, the exponent is 3, meaning 10×10×10 = 1,000.",
      category: "Number Concepts"
    },
    {
      term: "Mantissa",
      definition: "In scientific notation, the part of a number that determines its precision, typically expressed as a decimal with one non-zero digit before the decimal point.",
      category: "Number Formats"
    },
    {
      term: "Significant Figures",
      definition: "The digits in a number that carry meaningful information. They determine the precision of a measurement or calculation.",
      category: "Number Concepts"
    },
    {
      term: "Floating-point",
      definition: "A way of representing real numbers in computing that can handle a wide range of values by using a form of scientific notation.",
      category: "Computing"
    },
    {
      term: "Prime Number",
      definition: "A natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.",
      category: "Number Properties"
    },
    {
      term: "Composite Number",
      definition: "A positive integer that has factors other than 1 and itself, meaning it is not a prime number.",
      category: "Number Properties"
    },
    {
      term: "Perfect Number",
      definition: "A positive integer that equals the sum of its proper divisors. The first perfect number is 6 (1+2+3=6).",
      category: "Number Properties"
    },
    {
      term: "Triangular Number",
      definition: "A number that represents a triangular arrangement of objects, calculated as n(n+1)/2.",
      category: "Number Sequences"
    },
    {
      term: "Fibonacci Number",
      definition: "A member of the Fibonacci sequence, where each number is the sum of the two preceding ones (0, 1, 1, 2, 3, 5, 8, 13, ...).",
      category: "Number Sequences"
    },
    {
      term: "Golden Ratio",
      definition: "An irrational number (approximately 1.6180339887) that appears in geometry, art, architecture, and nature, represented by the Greek letter φ (phi).",
      category: "Mathematical Constants"
    },
    {
      term: "Pi (π)",
      definition: "The ratio of a circle's circumference to its diameter, approximately equal to 3.14159, and one of the most famous mathematical constants.",
      category: "Mathematical Constants"
    },
    {
      term: "Euler's Number (e)",
      definition: "The base of natural logarithms, approximately equal to 2.71828, a fundamental constant in mathematics.",
      category: "Mathematical Constants"
    },
    {
      term: "Avogadro's Number",
      definition: "The number of particles in one mole of substance, equal to 6.02214076 × 10^23, used in chemistry and physics.",
      category: "Scientific Constants"
    },
    {
      term: "Planck's Constant",
      definition: "A fundamental constant in quantum mechanics, approximately 6.62607015 × 10^−34 joule seconds.",
      category: "Scientific Constants"
    },
    {
      term: "Hindu-Arabic Numerals",
      definition: "The ten digits (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) used in the decimal system. Originated in India and spread through Arabic mathematicians to Europe.",
      category: "Number Systems"
    }
  ];
  
  // Filter items based on search term
  const filteredItems = searchTerm.trim() === "" 
    ? glossaryItems 
    : glossaryItems.filter(item => 
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.definition.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
  // Group items by category
  const groupedItems: Record<string, GlossaryItem[]> = filteredItems.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {} as Record<string, GlossaryItem[]>);
  
  // Sort categories alphabetically
  const sortedCategories = Object.keys(groupedItems).sort();
  
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Glossary of Number Terms
            </h1>
            <p className="text-muted-foreground">
              Explore definitions for number-related terms, concepts, and systems
            </p>
          </div>
          
          <div className="w-full max-w-md">
            <Input
              type="text"
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {filteredItems.length === 0 ? (
            <div className="text-center py-8">
              <p>No results found for "{searchTerm}"</p>
            </div>
          ) : (
            <>
              {sortedCategories.map((category) => (
                <div key={category} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">{category}</h2>
                    <Badge className="ml-2">{groupedItems[category].length}</Badge>
                  </div>
                  <Separator />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {groupedItems[category].map((item, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="pb-2 bg-muted/50">
                          <CardTitle className="text-xl">{item.term}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <p>{item.definition}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}