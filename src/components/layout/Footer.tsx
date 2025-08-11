import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-6 md:px-0">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              NumberScope
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NumberScope. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link to="/converter" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Converter
          </Link>
          <Link to="/formats" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Formats
          </Link>
          <Link to="/scales" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Scales
          </Link>
          <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}