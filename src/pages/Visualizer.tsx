import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { numberToWords, isValidNumber } from "@/lib/number-utils";

export default function VisualizerPage() {
  const [inputValue, setInputValue] = useState<string>("");
  const [visualizationNumber, setVisualizationNumber] = useState<number | null>(null);
  const [error, setError] = useState<string>("");
  
  // Common reference points for visualization
  const referencePoints = [
    { name: "1 millimeter", value: 0.001 },
    { name: "1 centimeter", value: 0.01 },
    { name: "1 inch", value: 0.0254 },
    { name: "1 foot", value: 0.3048 },
    { name: "1 meter", value: 1 },
    { name: "Average human height", value: 1.7 },
    { name: "Basketball hoop height", value: 3.05 },
    { name: "Double-decker bus", value: 4.3 },
    { name: "2-story house", value: 6 },
    { name: "Olympic swimming pool length", value: 50 },
    { name: "Football field", value: 100 },
    { name: "Eiffel Tower", value: 330 },
    { name: "Empire State Building", value: 443 },
    { name: "1 kilometer", value: 1000 },
    { name: "Mount Everest", value: 8849 },
    { name: "Distance from NYC to LA", value: 4000000 },
    { name: "Earth diameter", value: 12742000 },
    { name: "Distance to the Moon", value: 384400000 },
    { name: "Sun diameter", value: 1391000000 },
    { name: "Distance to the Sun", value: 149600000000 },
    { name: "Light year", value: 9460730472580800 },
    { name: "Milky Way diameter", value: 9.461e+20 },
    { name: "Observable universe diameter", value: 8.8e+26 }
  ];

  const handleVisualize = () => {
    if (!inputValue) {
      setError("Please enter a number to visualize");
      return;
    }
    
    if (!isValidNumber(inputValue)) {
      setError("Please enter a valid number");
      return;
    }
    
    const num = parseFloat(inputValue);
    
    if (num <= 0) {
      setError("Please enter a positive number");
      return;
    }
    
    if (num > 1e27) {
      setError("Number is too large to visualize effectively");
      return;
    }
    
    setError("");
    setVisualizationNumber(num);
  };

  // Find appropriate references to compare with the number
  const findReferences = () => {
    if (!visualizationNumber) return [];
    
    // Find references that are smaller, similar, and larger than the input number
    const smallerRefs = referencePoints.filter(ref => ref.value < visualizationNumber)
      .sort((a, b) => b.value - a.value)
      .slice(0, 2);
    
    const largerRefs = referencePoints.filter(ref => ref.value > visualizationNumber)
      .sort((a, b) => a.value - b.value)
      .slice(0, 2);
    
    // Find closest reference
    let closestRef = referencePoints[0];
    let minDiff = Math.abs(referencePoints[0].value - visualizationNumber);
    
    for (let i = 1; i < referencePoints.length; i++) {
      const diff = Math.abs(referencePoints[i].value - visualizationNumber);
      if (diff < minDiff) {
        minDiff = diff;
        closestRef = referencePoints[i];
      }
    }
    
    return [...smallerRefs, closestRef, ...largerRefs].filter((v, i, a) => 
      a.findIndex(t => t.name === v.name) === i
    );
  };
  
  const formatNumber = (num: number): string => {
    if (num >= 1e9) {
      return (num / 1e9).toLocaleString(undefined, { maximumFractionDigits: 2 }) + " billion";
    } else if (num >= 1e6) {
      return (num / 1e6).toLocaleString(undefined, { maximumFractionDigits: 2 }) + " million";
    } else if (num >= 1e3) {
      return (num / 1e3).toLocaleString(undefined, { maximumFractionDigits: 2 }) + " thousand";
    } else {
      return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
    }
  };
  
  const formatRatio = (num1: number, num2: number): string => {
    if (num1 > num2) {
      const ratio = num1 / num2;
      if (ratio > 1e6) {
        return `${(ratio / 1e6).toLocaleString(undefined, { maximumFractionDigits: 2 })} million times larger`;
      } else if (ratio > 1e3) {
        return `${(ratio / 1e3).toLocaleString(undefined, { maximumFractionDigits: 2 })} thousand times larger`;
      } else {
        return `${ratio.toLocaleString(undefined, { maximumFractionDigits: 2 })} times larger`;
      }
    } else {
      const ratio = num2 / num1;
      if (ratio > 1e6) {
        return `${(ratio / 1e6).toLocaleString(undefined, { maximumFractionDigits: 2 })} million times smaller`;
      } else if (ratio > 1e3) {
        return `${(ratio / 1e3).toLocaleString(undefined, { maximumFractionDigits: 2 })} thousand times smaller`;
      } else {
        return `${ratio.toLocaleString(undefined, { maximumFractionDigits: 2 })} times smaller`;
      }
    }
  };
  
  const references = visualizationNumber ? findReferences() : [];
  
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Number Visualizer
            </h1>
            <p className="text-muted-foreground">
              Understand the scale of large numbers by comparing them to familiar objects and distances
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Visualize a Number</CardTitle>
              <CardDescription>
                Enter any positive number to see how it compares to known measurements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-2">
                  <Input 
                    type="text"
                    placeholder="Enter a number (e.g., 1000)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleVisualize}>
                    Visualize
                  </Button>
                </div>
                
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                {visualizationNumber && (
                  <div className="space-y-6 mt-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Visualization for {visualizationNumber.toLocaleString()}</h3>
                      <p className="text-muted-foreground mb-4">
                        In words: {numberToWords(visualizationNumber)}
                      </p>
                    </div>
                    
                    <Tabs defaultValue="scale" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="scale">Scale Comparisons</TabsTrigger>
                        <TabsTrigger value="visual">Visual Representation</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="scale" className="space-y-4 mt-4">
                        <div className="space-y-6">
                          {references.length > 0 ? (
                            <div>
                              <div className="bg-muted/40 rounded-lg p-6">
                                <div className="text-xl font-semibold mb-4">Your number: {formatNumber(visualizationNumber)}</div>
                                <div className="space-y-4">
                                  {references.map((ref, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                      <div className="flex-1">
                                        <div className="font-medium">{ref.name}</div>
                                        <div className="text-sm text-muted-foreground">{formatNumber(ref.value)}</div>
                                      </div>
                                      <div>
                                        {formatRatio(visualizationNumber, ref.value)}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="mt-6 space-y-4">
                                <h4 className="font-semibold">What does this mean?</h4>
                                <p>
                                  The number you entered ({visualizationNumber.toLocaleString()}) has been compared to common 
                                  measurements to help you understand its scale. This can help give you a sense of its magnitude 
                                  in relation to things you might be familiar with.
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center py-8">
                              <p>Enter a number to see comparisons</p>
                            </div>
                          )}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="visual" className="space-y-4 mt-4">
                        <div className="bg-muted/40 rounded-lg p-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Relative Size Comparison</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              This visualization shows how your number compares to common references using relative bar heights.
                            </p>
                            
                            <div className="mt-6 mb-6">
                              {references.length > 0 && (
                                <div className="space-y-6">
                                  <div className="grid grid-cols-1 gap-2">
                                    {references.map((ref, index) => {
                                      // Calculate relative height as percentage of largest value
                                      const maxValue = Math.max(
                                        visualizationNumber, 
                                        ...references.map(r => r.value)
                                      );
                                      
                                      // Use log scale for better visualization
                                      const logMax = Math.log10(maxValue);
                                      const logRef = Math.log10(ref.value);
                                      const logYour = Math.log10(visualizationNumber);
                                      
                                      // Calculate height percentages (minimum 5%)
                                      const refHeight = Math.max(5, (logRef / logMax) * 100);
                                      const yourHeight = Math.max(5, (logYour / logMax) * 100);
                                      
                                      return (
                                        <div key={index} className="flex items-center space-x-4">
                                          <div className="w-40 text-sm">
                                            <div className="font-medium">{ref.name}</div>
                                            <div className="text-xs text-muted-foreground">{formatNumber(ref.value)}</div>
                                          </div>
                                          
                                          <div className="relative flex-1">
                                            <div className="flex space-x-2">
                                              <div 
                                                className="h-8 bg-blue-500 rounded-sm" 
                                                style={{ width: `${refHeight}%` }}
                                              ></div>
                                              
                                              <div 
                                                className="h-8 bg-red-500 rounded-sm" 
                                                style={{ width: `${yourHeight}%` }}
                                              ></div>
                                            </div>
                                            
                                            <div className="mt-1 flex space-x-2 text-xs">
                                              <div className="w-12">Reference</div>
                                              <div className="w-12">Your number</div>
                                            </div>
                                          </div>
                                          
                                          <div className="w-40 text-sm text-right">
                                            {formatRatio(visualizationNumber, ref.value)}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                  
                                  <div className="text-center text-sm bg-muted p-3 rounded-md">
                                    <p>Bars show relative size comparison using logarithmic scale for better visibility</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-muted/40 rounded-lg p-6 mt-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Area Representation</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              This visualization represents your number as an area compared to a reference value.
                            </p>
                            
                            {references.length > 0 && (
                              <div className="flex flex-col items-center space-y-8">
                                {/* Find a good reference for visualization */}
                                {(() => {
                                  const closestRef = references.find(ref => 
                                    ref.value <= visualizationNumber * 100 && ref.value >= visualizationNumber / 100
                                  ) || references[0];
                                  
                                  // Calculate square sizes based on ratio
                                  let size1, size2;
                                  if (visualizationNumber > closestRef.value) {
                                    size1 = 200;  // px
                                    size2 = Math.sqrt(closestRef.value / visualizationNumber) * size1;
                                  } else {
                                    size2 = 200;  // px
                                    size1 = Math.sqrt(visualizationNumber / closestRef.value) * size2;
                                  }
                                  
                                  // Ensure minimum size
                                  size1 = Math.max(size1, 10);
                                  size2 = Math.max(size2, 10);
                                  
                                  return (
                                    <div className="text-center">
                                      <div className="flex justify-center items-center space-x-12 mb-4">
                                        <div>
                                          <div 
                                            className="bg-blue-500 rounded-md mb-2"
                                            style={{ width: `${size1}px`, height: `${size1}px` }}
                                          ></div>
                                          <div className="text-sm font-medium">Your number: {formatNumber(visualizationNumber)}</div>
                                        </div>
                                        <div>
                                          <div 
                                            className="bg-green-500 rounded-md mb-2"
                                            style={{ width: `${size2}px`, height: `${size2}px` }}
                                          ></div>
                                          <div className="text-sm font-medium">{closestRef.name}: {formatNumber(closestRef.value)}</div>
                                        </div>
                                      </div>
                                      <p className="text-sm">
                                        The areas of these squares represent the relative scales of the two numbers.
                                      </p>
                                    </div>
                                  );
                                })()}
                              </div>
                            )}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Understanding Number Scale</CardTitle>
              <CardDescription>
                How to make sense of very large and very small numbers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Large numbers can be difficult to comprehend because they exceed our everyday experience. 
                  Our brains aren't naturally equipped to understand the difference between, say, a million and a billion.
                </p>
                <p>
                  One effective technique is to use comparisons or analogies with familiar objects or concepts. 
                  For example, if one million seconds is about 11.5 days, one billion seconds is about 31.7 years!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Time-based Comparisons</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>1 thousand seconds ≈ 17 minutes</li>
                      <li>1 million seconds ≈ 11.5 days</li>
                      <li>1 billion seconds ≈ 31.7 years</li>
                      <li>1 trillion seconds ≈ 31,700 years</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Financial Perspective</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>1 million dollars: Upper-middle class lifestyle for life</li>
                      <li>1 billion dollars: Among the world's wealthiest individuals</li>
                      <li>1 trillion dollars: Larger than most countries' annual budgets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}