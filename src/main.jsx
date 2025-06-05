import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./index.css";

// Import components
import App from "./App.jsx";
import AboutUsPage from "./components/AboutUsPage.jsx";
import BallClay from "./components/BallClay.jsx";
import ErrorBoundary from "./components/shared/ErrorBoundary.jsx";
import KaolinPage from "./components/KaolinPage.jsx";

// Import the new detailed industry page
import TilesPage from "./components/industries/TilesPage.jsx";

// Product page components (keeping these as inline for now)
const FeldsparPage = () => (
  <div className="min-h-screen bg-white px-6 py-20 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-jldBlue">Feldspar</h1>
      <div className="text-left space-y-6">
        <p className="text-lg text-gray-700">
          Feldspar is an important flux in ceramic bodies, reducing firing temperature and 
          improving the strength and durability of ceramic products.
        </p>
        <h2 className="text-2xl font-semibold text-jldBlue">Applications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Ceramic glazes and bodies</li>
          <li>Glass manufacturing</li>
          <li>Enamel and ceramic frits</li>
          <li>Electrical insulators</li>
        </ul>
        <button 
          onClick={() => window.location.href = '/'}
          className="mt-8 px-6 py-2 bg-jldBlue text-white rounded hover:bg-opacity-80 transition duration-300"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  </div>
);

const QuartzSilicaPage = () => (
  <div className="min-h-screen bg-white px-6 py-20 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-jldBlue">Quartz & Silica</h1>
      <div className="text-left space-y-6">
        <p className="text-lg text-gray-700">
          Quartz and Silica provide structural strength and reduce thermal expansion in ceramic bodies. 
          They're essential for high-quality ceramic and glass production.
        </p>
        <h2 className="text-2xl font-semibold text-jldBlue">Applications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Ceramic bodies and glazes</li>
          <li>Glass and optical glass</li>
          <li>Foundry applications</li>
          <li>Abrasives and filtration</li>
        </ul>
        <button 
          onClick={() => window.location.href = '/'}
          className="mt-8 px-6 py-2 bg-jldBlue text-white rounded hover:bg-opacity-80 transition duration-300"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  </div>
);

// Placeholder industry components (will be replaced with detailed pages)
const GlazesEngobesPage = () => (
  <div className="min-h-screen bg-white px-6 py-20 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-jldBlue">Glazes & Engobes</h1>
      <div className="text-left space-y-6">
        <p className="text-lg text-gray-700">
          Specialized mineral solutions for glazes and engobes, providing excellent surface finish 
          and decorative properties for ceramic products.
        </p>
        <h2 className="text-2xl font-semibold text-jldBlue">Applications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Ceramic glazes for tiles and sanitaryware</li>
          <li>Engobe formulations for decorative finishes</li>
          <li>Specialty glazes for tableware</li>
          <li>Technical glazes for industrial applications</li>
        </ul>
        <button 
          onClick={() => window.location.href = '/'}
          className="mt-8 px-6 py-2 bg-jldBlue text-white rounded hover:bg-opacity-80 transition duration-300"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  </div>
);

const SanitaryWarePage = () => (
  <div className="min-h-screen bg-white px-6 py-20 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-jldBlue">Sanitary Ware</h1>
      <div className="text-left space-y-6">
        <p className="text-lg text-gray-700">
          High-quality clay minerals for sanitary ware manufacturing, ensuring durability, 
          whiteness, and superior surface finish.
        </p>
        <h2 className="text-2xl font-semibold text-jldBlue">Product Applications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Toilet bowls and washbasins</li>
          <li>Bathtubs and shower trays</li>
          <li>Kitchen sinks and accessories</li>
          <li>Commercial sanitary fixtures</li>
        </ul>
        <button 
          onClick={() => window.location.href = '/'}
          className="mt-8 px-6 py-2 bg-jldBlue text-white rounded hover:bg-opacity-80 transition duration-300"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  </div>
);

