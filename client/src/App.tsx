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
import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";
import AdminDashboard from "./pages/admin/Dashboard";
import BlogList from "./pages/admin/BlogList";
import BlogForm from "./pages/admin/BlogForm";
import ProductList from "./pages/admin/ProductList";
import ProductForm from "./pages/admin/ProductForm";
function Router() {
  return (
    <Switch>
      {/* Admin Routes - No Navigation/Footer */}
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/blog" component={BlogList} />
      <Route path="/admin/blog/new">
        {() => <BlogForm />}
      </Route>
      <Route path="/admin/blog/edit/:id">
        {(params) => <BlogForm postId={params.id} />}
      </Route>
      <Route path="/admin/products" component={ProductList} />
      <Route path="/admin/products/new">
        {() => <ProductForm />}
      </Route>
      <Route path="/admin/products/edit/:id">
        {(params) => <ProductForm productId={params.id} />}
      </Route>

      {/* Public Routes - With Navigation/Footer */}
      <Route>
        {() => (
          <>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/oem-odm" component={OemOdm} />
              <Route path="/classroom" component={Classroom} />
              <Route path="/capabilities" component={Capabilities} />
              <Route path="/product-library" component={ProductLibrary} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/insights" component={Insights} />
              <Route path="/insights/:slug">
                {(params) => <InsightDetail slug={params.slug} />}
              </Route>
              <Route path="/404" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </>
        )}
      </Route>
    </Switch>
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
