import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import NervousSystem from "./pages/NervousSystem";
import Bloodline from "./pages/Bloodline";
import BeliefSystem from "./pages/BeliefSystem";
import AboutMaryTimeline from "./pages/AboutMaryTimeline";
import MarysLife from "./pages/MarysLife";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-mary" element={<AboutMaryTimeline />} />
            <Route path="/marys-life" element={<MarysLife />} />
            <Route path="/nervous-system" element={<NervousSystem />} />
            <Route path="/bloodline" element={<Bloodline />} />
            <Route path="/belief-system" element={<BeliefSystem />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
