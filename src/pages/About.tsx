import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About NumberScope
            </h1>
            <p className="text-muted-foreground">
              Learn about our mission to make numbers and mathematics more accessible
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                Bringing clarity to numerical concepts for students, educators, and curious minds
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                NumberScope was created to help people understand and explore numbers in an educational, 
                straightforward way. Our goal is to serve as a comprehensive resource for learning about 
                number names, formats, systems, and mathematical concepts.
              </p>
              <p>
                Whether you're a student struggling with place values, a teacher looking for educational
                resources, or simply curious about how different cultures represent large numbers, we aim to 
                provide clear, accessible information.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Convert any number to its full English name with audio playback</li>
                  <li>Transform numbers into scientific notation, engineering notation, and Roman numerals</li>
                  <li>Explore large number names in different counting systems</li>
                  <li>Learn about number systems from around the world</li>
                  <li>Break down numbers into their place-value components</li>
                  <li>Access a comprehensive glossary of number-related terms</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Educational Focus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  NumberScope is designed with education in mind. All content is presented in a clear, 
                  straightforward manner without distractions, gamification, or unnecessary complexity.
                </p>
                <p>
                  Our approach emphasizes understanding the "why" behind number systems and notations, 
                  not just the "how." We believe that grasping fundamental concepts leads to deeper 
                  mathematical understanding.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator />
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Learn About Numbers</h2>
            <p>
              Numbers are the foundation of mathematics and an essential part of our daily lives. 
              From counting objects to measuring quantities, from expressing data to analyzing patterns, 
              numbers are everywhere. Understanding different ways to represent and work with numbers 
              opens doors to deeper mathematical comprehension.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Button asChild className="w-full">
                <Link to="/converter">Try Number Converter</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/scales">Explore Number Scales</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/glossary">Browse Glossary</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}