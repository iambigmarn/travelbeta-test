import React from "react";
import PaymentMethodsBankAccount from "pages/PaymentMethodsBankAccount";
import AdditionalInformation from "pages/AdditionalInformation";
import HotelsearchresultsThree from "pages/HotelsearchresultsThree";
import HotelsearchresultsTwo from "pages/HotelsearchresultsTwo";
import HotelsearchresultsOne from "pages/HotelsearchresultsOne";
import Hotelsearchresults from "pages/Hotelsearchresults";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hotelsearchresults />} />
        <Route path="/travelbeta-test" element={<Hotelsearchresults />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/hotelsearchresults" element={<Hotelsearchresults />} />
        <Route
          path="/hotelsearchresultsthree"
          element={<HotelsearchresultsThree />}
        />
        <Route
          path="/additionalinformation"
          element={<AdditionalInformation />}
        />
        <Route
          path="/paymentmethodsbankaccount"
          element={<PaymentMethodsBankAccount />}
        />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
