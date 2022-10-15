import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h2>About Us</h2>
          <p>
            Hey! there, <br />
            Thanks for comming here.
            <br />
            We are here to provide you all of your studying stuffs which is
            helpful during your acedmic year in in <b>Diploma</b>
          </p>
        </div>
        {/* <div id="g_line"></div> */}
        <div>
          <h2>Contact Us</h2>
          <ul>
            <li>
              <a href="mailto:danwichoudhary@gmail.com">
                <span>
                  <img
                    className="icon"
                    src="./envelope-solid.svg"
                    alt=""
                    srcset=""
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:danwichoudhary@gmail.com">
                <img className="icon" src="./instagram.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="mailto:danwichoudhary@gmail.com">
                <img className="icon" src="./whatsapp.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
