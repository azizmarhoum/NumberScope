import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

export default function SystemsPage() {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Number Systems Worldwide
            </h1>
            <p className="text-muted-foreground">
              Explore how different languages and cultures represent and name numbers
            </p>
          </div>

          <Tabs defaultValue="indian" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:w-auto">
              <TabsTrigger value="indian">Indian</TabsTrigger>
              <TabsTrigger value="chinese">Chinese</TabsTrigger>
              <TabsTrigger value="arabic">Arabic</TabsTrigger>
              <TabsTrigger value="roman">Roman</TabsTrigger>
            </TabsList>
            
            <TabsContent value="indian" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Indian Numbering System</CardTitle>
                  <CardDescription>
                    The system used in India, Pakistan, Bangladesh, Nepal, and surrounding regions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Indian numbering system groups the first three digits together, then subsequent digits in groups of two.
                    This creates a different pattern than the Western system of grouping by threes.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Indian System Units</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Value in Indian System</TableHead>
                          <TableHead>Value in Western System</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Hundred</TableCell>
                          <TableCell>100</TableCell>
                          <TableCell>100</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Thousand</TableCell>
                          <TableCell>1,000</TableCell>
                          <TableCell>1,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Lakh</TableCell>
                          <TableCell>1,00,000</TableCell>
                          <TableCell>100,000 (Hundred thousand)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Crore</TableCell>
                          <TableCell>1,00,00,000</TableCell>
                          <TableCell>10,000,000 (Ten million)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Arab</TableCell>
                          <TableCell>1,00,00,00,000</TableCell>
                          <TableCell>1,000,000,000 (One billion)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Kharab</TableCell>
                          <TableCell>1,00,00,00,00,000</TableCell>
                          <TableCell>100,000,000,000 (Hundred billion)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Neel</TableCell>
                          <TableCell>1,00,00,00,00,00,000</TableCell>
                          <TableCell>10,000,000,000,000 (Ten trillion)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Padma</TableCell>
                          <TableCell>1,00,00,00,00,00,00,000</TableCell>
                          <TableCell>1,000,000,000,000,000 (One quadrillion)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Shankh</TableCell>
                          <TableCell>1,00,00,00,00,00,00,00,000</TableCell>
                          <TableCell>100,000,000,000,000,000 (Hundred quadrillion)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Examples of Indian System Formatting</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Number</TableHead>
                          <TableHead>Western Format</TableHead>
                          <TableHead>Indian Format</TableHead>
                          <TableHead>Indian Reading</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>100,000</TableCell>
                          <TableCell>100,000</TableCell>
                          <TableCell>1,00,000</TableCell>
                          <TableCell>One lakh</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>1,500,000</TableCell>
                          <TableCell>1,500,000</TableCell>
                          <TableCell>15,00,000</TableCell>
                          <TableCell>Fifteen lakhs</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10,000,000</TableCell>
                          <TableCell>10,000,000</TableCell>
                          <TableCell>1,00,00,000</TableCell>
                          <TableCell>One crore</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>150,000,000</TableCell>
                          <TableCell>150,000,000</TableCell>
                          <TableCell>15,00,00,000</TableCell>
                          <TableCell>Fifteen crores</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>1,250,000,000</TableCell>
                          <TableCell>1,250,000,000</TableCell>
                          <TableCell>1,25,00,00,000</TableCell>
                          <TableCell>One arab twenty-five crores</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="chinese" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Chinese Numbering System</CardTitle>
                  <CardDescription>
                    Used in China, Taiwan, Japan, Korea, and parts of Southeast Asia
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Chinese numbering system uses a different grouping structure, with units that increase by powers of 10,000 (myriad-based) 
                    rather than powers of 1,000 as in the Western system.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Chinese System Units</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name (Pinyin)</TableHead>
                          <TableHead>Chinese Character</TableHead>
                          <TableHead>Value</TableHead>
                          <TableHead>Western Equivalent</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>shi</TableCell>
                          <TableCell>十</TableCell>
                          <TableCell>10</TableCell>
                          <TableCell>ten</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>bai</TableCell>
                          <TableCell>百</TableCell>
                          <TableCell>100</TableCell>
                          <TableCell>hundred</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>qian</TableCell>
                          <TableCell>千</TableCell>
                          <TableCell>1,000</TableCell>
                          <TableCell>thousand</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>wan</TableCell>
                          <TableCell>万</TableCell>
                          <TableCell>10,000</TableCell>
                          <TableCell>ten thousand</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>yi</TableCell>
                          <TableCell>亿</TableCell>
                          <TableCell>100,000,000</TableCell>
                          <TableCell>hundred million</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>zhao</TableCell>
                          <TableCell>兆</TableCell>
                          <TableCell>1,000,000,000,000</TableCell>
                          <TableCell>trillion</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Examples of Chinese Number Expressions</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Number</TableHead>
                          <TableHead>Chinese Expression</TableHead>
                          <TableHead>Literal Translation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>2,356</TableCell>
                          <TableCell>二千三百五十六</TableCell>
                          <TableCell>two thousand three hundred five ten six</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10,000</TableCell>
                          <TableCell>一万</TableCell>
                          <TableCell>one wan</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>25,400</TableCell>
                          <TableCell>二万五千四百</TableCell>
                          <TableCell>two wan five thousand four hundred</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>100,000,000</TableCell>
                          <TableCell>一亿</TableCell>
                          <TableCell>one yi</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>1,234,567,890</TableCell>
                          <TableCell>十二亿三千四百五十六万七千八百九十</TableCell>
                          <TableCell>twelve yi three thousand four hundred fifty-six wan seven thousand eight hundred ninety</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Comparison with Western System</h3>
                    <p>The key difference is that the Chinese system groups digits in fours rather than threes:</p>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Western System</TableHead>
                          <TableHead>Chinese System</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>1,000,000 (one million)</TableCell>
                          <TableCell>100,0000 (one hundred wan)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>1,000,000,000 (one billion)</TableCell>
                          <TableCell>10,0000,0000 (ten yi)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="arabic" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Arabic Numbering System</CardTitle>
                  <CardDescription>
                    Used across the Arab world and has historical significance in mathematics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The modern Arabic numbering system (Hindu-Arabic numerals) is the most widely used numeral system in the world today.
                    It originated in India, was adopted by Arab mathematicians, and later spread to Europe and the rest of the world.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Arabic Numerals</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Western Numeral</TableHead>
                          <TableHead>Eastern Arabic Numeral</TableHead>
                          <TableHead>Name in Arabic</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>0</TableCell>
                          <TableCell>٠</TableCell>
                          <TableCell>sifr (origin of the word "cipher")</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>1</TableCell>
                          <TableCell>١</TableCell>
                          <TableCell>wahid</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2</TableCell>
                          <TableCell>٢</TableCell>
                          <TableCell>ithnan</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>3</TableCell>
                          <TableCell>٣</TableCell>
                          <TableCell>thalatha</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>4</TableCell>
                          <TableCell>٤</TableCell>
                          <TableCell>arba'a</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>5</TableCell>
                          <TableCell>٥</TableCell>
                          <TableCell>khamsa</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>6</TableCell>
                          <TableCell>٦</TableCell>
                          <TableCell>sitta</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>7</TableCell>
                          <TableCell>٧</TableCell>
                          <TableCell>sab'a</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>8</TableCell>
                          <TableCell>٨</TableCell>
                          <TableCell>thamaniya</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>9</TableCell>
                          <TableCell>٩</TableCell>
                          <TableCell>tis'a</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Arabic Large Number Names</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Arabic Name</TableHead>
                          <TableHead>Value</TableHead>
                          <TableHead>Western Equivalent</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>ألف (alf)</TableCell>
                          <TableCell>1,000</TableCell>
                          <TableCell>thousand</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>مليون (milyoon)</TableCell>
                          <TableCell>1,000,000</TableCell>
                          <TableCell>million</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>مليار (milyaar)</TableCell>
                          <TableCell>1,000,000,000</TableCell>
                          <TableCell>billion</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>تريليون (trilyoon)</TableCell>
                          <TableCell>1,000,000,000,000</TableCell>
                          <TableCell>trillion</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Historical Significance</h3>
                    <p>
                      The Arabic numerals revolutionized mathematics by introducing several key innovations:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>The concept of zero as a number and placeholder</li>
                      <li>A positional decimal system that made arithmetic operations much easier</li>
                      <li>Efficient representation of large numbers</li>
                      <li>A foundation for algebra and advanced mathematics</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="roman" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Roman Number System</CardTitle>
                  <CardDescription>
                    The ancient number system that originated in Rome
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Roman number system uses letters from the Latin alphabet to represent numeric values. 
                    Unlike modern positional systems, Roman numerals are based on an additive and subtractive system.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Basic Roman Numerals</h3>
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
                          <TableCell>1,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Extended Roman Numerals</h3>
                    <p>For larger numbers, the Romans sometimes used a bar over a numeral to indicate multiplication by 1,000:</p>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Symbol</TableHead>
                          <TableHead>Value</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>V̅</TableCell>
                          <TableCell>5,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>X̅</TableCell>
                          <TableCell>10,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>L̅</TableCell>
                          <TableCell>50,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>C̅</TableCell>
                          <TableCell>100,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>D̅</TableCell>
                          <TableCell>500,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>M̅</TableCell>
                          <TableCell>1,000,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Limitations of the Roman System</h3>
                    <p>
                      The Roman numeral system has several limitations compared to modern positional systems:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>No symbol for zero</li>
                      <li>Difficult to perform calculations (especially multiplication and division)</li>
                      <li>Inefficient representation of large numbers</li>
                      <li>Not a positional system, making arithmetic operations more complex</li>
                      <li>Limited practical use for values beyond a few thousand</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Modern Usage</h3>
                    <p>
                      Today, Roman numerals are still used in several contexts:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Clock faces and watch dials</li>
                      <li>Book chapters and outlines</li>
                      <li>Movie sequel numbering (e.g., Star Wars IV)</li>
                      <li>Names of monarchs and popes (e.g., Elizabeth II, Pope Francis I)</li>
                      <li>Super Bowl numbering</li>
                      <li>Copyright dates in movies and TV shows</li>
                    </ul>
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