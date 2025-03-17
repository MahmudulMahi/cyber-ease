import React, { useEffect } from "react";
import PostEmail from "../Home/PostEmail/PostEmail";
import { changeTitleAndFavicon } from "../../ChangeTitle/ChangeTitle";
import AboutNav from "../Shared/AboutNav/AboutNav";

const Contact = () => {
  useEffect(() => {
    changeTitleAndFavicon("contact");
  }, []);
  return (
    <div>
      <AboutNav></AboutNav>
      <PostEmail></PostEmail>
    </div>
  );
};

export default Contact;
