import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import PublicNavbar from "../components/PublicNavBar";
import userActions from "../redux/actions/user.actions";
import ContentSection from "./sections/ContentSection";
import FooterSection from "./sections/FooterSection";
import WelcomeSection from "./sections/WelcomeSection";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getCurrentUser());
  }, []);
  return (
    <>
      <PublicNavbar />
      <WelcomeSection />
      <ContentSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
