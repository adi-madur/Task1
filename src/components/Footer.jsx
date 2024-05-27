import Image from "next/image";
import React from "react";
import { ChevronDown } from "lucide-react";
import facebook from "@/assets/Footer/facebook.svg";
import twitter from "@/assets/Footer/twitter.svg";
import instagram from "@/assets/Footer/instagram.svg";
import pinterest from "@/assets/Footer/pinterest.svg";
import gplus from "@/assets/Footer/gplus.svg";
import youtube from "@/assets/Footer/youtube.svg";
import telegram from "@/assets/Footer/telegram.svg";
import mail from "@/assets/Footer/mail.svg";

const Footer = () => {
  return (
    <div className="bg-white ">
      <div className="container-lg row mx-auto py-5">
        <div className="d-flex flex-column lh-1   col-lg fs-6">
          {/* collspase */}
          <div className="d-lg-none ">
            <h2
              className="fs-5 fw-semibold pb-3 d-flex justify-content-between "
              data-bs-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{ fontSize: "12px" }}
            >
              Hobbycue <ChevronDown size={24} stroke="#939CA3" />
            </h2>
            <div className="collapse1" id="collapseExample1">
              <p className="clickable">About Us</p>
              <p className="clickable">Our Services</p>
              <p className="clickable">Work with Us</p>
              <p className="clickable">FAQ</p>
              <p className="clickable">Contact Us</p>
            </div>
          </div>
          {/* collapse */}
          <div className="d-none  d-lg-block">
            <h2 className="fs-5 fw-semibold pb-3 ">Hobbycue</h2>
            <p className="clickable">About Us</p>
            <p className="clickable">Our Services</p>
            <p className="clickable">Work with Us</p>
            <p className="clickable">FAQ</p>
            <p className="clickable">Contact Us</p>
          </div>
        </div>

        <div className="d-flex flex-column lh-1 col-lg fs-6">
          {/* How Do I */}
          <div className="d-lg-none ">
            <h2
              className="fs-5 fw-semibold pb-3 d-flex justify-content-between"
              data-bs-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{ fontSize: "12px" }}
            >
              How Do I <ChevronDown size={24} stroke="#939CA3" />
            </h2>
            <div className="collapse" id="collapseExample2">
              <p className="clickable">Sign Up</p>
              <p className="clickable">Add a Listing</p>
              <p className="clickable">Claim Listing</p>
              <p className="clickable">Post a Query</p>
              <p className="clickable">Add a Blog Post</p>
              <p className="clickable"> Other Querie</p>
            </div>
          </div>
          {/*  */}
          <div className="d-none d-lg-block">
            <h2 className="fs-5 fw-semibold pb-3">How Do I</h2>
            <p className="clickable">Sign Up</p>
            <p className="clickable">Add a Listing</p>
            <p className="clickable">Claim Listing</p>
            <p className="clickable">Post a Query</p>
            <p className="clickable">Add a Blog Post</p>
            <p className="clickable"> Other Querie</p>
          </div>
        </div>

        <div className="d-flex flex-column lh-1   col-lg fs-6">
          {/* Quick Links */}
          <div className="d-lg-none ">
            <h2
              className="fs-5 fw-semibold pb-3 d-flex justify-content-between "
              data-bs-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{ fontSize: "12px" }}
            >
              Quick Links <ChevronDown size={24} stroke="#939CA3" />
            </h2>
            <div className="collapse" id="collapseExample3">
              <p className="clickable">Listings</p>
              <p className="clickable">Blog Posts</p>
              <p className="clickable">Shop / Store</p>
              <p className="clickable">Community</p>
            </div>
          </div>
          <div className="d-none  d-lg-block">
            <h2 className="fs-5 fw-semibold pb-3 ">Quick Links</h2>
            <p className="clickable">Listings</p>
            <p className="clickable">Blog Posts</p>
            <p className="clickable">Shop / Store</p>
            <p className="clickable">Community</p>
          </div>
        </div>

        <div className="d-flex flex-column lh-1 col-lg fs-6">
          {/* socials */}
          <div>
            <h2 className="fs-5 fw-semibold pb-3 ">Social Media</h2>
            {/* icons */}
            <div className="d-flex flex-row gap-3">
              <Image
                src={facebook}
                alt="facebook"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                  cursor: "pointer",
                }}
              />
              <Image
                src={twitter}
                alt="twitter"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                  cursor: "pointer",
                }}
              />
              <Image
                src={instagram}
                alt="instagram"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                  cursor: "pointer",
                }}
              />
              <Image
                src={pinterest}
                alt="pinterest"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                  cursor: "pointer",
                }}
              />
              <Image
                src={gplus}
                alt="gplus"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                  cursor: "pointer",
                }}
              />
              <Image
                src={youtube}
                alt="youtube"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                  cursor: "pointer",
                }}
              />
              <Image
                src={telegram}
                alt="telegram"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                  cursor: "pointer",
                }}
              />
              <Image
                src={mail}
                alt="mail"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          {/* invite friends */}
          <div className="pt-3">
            <h2 className="fs-5 fw-semibold pb-3 ">Invite Friends</h2>
            <div className="input-group w-auto  rounded-5 ">
              <input
                type="text"
                className="form-control"
                style={{
                  background: "white",
                  borderRadius: "8px 0  0 8px",
                  border: "1px solid #8064A2",
                }}
              />
              <span
                className="input-group-text border-0 text-white fs-6 fw-semibold "
                style={{
                  background: "#8064A2",
                  borderRadius: "0 8px 8px 0",
                  cursor: "pointer",
                }}
                id="basic-addon1"
              >
                invite
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3 p-md-5 fw-semibold "
        style={{ background: "#F7F5F9" }}
      >
        © Purple Cues Private Limited
      </div>
    </div>
  );
};

export default Footer;
