import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Solucoes from "./pages/Solucoes.tsx";
import Industrias from "./pages/Industrias.tsx";
import Cases from "./pages/Cases.tsx";
import QuemSomos from "./pages/QuemSomos.tsx";
import Contato from "./pages/Contato.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();
const basename = "/teste";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/industrias" element={<Industrias />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
