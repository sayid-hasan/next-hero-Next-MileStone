"use client";
import { SiWebmoney } from "react-icons/si";
import "./navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const menu = [{ name: "About" }, { name: "Contact" }, { name: "Testimonial" }];

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 145) {
      return setVisible(true);
    }
    return setVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);
  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        ".navbar__container",
        {
          y: -250,
          width: "100%",
        },
        {
          y: 0,
          top: 0,
          zIndex: 10000,
        }
      );
    }
  }, [visible]);

  useGSAP(
    () => {
      const timeline = gsap.timeline();
      timeline.from(".tab__item", { opacity: 0, stagger: 0.5 });
    },
    { scope: container }
  );

  return (
    <div>
      <nav
        className={` mx-auto navbar__container font-oswald 
          ${visible ? "nav__visible" : ""}`}
        ref={container}
      >
        {showDrawer ? (
          <div
            className="overlay"
            onClick={() => setShowDrawer(!showDrawer)}
          ></div>
        ) : (
          ""
        )}
        {/* logo */}
        <div
          className="log__container "
          onClick={() => scroll.scrollToTop({ duration: 500 })}
        >
          <h1 className="text-2xl ms:text-4xl">Next Hero</h1>
        </div>
        {/* menu item */}
        <div
          className={`${
            showDrawer ? "show" : ""
          } tab__group flex items-center justify-between gap-5 `}
        >
          <span
            onClick={() => setShowDrawer(!showDrawer)}
            className="icon__container close__btn"
          >
            <FaTimes></FaTimes>
          </span>
          {menu.map((list, ind) => (
            <Link
              key={ind}
              activeClass="active"
              className="tab__item tracking-[2px] duration-50 hover:text-[#8750fd] relative px-3 py-2 font-semibold text-lg md:text-xl cursor-pointer"
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              // onClick={() => setShowDrawer(!showDrawer)}
            >
              {list.name}
            </Link>
          ))}
        </div>
        {/* buttons */}
        <div className={`flex items-center gap-5 md:hidden `}>
          <button onClick={() => setShowDrawer(!showDrawer)}>
            {" "}
            <FaBarsStaggered className="text-2xl cursor-pointer hidden menu"></FaBarsStaggered>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
