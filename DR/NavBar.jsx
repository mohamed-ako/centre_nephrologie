import React, { useState, useEffect,useCallback, useRef } from "react";
import {

  Link,
  useNavigate,
} from "react-router-dom";

import "./Style.css";
export default function NavBar(){
  const [Light, setLight] = useState(false);
  const [currentPage, setCurrentPage] = useState("/"); // Initial current page is Home
  const navigate = useNavigate(); // Hook for navigation
  const startX = useRef(null);

  const navigateToNextPage = useCallback(() => {
    let nextPage;
    switch (currentPage) {
      case "/":
        nextPage = "/services";
        break;
      case "/services":
        nextPage = "/about";
        break;
      case "/about":
        nextPage = "/dates";
        break;
      case "/dates":
        nextPage = "/contact";
        break;
      default:
        nextPage = "/";
    }
    setCurrentPage(nextPage); // Update current page state
    navigate(nextPage); // Navigate to the next page
  }, [currentPage, navigate]);

  const navigateToPreviousPage = useCallback(() => {
    let previousPage;
    switch (currentPage) {
      case "/":
        previousPage = "/contact";
        break;
      case "/services":
        previousPage = "/";
        break;
      case "/about":
        previousPage = "/services";
        break;
      case "/dates":
        previousPage = "/about";
        break;
      case "/contact":
        previousPage = "/dates";
        break;
      default:
        previousPage = "/";
    }
    setCurrentPage(previousPage); // Update current page state
    navigate(previousPage); // Navigate to the previous page
  }, [currentPage, navigate]);

  useEffect(() => {
    const handleTouchStart = (event) => {
      startX.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      if (!startX.current) return;

      const moveX = event.touches[0].clientX;
      const diffX = startX.current - moveX;

      if (Math.abs(diffX) > 50) {
        // Adjust this threshold as needed
        if (diffX > 0) {
          navigateToNextPage();
        } else {
          navigateToPreviousPage();
        }
        startX.current = null;
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [navigateToNextPage, navigateToPreviousPage]); // Add missing dependencies

  const handleLinkClick = (page) => {
    setCurrentPage(page); // Update current page state
  };
  const LightFunction = () => {
    setLight(!Light);
  };

  useEffect(() => {
    // Update theme based on Light state
    if (Light) {
      document.documentElement.style.setProperty(
        "--title-color",
        "rgb(227, 227, 227)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "rgb(255, 255, 255)"
      );
      document.documentElement.style.setProperty(
        "--third-color",
        "rgba(0, 0, 0, 0.265)"
      );
      document.documentElement.style.setProperty(
        "--quaternary-color",
        "rgba(0, 0, 0, 0.822)"
      );
      document.documentElement.style.setProperty(
        "--opposite",
        "rgba(255, 255, 255, 0.822)"
      );
      document.body.style.background = "#373B44"; // Reset body background color
      document.body.style.backgroundImage =
        "linear-gradient(to right, #4286f4, #373B44)"; // Reset body background gradient
    } else {
      document.documentElement.style.setProperty(
        "--title-color",
        "rgb(255, 255, 255)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "rgb(30, 30, 30)"
      );
      document.documentElement.style.setProperty(
        "--third-color",
        "rgba(255, 255, 255, 0.265)"
      );
      document.documentElement.style.setProperty(
        "--quaternary-color",
        "rgba(255, 255, 255, 0.822)"
      );
      document.documentElement.style.setProperty(
        "--opposite",
        "rgba(0, 0, 0, 0.822)"
      );
      document.body.style.background = "#2193b0"; // Set body background color
      document.body.style.backgroundImage =
        "linear-gradient(to right, #6dd5ed, #2193b0)"; // Reset body background gradient
    }
  }, [Light]);
  return (
    <div className="NavBar">
      <nav>
        <span className={currentPage === "/" ? "currentBX" : ""}>
          <Link
            // className={currentPage === "/" ? "current" : ""}
            to="/"
            onClick={() => handleLinkClick("/")}
          >
            الرئيسية
          </Link>
        </span>
        <div>
          <Link
            className={currentPage === "/services" ? "current" : ""}
            to="/services"
            onClick={() => handleLinkClick("/services")}
          >
            خدماتنا
          </Link>
          <Link
            className={currentPage === "/about" ? "current" : ""}
            to="/about"
            onClick={() => handleLinkClick("/about")}
          >
            عنا
          </Link>
          <Link
            className={currentPage === "/dates" ? "current" : ""}
            to="/dates"
            onClick={() => handleLinkClick("/dates")}
          >
            التوقيت
          </Link>
          <article className="theme" onClick={LightFunction}>
            {Light ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g
                    clip-path="url(#a)"
                    stroke="#FFFFFF"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  >
                    {" "}
                    <path
                      d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                      fill="#FFFFFF"
                      fill-opacity=".16"
                    ></path>{" "}
                    <path
                      d="M3 12H1M23 12h-2M12 21v2M12 1v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414M5.636 5.636 4.222 4.222M19.778 19.778l-1.414-1.414"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="a">
                      {" "}
                      <path fill="#FFFFFF" d="M0 0h24v24H0z"></path>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </g>
              </svg>
            ) : (
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFFf"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="m 8 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -4.949219 2.050781 c -0.257812 0 -0.511719 0.097657 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023438 0 1.414062 c 0.390625 0.390626 1.023438 0.390626 1.414062 0 c 0.390626 -0.390624 0.390626 -1.023437 0 -1.414062 c -0.195312 -0.195312 -0.449218 -0.292969 -0.707031 -0.292969 z m 9.898438 0 c -0.257813 0 -0.511719 0.097657 -0.707031 0.292969 c -0.390626 0.390625 -0.390626 1.023438 0 1.414062 c 0.390624 0.390626 1.023437 0.390626 1.414062 0 c 0.390625 -0.390624 0.390625 -1.023437 0 -1.414062 c -0.195312 -0.195312 -0.449219 -0.292969 -0.707031 -0.292969 z m -4.949219 0.949219 c -2.761719 0 -5 2.238281 -5 5 s 2.238281 5 5 5 s 5 -2.238281 5 -5 s -2.238281 -5 -5 -5 z m 0 2 c 0.183594 0 0.367188 0.019531 0.550781 0.050781 c -0.910156 0.210938 -1.550781 1.019531 -1.550781 1.949219 c 0 1.105469 0.894531 2 2 2 c 0.929688 0 1.738281 -0.644531 1.949219 -1.550781 c 0.03125 0.179687 0.050781 0.367187 0.050781 0.550781 c 0 1.65625 -1.34375 3 -3 3 s -3 -1.34375 -3 -3 s 1.34375 -3 3 -3 z m -7 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 14 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -11.949219 4.949219 c -0.257812 0 -0.511719 0.097656 -0.707031 0.292969 c -0.390625 0.390624 -0.390625 1.023437 0 1.414062 s 1.023438 0.390625 1.414062 0 c 0.390626 -0.390625 0.390626 -1.023438 0 -1.414062 c -0.195312 -0.195313 -0.449218 -0.292969 -0.707031 -0.292969 z m 9.898438 0 c -0.257813 0 -0.511719 0.097656 -0.707031 0.292969 c -0.390626 0.390624 -0.390626 1.023437 0 1.414062 c 0.390624 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023438 0 -1.414062 c -0.195312 -0.195313 -0.449219 -0.292969 -0.707031 -0.292969 z m -4.949219 2.050781 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </article>
        </div>
        <span className={currentPage === "/contact" ? "currentBX" : ""}>
          <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
            الإتصال
          </Link>
        </span>
      </nav>

      <main>
        <button className="prev" onClick={navigateToNextPage}>
          <svg
            fill="#FFFFFF"
            viewBox="-1 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
            class="cf-icon-svg"
            stroke="#FFFFFFf"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15.3 15.32a1.026 1.026 0 0 1-.727-.302L8.5 8.946l-6.073 6.072a1.03 1.03 0 0 1-1.456-1.455l6.801-6.8a1.03 1.03 0 0 1 1.456 0l6.8 6.8a1.03 1.03 0 0 1-.727 1.757z"></path>
            </g>
          </svg>
          <svg
            fill="#FFFFFF"
            viewBox="-1 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
            class="cf-icon-svg"
            stroke="#FFFFFFf"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15.3 15.32a1.026 1.026 0 0 1-.727-.302L8.5 8.946l-6.073 6.072a1.03 1.03 0 0 1-1.456-1.455l6.801-6.8a1.03 1.03 0 0 1 1.456 0l6.8 6.8a1.03 1.03 0 0 1-.727 1.757z"></path>
            </g>
          </svg>
        </button>

        <button className="next" onClick={navigateToPreviousPage}>
          <svg
            fill="#FFFFFF"
            viewBox="-1 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
            class="cf-icon-svg"
            stroke="#FFFFFFf"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M8.5 15.313a1.026 1.026 0 0 1-.728-.302l-6.8-6.8a1.03 1.03 0 0 1 1.455-1.456L8.5 12.828l6.073-6.073a1.03 1.03 0 0 1 1.455 1.456l-6.8 6.8a1.026 1.026 0 0 1-.728.302z"></path>
            </g>
          </svg>

          <svg
            fill="#FFFFFF"
            viewBox="-1 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
            class="cf-icon-svg"
            stroke="#FFFFFFf"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M8.5 15.313a1.026 1.026 0 0 1-.728-.302l-6.8-6.8a1.03 1.03 0 0 1 1.455-1.456L8.5 12.828l6.073-6.073a1.03 1.03 0 0 1 1.455 1.456l-6.8 6.8a1.026 1.026 0 0 1-.728.302z"></path>
            </g>
          </svg>
        </button>
      </main>
    </div>
  );
};