import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
  integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100 // Adjust this value as needed
      ) {
        // Navigate to "/dates" when scrolling to the bottom
        navigate("/aventages");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate]); // Ensure navigate is included in the dependency array to avoid stale closure
  // const handleClick = () => {
  //   navigate("/aventages");
  // };
  return (
    <div className="Home">
      <div>
        <h1>مركز تصفية الدم علي علاش</h1>

        {/* <img src="./image.png" alt="kidney" /> */}

        <main className="left">
          <img src="./kidney.png" alt="kidney" />
        </main>
        <main className="right">
          <div>
            <p>
              منذ إنشائه في شهر يونيو 2016 ، مافتئ مركز تصفية الدم علي علاش
              بالحسيمة يقدم خدماته التي تتجلى في حصص التصفية لمرضى القصور الكلوي
              المزمن بالمدينة وفق مواصفات عالية وطبية
            </p>

            <button onClick={() => navigate("/contact")}>إتصل الأن</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
