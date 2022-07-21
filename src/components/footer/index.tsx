import * as React from "react";
import "./style.css";

const footerData = [
  {
    title: "THE BASICS",
    body: ["About Weekend watch", "Contact Us", "Support", "API"],
  },
  {
    title: "GET INVOLVED",
    body: ["Contribution Guidelines", "Add New Movie", "Add New TV Show"],
  },
  {
    title: "COMMUNITY",
    body: ["Guidelines", "Discussions", "Leader board", "Tweeter"],
  },
  {
    title: "LEGAL",
    body: ["Terms of use", "API Terms of use", "Privacy Policy"],
  },
];

const Footer = () => (
  <footer>
    <div className="footer-wrapper mx-auto px-[120px]">
      <div className="footer">
        <div>
          <img src="./footer-logo.svg" alt="brand_logo" className="mr-8" />
          <address className="mt-10 w-[260px] text-left">
            24, Vaishnavi Centre, Raja Park, 51, Dhanana, Panipat, Haryana,
            Pincode-154419
          </address>
        </div>
        <div className="flex items-start">
          {footerData.map((item, index) => (
            <div key="index" className="text-left ml-40">
              <h3 className="font-bold">{item.title}</h3>
              {item.body.map((data, pos) => (
                <div
                  key="pos"
                  className="my-2 cursor-pointer no-underline hover:underline"
                >
                  <p>{data}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="footer-bottom mx-auto px-[120px]">
      <p>
        © 2022 STAR. All Rights Reserved. Weekend watch’s all related Movies and
        TV Shoes are part of copyright.
      </p>
      <p>INDIA</p>
    </div>
  </footer>
);

export default Footer;
