import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

const TechnologySection = lazy(
  () => import("./components/TechnologySection")
);

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="text-center">
        {/* React-style spinner */}
        <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin mx-auto"></div>

        <p className="text-sm text-gray-500 mt-4">
          Loading...
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <Suspense fallback={<LoadingSpinner />}>
        <TechnologySection />
      </Suspense>

      <FAQ/>

      <Footer />
    </>
  );
};

export default App;