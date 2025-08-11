import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function FormatsPage() {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Number Formats
            </h1>
            <p className="text-muted-foreground">
              Learn about different ways to represent and format numbers
            </p>
          </div>

          <Tabs defaultValue="scientific" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:w-auto">
              <TabsTrigger value="scientific">Scientific</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="roman">Roman Numerals</TabsTrigger>
              <TabsTrigger value="base">Number Bases</TabsTrigger>
            </TabsList>
            
            <TabsContent value="scientific" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Scientific Notation</CardTitle>
                  <CardDescription>
                    A way of expressing numbers that are too large or small in a compact form
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Scientific notation expresses numbers in the form: <strong>a × 10<sup>b</sup></strong>, 
                    where <strong>a</strong> is a number between 1 and 10, and <strong>b</strong> is an integer.
                  </p>
                  
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Why Use Scientific Notation?</AlertTitle>
                    <AlertDescription>
                      Scientific notation makes it easier to represent and work with very large or very small numbers. It's widely used in science, engineering, and computing.
                    </AlertDescription>
                  </Alert>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Examples</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Standard Form</TableHead>
                          <TableHead>Scientific Notation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>1,000</TableCell>
                          <TableCell>1 × 10<sup>3</sup></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>1,000,000</TableCell>
                          <TableCell>1 × 10<sup>6</sup></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>299,792,458</TableCell>
                          <TableCell>2.99792458 × 10<sup>8</sup></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>0.000001</TableCell>
                          <TableCell>1 × 10<sup>-6</sup></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>0.0000000000000000000167</TableCell>
                          <TableCell>1.67 × 10<sup>-20</sup></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Converting to Scientific Notation</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Move the decimal point until there is exactly one non-zero digit to the left of it</li>
                      <li>Count how many places you moved the decimal point</li>
                      <li>If you moved right, the exponent is negative; if you moved left, it's positive</li>
                      <li>Write the number as a × 10<sup>b</sup></li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="engineering" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Engineering Notation</CardTitle>
                  <CardDescription>
                    A variation of scientific notation where the exponent is always a multiple of 3
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Engineering notation expresses numbers in the form: <strong>a × 10<sup>3n</sup></strong>, 
                    where <strong>a</strong> is a number between 1 and 999.99, and <strong>n</strong> is an integer.
                    This notation aligns with common SI prefixes like kilo (10<sup>3</sup>), mega (10<sup>6</sup>), etc.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Examples</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Standard Form</TableHead>
                          <TableHead>Engineering Notation</TableHead>
                          <TableHead>SI Prefix</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>1,000</TableCell>
                          <TableCell>1 × 10<sup>3</sup></TableCell>
                          <TableCell>1 kilo (k)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>4,500</TableCell>
                          <TableCell>4.5 × 10<sup>3</sup></TableCell>
                          <TableCell>4.5 kilo (k)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>1,000,000</TableCell>
                          <TableCell>1 × 10<sup>6</sup></TableCell>
                          <TableCell>1 mega (M)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>0.001</TableCell>
                          <TableCell>1 × 10<sup>-3</sup></TableCell>
                          <TableCell>1 milli (m)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>0.000002</TableCell>
                          <TableCell>2 × 10<sup>-6</sup></TableCell>
                          <TableCell>2 micro (μ)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Common SI Prefixes</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Prefix</TableHead>
                          <TableHead>Symbol</TableHead>
                          <TableHead>Power of 10</TableHead>
                          <TableHead>Decimal</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>tera</TableCell>
                          <TableCell>T</TableCell>
                          <TableCell>10<sup>12</sup></TableCell>
                          <TableCell>1,000,000,000,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>giga</TableCell>
                          <TableCell>G</TableCell>
                          <TableCell>10<sup>9</sup></TableCell>
                          <TableCell>1,000,000,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>mega</TableCell>
                          <TableCell>M</TableCell>
                          <TableCell>10<sup>6</sup></TableCell>
                          <TableCell>1,000,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>kilo</TableCell>
                          <TableCell>k</TableCell>
                          <TableCell>10<sup>3</sup></TableCell>
                          <TableCell>1,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>milli</TableCell>
                          <TableCell>m</TableCell>
                          <TableCell>10<sup>-3</sup></TableCell>
                          <TableCell>0.001</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>micro</TableCell>
                          <TableCell>μ</TableCell>
                          <TableCell>10<sup>-6</sup></TableCell>
                          <TableCell>0.000001</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>nano</TableCell>
                          <TableCell>n</TableCell>
                          <TableCell>10<sup>-9</sup></TableCell>
                          <TableCell>0.000000001</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="roman" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Roman Numerals</CardTitle>
                  <CardDescription>
                    An ancient number system originating from Rome
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Roman numerals are a numeral system that originated in ancient Rome and remained the usual way of 
                    writing numbers throughout Europe well into the Late Middle Ages. They are still used today for 
                    certain applications such as numbering clock faces, annual events, and monarchs.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Basic Symbols</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Symbol</TableHead>
                          <TableHead>Value</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>I</TableCell>
                          <TableCell>1</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>V</TableCell>
                          <TableCell>5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>X</TableCell>
                          <TableCell>10</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>L</TableCell>
                          <TableCell>50</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>C</TableCell>
                          <TableCell>100</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>D</TableCell>
                          <TableCell>500</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>M</TableCell>
                          <TableCell>1000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Rules</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Symbols are usually written from largest to smallest, left to right</li>
                      <li>When a smaller symbol appears before a larger one, subtract the smaller from the larger (e.g., IV = 4)</li>
                      <li>The same symbol cannot be repeated more than three times in succession</li>
                      <li>Only I, X, C, and M can be repeated; V, L, and D cannot</li>
                      <li>Only I, X, and C can be subtracted, and only from values up to 10 times greater</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Examples</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Roman Numeral</TableHead>
                          <TableHead>Decimal Value</TableHead>
                          <TableHead>Explanation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>III</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>1+1+1</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>IV</TableCell>
                          <TableCell>4</TableCell>
                          <TableCell>5-1</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>IX</TableCell>
                          <TableCell>9</TableCell>
                          <TableCell>10-1</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>XXXIV</TableCell>
                          <TableCell>34</TableCell>
                          <TableCell>10+10+10+5-1</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>MCMXCIV</TableCell>
                          <TableCell>1994</TableCell>
                          <TableCell>1000+(1000-100)+(100-10)+(5-1)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="base" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Number Bases</CardTitle>
                  <CardDescription>
                    Different ways of representing numbers using different base systems
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Number bases determine how many unique digits (including zero) a numbering system uses. 
                    Our standard decimal system is base 10, but other bases are common in computing and specialized fields.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Common Number Bases</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Base Name</TableHead>
                          <TableHead>Base</TableHead>
                          <TableHead>Digits Used</TableHead>
                          <TableHead>Common Uses</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Binary</TableCell>
                          <TableCell>2</TableCell>
                          <TableCell>0, 1</TableCell>
                          <TableCell>Computer systems, digital electronics</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Octal</TableCell>
                          <TableCell>8</TableCell>
                          <TableCell>0-7</TableCell>
                          <TableCell>Unix file permissions, some computing applications</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Decimal</TableCell>
                          <TableCell>10</TableCell>
                          <TableCell>0-9</TableCell>
                          <TableCell>Everyday counting, standard mathematics</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Duodecimal</TableCell>
                          <TableCell>12</TableCell>
                          <TableCell>0-9, A, B</TableCell>
                          <TableCell>Measuring time, angles, dozen-based counting</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Hexadecimal</TableCell>
                          <TableCell>16</TableCell>
                          <TableCell>0-9, A-F</TableCell>
                          <TableCell>Computing, programming, color codes, memory addresses</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Examples of Decimal Number 42 in Different Bases</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Base</TableHead>
                          <TableHead>Representation</TableHead>
                          <TableHead>Calculation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Binary (Base 2)</TableCell>
                          <TableCell>101010<sub>2</sub></TableCell>
                          <TableCell>1×2<sup>5</sup> + 0×2<sup>4</sup> + 1×2<sup>3</sup> + 0×2<sup>2</sup> + 1×2<sup>1</sup> + 0×2<sup>0</sup> = 42</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Octal (Base 8)</TableCell>
                          <TableCell>52<sub>8</sub></TableCell>
                          <TableCell>5×8<sup>1</sup> + 2×8<sup>0</sup> = 42</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Decimal (Base 10)</TableCell>
                          <TableCell>42<sub>10</sub></TableCell>
                          <TableCell>4×10<sup>1</sup> + 2×10<sup>0</sup> = 42</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Hexadecimal (Base 16)</TableCell>
                          <TableCell>2A<sub>16</sub></TableCell>
                          <TableCell>2×16<sup>1</sup> + 10×16<sup>0</sup> = 42</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}