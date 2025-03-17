
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Banquets from "./pages/Banquets";
import BanquetDetail from "./pages/BanquetDetail";
import Dining from './pages/Dining';


import Offers from './pages/Offers';
import Dayuse from './pages/Dayuse';




const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
        <Route path="/offers" element={<Offers />} />
        <Route path="/day-use" element={<Dayuse />} />
        <Route path="/dining" element={<Dining />} />
          <Route path="/" element={<Index />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:roomType" element={<RoomDetail />} />
          <Route path="/banquets" element={<Banquets />} />
          <Route path="/banquets/:banquetId" element={<BanquetDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
