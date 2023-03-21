import React from "react";
import { Link } from "@chakra-ui/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./styles.scss"

function Social() {
  return (
    <div>
      <ul className="social-list">
        <li>
          <Link href="https://www.linkedin.com/in/yunus-emre-uyanik" isExternal>
            <LinkedInIcon fontSize="large"/>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/yemreeu" isExternal>
            <GitHubIcon fontSize="large"/>
          </Link>
        </li>
        <li>
        <Link href="https://www.instagram.com/yemreuyanik/" isExternal>
            <InstagramIcon fontSize="large"/>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Social;
