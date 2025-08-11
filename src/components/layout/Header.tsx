import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ModeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              NumberScope
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8">Tools</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Number Tools</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/converter">Number Converter</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/visualizer">Number Visualizer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/calculator">Scientific Calculator</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" className="h-8" asChild>
            <Link to="/mental-math">Mental Math</Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8">Learn</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Number Knowledge</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/formats">Number Formats</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/scales">Scale Explorer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/systems">Number Systems</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/glossary">Glossary</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8">Explore</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Advanced Topics</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/sequences">Number Sequences</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/constants">Math Constants</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/cultural">Cultural Significance</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" className="h-8" asChild>
            <Link to="/about">About</Link>
          </Button>
        </nav>
        
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button className="hidden md:flex" asChild>
            <Link to="/converter">Try Converter</Link>
          </Button>
          <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <span className="sr-only">Toggle menu</span>
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="md:hidden w-64">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/converter" onClick={() => setIsMenuOpen(false)}>Number Converter</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/visualizer" onClick={() => setIsMenuOpen(false)}>Number Visualizer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/calculator" onClick={() => setIsMenuOpen(false)}>Scientific Calculator</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/mental-math" onClick={() => setIsMenuOpen(false)}>Mental Math Trainer</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/formats" onClick={() => setIsMenuOpen(false)}>Number Formats</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/scales" onClick={() => setIsMenuOpen(false)}>Scale Explorer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/systems" onClick={() => setIsMenuOpen(false)}>Number Systems</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/glossary" onClick={() => setIsMenuOpen(false)}>Glossary</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/sequences" onClick={() => setIsMenuOpen(false)}>Number Sequences</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/constants" onClick={() => setIsMenuOpen(false)}>Math Constants</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/cultural" onClick={() => setIsMenuOpen(false)}>Cultural Significance</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}