const TableWarePage = () => (
  <div className="min-h-screen bg-white px-6 py-20 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-jldBlue">Table Ware</h1>
      <div className="text-left space-y-6">
        <p className="text-lg text-gray-700">
          Premium materials for fine china and tableware production, delivering exceptional 
          whiteness, translucency, and strength.
        </p>
        <h2 className="text-2xl font-semibold text-jldBlue">Products</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Fine bone china and porcelain</li>
          <li>Dinner sets and serving dishes</li>
          <li>Coffee and tea sets</li>
          <li>Decorative ceramics and collectibles</li>
        </ul>
        <button 
          onClick={() => window.location.href = '/'}
          className="mt-8 px-6 py-2 bg-jldBlue text-white rounded hover:bg-opacity-80 transition duration-300"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  </div>
);

const ElectricalPorcelainPage = () => (
  <div className="min-h-screen bg-white px-6 py-20 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-jldBlue">Electrical Porcelain</h1>
      <div className="text-left space-y-6">
        <p className="text-lg text-gray-700">
          Specialized minerals for electrical porcelain manufacturing, providing excellent 
          dielectric properties and mechanical strength.
        </p>
        <h2 className="text-2xl font-semibold text-jldBlue">Applications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>High voltage insulators</li>
          <li>Switchgear components</li>
          <li>Transformer bushings</li>
          <li>Power line insulators</li>
        </ul>
        <button 
          onClick={() => window.location.href = '/'}
          className="mt-8 px-6 py-2 bg-jldBlue text-white rounded hover:bg-opacity-80 transition duration-300"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  </div>
);

const RefractoryPage = () => (
  <div className="min-h-screen bg-white px-6 py-20 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-jldBlue">Refractory</h1>
      <div className="text-left space-y-6">
        <p className="text-lg text-gray-700">
          High-temperature resistant materials for refractory applications, providing excellent 
          thermal stability and chemical resistance.
        </p>
        <h2 className="text-2xl font-semibold text-jldBlue">Applications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Furnace linings and kiln furniture</li>
          <li>Steel industry refractories</li>
          <li>Glass furnace components</li>
          <li>Petrochemical reactor linings</li>
        </ul>
        <button 
          onClick={() => window.location.href = '/'}
          className="mt-8 px-6 py-2 bg-jldBlue text-white rounded hover:bg-opacity-80 transition duration-300"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  </div>
);

// Create router configuration for React Router v7
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
    errorElement: (
      <ErrorBoundary>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h1>
            <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
            <button 
              onClick={() => window.location.href = '/home'} 
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Go Home
            </button>
          </div>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/about",
    element: (
      <ErrorBoundary>
        <AboutUsPage />
      </ErrorBoundary>
    ),
  },
  // Product routes
  {
    path: "/products/ball-clay",
    element: (
      <ErrorBoundary>
        <BallClay />
      </ErrorBoundary>
    ),
  },
  {
    path: "/products/kaolin",
    element: <KaolinPage />,
  },
  {
    path: "/products/feldspar",
    element: <FeldsparPage />,
  },
  {
    path: "/products/quartz-silica",
    element: <QuartzSilicaPage />,
  },
  // Industry routes
  {
    path: "/industries/tiles",
    element: <TilesPage />,  // Now using the detailed component
  },
  {
    path: "/industries/glazes-engobes",
    element: <GlazesEngobesPage />,
  },
  {
    path: "/industries/sanitary-ware",
    element: <SanitaryWarePage />,
  },
  {
    path: "/industries/table-ware",
    element: <TableWarePage />,
  },
  {
    path: "/industries/electrical-porcelain",
    element: <ElectricalPorcelainPage />,
  },
  {
    path: "/industries/refractory",
    element: <RefractoryPage />,
  },
]);

const Root = () => (
  <AnimatePresence mode="wait">
    <RouterProvider router={router} />
  </AnimatePresence>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Root />
);