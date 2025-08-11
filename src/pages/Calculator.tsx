import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Divide, Minus, Plus, Delete, Copy } from "lucide-react";

// Import math.js for calculations
import * as math from "mathjs";

export default function CalculatorPage() {
  // Basic display and calculation state
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [memory, setMemory] = useState<string | null>(null);
  const [history, setHistory] = useState<{expression: string, result: string}[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  // Calculator modes and settings
  const [angleMode, setAngleMode] = useState<"deg" | "rad">("deg");
  const [precisionMode, setPrecisionMode] = useState<"auto" | "fixed">("auto");
  const [decimalPlaces, setDecimalPlaces] = useState<number>(10);
  const [scientific, setScientific] = useState<boolean>(true);
  const [largeNumberFormat, setLargeNumberFormat] = useState<"scientific" | "plain">("scientific");

  // Handle button clicks
  const handleButtonClick = (value: string) => {
    setError(null);
    
    switch (value) {
      case "=":
        calculateResult();
        break;
      case "C":
        clearInput();
        break;
      case "CE":
        clearEntry();
        break;
      case "BS":
        backspace();
        break;
      case "MS":
        setMemory(result || "0");
        break;
      case "MR":
        if (memory !== null) {
          setInput(prev => prev + memory);
        }
        break;
      case "MC":
        setMemory(null);
        break;
      case "M+":
        if (memory !== null && result) {
          try {
            const newMemory = math.evaluate(`${memory} + ${result}`);
            setMemory(newMemory.toString());
          } catch (e) {
            setError("Invalid operation");
          }
        }
        break;
      case "M-":
        if (memory !== null && result) {
          try {
            const newMemory = math.evaluate(`${memory} - ${result}`);
            setMemory(newMemory.toString());
          } catch (e) {
            setError("Invalid operation");
          }
        }
        break;
      case "π":
        setInput(prev => prev + "pi");
        break;
      case "e":
        setInput(prev => prev + "e");
        break;
      case "sin":
      case "cos":
      case "tan":
      case "asin":
      case "acos":
      case "atan":
      case "log":
      case "ln":
      case "sqrt":
        setInput(prev => prev + `${value}(`);
        break;
      case "x²":
        setInput(prev => prev + "^2");
        break;
      case "x³":
        setInput(prev => prev + "^3");
        break;
      case "10^x":
        setInput(prev => prev + "10^");
        break;
      case "x^y":
        setInput(prev => prev + "^");
        break;
      case "1/x":
        setInput(prev => prev + "^(-1)");
        break;
      case "x!":
        setInput(prev => prev + "!");
        break;
      default:
        setInput(prev => prev + value);
        break;
    }
  };
  
  // Copy result to clipboard
  const copyResult = () => {
    if (result) {
      navigator.clipboard.writeText(result);
    }
  };
  
  // Parse input and calculate result
  const calculateResult = () => {
    if (!input.trim()) return;
    
    try {
      // Prepare the expression
      let expression = input
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/π/g, "pi")
        .replace(/log/g, "log10")
        .replace(/ln/g, "log");

      // Apply angle mode conversion for trigonometric functions
      if (angleMode === "deg") {
        // Convert degrees to radians for sin, cos, tan
        expression = expression
          .replace(/sin\(/g, "sin(pi/180*")
          .replace(/cos\(/g, "cos(pi/180*")
          .replace(/tan\(/g, "tan(pi/180*");
          
        // Convert results of asin, acos, atan from radians to degrees
        expression = expression
          .replace(/asin\(/g, "180/pi*asin(")
          .replace(/acos\(/g, "180/pi*acos(")
          .replace(/atan\(/g, "180/pi*atan(");
      }
      
      // Calculate the result
      const mathResult = math.evaluate(expression);
      
      // Format the result based on settings
      const formattedResult = formatResult(mathResult);
      
      // Update state
      setResult(formattedResult);
      setHistory(prev => [{expression: input, result: formattedResult}, ...prev.slice(0, 9)]);
      setInput("");
    } catch (e) {
      setError("Invalid expression");
      console.error(e);
    }
  };
  
  // Format result based on user settings
  const formatResult = (value: any): string => {
    // Handle non-numeric results
    if (typeof value !== 'number') {
      return value.toString();
    }
    
    // Handle special cases
    if (Math.abs(value) > Number.MAX_SAFE_INTEGER) {
      if (largeNumberFormat === "scientific") {
        return value.toExponential(decimalPlaces);
      } else {
        return value.toString();
      }
    }
    
    if (precisionMode === "fixed") {
      return value.toFixed(decimalPlaces);
    } else {
      // Auto precision - don't cut off significant digits
      if (Math.abs(value) < 0.0001 || Math.abs(value) > 10000) {
        return value.toExponential(decimalPlaces);
      } else {
        // Use toFixed to avoid floating point issues, but trim trailing zeros
        const fixed = value.toFixed(decimalPlaces);
        return fixed.replace(/\.?0+$/, '');
      }
    }
  };
  
  // Clear functions
  const clearInput = () => {
    setInput("");
    setResult("");
    setError(null);
  };
  
  const clearEntry = () => {
    setInput("");
    setError(null);
  };
  
  const backspace = () => {
    setInput(prev => prev.slice(0, -1));
  };
  
  // Use a history entry
  const useHistoryEntry = (entry: {expression: string, result: string}) => {
    setInput(entry.expression);
  };
  
  // Define button groups
  const memoryButtons = ["MS", "MR", "MC", "M+", "M-"];
  const functionButtons = ["sin", "cos", "tan", "log", "ln", "sqrt"];
  const advancedFunctionButtons = ["asin", "acos", "atan", "x²", "x³", "10^x", "x^y", "1/x", "x!"];
  const numberButtons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "="];
  const operationButtons = ["C", "CE", "BS", "÷", "×", "-", "+"];
  const constantButtons = ["π", "e"];
  
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Advanced Scientific Calculator
            </h1>
            <p className="text-muted-foreground">
              Perform complex calculations with unlimited precision support
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle>Calculator</CardTitle>
              <CardDescription>
                Scientific calculator with full precision display
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-muted/50 p-4">
                <div className="space-y-2">
                  {/* Result display */}
                  <div className="relative">
                    <Input
                      type="text"
                      value={result}
                      readOnly
                      className="text-right text-2xl h-12 font-mono bg-background pr-12"
                      placeholder="Result"
                    />
                    {result && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-0 top-0 bottom-0"
                        onClick={copyResult}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  {/* Expression input */}
                  <div className="relative">
                    <Input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && calculateResult()}
                      className="text-right h-12 font-mono"
                      placeholder="Enter expression"
                    />
                    {error && (
                      <div className="absolute left-0 right-0 top-full text-destructive text-sm mt-1">
                        {error}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-8">
                  {/* Settings row */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="scientific-mode">Scientific Mode</Label>
                      <Switch
                        id="scientific-mode"
                        checked={scientific}
                        onCheckedChange={setScientific}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="angle-mode">Angle Mode</Label>
                      <Select value={angleMode} onValueChange={(val) => setAngleMode(val as "deg" | "rad")}>
                        <SelectTrigger className="w-20" id="angle-mode">
                          <SelectValue placeholder="Mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="deg">Deg</SelectItem>
                          <SelectItem value="rad">Rad</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="display-format">Large Numbers</Label>
                      <Select 
                        value={largeNumberFormat} 
                        onValueChange={(val) => setLargeNumberFormat(val as "scientific" | "plain")}
                      >
                        <SelectTrigger className="w-28" id="display-format">
                          <SelectValue placeholder="Format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="scientific">Scientific</SelectItem>
                          <SelectItem value="plain">Plain Text</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="decimal-places">Decimal Places</Label>
                      <Select 
                        value={decimalPlaces.toString()} 
                        onValueChange={(val) => setDecimalPlaces(parseInt(val))}
                      >
                        <SelectTrigger className="w-16" id="decimal-places">
                          <SelectValue placeholder="#" />
                        </SelectTrigger>
                        <SelectContent>
                          {[2, 4, 6, 8, 10, 15, 20, 30, 50].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="calculator" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger value="calculator">Calculator</TabsTrigger>
                      <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="calculator">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                        {/* Main calculator section */}
                        <div className="lg:col-span-3 grid grid-cols-4 gap-2">
                          {/* Memory buttons */}
                          <div className="col-span-4 flex flex-wrap gap-2 mb-2">
                            {memoryButtons.map(btn => (
                              <Button 
                                key={btn} 
                                variant="secondary" 
                                className="flex-1 text-sm h-10"
                                onClick={() => handleButtonClick(btn)}
                              >
                                {btn}
                              </Button>
                            ))}
                          </div>
                          
                          {/* Constants */}
                          <div className="col-span-4 flex gap-2 mb-2">
                            {constantButtons.map(btn => (
                              <Button 
                                key={btn} 
                                variant="outline" 
                                className="flex-1 text-lg h-10"
                                onClick={() => handleButtonClick(btn)}
                              >
                                {btn}
                              </Button>
                            ))}
                          </div>
                          
                          {/* Main grid of buttons */}
                          <div className="col-span-3">
                            <div className="grid grid-cols-3 gap-2">
                              {numberButtons.map(btn => (
                                <Button 
                                  key={btn} 
                                  variant={btn === "=" ? "default" : "outline"}
                                  size={btn === "=" ? "lg" : "default"}
                                  className={`${btn === "=" ? "col-span-3" : ""} h-12`}
                                  onClick={() => handleButtonClick(btn)}
                                >
                                  {btn}
                                </Button>
                              ))}
                            </div>
                          </div>
                          
                          <div className="col-span-1">
                            <div className="grid grid-cols-1 gap-2">
                              {operationButtons.map(btn => (
                                <Button 
                                  key={btn} 
                                  variant={["C", "CE", "BS"].includes(btn) ? "destructive" : "secondary"}
                                  className="h-12"
                                  onClick={() => handleButtonClick(btn)}
                                >
                                  {btn === "BS" ? <Delete className="h-4 w-4" /> :
                                    btn === "×" ? <X className="h-4 w-4" /> :
                                    btn === "÷" ? <Divide className="h-4 w-4" /> :
                                    btn === "-" ? <Minus className="h-4 w-4" /> :
                                    btn === "+" ? <Plus className="h-4 w-4" /> : btn}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Scientific function area */}
                        {scientific && (
                          <div className="lg:col-span-2">
                            <div className="grid grid-cols-3 gap-2">
                              {functionButtons.map(btn => (
                                <Button 
                                  key={btn} 
                                  variant="secondary"
                                  className="h-10"
                                  onClick={() => handleButtonClick(btn)}
                                >
                                  {btn}
                                </Button>
                              ))}
                              
                              {advancedFunctionButtons.map(btn => (
                                <Button 
                                  key={btn} 
                                  variant="secondary"
                                  className="h-10"
                                  onClick={() => handleButtonClick(btn)}
                                >
                                  {btn}
                                </Button>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <Button 
                                variant="outline"
                                className="h-10"
                                onClick={() => handleButtonClick("(")}
                              >
                                (
                              </Button>
                              <Button 
                                variant="outline"
                                className="h-10"
                                onClick={() => handleButtonClick(")")}
                              >
                                )
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="history">
                      {history.length > 0 ? (
                        <ScrollArea className="h-72 rounded-md border p-4">
                          <div className="space-y-4">
                            {history.map((entry, index) => (
                              <div 
                                key={index} 
                                className="p-3 bg-muted rounded-md cursor-pointer hover:bg-accent"
                                onClick={() => useHistoryEntry(entry)}
                              >
                                <div className="text-sm text-muted-foreground">{entry.expression}</div>
                                <div className="font-medium">{entry.result}</div>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      ) : (
                        <div className="text-center p-6 text-muted-foreground">
                          No calculation history yet
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>How to Use the Scientific Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-medium text-lg">Key Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full support for trigonometric functions (sin, cos, tan) in both degrees and radians</li>
                <li>Logarithmic functions (log for base 10, ln for natural logarithm)</li>
                <li>Memory operations to store and recall values</li>
                <li>Scientific notation for very large or small numbers</li>
                <li>High precision calculations with up to 50 decimal places</li>
                <li>Full calculation history for easy reference</li>
              </ul>
              
              <h3 className="font-medium text-lg mt-4">Example Operations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted p-3 rounded-md">
                  <div className="font-mono text-sm mb-1">sin(45)</div>
                  <div className="font-medium">Sine of 45 degrees</div>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <div className="font-mono text-sm mb-1">log(1000)</div>
                  <div className="font-medium">Base-10 logarithm of 1000</div>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <div className="font-mono text-sm mb-1">sqrt(pi^2)</div>
                  <div className="font-medium">Square root of π squared</div>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <div className="font-mono text-sm mb-1">10^23 * 6.02</div>
                  <div className="font-medium">Avogadro's number calculation</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}