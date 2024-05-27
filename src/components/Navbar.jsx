"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import exploreIcon from "@/assets/Explore.svg";
import hobbiesIcon from "@/assets/Hobbies.svg";
import bookmark from "@/assets/Bookmark.svg";
import Menu from "@/assets/Menu.svg";
import search from "@/assets/search.svg";
import cross from "@/assets/cross.svg";

import bell from "@/assets/Bell.svg";
import cart from "@/assets/Cart.svg";
import "../styles/Navbar/styles.scss";

import { ChevronDown, CircleX, Search } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Webview */}
      <main className="bg-white  py-2 d-none  d-md-block ">
        <div className="container-lg   ">
          <div className="d-flex flex-row align-items-center justify-content-between  gap-4 ">
            <div className="">
              <Image src={logo} alt="logo" width={293} height={60} />
            </div>
            {/* input  */}
            <div className="   rounded-5 d-flex">
              <input
                type="text "
                className="form-control"
                style={{
                  background: "#EBEDF0",
                  borderRadius: "8px 0  0 8px",
                  width: "100%",
                }}
              />
              <span
                className="input-group-text border-0 "
                style={{ background: "#8064A2", borderRadius: "0 8px 8px 0" }}
                id="basic-addon1"
              >
                <Search color="white" size={20} />
              </span>
            </div>

            <div className="d-flex justify-content-between align-items-center gap-0 gap-lg-2 ">
              <div className="d-flex flex-row fs-6 fw-semibold gap-lg-4 ">
                {/* Explore dropdown */}
                <div className="dropdown">
                  <a
                    className="d-flex gap-1 text-decoration-none"
                    href="#"
                    role="button"
                    id="ExploreDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Image
                      src={exploreIcon}
                      alt="explore"
                      width={0}
                      height={0}
                    />
                    <span>Explore</span>
                    <ChevronDown size={24} stroke="#939CA3" />
                  </a>

                  <ul
                    className="dropdown-menu mt-4"
                    aria-labelledby="ExploreDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        People - Community
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Places - Venues
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Programs - Events
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Products - Store
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Blogs
                      </a>
                    </li>
                  </ul>
                </div>
                {/* explore normal */}
                {/*<div className="d-flex gap-1 ">
              <Image src={exploreIcon} alt="explore" width={0} height={0} />
              <span>Explore</span>
              <ChevronDown size={24} stroke="#939CA3" />
            </div>*/}
                {/* Hobbies dropdown */}
                <div className="dropdown">
                  <a
                    className="d-flex gap-1 text-decoration-none"
                    href="#"
                    role="button"
                    id="HobbiesDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Image
                      src={hobbiesIcon}
                      alt="hobbies"
                      width={0}
                      height={0}
                    />
                    <span>Hobbies</span>
                    <ChevronDown size={24} stroke="#939CA3" />
                  </a>

                  <ul
                    className="dropdown-menu mt-4"
                    aria-labelledby="HobbiesDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        People - Community
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Places - Venues
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Programs - Events
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Products - Store
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Blogs
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Hobbies Normal */}
                {/*<div className="d-flex gap-1">
              <Image src={hobbiesIcon} alt="hobbies" width={0} height={0} />
              <span>Hobbies</span>
              <ChevronDown size={24} stroke="#939CA3" />
            </div>*/}
              </div>
              <div className="d-flex gap-2 ">
                <Image src={bookmark} alt="bookmark" width={0} height={0} />

                <Image src={bell} alt="bell" width={0} height={0} />
                <Image src={cart} alt="cart" width={0} height={0} />
              </div>
              <div className="d-flex">
                <button
                  style={{ whiteSpace: "nowrap" }}
                  type="button"
                  className="text-center btn btn-outline-primary px-4 fw-semibold sign-button d-flex justify-content-end  align-items-center w-100 "
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* mobile view */}
      <main className="bg-white  py-2 d-md-none shadow-lg ">
        <div className="container-lg   ">
          <div className="d-flex flex-row align-items-center justify-content-between  gap-4 ">
            <div className="">
              <Image src={logo} alt="logo" width={156} height={32} />
            </div>
            {/* input  */}
            {/*<div className="input-group w-auto  rounded-5 ">
              <input
                type="text"
                className="form-control"
                style={{ background: "#EBEDF0", borderRadius: "8px 0  0 8px" }}
              />
              <span
                className="input-group-text border-0 "
                style={{ background: "#8064A2", borderRadius: "0 8px 8px 0" }}
                id="basic-addon1"
              >
                <Search color="white" size={20} />
              </span>
            </div>*/}

            <div className="d-flex align-items-center ">
              <div className="d-flex gap-2 ">
                {/*<Image src={bookmark} alt="bookmark" width={0} height={0} />*/}

                <Image src={search} alt="searcg" width={24} height={24} />

                <Image src={bell} alt="bell" width={24} height={24} />
                {/*<Image src={cart} alt="cart" width={0} height={0} />*/}
              </div>
              <div
                onClick={toggleMenu}
                className="cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                {isMenuOpen ? (
                  <Image src={cross} alt="cross" width={24} height={24} />
                ) : (
                  <Image src={Menu} alt="Menu" width={24} height={24} />
                )}
              </div>
            </div>

            {/*<div>
              <button
                type="button"
                className="btn btn-outline-primary px-4 fw-semibold   sign-button"
              >
                Sign in
              </button>
              <div className="bg-primary "></div>
            </div>*/}
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-2 px-3 pt-3">
            <div className="d-lg-none fs-6">
              <h2
                className="fs-6 fw-semibold pb-3 d-flex justify-content-between "
                data-bs-toggle="collapse"
                href="#Explore"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                style={{ fontSize: "12px" }}
              >
                Explore <ChevronDown size={24} stroke="#939CA3" />
              </h2>
              <div className="collapse" id="Explore">
                <p>Listings</p>
                <p>Blog Posts</p>
                <p>Shop / Store</p>
                <p>Community</p>
              </div>
            </div>
            <div className="d-lg-none fs-6">
              <h2
                className="fs-6 fw-semibold pb-3 d-flex justify-content-between "
                data-bs-toggle="collapse"
                href="#Hobbies"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                style={{ fontSize: "12px" }}
              >
                Hobbies <ChevronDown size={24} stroke="#939CA3" />
              </h2>
              <div className="collapse" id="Hobbies">
                <p>Listings</p>
                <p>Blog Posts</p>
                <p>Shop / Store</p>
                <p>Community</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Navbar;
