import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./component/Footer";
import gsap, { TimelineMax, Power2 } from "gsap";
import { useGSAP } from "@gsap/react";
import bocchiTheRock from "./bocchi_the_rock.jpeg";

const Layout = () => {
  const [animationEnded, setAnimationEnded] = useState(false);
  const heroRef = useRef(null);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  const timeLine = new TimelineMax();

  // parameter1 is the element fromTo controll
  // parameter2 is duration
  // parameter3 is the element's initial state
  // parameter4 is the element's final state
  // parameter5
  useEffect(() => {
    if (!heroRef.current || !sliderRef.current || !animationRef.current) return;
    timeLine
      .fromTo(
        heroRef.current,
        1.4,
        { height: "0%" },
        { height: "100%", ease: Power2.easeInOut }
      )
      .fromTo(
        heroRef.current,
        1.8,
        { width: "70%" },
        { width: "100%", ease: Power2.easeInOut }
      )
      .fromTo(
        sliderRef.current,
        1.8,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeInOut },
        "-=1.8"
      )
      .fromTo(animationRef.current, 0.4, { opacity: 1 }, { opacity: 0 })
      .call(() => {
        setAnimationEnded(true);
      }, 500); //set the state after animation ended

    setTimeout(() => {
      animationRef.current.style.pointerEvents = "none";
    }, 3800);
  }, []);

  return (
    <div>
      <section
        ref={animationRef}
        className={`animation-wrapper ${animationEnded ? "hidden" : ""}`}
      >
        <section className="animation">
          <div ref={heroRef} className="hero">
            <img src={bocchiTheRock} alt="music" />
          </div>
        </section>
        <div ref={sliderRef} className="slider"></div>
      </section>
      <nav
        style={{
          backgroundColor: "rgb(196, 196, 32)",
          padding: "0.1rem",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            listStyleType: "none",
          }}
        >
          <li
            onClick="window.location.reload()"
            style={{ padding: "0.5rem 1rem" }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.2rem",
              }}
            >
              Home
            </Link>
          </li>
          <li style={{ padding: "0.5rem 1rem" }}>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.2rem",
              }}
            >
              About this site
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
