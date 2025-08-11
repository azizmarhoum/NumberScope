import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { numberToWords, toScientificNotation, toEngineeringNotation, toRomanNumerals, getPlaceValues, isValidNumber } from "@/lib/number-utils";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Volume2, Copy } from "lucide-react";

export default function ConverterPage() {
  const [inputValue, setInputValue] = useState("");
  const [wordsResult, setWordsResult] = useState("");
  const [scientificResult, setScientificResult] = useState("");
  const [engineeringResult, setEngineeringResult] = useState("");
  const [romanResult, setRomanResult] = useState("");
  const [placeValues, setPlaceValues] = useState<Array<{place: string, value: number}>>([]);
  const [error, setError] = useState("");
  const [speaking, setSpeaking] = useState(false);
  
  // Process input when it changes
  useEffect(() => {
    if (!inputValue) {
      setWordsResult("");
      setScientificResult("");
      setEngineeringResult("");
      setRomanResult("");
      setPlaceValues([]);
      setError("");
      return;
    }
    
    if (!isValidNumber(inputValue)) {
      setError("Please enter a valid number");
      return;
    }
    
    setError("");
    
    try {
      const num = parseFloat(inputValue);
      
      // Number to words
      setWordsResult(numberToWords(num));
      
      // Scientific notation
      setScientificResult(toScientificNotation(num));
      
      // Engineering notation
      setEngineeringResult(toEngineeringNotation(num));
      
      // Roman numerals (only for valid range)
      setRomanResult(toRomanNumerals(num));
      
      // Place values
      setPlaceValues(getPlaceValues(num));
    } catch (err) {
      setError("Error processing number. Please try a different value.");
    }
  }, [inputValue]);
  
  // Handle audio playback
  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(wordsResult);
      speech.rate = 0.9;
      speech.pitch = 1;
      speech.volume = 1;
      
      setSpeaking(true);
      
      speech.onend = () => {
        setSpeaking(false);
      };
      
      window.speechSynthesis.speak(speech);
    } else {
      setError("Speech synthesis is not supported in your browser.");
    }
  };
  
  // Copy text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .catch(err => {
        console.error('Could not copy text: ', err);
        setError("Failed to copy to clipboard");
      });
  };
  
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Number Converter
            </h1>
            <p className="text-muted-foreground">
              Convert any number to words, scientific notation, and other formats.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Enter a Number</CardTitle>
              <CardDescription>
                Enter any number to see its word form and other representations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-2">
                  <Input 
                    type="text"
                    placeholder="Enter a number (e.g., 123456789)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline" onClick={() => setInputValue("")}>
                    Clear
                  </Button>
                </div>
                
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <Tabs defaultValue="words" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="words">Words</TabsTrigger>
                    <TabsTrigger value="notation">Notation</TabsTrigger>
                    <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
                    <TabsTrigger value="roman">Roman</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="words" className="space-y-4">
                    <div className="mt-6 flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">Number in Words:</h3>
                        <div className="flex space-x-2">
                          {wordsResult && (
                            <>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={handleSpeak} 
                                disabled={speaking}
                              >
                                <Volume2 className="h-4 w-4 mr-2" />
                                {speaking ? "Speaking..." : "Speak"}
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={() => copyToClipboard(wordsResult)}
                              >
                                <Copy className="h-4 w-4 mr-2" />
                                Copy
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-medium">{wordsResult || "Enter a number to see its word form"}</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="notation" className="space-y-4">
                    <div className="mt-6 flex flex-col space-y-6">
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">Scientific Notation:</h3>
                          {scientificResult && (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => copyToClipboard(scientificResult)}
                            >
                              <Copy className="h-4 w-4 mr-2" />
                              Copy
                            </Button>
                          )}
                        </div>
                        <div className="mt-2 rounded-md bg-muted p-4">
                          <p className="text-sm font-medium">{scientificResult || "Enter a number to see its scientific notation"}</p>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">Engineering Notation:</h3>
                          {engineeringResult && (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => copyToClipboard(engineeringResult)}
                            >
                              <Copy className="h-4 w-4 mr-2" />
                              Copy
                            </Button>
                          )}
                        </div>
                        <div className="mt-2 rounded-md bg-muted p-4">
                          <p className="text-sm font-medium">{engineeringResult || "Enter a number to see its engineering notation"}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="breakdown" className="space-y-4">
                    <div className="mt-6">
                      <h3 className="text-sm font-medium mb-2">Place Value Breakdown:</h3>
                      {placeValues.length > 0 ? (
                        <div className="rounded-md border overflow-hidden">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-muted">
                                <th className="px-4 py-2 text-left text-sm font-medium">Place</th>
                                <th className="px-4 py-2 text-right text-sm font-medium">Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              {placeValues.map((item, index) => (
                                <tr key={index} className="border-t">
                                  <td className="px-4 py-2 text-sm">{item.place}</td>
                                  <td className="px-4 py-2 text-right text-sm">{item.value.toLocaleString()}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="rounded-md bg-muted p-4">
                          <p className="text-sm font-medium">Enter a number to see its place value breakdown</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="roman" className="space-y-4">
                    <div className="mt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">Roman Numerals:</h3>
                        {romanResult && !romanResult.includes('typically') && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => copyToClipboard(romanResult)}
                          >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </Button>
                        )}
                      </div>
                      <div className="mt-2 rounded-md bg-muted p-4">
                        <p className="text-sm font-medium">{romanResult || "Enter a number to see its Roman numeral representation (valid for 1-3999)"}</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}