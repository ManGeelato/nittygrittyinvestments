import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Link,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import RootLayOut from "./components/roots/RootLayOut";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";

// SUB SERVICE PAGES
import Architecture from "./pages/services/components/Architecture";
import Gardening from "./pages/services/components/Gardening";
import Cleaning from "./pages/services/components/Cleaning";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>

        {/* Home Page */}
        <Route index element={<Home />} />

        {/* Static Pages */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="projects" element={<Projects />} />

        {/* SERVICES MAIN PAGE */}
        <Route path="services" element={<Services />} />

        {/* SUB-SERVICES (IMPORTANT!) */}
        <Route path="services/architecture" element={<Architecture />} />
        <Route path="services/gardening" element={<Gardening />} />
        <Route path="services/cleaning" element={<Cleaning />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="min-h-screen pt-20 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-red-600">
                  404 - Page Not Found
                </h1>
                <p className="mt-4 text-gray-600">
                  The page you are looking for does not exist.
                </p>
                <Link
                  to="/"
                  className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Go Home
                </Link>
              </div>
            </div>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
