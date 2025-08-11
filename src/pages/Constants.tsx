import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useCallback } from "react";

export default function ConstantsPage() {
  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }, []);

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Mathematical Constants
            </h1>
            <p className="text-muted-foreground">
              Explore important constants in mathematics and their applications
            </p>
          </div>

          <Tabs defaultValue="pi" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="pi">Pi (π)</TabsTrigger>
              <TabsTrigger value="e">Euler's Number (e)</TabsTrigger>
              <TabsTrigger value="phi">Golden Ratio (φ)</TabsTrigger>
              <TabsTrigger value="sqrt2">Square Root of 2</TabsTrigger>
              <TabsTrigger value="others">Other Constants</TabsTrigger>
            </TabsList>
            
            <TabsContent value="pi" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Pi (π) 
                    <span className="text-2xl font-normal">≈ 3.14159265359</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 ml-2"
                      onClick={() => copyToClipboard("3.14159265359")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Copy
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    The ratio of a circle's circumference to its diameter
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <p>
                        Pi (π) is one of the most famous mathematical constants, representing the ratio of a circle's 
                        circumference to its diameter. It's an irrational number, which means it cannot be expressed as a 
                        simple fraction, and its decimal representation never ends or repeats.
                      </p>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Key Formulas</h3>
                        <div className="bg-muted p-4 rounded-lg space-y-2">
                          <p>Circumference of a circle: C = 2πr</p>
                          <p>Area of a circle: A = πr²</p>
                          <p>Volume of a sphere: V = (4/3)πr³</p>
                          <p>Surface area of a sphere: A = 4πr²</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">First 100 Digits</h3>
                        <div className="bg-muted p-4 rounded-lg text-sm font-mono break-words">
                          3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Historical Significance</h3>
                        <p>
                          The quest to calculate π has a long history spanning thousands of years. Ancient civilizations, 
                          including the Babylonians and Egyptians, used approximations. Archimedes (287-212 BCE) was among the 
                          first to calculate π systematically using geometric methods.
                        </p>
                        <p className="mt-2">
                          In modern times, computers have calculated π to trillions of digits, though for most practical 
                          applications, just a few decimal places are sufficient.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Interesting Facts</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Pi Day is celebrated on March 14 (3/14) in reference to the first three digits of π</li>
                          <li>The record for memorizing digits of π is over 70,000 digits</li>
                          <li>In 2019, Google calculated π to 31.4 trillion digits</li>
                          <li>π appears in many areas beyond geometry, including statistics, physics, and number theory</li>
                          <li>Some mathematicians have proposed replacing π with tau (τ = 2π) as a more natural constant</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="e" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Euler's Number (e) 
                    <span className="text-2xl font-normal">≈ 2.71828182846</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 ml-2"
                      onClick={() => copyToClipboard("2.71828182846")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Copy
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    The base of natural logarithms and foundation of exponential growth
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <p>
                        Euler's number (e) is a fundamental mathematical constant that appears in calculus, complex analysis, 
                        and many other areas of mathematics. Like π, it's an irrational number whose decimal representation 
                        never ends or repeats.
                      </p>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Key Formulas</h3>
                        <div className="bg-muted p-4 rounded-lg space-y-2">
                          <p>Definition: e = lim<sub>n→∞</sub>(1 + 1/n)<sup>n</sup></p>
                          <p>Exponential growth: y = e<sup>x</sup></p>
                          <p>Euler's identity: e<sup>iπ</sup> + 1 = 0</p>
                          <p>Natural logarithm: ln(x) = log<sub>e</sub>(x)</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">First 100 Digits</h3>
                        <div className="bg-muted p-4 rounded-lg text-sm font-mono break-words">
                          2.7182818284 5904523536 0287471352 6624977572 4709369995 9574966967 6277240766 3035354759 4571382178 5251664274
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Applications</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Compound interest: A = P(1 + r/n)<sup>nt</sup> → P·e<sup>rt</sup> as n → ∞</li>
                          <li>Population growth modeling</li>
                          <li>Probability theory and normal distributions</li>
                          <li>Signal processing</li>
                          <li>Quantum mechanics</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Historical Context</h3>
                        <p>
                          The constant was discovered by Jacob Bernoulli in 1683 while studying compound interest.
                          However, it was Leonhard Euler who extensively investigated its properties in the 1720s and gave it
                          its name (the letter e).
                        </p>
                        <p className="mt-2">
                          Euler demonstrated numerous remarkable properties and relationships involving e, including its 
                          connection to trigonometric functions through complex numbers, leading to the famous Euler's identity.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Interesting Facts</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>The number e appears naturally in calculations involving growth and decay</li>
                          <li>e is the only number whose natural logarithm equals 1</li>
                          <li>The function e<sup>x</sup> is its own derivative</li>
                          <li>Euler's identity (e<sup>iπ</sup> + 1 = 0) is often called "the most beautiful equation in mathematics" as it connects five fundamental constants: 0, 1, i, e, and π</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="phi" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Golden Ratio (φ) 
                    <span className="text-2xl font-normal">≈ 1.61803398875</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 ml-2"
                      onClick={() => copyToClipboard("1.61803398875")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Copy
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    A special number often found in art, architecture, and nature
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <p>
                        The golden ratio (φ or phi) is approximately 1.618 and is considered aesthetically pleasing in art and design.
                        A rectangle whose sides are in the ratio 1:φ is called a "golden rectangle" and was used extensively in classical architecture.
                      </p>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Mathematical Definition</h3>
                        <div className="bg-muted p-4 rounded-lg space-y-2">
                          <p>φ = (1 + √5) / 2 ≈ 1.61803398875</p>
                          <p>A unique property: φ = 1 + 1/φ</p>
                          <p>Also: φ² = φ + 1</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Geometric Representation</h3>
                        <p>
                          In a golden rectangle, if you remove a square with sides equal to the shorter side of the rectangle,
                          the remaining rectangle is also a golden rectangle. This property allows for the construction of a 
                          logarithmic spiral by connecting quarter-circles within these squares.
                        </p>
                        <div className="flex justify-center my-4">
                          <div className="bg-blue-100 dark:bg-blue-900 w-64 h-40 relative border border-blue-500">
                            <div className="absolute left-0 top-0 w-40 h-40 border-r border-blue-500"></div>
                            <div className="absolute right-0 top-0 w-24 h-24 border-b border-blue-500"></div>
                            <div className="absolute right-0 bottom-0 w-16 h-16"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Where It Appears</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>The Fibonacci sequence: The ratio of consecutive Fibonacci numbers approaches φ</li>
                          <li>The Parthenon and other classical Greek architecture</li>
                          <li>Leonardo da Vinci's paintings, including the "Vitruvian Man"</li>
                          <li>Spiral patterns in nature: pinecones, sunflower seed arrangements, nautilus shells</li>
                          <li>The proportions of the human face and body in classical aesthetics</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Historical Significance</h3>
                        <p>
                          The golden ratio has been known since at least the time of Euclid (c. 300 BCE). It was called the "divine proportion"
                          during the Renaissance and was thought to embody aesthetic perfection. Many artists and architects
                          have deliberately incorporated it into their works.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Interesting Facts</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>The golden ratio is the most irrational number, meaning it's poorly approximated by fractions</li>
                          <li>The continued fraction representation of φ consists entirely of 1s</li>
                          <li>While φ appears in many natural phenomena, some claims about its occurrence in art and architecture are debated</li>
                          <li>The golden angle (≈137.5°) derived from φ appears in the arrangement of leaves around plant stems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sqrt2" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Square Root of 2 
                    <span className="text-2xl font-normal">≈ 1.41421356237</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 ml-2"
                      onClick={() => copyToClipboard("1.41421356237")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Copy
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    The first irrational number to be discovered
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <p>
                        The square root of 2 (√2) is the positive number that, when multiplied by itself, equals 2.
                        It is geometrically represented as the length of the diagonal of a square with sides of length 1.
                        It was one of the first numbers proven to be irrational, meaning it cannot be expressed as a ratio of integers.
                      </p>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Mathematical Representation</h3>
                        <div className="bg-muted p-4 rounded-lg space-y-2">
                          <p>√2 ≈ 1.41421356237</p>
                          <p>√2 = diagonal of a unit square</p>
                          <p>√2 is irrational: it cannot be written as p/q where p and q are integers</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Geometric Significance</h3>
                        <div className="flex justify-center my-4">
                          <div className="relative w-40 h-40 border border-blue-500">
                            <div className="absolute top-0 left-0 w-full h-full border-blue-500 flex items-center justify-center">
                              <div className="w-0.5 h-full bg-red-500 absolute rotate-45"></div>
                              <div className="absolute text-xs font-bold text-red-500 -right-8 -bottom-8">√2</div>
                              <div className="absolute text-xs font-bold bottom-[-20px] left-1/2 transform -translate-x-1/2">1</div>
                              <div className="absolute text-xs font-bold -left-4 top-1/2 transform -translate-y-1/2">1</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Historical Significance</h3>
                        <p>
                          The discovery that √2 is irrational is attributed to Hippasus, a member of the Pythagorean school of mathematics 
                          in ancient Greece (around 500 BCE). Legend has it that the Pythagoreans, who believed all numbers were rational, 
                          were so disturbed by this discovery that Hippasus was drowned at sea for revealing it.
                        </p>
                        <p className="mt-2">
                          This discovery was revolutionary because it showed that the diagonal of a square and its side are incommensurable—they
                          cannot both be measured by the same unit.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Applications</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Standard paper sizes (A4, etc.) have sides in the ratio 1:√2</li>
                          <li>Frequency relationships in music (the interval of an octave)</li>
                          <li>Calculating diagonal measurements in squares and rectangles</li>
                          <li>Fundamental in coordinate geometry and trigonometry</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Interesting Facts</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>√2 is known as the "Pythagoras constant"</li>
                          <li>A simple continued fraction for √2 is [1; 2, 2, 2, ...]</li>
                          <li>International standard paper sizes (ISO 216, including A4) are based on a rectangle with sides in ratio 1:√2</li>
                          <li>When a square piece of paper is folded in half, the resulting rectangle has sides in the ratio 1:√2</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="others" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Other Important Mathematical Constants</CardTitle>
                  <CardDescription>
                    Lesser-known but significant numbers in mathematics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Constant</TableHead>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Approximate Value</TableHead>
                        <TableHead>Significance</TableHead>
                        <TableHead className="text-right">Copy</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Gamma constant</TableCell>
                        <TableCell>γ</TableCell>
                        <TableCell>0.57721566490</TableCell>
                        <TableCell>Euler-Mascheroni constant, appears in calculus and number theory</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="ghost" onClick={() => copyToClipboard("0.57721566490")}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Feigenbaum constant</TableCell>
                        <TableCell>δ</TableCell>
                        <TableCell>4.66920160910</TableCell>
                        <TableCell>Ratio between successive bifurcation intervals in chaos theory</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="ghost" onClick={() => copyToClipboard("4.66920160910")}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Apéry's constant</TableCell>
                        <TableCell>ζ(3)</TableCell>
                        <TableCell>1.20205690316</TableCell>
                        <TableCell>Sum of the infinite series 1/1³ + 1/2³ + 1/3³ + ...</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="ghost" onClick={() => copyToClipboard("1.20205690316")}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conway's constant</TableCell>
                        <TableCell>λ</TableCell>
                        <TableCell>1.30357726903</TableCell>
                        <TableCell>Growth rate of the "look and say" sequence</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="ghost" onClick={() => copyToClipboard("1.30357726903")}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Khinchin's constant</TableCell>
                        <TableCell>K</TableCell>
                        <TableCell>2.68545200106</TableCell>
                        <TableCell>Related to the geometric mean of the terms in continued fractions</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="ghost" onClick={() => copyToClipboard("2.68545200106")}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Silver ratio</TableCell>
                        <TableCell>δ<sub>s</sub></TableCell>
                        <TableCell>2.41421356237</TableCell>
                        <TableCell>1 + √2, appears in geometry and design as an alternative to the golden ratio</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="ghost" onClick={() => copyToClipboard("2.41421356237")}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Catalan's constant</TableCell>
                        <TableCell>G</TableCell>
                        <TableCell>0.91596559417</TableCell>
                        <TableCell>Appears in combinatorics and number theory</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="ghost" onClick={() => copyToClipboard("0.91596559417")}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Plastic number</TableCell>
                        <TableCell>ρ</TableCell>
                        <TableCell>1.32471795724</TableCell>
                        <TableCell>The unique real solution to x³ = x + 1</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="ghost" onClick={() => copyToClipboard("1.32471795724")}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}