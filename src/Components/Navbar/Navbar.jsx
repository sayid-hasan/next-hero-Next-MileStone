"use client";
import { SiWebmoney } from "react-icons/si";
import "./navbar.css";

import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import DashboardDrawer from "../Sidebar/DashboardDrawer";

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blogs", path: "/blogs" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Categories", path: "/categories" },
];

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
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
  const handleLogin = () => {
    router.push("/login");
  };
  if (pathName.includes("/dashboard")) {
    return <DashboardDrawer></DashboardDrawer>;
  }

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
              className={`${
                pathName === list.path ? "active" : ""
              } tab__item tracking-[2px] duration-50 hover:text-[#8750fd] relative px-3 py-2 font-semibold text-lg md:text-xl cursor-pointer`}
              href={`${list.path}`}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {list.name}
            </Link>
          ))}
        </div>
        {/* buttons */}
        <div className={`flex items-center gap-5  `}>
          <button
            onClick={handleLogin}
            className="btn px-8 py-3 rounded-full flex justify-center items-center gap-2  border-none outline-none transition-all duration-1000 bg-gradient-to-tr from-[#1c1405c5] to-[#8750f7] hover:bg-gradient-to-bl"
          >
            {" "}
            login
            <FaArrowUpRightFromSquare />
          </button>
          <button
            className="md:hidden"
            onClick={() => setShowDrawer(!showDrawer)}
          >
            {" "}
            <FaBarsStaggered className="text-2xl cursor-pointer hidden menu"></FaBarsStaggered>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
