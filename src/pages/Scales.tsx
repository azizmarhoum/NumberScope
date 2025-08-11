import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function ScalesPage() {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Number Scale Explorer
            </h1>
            <p className="text-muted-foreground">
              Understand large number names, their scales, and naming conventions
            </p>
          </div>

          <Tabs defaultValue="shortScale" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:w-auto">
              <TabsTrigger value="shortScale">Short Scale</TabsTrigger>
              <TabsTrigger value="longScale">Long Scale</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
            </TabsList>
            
            <TabsContent value="shortScale" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Short Scale Number Names</CardTitle>
                  <CardDescription>
                    Used in the United States, modern UK, and many English-speaking countries
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The short scale is a system of large number names in which each new term is 1,000 times the previous term. 
                    In this system, "billion" means 10<sup>9</sup> (1,000,000,000), "trillion" means 10<sup>12</sup>, and so on.
                  </p>
                  
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Short Scale Pattern</AlertTitle>
                    <AlertDescription>
                      In the short scale, names are based on the pattern of groups of three zeros. A billion has 9 zeros, a trillion has 12 zeros, etc.
                    </AlertDescription>
                  </Alert>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Short Scale Number Names</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Value</TableHead>
                          <TableHead>Power of 10</TableHead>
                          <TableHead>Zeros</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Thousand</TableCell>
                          <TableCell>1,000</TableCell>
                          <TableCell>10<sup>3</sup></TableCell>
                          <TableCell>3</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Million</TableCell>
                          <TableCell>1,000,000</TableCell>
                          <TableCell>10<sup>6</sup></TableCell>
                          <TableCell>6</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Billion</TableCell>
                          <TableCell>1,000,000,000</TableCell>
                          <TableCell>10<sup>9</sup></TableCell>
                          <TableCell>9</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Trillion</TableCell>
                          <TableCell>1,000,000,000,000</TableCell>
                          <TableCell>10<sup>12</sup></TableCell>
                          <TableCell>12</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Quadrillion</TableCell>
                          <TableCell>1,000,000,000,000,000</TableCell>
                          <TableCell>10<sup>15</sup></TableCell>
                          <TableCell>15</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Quintillion</TableCell>
                          <TableCell>1,000,000,000,000,000,000</TableCell>
                          <TableCell>10<sup>18</sup></TableCell>
                          <TableCell>18</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sextillion</TableCell>
                          <TableCell>1,000,000,000,000,000,000,000</TableCell>
                          <TableCell>10<sup>21</sup></TableCell>
                          <TableCell>21</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Septillion</TableCell>
                          <TableCell>1,000,000,000,000,000,000,000,000</TableCell>
                          <TableCell>10<sup>24</sup></TableCell>
                          <TableCell>24</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Octillion</TableCell>
                          <TableCell>1,000,000,000,000,000,000,000,000,000</TableCell>
                          <TableCell>10<sup>27</sup></TableCell>
                          <TableCell>27</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Nonillion</TableCell>
                          <TableCell>1,000,000,000,000,000,000,000,000,000,000</TableCell>
                          <TableCell>10<sup>30</sup></TableCell>
                          <TableCell>30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Decillion</TableCell>
                          <TableCell>1,000,000,000,000,000,000,000,000,000,000,000</TableCell>
                          <TableCell>10<sup>33</sup></TableCell>
                          <TableCell>33</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Name Etymology</h3>
                    <p className="mb-4">
                      The names for these large numbers come from Latin prefixes combined with the suffix "-illion":
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Bi-</strong> (billion): from Latin "bi" meaning "two" (10<sup>6</sup> × 10<sup>3×1</sup> = 10<sup>9</sup>)</li>
                      <li><strong>Tri-</strong> (trillion): from Latin "tres" meaning "three" (10<sup>6</sup> × 10<sup>3×2</sup> = 10<sup>12</sup>)</li>
                      <li><strong>Quad-</strong> (quadrillion): from Latin "quattuor" meaning "four" (10<sup>6</sup> × 10<sup>3×3</sup> = 10<sup>15</sup>)</li>
                      <li><strong>Quint-</strong> (quintillion): from Latin "quinque" meaning "five" (10<sup>6</sup> × 10<sup>3×4</sup> = 10<sup>18</sup>)</li>
                      <li><strong>Sex-</strong> (sextillion): from Latin "sex" meaning "six" (10<sup>6</sup> × 10<sup>3×5</sup> = 10<sup>21</sup>)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="longScale" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Long Scale Number Names</CardTitle>
                  <CardDescription>
                    Used in many European countries, traditional UK, and historical contexts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The long scale is a system of large number names in which each new term is 1,000,000 times the previous term. 
                    In this system, "billion" means 10<sup>12</sup> (1,000,000,000,000), "trillion" means 10<sup>18</sup>, and so on.
                    The long scale also uses terms ending in "-illiard" for the thousand multiples between the main terms.
                  </p>
                  
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Long Scale Pattern</AlertTitle>
                    <AlertDescription>
                      In the long scale, names ending in "-illion" indicate powers of 10<sup>6</sup>. A billion is 10<sup>12</sup> (a million millions), a trillion is 10<sup>18</sup> (a million billions), etc.
                    </AlertDescription>
                  </Alert>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Long Scale Number Names</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Value</TableHead>
                          <TableHead>Power of 10</TableHead>
                          <TableHead>Zeros</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Thousand</TableCell>
                          <TableCell>1,000</TableCell>
                          <TableCell>10<sup>3</sup></TableCell>
                          <TableCell>3</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Million</TableCell>
                          <TableCell>1,000,000</TableCell>
                          <TableCell>10<sup>6</sup></TableCell>
                          <TableCell>6</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Milliard</TableCell>
                          <TableCell>1,000,000,000</TableCell>
                          <TableCell>10<sup>9</sup></TableCell>
                          <TableCell>9</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Billion</TableCell>
                          <TableCell>1,000,000,000,000</TableCell>
                          <TableCell>10<sup>12</sup></TableCell>
                          <TableCell>12</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Billiard</TableCell>
                          <TableCell>1,000,000,000,000,000</TableCell>
                          <TableCell>10<sup>15</sup></TableCell>
                          <TableCell>15</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Trillion</TableCell>
                          <TableCell>1,000,000,000,000,000,000</TableCell>
                          <TableCell>10<sup>18</sup></TableCell>
                          <TableCell>18</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Trilliard</TableCell>
                          <TableCell>1,000,000,000,000,000,000,000</TableCell>
                          <TableCell>10<sup>21</sup></TableCell>
                          <TableCell>21</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Quadrillion</TableCell>
                          <TableCell>1,000,000,000,000,000,000,000,000</TableCell>
                          <TableCell>10<sup>24</sup></TableCell>
                          <TableCell>24</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Long Scale Pattern</h3>
                    <p>
                      In the long scale, the pattern follows:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Names ending in "-illion" follow the pattern 10<sup>6×n</sup>, where n starts at 1 (million)</li>
                      <li>Names ending in "-illiard" follow the pattern 10<sup>6×n+3</sup></li>
                      <li>So a billion is 10<sup>12</sup>, a trillion is 10<sup>18</sup>, and a quadrillion is 10<sup>24</sup></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="comparison" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Short Scale vs. Long Scale</CardTitle>
                  <CardDescription>
                    Comparing the two major systems for naming large numbers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The key difference between the short and long scales is that in the short scale, each new term represents 
                    1,000 times the previous term, while in the long scale, each new "-illion" term represents 
                    1,000,000 times the previous term.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Comparison Table</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Power of 10</TableHead>
                          <TableHead>Short Scale (US/Modern UK)</TableHead>
                          <TableHead>Long Scale (Europe/Traditional UK)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>10<sup>6</sup></TableCell>
                          <TableCell>Million</TableCell>
                          <TableCell>Million</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10<sup>9</sup></TableCell>
                          <TableCell>Billion</TableCell>
                          <TableCell>Milliard</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10<sup>12</sup></TableCell>
                          <TableCell>Trillion</TableCell>
                          <TableCell>Billion</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10<sup>15</sup></TableCell>
                          <TableCell>Quadrillion</TableCell>
                          <TableCell>Billiard</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10<sup>18</sup></TableCell>
                          <TableCell>Quintillion</TableCell>
                          <TableCell>Trillion</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10<sup>21</sup></TableCell>
                          <TableCell>Sextillion</TableCell>
                          <TableCell>Trilliard</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10<sup>24</sup></TableCell>
                          <TableCell>Septillion</TableCell>
                          <TableCell>Quadrillion</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Historical Context</AlertTitle>
                    <AlertDescription>
                      <p className="mb-2">
                        Originally, most English-speaking countries used the long scale. The UK switched to the short scale in 1974 for official government usage.
                      </p>
                      <p>
                        When reading older texts or communicating with people from countries using different scales, 
                        it's important to clarify which meaning of "billion," "trillion," etc. is intended.
                      </p>
                    </AlertDescription>
                  </Alert>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Countries Using Each Scale</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Short Scale Countries</h4>
                        <ul className="list-disc pl-5">
                          <li>United States</li>
                          <li>United Kingdom (since 1974)</li>
                          <li>Australia</li>
                          <li>Brazil</li>
                          <li>Canada</li>
                          <li>China</li>
                          <li>India</li>
                          <li>Japan</li>
                          <li>Mexico</li>
                          <li>Russia</li>
                          <li>South Korea</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Long Scale Countries</h4>
                        <ul className="list-disc pl-5">
                          <li>France</li>
                          <li>Germany</li>
                          <li>Spain</li>
                          <li>Italy</li>
                          <li>Netherlands</li>
                          <li>Belgium</li>
                          <li>Portugal</li>
                          <li>Sweden</li>
                          <li>Norway</li>
                          <li>Denmark</li>
                          <li>Most Spanish-speaking countries</li>
                        </ul>
                      </div>
                    </div>
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