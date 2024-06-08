import React, { useState, useEffect } from "react";
import "./Style.css";

export default function Services({images}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [btnActive, setbtnActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null); // Add state for interval ID



  const handleDecrement = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleIncrement = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImgIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Save the interval ID to state
    setIntervalId(id);

    // Cleanup function to clear the interval
    return () => clearInterval(id);
  }, [images.length]);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    // Clear the interval when mouse enters the image
    setbtnActive(true);
    clearInterval(intervalId);
    setIsActive(true);
  };

  // Function to handle mouse leave event
  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    // Clear the previous interval
    clearInterval(intervalId);
    setIsActive(false);

    // Start a new interval
    const newIntervalId = setInterval(() => {
      setCurrentImgIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Update the interval ID state variable
    setIntervalId(newIntervalId);

    // Set button active state to false
    setbtnActive(false);
  };

  return (
    <div className="Services">
      <div>
        <div
          className="imgs"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className={isActive ? "active" : ""} // Conditionally apply the class based on isActive state
            src={images[currentImgIndex]}
            alt=""
          />
          {btnActive && (
            <div
              className="buttons"
              // onMouseEnter={() => {
              //   setIsActive(true);
              // }}
            >
              <button
                onClick={handleIncrement}
                // onMouseEnter={() => {
                //   setIsActive(true);
                // }}
                // onMouseLeave={handleMouseLeave}
              >
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
                    <path
                      d="M19 4L11 12L19 20"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M13 4L5 12L13 20"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </button>

              <button
                // onMouseEnter={handleMouseEnter}
                onClick={handleDecrement}
                // onMouseEnter={() => {
                //   setIsActive(true);
                // }}
              >
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
                    <path
                      d="M5 4L13 12L5 20"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M11 4L19 12L11 20"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            </div>
          )}
        </div>

        <section className="list">
          <h1>لماذا نحن ؟</h1>

          <main className="teams">
            <div class="img-content">
              <svg
                fill="#ffffff"
                viewBox="0 0 24 24"
                // xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M12 15C7.58 15 4 16.79 4 19V21H20V19C20 16.79 16.42 15 12 15ZM8 9C8 10.0609 8.42143 11.0783 9.17157 11.8284C9.92172 12.5786 10.9391 13 12 13C13.0609 13 14.0783 12.5786 14.8284 11.8284C15.5786 11.0783 16 10.0609 16 9H8ZM11.5 2C11.2 2 11 2.21 11 2.5V5.5H10V3C10 3 7.75 3.86 7.75 6.75C7.75 6.75 7 6.89 7 8H17C16.95 6.89 16.25 6.75 16.25 6.75C16.25 3.86 14 3 14 3V5.5H13V2.5C13 2.21 12.81 2 12.5 2H11.5Z"></path>{" "}
                </g>
              </svg>

              {/* <div class="content"> */}
              <h3>الخدمة الفنية للأجهزة</h3>
            </div>
            <p>
              نوفر خدمةالصيانة وتشغيل الأجهزة والمعدات الطبية بكفاءة عالية
              وباستخدام أحدث التقنيات. يعمل فريق الفنيين المؤهلين على ضمان
              استمرارية عمل المعدات بكفاءة ودقة
            </p>
            {/* </div> */}
            {/* </div> */}
          </main>
          <main className="teams">
            <div class="img-content">
              <h3>
                <svg
                  fill="#ffffff"
                  viewBox="0 -64 640 640"
                  // xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
                  </g>
                </svg>
                خدمة النقل
              </h3>
            </div>

            <p>
              نوفر خدمة النقل المريحة والآمنة لمرضانا، حيث يتم تنظيم وتوفير
              وسائل النقل الملائمة لنقل المرضى من وإلى المركز وبين المواقع
              الطبية الأخرى بمرافقة سائق مدرب ومؤهل
            </p>
          </main>
          <main className="teams">
            <div class="img-content">
              <h3>
                <svg
                  viewBox="0 0 24 24"
                  // xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                      <path d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                فريقنا الإحترافي
              </h3>
            </div>

            <p>
              .يقدم الرعاية الطبية والدعم للمرضى أثناء جلسات العلاج والفحوصات
            </p>
            <p>
              . تقنيون يعملون على صيانة وإصلاح الأجهزة الطبية والتقنية بدقة
              وفعالية
            </p>

            <p>.سائق يضمن نقل المرضى بأمان وفقًا للجدول الزمني المحدد</p>
          </main>

          <main className="teams">
            <div class="img-content">
              <h3>
                <svg
                  fill="#ffffff"
                  version="1.1"
                  id="Capa_1"
                  // xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 96.623 96.622"
                  // xml:space="preserve"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M31.642,22.691c5.311,1.138,10.541-2.246,11.68-7.559c0.254-1.183,0.271-2.359,0.105-3.49L48.828,0l-7.489,1.934 l-9.606-1.933l-1.482,3.866l0.002,0.001c-3.033,1.139-5.44,3.743-6.17,7.143C22.946,16.324,26.33,21.553,31.642,22.691z"></path>{" "}
                        <circle cx="68.822" cy="25.679" r="9.281"></circle>{" "}
                        <path d="M93.753,91.378l-0.355-1.323l-7.661,3.541c0.624,2.184,2.882,3.475,5.079,2.883 C93.037,95.881,94.351,93.598,93.753,91.378z"></path>{" "}
                        <polygon points="92.696,87.441 84.388,88.602 85.307,92.012 92.97,88.467 "></polygon>{" "}
                        <path d="M91.451,82.814l-7.293,3.104c0.012-0.021,0.021-0.043,0.031-0.064c0.016-0.209,0.023-0.42,0.043-0.627 c0.034-0.406,0.098-0.801,0.186-1.188l6.607-2.812l-4.27-16.293c-0.147-0.559-0.414-1.058-0.75-1.494 c0.045,0,0.09,0.002,0.137,0.002c1.988,0,3.604-1.612,3.604-3.603c0-1.989-1.613-3.603-3.604-3.603 c-5.432,0-8.93-2.24-10.742-13.689c-0.042-0.26-0.111-0.508-0.205-0.744c-0.447-3.334-3.511-5.569-6.376-6.271 c0,0-0.976-0.293-2.015-0.27c-0.996,0.023-2.105,0.253-2.105,0.253l-0.027,0.006c-3.121,0.765-6.447,3.309-6.447,7.126 l0.001,18.57l-2.724-19.313c-0.215-1.614-1.705-2.747-3.312-2.532c-1.615,0.214-2.749,1.697-2.531,3.312l0.153,1.121 c-11.314-1.577-11.554-3.209-12.983-13.285c-0.021-0.156-0.07-0.301-0.11-0.45c-0.295-3.052-2.695-5.567-5.206-6.784 c0,0-0.949-0.52-2.031-0.727c-1.036-0.198-2.235-0.205-2.235-0.205l-0.029-0.002c-3.406,0.099-7.416,1.998-8.264,5.954 L2.724,69.779h9.701c-0.245,1.85-0.467,3.205-0.637,3.757c-0.428,1.382-3.744,6.526-7.097,11.011 c-1.649,2.208-1.698,5.086,0.509,6.737c2.36,1.464,4.757,0.553,5.737-0.759c1.718-2.295,7.418-10.096,8.639-14.037 c0.383-1.236,0.784-3.752,1.161-6.711h6.997c0.73,1.914,1.238,3.365,1.367,3.992c0.288,1.418-0.146,7.523-0.929,13.066 c-0.388,2.73,0.972,5.891,4.242,5.643c0.238-0.018-0.527,0.051-0.295,0.051c2.446,0,4.584-1.801,4.938-4.293 c0.402-2.84,1.65-12.42,0.824-16.461c-0.103-0.514-0.298-1.196-0.556-1.996h4.013c0,0-8.04-17.162-7.844-23.169l0.283-1.327 c2.74,3.199,7.266,5.035,15.334,6.137c0.176,0.023,0.352,0.035,0.521,0.035c0.422,0,0.83-0.079,1.214-0.209l2.415,17.361 c-1.596,2.664-2.516,5.777-2.516,9.102c0,9.799,7.971,17.77,17.77,17.77c6.475,0,12.15-3.48,15.257-8.67l0.001,0.006 c0.023-0.068,0.055-0.135,0.079-0.203l0.108,0.402l8.306-1.16L91.451,82.814z M73.197,57.889c1.854,1.644,3.939,3.07,6.297,4.239 L73.197,62.1V57.889z M68.517,89.417c-6.455,0-11.709-5.252-11.709-11.709c0-1.468,0.283-2.868,0.779-4.163 c0.209,0.031,0.42,0.053,0.637,0.053h21.242c0.484,1.281,0.762,2.664,0.762,4.11C80.228,84.165,74.974,89.417,68.517,89.417z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                ممرضون متعددو التخصصات
              </h3>
            </div>
            <p>
              يقدمون الرعاية الشاملة للمرضى ويساعدون في تنسيق الخدمات الطبية
              وتقديم الدعم اللازم
            </p>
          </main>
          <main className="teams">
            <div class="img-content">
              <h3>
                <svg
                  fill="#ffffff"
                  height="200px"
                  width="200px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 496 496"
                  // xml:space="preserve"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M480,0v136H320V0h-16v432h-88c-13.232,0-24-10.768-24-24V256h56c22.056,0,40-17.944,40-40V0H0v216 c0,22.056,17.944,40,40,40h48v40H72v35.088C60.216,337.776,32,358.912,32,408c0,13.816,1.104,26.584,3.272,37.976 C40.824,474.96,66.368,496,96,496s55.168-21.04,60.728-50.032C158.896,434.584,160,421.816,160,408 c0-49.088-28.216-70.224-40-76.912V296h-16v-40h72v152c0,22.056,17.944,40,40,40h88v48h16v-48h24c22.056,0,40-17.944,40-40v-24 h96v112h16V0H480z M88,312h16v16H88V312z M110.24,344c6.2,3.04,33.76,19.072,33.76,64c0,12.808-1.008,24.568-2.992,34.96 C136.896,464.424,117.968,480,96,480s-40.896-15.576-45.008-37.032C49.008,432.568,48,420.808,48,408 c0-44.984,27.632-61,33.752-64H110.24z M40,240c-13.232,0-24-10.768-24-24V16h256v200c0,13.232-10.768,24-24,24H40z M368,408 c0,13.232-10.768,24-24,24h-24v-48h48V408z M440,344c0,13.232-10.768,24-24,24h-32v-40h-16v40h-48V152h96 c13.232,0,24,10.768,24,24V344z M480,368h-32.208c5.08-6.704,8.208-14.96,8.208-24V176c0-9.04-3.128-17.296-8.208-24H480V368z"></path>{" "}
                          <path d="M256,32H32v112h224V32z M240,128H48V48h192V128z"></path>{" "}
                          <path d="M64,160c-17.648,0-32,14.352-32,32s14.352,32,32,32s32-14.352,32-32S81.648,160,64,160z M64,208c-8.824,0-16-7.176-16-16 c0-8.824,7.176-16,16-16c8.816,0,16,7.176,16,16C80,200.824,72.816,208,64,208z"></path>{" "}
                          <path d="M144,160c-17.648,0-32,14.352-32,32s14.352,32,32,32s32-14.352,32-32S161.648,160,144,160z M144,208 c-8.824,0-16-7.176-16-16c0-8.824,7.176-16,16-16c8.816,0,16,7.176,16,16C160,200.824,152.816,208,144,208z"></path>{" "}
                          <path d="M224,160c-17.648,0-32,14.352-32,32s14.352,32,32,32s32-14.352,32-32S241.648,160,224,160z M224,208 c-8.824,0-16-7.176-16-16c0-8.824,7.176-16,16-16c8.816,0,16,7.176,16,16C240,200.824,232.816,208,224,208z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                تقنيات وأجهزة متطورة
              </h3>
            </div>
            <p>
              .تتمتع عيادة تصفية الدم لدينا بأحدث التقنيات والأجهزة المتطورة
              لتنفيذ العمليات بكفاءة ودقة عالية. نحن ملتزمون بتوفير أفضل الخدمات
              والرعاية لمرضانا، ونضمن جودة الخدمات من خلال استخدام أحدث التقنيات
              في مجال تصفية الدم
            </p>
          </main>
        </section>
      </div>
      {/* <button onClick={handleClick}>Go to About</button> */}
    </div>
  );
}
