import Image from "next/image";
import React from "react";
import leftSVG from "@/assets/leftSVG.svg";
import rightSVG from "@/assets/rightSVG.svg";
import google from "@/assets/google.svg";
import facebook from "@/assets/facebook.svg";
import rectangle from "@/assets/header/Rectangle.svg";

import eye from "@/assets/eye.svg";
import { Lock, LockIcon, LockKeyholeIcon } from "lucide-react";

const Header = () => {
  return (
    <main className="container-lg  ">
      <div className="row gx-xl-5">
        {/* left sections */}
        <div className="row col-md-8 mx-auto ">
          {/* heading */}
          <div className="">
            <h1 className="fst-italic fw-semibold pb-4">
              Explore your <span style={{ color: "#0096C8" }}>hobby</span> or{" "}
              <span style={{ color: "#8064A2" }}>passion</span>
            </h1>
            {/* paragraphs */}
            <p className=" lh-lg ">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p className="lh-lg d-none d-lg-block">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          {/* bottom images */}
          <div className="row gx-0 d-none d-md-block">
            <Image
              src={leftSVG}
              alt="leftSVG"
              width={0}
              height={0}
              className="col-6 col-md"
            />
            <Image
              src={rightSVG}
              alt="leftSVG"
              width={0}
              height={0}
              className="col-6 2col-md"
            />
          </div>
        </div>
        {/* right section */}
        <div className="col-md-4">
          <div>
            {/* tabs */}
            <ul
              className="nav nav-tabs mb-3 d-flex  justify-content-center justify-content-md-start "
              id="myTab"
              role="tablist"
              style={{ borderBottom: "none" }}
            >
              <li className="tab-item nav-item" role="presentation">
                <button
                  className="nav-link active "
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Sign In
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Join In
                </button>
              </li>
            </ul>
            {/* tab-content */}
            <div className="tab-content" id="myTabContent">
              {/* sign in */}
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {/* webview */}
                <div className="d-none d-md-block">
                  <div className="row gap-3 ">
                    {/* continue to google button */}
                    <button
                      type="button"
                      className="sign-in-btn btn btn-outline-primary d-flex flex-row  w-100  align-items-center align-content-center  p-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      <div className="col-2">
                        <Image
                          src={google}
                          alt="google"
                          width={16}
                          height={16}
                        />
                      </div>

                      <div className="col-8 fw-bold ">Continue with Google</div>
                    </button>
                    {/* Continue with Facebook button */}
                    <button
                      type="button"
                      className="sign-in-btn btn btn-outline-primary d-flex flex-row  w-100  align-items-center align-content-center  p-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      <div className="col-2">
                        <Image
                          src={facebook}
                          alt="facebook"
                          width={16}
                          height={16}
                        />
                      </div>

                      <div className="col-8 fw-bold ">
                        Continue with Facebook
                      </div>
                    </button>

                    {/* text middle */}
                    <div className="text-middle">
                      <span className="span">Or connect with</span>
                    </div>
                    {/* input section */}
                    <div className="p-0 gap-2 d-flex flex-column ">
                      {/* input section */}
                      <div>
                        <input
                          type="text"
                          className="form-control w-100 "
                          placeholder="Email"
                        />
                      </div>
                      {/* input section */}
                      <div className="position-relative ">
                        <input
                          type="text"
                          className="form-control w-100 "
                          placeholder="Password"
                          style={{ width: "100%" }}
                        />
                        <Image
                          src={eye}
                          alt="eye"
                          width={0}
                          height={0}
                          className="position-absolute "
                          style={{ right: "30px", top: "10px" }}
                        />
                      </div>
                      {/* remember me section */}
                      <div className="d-flex justify-content-between align-content-center my-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Remember Me
                          </label>
                        </div>
                        <div
                          className="d-flex flec-row align-items-center gap-2"
                          style={{ cursor: "pointer" }}
                        >
                          <span>
                            <LockKeyholeIcon size={16} stroke="#939CA3" />
                          </span>
                          <span>Forgot password?</span>
                        </div>
                      </div>

                      {/* continue button */}
                      <div className="p-0">
                        <button
                          type="button"
                          className="btn btn-outline-dark  w-100 fw-bold"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* mobileview */}
                <div className="d-md-none">
                  <div className="row gap-3 ">
                    <div className="p-0 gap-2 d-flex flex-column ">
                      {/* input section */}
                      <div>
                        <input
                          type="text"
                          className="form-control w-100 "
                          placeholder="Email"
                        />
                      </div>
                      {/* input section */}
                      <div className="position-relative ">
                        <input
                          type="text"
                          className="form-control w-100 "
                          placeholder="Password"
                          style={{ width: "100%" }}
                        />
                        <Image
                          src={eye}
                          alt="eye"
                          width={0}
                          height={0}
                          className="position-absolute "
                          style={{ right: "30px", top: "10px" }}
                        />
                      </div>
                      {/* remember me section */}
                      <div className="d-flex justify-content-between align-content-center my-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Remember Me
                          </label>
                        </div>
                        <div
                          className="d-flex flec-row align-items-center gap-2"
                          style={{ cursor: "pointer" }}
                        >
                          <span>
                            <LockKeyholeIcon size={16} stroke="#939CA3" />
                          </span>
                          <span>Forgot password?</span>
                        </div>
                      </div>

                      {/* continue button */}
                      <div className="p-0">
                        <button
                          type="button"
                          className="btn btn-outline-primary   w-100 fw-bold"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                    {/* text middle */}
                    <div className="text-middle">
                      <span className="span">Or connect with</span>
                    </div>
                    {/* input section */}

                    {/* continue to google button */}
                    <button
                      type="button"
                      className="sign-in-btn btn btn-outline-primary d-flex flex-row  w-100  align-items-center align-content-center  p-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      <div className="col-2">
                        <Image
                          src={google}
                          alt="google"
                          width={16}
                          height={16}
                        />
                      </div>

                      <div className="col-8 fw-bold ">Continue with Google</div>
                    </button>
                    {/* Continue with Facebook button */}
                    <button
                      type="button"
                      className="sign-in-btn btn btn-outline-primary d-flex flex-row  w-100  align-items-center align-content-center  p-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      <div className="col-2">
                        <Image
                          src={facebook}
                          alt="facebook"
                          width={16}
                          height={16}
                        />
                      </div>

                      <div className="col-8 fw-bold ">
                        Continue with Facebook
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              {/* join in */}
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {/* webview */}
                <div className="d-none d-md-block">
                  <div className="row gap-3 ">
                    {/* continue to google button */}
                    <button
                      type="button"
                      className="sign-in-btn btn btn-outline-primary d-flex flex-row  w-100  align-items-center align-content-center  p-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      <div className="col-2">
                        <Image src={google} alt="google" width={16} height={16} />
                      </div>

                      <div className="col-8 fw-bold ">Continue with Google</div>
                    </button>
                    {/* Continue with Facebook button */}
                    <button
                      type="button"
                      className="sign-in-btn btn btn-outline-primary d-flex flex-row  w-100  align-items-center align-content-center  p-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      <div className="col-2">
                        <Image
                          src={facebook}
                          alt="facebook"
                          width={16}
                          height={16}
                        />
                      </div>

                      <div className="col-8 fw-bold ">
                        Continue with Facebook
                      </div>
                    </button>
                    {/* text middle */}
                    <div className="text-middle">
                      <span className="span">Or connect with</span>
                    </div>
                    {/* input section */}
                    <div className="p-0 gap-2 d-flex flex-column ">
                      {/* input section */}
                      <div>
                        <input
                          type="text"
                          className="form-control w-100 "
                          placeholder="Email"
                        />
                      </div>
                      {/* input section */}
                      <div className="position-relative ">
                        <input
                          type="text"
                          className="form-control w-100 "
                          placeholder="Password"
                          style={{ width: "100%" }}
                        />
                        <Image
                          src={eye}
                          alt="eye"
                          width={0}
                          height={0}
                          className="position-absolute "
                          style={{ right: "30px", top: "10px" }}
                        />
                      </div>
                      {/* password strenght */}
                      <div className="d-flex flex-row align-items-center  justify-content-between ">
                        <div className="d-flex gap-2 ">
                          <Image
                            src={rectangle}
                            alt="rectangle1"
                            width={0}
                            height={0}
                          />
                          <Image
                            src={rectangle}
                            alt="rectangle2"
                            width={0}
                            height={0}
                          />
                          <Image
                            src={rectangle}
                            alt="rectangle3"
                            width={0}
                            height={0}
                          />
                        </div>
                        <div style={{ color: "#939CA3 ", fontSize: "10px" }}>
                          Password strength
                        </div>
                      </div>
                      {/* policy*/}
                      <div className="" style={{ fontSize: "12px" }}>
                        By continuing, you agree to our
                        <span className="fw-bold ">
                          Terms of Service
                        </span> and{" "}
                        <span className="fw-bold ">Privacy Policy</span>.
                      </div>

                      {/* continue button */}
                      <div className="p-0">
                        <button
                          type="button"
                          className="btn btn-outline-dark  w-100 fw-bold"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* mobile view */}
                <div className="d-md-none">
                  <div className="row gap-3 ">
                    {/* input section */}
                    <div className="p-0 gap-2 d-flex flex-column ">
                      {/* input section */}
                      <div>
                        <input
                          type="text"
                          className="form-control w-100 "
                          placeholder="Email"
                        />
                      </div>
                      {/* input section */}
                      <div className="position-relative ">
                        <input
                          type="text"
                          className="form-control w-100 "
                          placeholder="Password"
                          style={{ width: "100%" }}
                        />
                        <Image
                          src={eye}
                          alt="eye"
                          width={0}
                          height={0}
                          className="position-absolute "
                          style={{ right: "30px", top: "10px" }}
                        />
                      </div>
                      <div className="d-flex flex-row align-items-center  justify-content-between ">
                        <div className="d-flex gap-2 ">
                          <Image
                            src={rectangle}
                            alt="rectangle1"
                            width={0}
                            height={0}
                          />
                          <Image
                            src={rectangle}
                            alt="rectangle2"
                            width={0}
                            height={0}
                          />
                          <Image
                            src={rectangle}
                            alt="rectangle3"
                            width={0}
                            height={0}
                          />
                        </div>
                        <div style={{ color: "#939CA3 ", fontSize: "10px" }}>
                          Password strength
                        </div>
                      </div>
                      {/* policy*/}
                      <div className="" style={{ fontSize: "12px" }}>
                        By continuing, you agree to our
                        <span className="fw-bold ">
                          Terms of Service
                        </span> and{" "}
                        <span className="fw-bold ">Privacy Policy</span>.
                      </div>

                      {/* continue button */}
                      <div className="p-0">
                        <button
                          type="button"
                          className="btn btn-outline-primary   w-100 fw-bold"
                        >
                          Continue
                        </button>
                      </div>
                    </div>

                    {/* text middle */}
                    <div className="text-middle">
                      <span className="span">Or connect with</span>
                    </div>

                    {/* continue to google button */}
                    <button
                      type="button"
                      className="sign-in-btn btn btn-outline-primary d-flex flex-row  w-100  align-items-center align-content-center  p-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      <div className="col-2">
                        <Image src={google} alt="google" width={0} height={0} />
                      </div>

                      <div className="col-8 fw-bold ">Continue with Google</div>
                    </button>
                    {/* Continue with Facebook button */}
                    <button
                      type="button"
                      className="sign-in-btn btn btn-outline-primary d-flex flex-row  w-100  align-items-center align-content-center  p-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      <div className="col-2">
                        <Image
                          src={facebook}
                          alt="facebook"
                          width={0}
                          height={0}
                        />
                      </div>

                      <div className="col-8 fw-bold ">
                        Continue with Facebook
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mopbile Image */}
          <div className="row gx-0 d-md-none  bottom-0  ">
            <Image
              src={leftSVG}
              alt="leftSVG"
              width={0}
              height={0}
              className="col-6 col-md  "
            />
            <Image
              src={rightSVG}
              alt="leftSVG"
              width={0}
              height={0}
              className="col-6 2col-md"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
