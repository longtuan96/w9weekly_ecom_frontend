import React from "react";
import logo from "../../images/siris.svg";
import githubIco from "../../images/github_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FooterSection = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="SIRIS FOOD" width="200px" />
      </div>
      <div>
        <a
          href="https://www.facebook.com/longtuan.tran.5"
          target="_blank"
          rel="noreferrer"
          style={{ color: "black" }}
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
        </a>

        <a
          href="https://github.com/longtuan96/w9weekly_ecom_frontend"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIco} alt="Github" width="32px" />
        </a>
      </div>
    </div>
  );
};

export default FooterSection;
