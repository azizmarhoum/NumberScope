import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SliderProps } from "@/components/ui/slider";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SequencesPage() {
  const [fibonacciCount, setFibonacciCount] = useState<number>(15);
  const [primesCount, setPrimesCount] = useState<number>(15);
  const [triangularCount, setTriangularCount] = useState<number>(15);
  const [perfectCount, setPerfectCount] = useState<number>(5);
  
  // Calculate Fibonacci sequence
  const generateFibonacci = (count: number) => {
    const sequence = [0, 1];
    for (let i = 2; i < count; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  };
  
  // Check if a number is prime
  const isPrime = (num: number) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  // Generate prime numbers
  const generatePrimes = (count: number) => {
    const primes = [];
    let num = 2;
    while (primes.length < count) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes;
  };
  
  // Generate triangular numbers
  const generateTriangular = (count: number) => {
    const triangular = [];
    for (let i = 1; i <= count; i++) {
      triangular.push((i * (i + 1)) / 2);
    }
    return triangular;
  };
  
  // Check if a number is perfect (sum of its proper divisors equals the number)
  const isPerfect = (num: number) => {
    if (num <= 1) return false;
    let sum = 1; // 1 is always a proper divisor
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) { // avoid counting the same divisor twice
          sum += num / i;
        }
      }
    }
    return sum === num;
  };
  
  // Generate perfect numbers
  const generatePerfect = (count: number) => {
    const perfect = [];
    let num = 2;
    while (perfect.length < count && num < 100000) { // Limit search to avoid performance issues
      if (isPerfect(num)) {
        perfect.push(num);
      }
      num++;
    }
    return perfect;
  };
  
  const fibonacciSequence = generateFibonacci(fibonacciCount);
  const primesSequence = generatePrimes(primesCount);
  const triangularSequence = generateTriangular(triangularCount);
  const perfectSequence = generatePerfect(perfectCount);
  
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Number Sequences Explorer
            </h1>
            <p className="text-muted-foreground">
              Discover and explore famous mathematical number sequences
            </p>
          </div>
          
          <Tabs defaultValue="fibonacci" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="fibonacci">Fibonacci</TabsTrigger>
              <TabsTrigger value="primes">Prime Numbers</TabsTrigger>
              <TabsTrigger value="triangular">Triangular</TabsTrigger>
              <TabsTrigger value="perfect">Perfect Numbers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="fibonacci" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Fibonacci Sequence</CardTitle>
                  <CardDescription>
                    Each number is the sum of the two preceding ones, starting from 0 and 1
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p>
                      The Fibonacci sequence is a series of numbers where each number is the sum of the two 
                      preceding ones, starting from 0 and 1. It appears in many areas of mathematics and science,
                      from the branching of trees to the arrangement of leaves and flowers, and even in financial markets.
                    </p>
                    <p>
                      The sequence is named after Leonardo of Pisa, known as Fibonacci, who introduced the sequence to
                      Western European mathematics in his book "Liber Abaci" (1202), though the sequence was described earlier
                      in Indian mathematics.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <Label htmlFor="fibonacci-slider">Number of terms:</Label>
                      <Slider
                        id="fibonacci-slider"
                        min={5}
                        max={50}
                        step={1}
                        value={[fibonacciCount]}
                        onValueChange={(value) => setFibonacciCount(value[0])}
                        className="w-48"
                      />
                      <span className="w-8 text-center">{fibonacciCount}</span>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <ScrollArea className="h-80">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-20">Index</TableHead>
                            <TableHead>Value</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fibonacciSequence.map((value, index) => (
                            <TableRow key={index}>
                              <TableCell>{index}</TableCell>
                              <TableCell>{value.toLocaleString()}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Interesting Facts</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>The ratio of consecutive Fibonacci numbers approaches the golden ratio (φ ≈ 1.618033988749895)</li>
                      <li>Fibonacci numbers appear in the family tree of honeybees</li>
                      <li>The Fibonacci sequence can be used to convert miles to kilometers (approximately)</li>
                      <li>The sequence is related to the famous spiral seen in nature, like in sunflowers and shells</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="primes" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Prime Numbers</CardTitle>
                  <CardDescription>
                    Natural numbers greater than 1 that are only divisible by 1 and themselves
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p>
                      Prime numbers are natural numbers greater than 1 that cannot be formed by multiplying two smaller natural numbers. 
                      A number that is not prime is called a composite number. For example, 5 is prime because the only ways to write 
                      it as a product, 1 × 5 or 5 × 1, involve 5 itself.
                    </p>
                    <p>
                      Prime numbers are central in number theory and have practical applications in cryptography and computer security.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <Label htmlFor="primes-slider">Number of primes:</Label>
                      <Slider
                        id="primes-slider"
                        min={5}
                        max={100}
                        step={1}
                        value={[primesCount]}
                        onValueChange={(value) => setPrimesCount(value[0])}
                        className="w-48"
                      />
                      <span className="w-8 text-center">{primesCount}</span>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <ScrollArea className="h-80">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-20">Index</TableHead>
                            <TableHead>Value</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {primesSequence.map((value, index) => (
                            <TableRow key={index}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{value}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Interesting Facts</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>There are infinitely many prime numbers (proven by Euclid around 300 BCE)</li>
                      <li>The only even prime number is 2</li>
                      <li>The largest known prime number (as of early 2023) has over 24 million digits</li>
                      <li>Prime numbers are used in modern cryptography to secure internet communications</li>
                      <li>Twin primes are pairs of primes that differ by 2, like 3 and 5, or 11 and 13</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="triangular" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Triangular Numbers</CardTitle>
                  <CardDescription>
                    Numbers that can be represented as triangular arrangements of points
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p>
                      Triangular numbers are a sequence of numbers that represent a triangular arrangement of points where each new row 
                      adds one more point than the previous row. The nth triangular number is the sum of the first n natural numbers.
                    </p>
                    <p>
                      For example, the 3rd triangular number is 6, representing a triangle with rows of 1, 2, and 3 points (1 + 2 + 3 = 6).
                    </p>
                    <div className="flex justify-center p-4">
                      <div className="text-center">
                        <div className="flex justify-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500 mx-1"></div>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500 mx-1"></div>
                          <div className="w-4 h-4 rounded-full bg-blue-500 mx-1"></div>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500 mx-1"></div>
                          <div className="w-4 h-4 rounded-full bg-blue-500 mx-1"></div>
                          <div className="w-4 h-4 rounded-full bg-blue-500 mx-1"></div>
                        </div>
                        <p className="mt-2">The 3rd triangular number: 6</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <Label htmlFor="triangular-slider">Number of terms:</Label>
                      <Slider
                        id="triangular-slider"
                        min={5}
                        max={50}
                        step={1}
                        value={[triangularCount]}
                        onValueChange={(value) => setTriangularCount(value[0])}
                        className="w-48"
                      />
                      <span className="w-8 text-center">{triangularCount}</span>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <ScrollArea className="h-80">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-20">Index</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Formula</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {triangularSequence.map((value, index) => (
                            <TableRow key={index}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{value}</TableCell>
                              <TableCell>1 + 2 + ... + {index + 1} = {index + 1}({index + 1} + 1)/2</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Interesting Facts</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>The formula for the nth triangular number is n(n+1)/2</li>
                      <li>Every square number is the sum of two consecutive triangular numbers</li>
                      <li>Triangular numbers appear in combinatorics as the number of ways to choose 2 items from n+1 items</li>
                      <li>In 8-ball pool, the balls are racked in a triangular formation using the 10th triangular number (10 + 5 = 15 balls)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="perfect" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Perfect Numbers</CardTitle>
                  <CardDescription>
                    Numbers that are equal to the sum of their proper divisors
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p>
                      A perfect number is a positive integer that is equal to the sum of its proper divisors. The smallest perfect number is 6, 
                      because its proper divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
                    </p>
                    <p>
                      Perfect numbers have been studied since ancient times and were considered to have mystical or religious significance.
                      Euclid proved that if 2<sup>p</sup>-1 is prime (a Mersenne prime), then 2<sup>p-1</sup>(2<sup>p</sup>-1) is a perfect number.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <Label htmlFor="perfect-slider">Number of terms (max 5):</Label>
                      <Slider
                        id="perfect-slider"
                        min={1}
                        max={5}
                        step={1}
                        value={[perfectCount]}
                        onValueChange={(value) => setPerfectCount(value[0])}
                        className="w-48"
                      />
                      <span className="w-8 text-center">{perfectCount}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Note: Perfect numbers become very large quickly, so we limit to the first 5.</p>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-20">Index</TableHead>
                          <TableHead>Value</TableHead>
                          <TableHead>Proper Divisors</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {perfectSequence.map((value, index) => {
                          // Generate proper divisors for display
                          const divisors = [];
                          for (let i = 1; i < value; i++) {
                            if (value % i === 0) divisors.push(i);
                          }
                          return (
                            <TableRow key={index}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{value.toLocaleString()}</TableCell>
                              <TableCell className="truncate max-w-xs">
                                {divisors.join(", ")} = {value}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Interesting Facts</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>All known perfect numbers are even</li>
                      <li>It is still unknown if there are any odd perfect numbers</li>
                      <li>The end digits of perfect numbers follow a pattern: 6, 8, 6, 8, ...</li>
                      <li>Only 51 perfect numbers are known as of 2023</li>
                      <li>The 5th perfect number is 33,550,336</li>
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