import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate, useNavigate } from "react-router-dom";
import "./index.css";

// Error Boundary is imported immediately as it's critical
import ErrorBoundary from "./components/shared/ErrorBoundary.jsx";

// Lazy load all page components for better performance
const App = lazy(() => import("./App.jsx"));
const AboutUsPage = lazy(() => import("./components/AboutUsPage.jsx"));
const BallClay = lazy(() => import("./components/BallClay.jsx"));
const KaolinPage = lazy(() => import("./components/KaolinPage.jsx"));
const FeldsparPage = lazy(() => import("./components/FeldsparPage.jsx"));
const QuartzSilicaPage = lazy(() => import("./components/QuartzSilicaPage.jsx"));
const TilesPage = lazy(() => import("./components/industries/TilesPage.jsx"));
const SanitarywarePage = lazy(() => import("./components/industries/SanitarywarePage.jsx"));
const TablewarePage = lazy(() => import("./components/industries/TablewarePage.jsx"));
const ElectricalPorcelainPage = lazy(() => import("./components/industries/ElectricalPorcelainPage.jsx"));
const GlazesEngobesPage = lazy(() => import("./components/industries/GlazesEngobesPage.jsx"));
const RefractoryPage = lazy(() => import("./components/industries/RefractoryPage.jsx"));
const BlogsPage = lazy(() => import("./components/BlogsPage.jsx"));
const CareersPage = lazy(() => import("./components/CareersPage.jsx"));
const ContactUsPage = lazy(() => import("./components/ContactUsPage.jsx"));
const RnDPage = lazy(() => import("./components/RnDPage.jsx"));

// Optimized loading component - smaller and less intrusive
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center opacity-30">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-jldBlue"></div>
    </div>
  </div>
);

// Wrapper component for consistent loading and error handling
const PageWrapper = ({ Component }) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingSpinner />}>
      <Component />
    </Suspense>
  </ErrorBoundary>
);

// Optimized placeholder components with proper navigation
const createPlaceholderPage = (title, description, applications) => {
  const PlaceholderPage = () => {
    const navigate = useNavigate();
    
    const handleBackClick = () => {
      if (window.history.length > 1) {
        navigate(-1); // Go back to previous page
      } else {
        navigate('/home'); // Fallback to home
      }
    };

    return (
    <div className="min-h-screen bg-white px-6 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-jldBlue">{title}</h1>
        <div className="text-left space-y-6">
          <p className="text-lg text-gray-700">{description}</p>
          <h2 className="text-2xl font-semibold text-jldBlue">Applications</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {applications.map((app, index) => <li key={index}>{app}</li>)}
          </ul>
          <button 
              onClick={handleBackClick}
            className="mt-8 px-6 py-2 bg-jldBlue text-white rounded hover:bg-opacity-80 transition duration-300"
          >
              ← Back
          </button>
        </div>
      </div>
    </div>
  );
  };
  return PlaceholderPage;
};

// Create placeholder pages with reduced memory footprint
const SanitaryWarePage = createPlaceholderPage(
  "Sanitary Ware",
  "High-quality clay minerals for sanitary ware manufacturing, ensuring durability, whiteness, and superior surface finish.",
  [
    "Toilet bowls and washbasins",
    "Bathtubs and shower trays",
    "Kitchen sinks and accessories", 
    "Commercial sanitary fixtures"
  ]
);

const TableWarePage = createPlaceholderPage(
  "Table Ware", 
  "Premium materials for fine china and tableware production, delivering exceptional whiteness, translucency, and strength.",
  [
    "Fine bone china and porcelain",
    "Dinner sets and serving dishes",
    "Coffee and tea sets",
    "Decorative ceramics and collectibles"
  ]
);

// Optimized error page component with proper navigation
const ErrorPage = () => {
  const navigate = useNavigate();
  
  const handleGoHome = () => {
    navigate('/home');
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
    <div className="text-center p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
      <button 
          onClick={handleGoHome}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Go Home
      </button>
    </div>
  </div>
);
};

// Optimized router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <PageWrapper Component={App} />,
    errorElement: <ErrorBoundary><ErrorPage /></ErrorBoundary>,
  },
  // Homepage section routes with clean URLs
  {
    path: "/hero",
    element: <Navigate to="/home#hero" replace />,
  },
  {
    path: "/about-us",
    element: <Navigate to="/home#about" replace />,
  },
  {
    path: "/global-snapshot", 
    element: <Navigate to="/home#snapshot" replace />,
  },
  {
    path: "/products",
    element: <Navigate to="/home#products" replace />,
  },
  {
    path: "/industries",
    element: <Navigate to="/home#industries" replace />,
  },
  {
    path: "/rnd",
    element: <Navigate to="/home#rnd" replace />,
  },
  {
    path: "/sustainability",
    element: <Navigate to="/home#sustainability" replace />,
  },
  {
    path: "/contact-us",
    element: <Navigate to="/home#contact" replace />,
  },
  {
    path: "/about", 
    element: <PageWrapper Component={AboutUsPage} />,
  },
  // Product routes
  {
    path: "/products/ball-clay",
    element: <PageWrapper Component={BallClay} />,
  },
  {
    path: "/products/kaolin",
    element: <PageWrapper Component={KaolinPage} />,
  },
  {
    path: "/products/feldspar", 
    element: <PageWrapper Component={FeldsparPage} />,
  },
  {
    path: "/products/quartz-silica",
    element: <PageWrapper Component={QuartzSilicaPage} />,
  },
  // Industry routes
  {
    path: "/industries/tiles",
    element: <PageWrapper Component={TilesPage} />,
  },
  {
    path: "/industries/glazes-engobes",
    element: <PageWrapper Component={GlazesEngobesPage} />,
  },
  {
    path: "/industries/sanitary-ware", 
    element: <PageWrapper Component={SanitarywarePage} />,
  },
  {
    path: "/industries/table-ware",
    element: <PageWrapper Component={TablewarePage} />,
  },
  {
    path: "/industries/tableware",
    element: <PageWrapper Component={TablewarePage} />,
  },
  {
    path: "/industries/electrical-porcelain",
    element: <PageWrapper Component={ElectricalPorcelainPage} />,
  },
  {
    path: "/industries/refractory",
    element: <PageWrapper Component={RefractoryPage} />,
  },
  // Premium pages
  {
    path: "/blogs",
    element: <PageWrapper Component={BlogsPage} />,
  },
  {
    path: "/careers",
    element: <PageWrapper Component={CareersPage} />,
  },
  {
    path: "/contact",
    element: <PageWrapper Component={ContactUsPage} />,
  },
  {
    path: "/rd-innovation",
    element: <PageWrapper Component={RnDPage} />,
  },
]);

// Simplified root component - removed AnimatePresence wrapper for better performance
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);