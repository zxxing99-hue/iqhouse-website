import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OemOdm from "./pages/OemOdm";
import Classroom from "./pages/Classroom";
import Capabilities from "./pages/Capabilities";
import ProductLibrary from "./pages/ProductLibrary";
import About from "./pages/About";
import Contact from "./pages/Contact";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <Navigation />
      <Switch>
       <Route path={"/"} component={Home} />
      <Route path={"/oem-odm"} component={OemOdm} />
      <Route path={"/classroom"} component={Classroom} />
      <Route path={"/capabilities"} component={Capabilities} />
      <Route path={"/product-library"} component={ProductLibrary} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
