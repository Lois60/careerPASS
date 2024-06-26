import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";

export const MainLayout = () => {
  const location = useLocation();

  const pathsWithoutHeaderFooter = [
    "/RegisterForm",
    "/PersonalityTraits",
    "/LoginForm",
    "/CognitiveAbility",
    "/LogicalReasoning",
    "/EmotionalStability",
    "/Magination",
    "/TechnicalAptitude",
    "/SkillsAssessment",
    "/FeedBack",
    "/ThankYou",
  ];

  const shouldRenderHeaderFooter = () => {
    return !pathsWithoutHeaderFooter.includes(location.pathname);
  };

  return (
    <>
      {shouldRenderHeaderFooter() && <Header />}
      <Outlet />

      {shouldRenderHeaderFooter() && <Footer />}
    </>
  );
};
