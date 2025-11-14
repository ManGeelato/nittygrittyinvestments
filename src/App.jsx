import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,Link,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import RootLayOut from "./components/roots/RootLayOut";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        {/* Home Page */}
        <Route index element={<Home />} />

        {/* Other Pages */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="projects" element={<Projects/>} />
        <Route path="services" element={<Services />} />

        {/* Fallback Route for 404 */}
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