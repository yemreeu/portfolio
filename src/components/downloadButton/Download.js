import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Download() {
  return (
    <div>
      <ButtonGroup gap="4">
        <Button colorScheme="whiteAlpha">
          <a
            //href="../public/Yunus_Emre Uyanık_Resume_18-01-2023-13-07-59.pdf"
            href="/cv.pdf"
            download="Yunus_Emre Uyanık_Resume.pdf"
          >
            Download CV
          </a>

          {/* <Link to="/public/cv.pdf" target="_blank" download>
            Download CV
          </Link> */}
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Download;
