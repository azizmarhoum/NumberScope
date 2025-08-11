import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Converter from './pages/Converter';
import Formats from './pages/Formats';
import Scales from './pages/Scales';
import Systems from './pages/Systems';
import Glossary from './pages/Glossary';
import About from './pages/About';
import NotFound from './pages/NotFound';
// New pages
import Sequences from './pages/Sequences';
import Constants from './pages/Constants';
import Visualizer from './pages/Visualizer';
import MentalMath from './pages/MentalMath';
import Cultural from './pages/Cultural';
import Calculator from './pages/Calculator';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/formats" element={<Formats />} />
          <Route path="/scales" element={<Scales />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/about" element={<About />} />
          {/* New Routes */}
          <Route path="/sequences" element={<Sequences />} />
          <Route path="/constants" element={<Constants />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/mental-math" element={<MentalMath />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;