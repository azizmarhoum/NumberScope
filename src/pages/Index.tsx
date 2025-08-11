import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <Layout>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Explore the World of Numbers
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Learn about large numbers, their names, and related mathematical concepts in a simple, educational format.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/converter">Try Number Converter</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/scales">Explore Number Scales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm">
                Core Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Unlock Numerical Knowledge
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our powerful tools designed to help you understand, convert, and explore numbers of all magnitudes.
              </p>
            </div>
            <div className="grid gap-6 lg:gap-8">
              <div className="flex items-start gap-4 rounded-lg border p-6 shadow-sm">
                <div className="text-3xl text-blue-600">📝</div>
                <div className="space-y-1">
                  <h3 className="font-bold">Number to Words Converter</h3>
                  <p className="text-sm text-muted-foreground">
                    Convert any number to its full English name with audio playback.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border p-6 shadow-sm">
                <div className="text-3xl text-blue-600">🔢</div>
                <div className="space-y-1">
                  <h3 className="font-bold">Multiple Formats</h3>
                  <p className="text-sm text-muted-foreground">
                    Scientific notation, engineering notation, Roman numerals, and more.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border p-6 shadow-sm">
                <div className="text-3xl text-blue-600">🌐</div>
                <div className="space-y-1">
                  <h3 className="font-bold">Global Number Systems</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore how different cultures name and represent large numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm">
                New Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Enhanced Learning Resources
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dive deeper into the fascinating world of numbers with our newly added tools and resources.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="relative group overflow-hidden rounded-xl">
              <Link to="/sequences">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <CardContent className="p-6 relative z-10 group-hover:text-white transition-colors duration-300">
                  <div className="mb-2 text-3xl">🔄</div>
                  <h3 className="text-xl font-bold mb-2">Number Sequences</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/90">
                    Explore famous mathematical sequences like Fibonacci, prime numbers, and more.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="relative group overflow-hidden rounded-xl">
              <Link to="/constants">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <CardContent className="p-6 relative z-10 group-hover:text-white transition-colors duration-300">
                  <div className="mb-2 text-3xl">π</div>
                  <h3 className="text-xl font-bold mb-2">Math Constants</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/90">
                    Learn about important mathematical constants like pi, e, and the golden ratio.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="relative group overflow-hidden rounded-xl">
              <Link to="/visualizer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <CardContent className="p-6 relative z-10 group-hover:text-white transition-colors duration-300">
                  <div className="mb-2 text-3xl">📊</div>
                  <h3 className="text-xl font-bold mb-2">Number Visualizer</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/90">
                    Understand large numbers through visual comparisons to familiar concepts.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="relative group overflow-hidden rounded-xl">
              <Link to="/mental-math">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <CardContent className="p-6 relative z-10 group-hover:text-white transition-colors duration-300">
                  <div className="mb-2 text-3xl">🧠</div>
                  <h3 className="text-xl font-bold mb-2">Mental Math Trainer</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/90">
                    Practice mental calculation skills with timed challenges and learn useful techniques.
                  </p>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="relative group overflow-hidden rounded-xl">
              <Link to="/calculator">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <CardContent className="p-6 relative z-10 group-hover:text-white transition-colors duration-300">
                  <div className="mb-2 text-3xl">🧮</div>
                  <h3 className="text-xl font-bold mb-2">Scientific Calculator</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/90">
                    Advanced calculator with unlimited precision and support for large numbers.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="relative group overflow-hidden rounded-xl">
              <Link to="/cultural">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <CardContent className="p-6 relative z-10 group-hover:text-white transition-colors duration-300">
                  <div className="mb-2 text-3xl">🌍</div>
                  <h3 className="text-xl font-bold mb-2">Cultural Significance</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/90">
                    Discover how different cultures perceive and use numbers in tradition and mythology.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="relative group overflow-hidden rounded-xl">
              <Link to="/glossary">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <CardContent className="p-6 relative z-10 group-hover:text-white transition-colors duration-300">
                  <div className="mb-2 text-3xl">📚</div>
                  <h3 className="text-xl font-bold mb-2">Number Glossary</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/90">
                    A searchable collection of definitions for number-related terms and concepts.
                  </p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start Learning Today
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our comprehensive tools and resources to deepen your understanding of numbers and mathematics.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="w-full">
                  <Link to="/converter">Try the Converter</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}