
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Fonctionnalites from "./pages/Fonctionnalites";
import Contact from "./pages/Contact";
import ActeursStartup from "./pages/acteurs/ActeursStartup";
import ActeursPME from "./pages/acteurs/ActeursPME";
import ActeursInvestisseurs from "./pages/acteurs/ActeursInvestisseurs";
import ActeursRecherche from "./pages/acteurs/ActeursRecherche";
import ActeursInstitutions from "./pages/acteurs/ActeursInstitutions";
import ActeursAccompagnants from "./pages/acteurs/ActeursAccompagnants";
import Timeline from "./pages/Timeline";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import UpvoteProjects from "./pages/UpvoteProjects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fonctionnalites" element={<Fonctionnalites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/acteurs/startups" element={<ActeursStartup />} />
          <Route path="/acteurs/pme-eti" element={<ActeursPME />} />
          <Route path="/acteurs/investisseurs" element={<ActeursInvestisseurs />} />
          <Route path="/acteurs/recherche" element={<ActeursRecherche />} />
          <Route path="/acteurs/institutions" element={<ActeursInstitutions />} />
          <Route path="/acteurs/accompagnants" element={<ActeursAccompagnants />} />
          <Route path="/acteurs/mentorat" element={<ActeursAccompagnants />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/upvote" element={<UpvoteProjects />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
