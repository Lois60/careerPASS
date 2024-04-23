import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { FooterTwo } from "../components/FooterTwo.jsx";

export const MainLayout = () => {
  const location = useLocation();

  const pathsWithoutHeaderFooter = [
    "/RegisterForm",
    "/LoginForm",
    "/CognitiveAbility",
    "/LogicalReasoning",
    "/EmotionalStability",
    "/Magination",
    "/TechnicalAptitude",
    "/SkillsAssessment",
    "/ThankYou",
  ];
  const pathsWithFooterTwo = ["/TakeAssessment", "/specific-page-two"];

 
  const shouldRenderHeaderFooter = () => {
    return !pathsWithoutHeaderFooter.includes(location.pathname);
  };

  const shouldRenderFooterTwo = () => {
    return pathsWithFooterTwo.includes(location.pathname);
  };

  return (
    <>
      {shouldRenderHeaderFooter() && <Header />}
      <Outlet />
    
      {shouldRenderHeaderFooter() && !shouldRenderFooterTwo() && <Footer />}
   
      {shouldRenderFooterTwo() && <FooterTwo />}
    </>
  );
};
