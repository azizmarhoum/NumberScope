import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, Timer } from "lucide-react";

type Question = {
  problem: string;
  answer: number;
};

export default function MentalMathPage() {
  const [activeTab, setActiveTab] = useState<string>("practice");
  const [gameType, setGameType] = useState<string>("addition");
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [gameInterval, setGameInterval] = useState<NodeJS.Timeout | null>(null);
  const [recentResults, setRecentResults] = useState<{ problem: string; userAnswer: string; correct: boolean }[]>([]);
  
  // Generate a question based on game type and difficulty
  const generateQuestion = (): Question => {
    let num1, num2, answer, problem;
    
    switch (gameType) {
      case "addition":
        if (difficulty === "easy") {
          num1 = Math.floor(Math.random() * 50);
          num2 = Math.floor(Math.random() * 50);
        } else if (difficulty === "medium") {
          num1 = Math.floor(Math.random() * 500);
          num2 = Math.floor(Math.random() * 500);
        } else {
          num1 = Math.floor(Math.random() * 1000);
          num2 = Math.floor(Math.random() * 1000);
        }
        problem = `${num1} + ${num2}`;
        answer = num1 + num2;
        break;
        
      case "subtraction":
        if (difficulty === "easy") {
          num1 = Math.floor(Math.random() * 50) + 50;
          num2 = Math.floor(Math.random() * 50);
        } else if (difficulty === "medium") {
          num1 = Math.floor(Math.random() * 500) + 500;
          num2 = Math.floor(Math.random() * 500);
        } else {
          num1 = Math.floor(Math.random() * 1000) + 1000;
          num2 = Math.floor(Math.random() * 1000);
        }
        problem = `${num1} - ${num2}`;
        answer = num1 - num2;
        break;
        
      case "multiplication":
        if (difficulty === "easy") {
          num1 = Math.floor(Math.random() * 10) + 1;
          num2 = Math.floor(Math.random() * 10) + 1;
        } else if (difficulty === "medium") {
          num1 = Math.floor(Math.random() * 20) + 1;
          num2 = Math.floor(Math.random() * 10) + 1;
        } else {
          num1 = Math.floor(Math.random() * 30) + 10;
          num2 = Math.floor(Math.random() * 20) + 1;
        }
        problem = `${num1} × ${num2}`;
        answer = num1 * num2;
        break;
        
      case "division":
        if (difficulty === "easy") {
          num2 = Math.floor(Math.random() * 9) + 1;
          answer = Math.floor(Math.random() * 10) + 1;
          num1 = num2 * answer;
        } else if (difficulty === "medium") {
          num2 = Math.floor(Math.random() * 19) + 1;
          answer = Math.floor(Math.random() * 10) + 1;
          num1 = num2 * answer;
        } else {
          num2 = Math.floor(Math.random() * 29) + 1;
          answer = Math.floor(Math.random() * 20) + 1;
          num1 = num2 * answer;
        }
        problem = `${num1} ÷ ${num2}`;
        break;
        
      case "percentage":
        if (difficulty === "easy") {
          num1 = Math.floor(Math.random() * 10) * 10; // 0, 10, 20, ... 90
          num2 = Math.floor(Math.random() * 10) * 10; // 0, 10, 20, ... 90
        } else if (difficulty === "medium") {
          num1 = Math.floor(Math.random() * 100) + 1; // 1-100
          num2 = Math.floor(Math.random() * 5) * 5 + 5; // 5, 10, 15, 20, 25
        } else {
          num1 = Math.floor(Math.random() * 1000) + 1; // 1-1000
          num2 = Math.floor(Math.random() * 99) + 1; // 1-99
        }
        problem = `${num2}% of ${num1}`;
        answer = (num1 * num2) / 100;
        break;
        
      default:
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        problem = `${num1} + ${num2}`;
        answer = num1 + num2;
    }
    
    return { problem, answer };
  };
  
  const startGame = () => {
    // Reset game state
    setScore(0);
    setTotalQuestions(0);
    setGameActive(true);
    setTimeLeft(60);
    setRecentResults([]);
    
    // Generate first question
    const question = generateQuestion();
    setCurrentQuestion(question);
    
    // Start timer
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(interval);
          setGameActive(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    setGameInterval(interval);
  };
  
  const checkAnswer = () => {
    if (!currentQuestion) return;
    
    const userNum = parseFloat(userAnswer);
    const correctNum = currentQuestion.answer;
    
    // Check if answer is correct (allowing small floating point errors)
    const isAnswerCorrect = Math.abs(userNum - correctNum) < 0.001;
    
    // Update score and stats
    setIsCorrect(isAnswerCorrect);
    setTotalQuestions(prev => prev + 1);
    if (isAnswerCorrect) {
      setScore(prev => prev + 1);
    }
    
    // Record result
    setRecentResults(prev => [
      {
        problem: currentQuestion.problem,
        userAnswer: userAnswer,
        correct: isAnswerCorrect
      },
      ...prev.slice(0, 9)  // Keep only most recent 10
    ]);
    
    // Generate new question
    const question = generateQuestion();
    setCurrentQuestion(question);
    setUserAnswer("");
  };
  
  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && userAnswer !== "") {
      checkAnswer();
    }
  };
  
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Mental Math Trainer
            </h1>
            <p className="text-muted-foreground">
              Improve your mental calculation skills with practice exercises and timed challenges
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="practice">Practice Mode</TabsTrigger>
              <TabsTrigger value="tips">Mental Math Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="practice" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Mental Math Challenge</CardTitle>
                  <CardDescription>
                    Solve as many problems as you can within 60 seconds
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Operation</h3>
                      <div className="grid grid-cols-5 gap-2">
                        <Button
                          variant={gameType === "addition" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => setGameType("addition")}
                          disabled={gameActive}
                        >
                          +
                        </Button>
                        <Button
                          variant={gameType === "subtraction" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => setGameType("subtraction")}
                          disabled={gameActive}
                        >
                          -
                        </Button>
                        <Button
                          variant={gameType === "multiplication" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => setGameType("multiplication")}
                          disabled={gameActive}
                        >
                          ×
                        </Button>
                        <Button
                          variant={gameType === "division" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => setGameType("division")}
                          disabled={gameActive}
                        >
                          ÷
                        </Button>
                        <Button
                          variant={gameType === "percentage" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => setGameType("percentage")}
                          disabled={gameActive}
                        >
                          %
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2">Difficulty</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          variant={difficulty === "easy" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => setDifficulty("easy")}
                          disabled={gameActive}
                        >
                          Easy
                        </Button>
                        <Button
                          variant={difficulty === "medium" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => setDifficulty("medium")}
                          disabled={gameActive}
                        >
                          Medium
                        </Button>
                        <Button
                          variant={difficulty === "hard" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => setDifficulty("hard")}
                          disabled={gameActive}
                        >
                          Hard
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {gameActive ? (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Timer className="h-5 w-5" />
                          <span className="font-semibold">{timeLeft} seconds left</span>
                        </div>
                        <div>
                          <Badge>{score} / {totalQuestions}</Badge>
                        </div>
                      </div>
                      
                      <Progress value={(timeLeft / 60) * 100} className="h-2" />
                      
                      <div className="space-y-4">
                        <div className="text-center py-4">
                          <h2 className="text-3xl font-bold">{currentQuestion?.problem}</h2>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Input
                            type="number"
                            placeholder="Your answer"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            onKeyDown={handleEnterKey}
                            className="text-center text-xl"
                            autoFocus
                          />
                          <Button onClick={checkAnswer} disabled={!userAnswer}>
                            Submit
                          </Button>
                        </div>
                        
                        {isCorrect !== null && (
                          <div className={`p-2 rounded-md ${isCorrect ? 'bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-50 text-red-700 dark:bg-red-900 dark:text-red-300'} flex items-center justify-center`}>
                            {isCorrect ? (
                              <CheckCircle className="h-5 w-5 mr-2" />
                            ) : (
                              <XCircle className="h-5 w-5 mr-2" />
                            )}
                            {isCorrect ? 'Correct!' : 'Incorrect!'}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center space-y-4 py-4">
                      {totalQuestions > 0 ? (
                        <div className="space-y-4 w-full">
                          <div className="text-center">
                            <h3 className="text-2xl font-bold">Game Over!</h3>
                            <p className="text-xl">Your score: {score} / {totalQuestions}</p>
                            <p className="text-sm text-muted-foreground">
                              You answered {Math.round((score / totalQuestions) * 100)}% correctly
                            </p>
                          </div>
                          
                          <Button onClick={startGame} className="w-full">
                            Play Again
                          </Button>
                          
                          {recentResults.length > 0 && (
                            <div className="mt-6">
                              <h3 className="text-lg font-medium mb-2">Recent Results</h3>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Problem</TableHead>
                                    <TableHead>Your Answer</TableHead>
                                    <TableHead>Result</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {recentResults.map((result, index) => (
                                    <TableRow key={index}>
                                      <TableCell>{result.problem}</TableCell>
                                      <TableCell>{result.userAnswer}</TableCell>
                                      <TableCell>
                                        {result.correct ? (
                                          <CheckCircle className="h-4 w-4 text-green-500" />
                                        ) : (
                                          <XCircle className="h-4 w-4 text-red-500" />
                                        )}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-center w-full">
                          <p className="mb-4">Ready to test your mental math skills?</p>
                          <Button onClick={startGame} size="lg" className="w-full md:w-auto">
                            Start 60-Second Challenge
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tips" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Mental Math Techniques</CardTitle>
                  <CardDescription>
                    Learn strategies to perform calculations quickly in your head
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Addition Tricks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Breaking into tens</h4>
                        <p className="text-sm text-muted-foreground">
                          Break numbers to make tens. For 8 + 7, think: 8 + 2 = 10, then 10 + 5 = 15.
                        </p>
                        <div className="bg-muted p-3 rounded-md">
                          <p className="font-mono">8 + 7 = 8 + (2 + 5) = (8 + 2) + 5 = 10 + 5 = 15</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Adding from left to right</h4>
                        <p className="text-sm text-muted-foreground">
                          Add the largest place values first. For 38 + 25, add 30 + 20 = 50, then 8 + 5 = 13, so 50 + 13 = 63.
                        </p>
                        <div className="bg-muted p-3 rounded-md">
                          <p className="font-mono">38 + 25 = (30 + 20) + (8 + 5) = 50 + 13 = 63</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Multiplication Tricks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Multiplying by 11</h4>
                        <p className="text-sm text-muted-foreground">
                          For two-digit numbers × 11: add the two digits and place the result between them.
                        </p>
                        <div className="bg-muted p-3 rounded-md">
                          <p className="font-mono">
                            42 × 11: 4 + 2 = 6, so place 6 between 4 and 2 = 462
                          </p>
                          <p className="font-mono mt-2">
                            85 × 11: 8 + 5 = 13, so 8 + 1 and 3 + 5 = 935
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Doubling and halving</h4>
                        <p className="text-sm text-muted-foreground">
                          Double one number and halve the other. The product stays the same.
                        </p>
                        <div className="bg-muted p-3 rounded-md">
                          <p className="font-mono">
                            25 × 16 = 50 × 8 = 100 × 4 = 400
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Percentage Tricks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Finding 10%</h4>
                        <p className="text-sm text-muted-foreground">
                          Move the decimal point one place left. For 15%, find 10% and add half of that.
                        </p>
                        <div className="bg-muted p-3 rounded-md">
                          <p className="font-mono">
                            10% of 350 = 35
                          </p>
                          <p className="font-mono mt-1">
                            15% of 350 = 35 + (35 ÷ 2) = 35 + 17.5 = 52.5
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Calculating tips</h4>
                        <p className="text-sm text-muted-foreground">
                          For a 20% tip, move the decimal point one place left and multiply by 2.
                        </p>
                        <div className="bg-muted p-3 rounded-md">
                          <p className="font-mono">
                            20% of $45.80 = $4.58 × 2 = $9.16
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Benefits of Mental Math</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Improves numerical fluency and confidence with numbers</li>
                    <li>Enhances problem-solving abilities and critical thinking skills</li>
                    <li>Strengthens memory and concentration</li>
                    <li>Helps with everyday tasks like shopping, cooking, and budgeting</li>
                    <li>Provides a foundation for more advanced mathematics</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}