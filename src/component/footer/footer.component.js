import React from "react";
import "../../style/footer/footer.style.css";
import * as constants from "../../utils/system.constant";
import * as contents from "../../utils/content.collections";
import Divider from '@mui/material/Divider';

import Button from "@mui/material/Button";
import { MinimalEmailSubscribeStyle } from "../../utils/module/MinimalEmailSubscribeStyle.js"

const FooterComponent = () => {

  var socialmediaurls = contents.SOCIALMEDIAURL;

  const getMediaUrl = (media) => {
    var filteredItems = socialmediaurls.find((item) => item.media === media);
    return filteredItems.url;
  };

  const redirectToSocialMedia = (media) => {
    window.open(getMediaUrl(media), '_blank');
  }



  return (
    <React.Fragment>
      <div
        style={{
          // bottom: 0,
          // position: "absolute",
          // placeItems:'center',
          color: constants.COMMON_COLOR,
        }}
      >
        <div
          class="footer_container"
          style={{ placeItems: 'center' }}
        >
          {/* left  */}
          <div class="footer-left">
            <h3>
              <span>{constants.COMPANY_NAME}</span>
            </h3>
            <p class="footer-company-about">
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.Lorem
              ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod
              convallis velit, eu auctor lacus vehicula sit amet.
            </p>
          </div>

          {/* center */}

          <div class="footer-center">
            <p>Connect with us</p>
            <div class="social-menu">
              <ul>
                <li><a onClick={(e) => redirectToSocialMedia("facebook")} target="blank"><i class="fab fa-facebook-f"></i></a></li>
                <li><a onClick={(e) => redirectToSocialMedia("instargam")} target="blank"><i class="fab fa-instagram"></i></a></li>
                <li><a onClick={(e) => redirectToSocialMedia("linkedin")} target="blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a onClick={(e) => redirectToSocialMedia("twitter")}><i class="fab fa-twitter" target="blank"></i></a></li>
              </ul>
            </div>

            {/* <div>
              <Button>
                <i class="fa fa-facebook"></i>
              </Button>

              <Button>
                <i class="fa fa-phone"></i>
              </Button>

              <Button>
                <i class="fa fa-instagram"></i>
              </Button>

              <Button>
                <i class="fa fa-linkedin"></i>
              </Button>

              <Button>
                <i class="fa fa-envelope"></i>
              </Button>
            </div> */}
          </div>

          {/* right  */}
          {/* <div class="footer-right">
            <MinimalEmailSubscribeStyle/>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <h2
                className="newsletter"
                style={{
                  color: constants.COMMON_COLOR,
                }}
              >
                <i class="fa fa-envelope"></i>&nbsp; Newsletter
              </h2>
              <TextField fullWidth label="example@gmail.com" id="fullWidth" />
            </Box>
          </div> */}
        </div>

        {/* copyright footer */}
        <div className="footer_session2">
          <p style={{ fontSize: "small", textAlign: "center" }}>
            Copyright &copy; 2023.{" "}
            <span>{window.innerWidth < 600 ? <Divider /> : ""}</span>All Rights
            Reserved by {constants.COMPANY_NAME}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FooterComponent;
