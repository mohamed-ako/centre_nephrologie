import { useState } from "react";
import "./Style.css";

export default function About() {
  const [Map, setMap] = useState(false);
  return (
    <div className="About">
      <div>
        <h1>نبذة عنا</h1>
        <section>
          <article>
            <div class="temporary_text">
              <svg
                fill="#ffffff"
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
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
                  <title></title>{" "}
                  <g id="Location">
                    {" "}
                    <circle cx="38.5" cy="45.5" r="1.5"></circle>{" "}
                    <circle cx="38.5" cy="36.5" r="1.5"></circle>{" "}
                    <circle cx="38.5" cy="27.5" r="1.5"></circle>{" "}
                    <circle cx="38.5" cy="54.5" r="1.5"></circle>{" "}
                    <path d="M78,31.5A14.51,14.51,0,0,0,63.5,17h-28A8.51,8.51,0,0,0,27,25.5V63H24.5a8.5,8.5,0,0,0,0,17h36A8.51,8.51,0,0,0,69,71.5V44.91A14.52,14.52,0,0,0,78,31.5ZM24.5,79a7.5,7.5,0,0,1,0-15h32a8.49,8.49,0,0,0,0,15ZM68,71.5A7.5,7.5,0,1,1,60.5,64H68Zm.23-27.37c-.35.13-.7.25-1,.35l-.18,0c-.33.09-.67.17-1,.24l-.46.07-.76.11c-.42,0-.85.06-1.28.06a13.48,13.48,0,0,1-12.77-9.16.51.51,0,0,0-.64-.31.5.5,0,0,0-.31.63A14.51,14.51,0,0,0,58.23,45H43.5a.5.5,0,0,0,0,1h16a.5.5,0,0,0,.49-.44A14.13,14.13,0,0,0,63.5,46c.44,0,.87,0,1.31-.07.18,0,.36,0,.54-.06l.69-.11.72-.14.39-.1c.28-.08.57-.15.85-.24V63H28V25.5A7.5,7.5,0,0,1,35.5,18H58.23l-.06,0-.22.09c-.3.13-.6.26-.89.41l-.34.18-.78.44-.28.18c-.33.22-.66.44-1,.69l-.15.12c-.26.21-.52.43-.77.66l-.27.25c-.21.21-.42.42-.62.64a2.73,2.73,0,0,0-.23.25c-.27.3-.52.61-.76.93L51.8,23c-.21.28-.41.58-.6.88l-.19.32c-.15.26-.29.52-.43.78s-.11.21-.16.32c-.17.36-.34.73-.48,1.12l0,.08c-.13.36-.24.72-.35,1.09l-.09.36c-.08.3-.14.6-.2.9,0,0,0,0,0,.06L48,26.28a.5.5,0,1,0-.9.44l2,4s0,0,0,0l0,.05a.25.25,0,0,0,.1.08l.06.05a.55.55,0,0,0,.24.07h0a.5.5,0,0,0,.41-.2l3.87-2.9a.5.5,0,0,0,.1-.7.51.51,0,0,0-.7-.1l-3,2.26a13.49,13.49,0,1,1,18,14.77Z"></path>{" "}
                    <path d="M63,33.26V23.5a.5.5,0,0,0-1,0v10a0,0,0,0,0,0,0,.44.44,0,0,0,0,.1.19.19,0,0,0,0,.08l.05.08a.27.27,0,0,0,.07.08l0,0,5,4a.51.51,0,0,0,.31.11.48.48,0,0,0,.39-.19.5.5,0,0,0-.08-.7Z"></path>{" "}
                    <path d="M47.5,36h-4a.5.5,0,0,0,0,1h4a.5.5,0,0,0,0-1Z"></path>{" "}
                    <path d="M43.5,28h2a.5.5,0,0,0,0-1h-2a.5.5,0,0,0,0,1Z"></path>{" "}
                    <path d="M43.5,55h16a.5.5,0,0,0,0-1h-16a.5.5,0,0,0,0,1Z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div class="card_content">
              <span class="card_title">تاريخ العيادة</span>
              {/* <span class="card_subtitle">
                تأسيس عيادة تصفية الكلى علي علاش
              </span> */}
              <p class="card_description">
                أسست عيادة تصفية الكلى "علي علاش" عام 2016 في مدينة الحسيمة، حيث
                بدأت رحلتها في تقديم خدمات علاجية متخصصة لمرضى الكلى.
              </p>
            </div>
          </article>

          <article>
            <div class="temporary_text">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 285.334 285.334"
                // xml:space="preserve"
                // fill="#ffffff"
                style={{ fill: "#ffffff" }}
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
                      <rect
                        x="166.686"
                        y="6.537"
                        transform="matrix(0.5547 -0.8321 0.8321 0.5547 62.2534 163.1956)"
                        style={{ fill: "#ffffff" }}
                        // style={{color :'black'}}
                        width="33.804"
                        height="33.804"
                      ></rect>{" "}
                      <path
                        // style="fill:#ffffff;"
                        style={{ fill: "#ffffff" }}
                        d="M168.385,238.191c1.847-0.67,3.563-1.702,5.016-3.127c3.169-3.113,4.65-7.42,4.064-11.827 l-7.931-59.48v-42.258l34.589-12.352c4.341-1.552,7.552-5.33,8.377-9.867l5.259-28.936l43.008,27.366l5.034-7.912l-46.528-29.606 c-0.108-3.033-1.205-5.972-3.192-8.353c-2.63-3.15-6.492-4.959-10.598-4.959c-1.913,0-3.717,0.417-5.377,1.111l-37.43-23.817 l-5.034,7.913l35.466,22.566c-0.591,1.223-1.05,2.527-1.27,3.933l-4.35,28.27l-27.516,9.314 c-5.133-4.547-11.742-7.102-18.563-7.102c-6.038,0-11.845,1.959-16.973,5.803l-1.448,1.2c-0.352,0.305-8.03,7.28-14.391,13.059 V94.257c0-7.106-5.044-13.284-11.733-14.372c-4.12-0.68-8.288,0.483-11.433,3.159c-3.155,2.677-4.959,6.581-4.959,10.711v38.217 c0,9.942,8.091,18.033,18.033,18.033c4.467,0,8.752-1.645,12.061-4.631l2.719-2.442v20.827l-7.884,59.137 c-0.9,6.75,2.963,13.111,9.042,15.291c-7.477,2.109-14.756,5.072-21.642,8.977l-52.964,30.014l4.622,8.156l52.964-30.014 c27.136-15.37,60.849-15.375,87.98,0l52.964,30.014l4.622-8.156l-52.964-30.014C183.136,243.263,175.857,240.301,168.385,238.191z M104.292,138.408c-1.589,1.434-3.647,2.222-5.789,2.222c-4.772,0-8.658-3.886-8.658-8.658V93.755c0-1.378,0.6-2.681,1.655-3.572 c1.069-0.905,2.433-1.27,3.858-1.05c2.166,0.356,3.863,2.606,3.863,5.123v36.061l7.838-7.125c0,0,21.281-19.341,21.994-19.973 l1.177-0.98c7.716-5.775,18.652-4.613,25.027,2.442l2.062,2.283l38.564-13.055l5.213-33.9c0.014-0.08,0.061-0.141,0.075-0.22 l8.044,5.119l-5.944,32.695c-0.23,1.247-1.111,2.287-2.306,2.714l-40.807,14.579v49.172l8.011,60.408 c0.192,1.453-0.295,2.873-1.341,3.9c-0.609,0.605-1.945,1.58-3.994,1.256c-1.936-0.295-3.553-2.119-3.848-4.341l-8.789-65.911 h-17.583l-8.841,66.314c-0.178,1.322-0.914,2.498-2.03,3.234c-1.13,0.75-2.512,0.952-3.895,0.577 c-2.095-0.581-3.488-2.934-3.164-5.367l7.927-59.452l0.047-42.806L104.292,138.408z M128.761,235.229 c2.32-2.189,3.881-5.086,4.308-8.292l7.753-58.181h1.167l7.706,57.778c0.459,3.436,2.1,6.473,4.448,8.709 C145.721,234.155,137.185,234.151,128.761,235.229z"
                      ></path>{" "}
                      <path
                        // style="fill:#ffffff;"
                        style={{ fill: "#ffffff" }}
                        d="M169.533,60.943c0-15.511-12.614-28.125-28.125-28.125s-28.125,12.614-28.125,28.125 s12.614,28.125,28.125,28.125S169.533,76.454,169.533,60.943z M141.408,79.693c-10.341,0-18.75-8.409-18.75-18.75 s8.409-18.75,18.75-18.75s18.75,8.409,18.75,18.75S151.749,79.693,141.408,79.693z"
                      ></path>{" "}
                      <polygon
                        // style="fill:#ffffff;"
                        style={{ fill: "#ffffff" }}
                        points="253.908,126.568 244.533,126.568 244.533,135.943 235.158,135.943 235.158,145.318 244.533,145.318 244.533,154.693 253.908,154.693 253.908,145.318 263.283,145.318 263.283,135.943 253.908,135.943 "
                      ></polygon>{" "}
                      <polygon
                        // style="fill:#ffffff;"
                        style={{ fill: "#ffffff" }}
                        points="216.408,173.443 216.408,168.755 221.096,168.755 221.096,159.38 216.408,159.38 216.408,154.693 207.033,154.693 207.033,159.38 202.346,159.38 202.346,168.755 207.033,168.755 207.033,173.443 "
                      ></polygon>{" "}
                      <polygon points="244.533,168.755 235.158,168.755 235.158,178.13 225.783,178.13 225.783,187.505 235.158,187.505 235.158,196.88 244.533,196.88 244.533,187.505 253.908,187.505 253.908,178.13 244.533,178.13 "></polygon>{" "}
                      <polygon points="71.095,42.193 80.47,42.193 80.47,32.818 89.845,32.818 89.845,23.443 80.47,23.443 80.47,14.068 71.095,14.068 71.095,23.443 61.72,23.443 61.72,32.818 71.095,32.818 "></polygon>{" "}
                      <polygon points="33.595,28.13 33.595,23.443 38.283,23.443 38.283,14.068 33.595,14.068 33.595,9.38 24.22,9.38 24.22,14.068 19.533,14.068 19.533,23.443 24.22,23.443 24.22,28.13 "></polygon>{" "}
                      <polygon points="47.658,70.318 47.658,60.943 57.033,60.943 57.033,51.568 47.658,51.568 47.658,42.193 38.283,42.193 38.283,51.568 28.908,51.568 28.908,60.943 38.283,60.943 38.283,70.318 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div class="card_content">
              <div class="temporary_text"></div>
              <span class="card_title">رؤيتنا</span>
              {/* <span class="card_subtitle">
              </span> */}

              <p class="card_description">
                نسعى إلى توفير رعاية صحية متميزة وشاملة لمرضى الكلى وذلك من خلال
                توفير أحدث التقنيات والعلاجات برفقة فريق طبي متخصص ومؤهل
              </p>
            </div>
          </article>

          <article>
            <div class="temporary_text">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                  <path
                    opacity="0.4"
                    d="M22 7.43018V13.4302C22 14.9302 21.5 16.1802 20.62 17.0602C19.75 17.9302 18.5 18.4302 17 18.4302V20.5602C17 21.3602 16.11 21.8402 15.45 21.4002L11 18.4302H8.88C8.96 18.1302 9 17.8202 9 17.5002C9 16.4802 8.61 15.5402 7.97 14.8302C7.25 14.0102 6.18 13.5002 5 13.5002C3.88 13.5002 2.86 13.9602 2.13 14.7102C2.04 14.3102 2 13.8802 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M9 17.5C9 18.25 8.79001 18.96 8.42001 19.56C8.21001 19.92 7.94 20.24 7.63 20.5C6.93 21.13 6.01 21.5 5 21.5C3.54 21.5 2.26999 20.72 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.24 1.58 15.11 2.5 14.38C3.19 13.83 4.06 13.5 5 13.5C7.21 13.5 9 15.29 9 17.5Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M3.43945 17.5L4.42944 18.49L6.55945 16.52"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M8.5 10.5H15.5"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div class="card_content">
              <span class="card_title">رسالتنا</span>
              {/* <span class="card_subtitle"> */}
              {/* </span> */}

              <p class="card_description">
                نسعى جاهدين لتحسين نوعية حياة مرضى الكلى من خلال تقديم خدمات
                طبية متميزة، والمساهمة في توعية المجتمع حول أمراض الكلى وطرق
                الوقاية منها
              </p>
            </div>
          </article>

          <article>
            <div class="temporary_text">
              <svg
                viewBox="0 0 48 48"
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
                    d="M31.0281 13.992C31.0281 13.992 32.5622 20.4539 32.8086 19.9746C33.8337 17.9804 34.2653 17.9181 33.8337 11.8108C33.358 5.08032 25.2552 4.76882 22.3418 4.14553C17.4956 3.10877 17.8098 7.94691 17.4321 8.07164C11.2815 13.0573 15.274 19.7253 15.274 19.7253C15.274 19.7253 16.8386 10.6268 20.0218 10.8137C26.0105 14.8022 31.0281 13.992 31.0281 13.992Z"
                    fill="#ffffff"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.6354 29.6118C15.4505 30.2356 15.4381 30.9817 15.7149 31.8728C15.8088 31.8639 15.9039 31.8594 16 31.8594C17.6569 31.8594 19 33.2125 19 34.8816C19 36.5507 17.6569 37.9038 16 37.9038C14.3431 37.9038 13 36.5507 13 34.8816C13 34.04 13.3415 33.2787 13.8925 32.7308C13.4321 31.4151 13.3829 30.1739 13.7178 29.0435C13.7252 29.0186 13.7328 28.9937 13.7406 28.9689C9.54212 30.4709 6 32.864 6 36.1407V43H42V36.1407C42 32.8934 38.5212 30.5139 34.3723 29.0095C34.5763 29.5899 34.6923 30.2076 34.7142 30.8594H34.9412C35.1715 30.8594 35.3947 30.9389 35.5732 31.0844L37.632 32.7634C37.8649 32.9533 38 33.2379 38 33.5384V37.9038C38 38.4561 37.5523 38.9038 37 38.9038H34.9412V36.9038H36V34.0132L34.5851 32.8594H34.5045C34.4953 32.8988 34.4858 32.9383 34.476 32.9778L33.9986 32.8594H32.4149L31 34.0132V36.9038H32.0588V38.9038H30C29.4477 38.9038 29 38.4561 29 37.9038V33.5384C29 33.2379 29.1351 32.9533 29.368 32.7634L31.4268 31.0844C31.6053 30.9389 31.8285 30.8594 32.0588 30.8594H32.7126C32.6878 30.347 32.5803 29.8887 32.4114 29.4785C32.2091 28.9872 31.9073 28.537 31.5142 28.1301C31.3833 28.0963 31.2523 28.0633 31.1214 28.0312C30.6186 27.9076 30.1029 28.1604 29.8746 28.6282L25.8105 28.6282C24.9218 28.6284 24.4694 28.6284 24.0249 28.6284H24.0248H24.0248C23.5637 28.6283 23.1112 28.6283 22.1893 28.6285L18.1254 28.6282C17.8971 28.1604 17.3814 27.9076 16.8786 28.0312C16.7666 28.0587 16.6544 28.0869 16.5424 28.1156C16.0993 28.572 15.7951 29.073 15.6354 29.6118ZM17 34.8816C17 35.4601 16.5384 35.9038 16 35.9038C15.4616 35.9038 15 35.4601 15 34.8816C15 34.3031 15.4616 33.8594 16 33.8594C16.5384 33.8594 17 34.3031 17 34.8816Z"
                    fill="#ffffff"
                  ></path>{" "}
                </g>
              </svg>
            </div>

            <div class="card_content">
              <span class="card_title">الدكتور علاش زكرياء</span>
              {/* <span class="card_subtitle">
                نسعى جاهدين لتحسين نوعية حياة مرضى الكلى
              </span> */}

              <p class="card_description">
                مدير و مؤسس مركز تصفية الكلى اختصاصي في أمراض غسيل الكلى، ويتمتع
                بخبرة واسعة في مجالات مثل ارتفاع ضغط الدم، واعتلال الكلية
                السكري، وأمراض الجهاز البولي، والكلية الاصطناعي
              </p>
            </div>
          </article>
          {/* 
          <article>
            <div class="temporary_text">
              <svg
                fill="#ffffff"
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
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
                      <path d="M122.763,306.519V156.766c0-11.732,3.094-22.747,8.488-32.3c-12.26,0-85.918,0-98.238,0v0.006 c-17.906,0.124-32.385,14.674-32.385,32.609v149.752c0,10.118,8.202,18.32,18.32,18.32h23.826l6.646,136.613 c1.36,27.954,24.42,49.92,52.407,49.92c27.391,0,49.962-21.499,51.292-48.858l5.217-107.249 C137.304,348.68,122.763,328.929,122.763,306.519z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <circle cx="412.182" cy="52.901" r="52.274"></circle>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M480.467,124.825l0.002-0.044c-8.09,0-81.852,0-99.539,0c5.284,9.48,8.307,20.384,8.307,31.987V306.52 c0,22.085-14.07,41.323-34.134,48.572l5.205,106.989c1.36,27.954,24.42,49.92,52.407,49.92c27.391,0,49.962-21.499,51.292-48.858 l6.697-137.674h22.346c10.118,0,18.32-8.202,18.32-18.32V157.395C511.373,139.955,497.685,125.714,480.467,124.825z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M325.024,124.196l0.002-0.044h-51.693l10.126,10.126c2.379,2.379,2.379,6.238,0,8.617l-10.678,10.678l8.313,93.003 c0.288,3.217-0.578,6.431-2.445,9.067l-17.674,24.973c-1.143,1.614-2.997,2.574-4.973,2.574c-1.976,0-3.832-0.959-4.973-2.574 l-17.674-24.973c-1.865-2.636-2.732-5.85-2.445-9.067l8.313-93.003l-10.678-10.678c-2.379-2.379-2.379-6.238,0-8.617 l10.126-10.126h-50.213v0.006c-17.906,0.124-32.384,14.673-32.384,32.609v149.752c0,10.118,8.202,18.32,18.32,18.32h23.826 l1.62,33.309l5.025,103.304c1.36,27.954,24.42,49.92,52.407,49.92c27.391,0,49.962-21.499,51.292-48.858l5.077-104.366 l1.62-33.309h22.346c10.118,0,18.32-8.202,18.32-18.32V156.766h0.001C355.929,139.327,342.241,125.086,325.024,124.196z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M256.741,0c-28.869,0-52.272,23.403-52.272,52.272c0,28.863,23.41,52.274,52.272,52.274 c28.866,0,52.272-23.414,52.272-52.272C309.013,23.403,285.61,0,256.741,0z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <circle cx="101.294" cy="52.584" r="52.274"></circle>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div class="card_content">
              <span class="card_title">فريق العمل</span>
              <span class="card_subtitle">
              </span>

              <p class="card_description">
                <h1>
                نضم فريقًا مؤهلاً ومتخصصًا يتكون من{" "}

                </h1>
   
<table>
  <tr>
    <td>مقدمي رعاية</td><td>10</td>
  </tr>
  <tr>
    <td>فنيين</td><td>10</td>
  </tr>
  <tr>
    <td>سائق</td><td>10</td>
  </tr>
  <tr>
    <td> ممرضون متعددو التخصصات</td><td>10</td>
  </tr>
</table>

              </p>
            </div>
          </article> */}

          <article>
            <div class="temporary_text">
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
                    d="M22 9.00002V15C22 17.5 21.5 19.25 20.38 20.38L14 14L21.73 6.27002C21.91 7.06002 22 7.96002 22 9.00002Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M20.38 20.38C19.25 21.5 17.5 22 15 22H9.00003C7.96003 22 7.06002 21.91 6.27002 21.73L14 14L20.38 20.38Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M6.24002 7.97997C6.92002 5.04997 11.32 5.04997 12 7.97997C12.39 9.69997 11.31 11.16 10.36 12.06C9.67001 12.72 8.58003 12.72 7.88003 12.06C6.93003 11.16 5.84002 9.69997 6.24002 7.97997Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    d="M9.0946 8.69995H9.10359"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>{" "}
            </div>
            <div
              class="card_content"
              onClick={() => {
                setMap(true);
              }}
            >
              <span class="card_title">موقع العيادة</span>
              {/* <span class="card_subtitle">
              5 6 شارع عبد الله ابن ياسين - الحسيمة{" "}
              </span> */}

              <p class="card_description">
                65 شارع عبد الله ابن ياسين - الحسيمة{" "}
              </p>
              <button
                onClick={() => {
                  setMap(true);
                }}
              >
                إنتقل الان
              </button>
            </div>
          </article>
        </section>
        {Map && (
          <div className="iframe">
            <button
              onClick={() => {
                setMap(false);
              }}
            >
              X
            </button>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203.6676628140488!2d-3.926631832540921!3d35.2392703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7433837792702b%3A0xa10a77a7b6271607!2sCentre%20de%20Dialyse%20et%20H%C3%A9modialyse%20Ali%20Allach!5e0!3m2!1sen!2sma!4v1715530839178!5m2!1sen!2sma"
              width="600"
              height="450"
              style={{ border: "0;" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="mymapp"
            ></iframe>
          </div>
        )}
        {/* <div className="buttom">
          <main>
            <div class="img-section">الفريق الطبي والموظفين</div>
            <div class="cards">
              <div class="card red">
                <p class="tip">الدكتور علاش زكرياء</p>
                <p class="second-text">
                  اختصاصي في أمراض الكلي، ويتمتع بخبرة واسعة في مجالات مثل
                  ارتفاع ضغط الدم، واعتلال الكلية السكري، وأمراض الجهاز البولي،
                  والكلية الاصطناعية{" "}
                </p>
              </div>
              <div class="card blue">
                <p class="tip">فريق العمل</p>
                <p class="second-text">
                  <ol>
                    <li>06 مقدمي رعاية</li>
                    <li>02 فنيين</li>
                    <li>سائق 01</li>
                    <li>01 ممرضة متعددة الأغراض</li>
                  </ol>
                </p>
              </div>

              <div class="card green">
                <p class="tip">موقع العيادة</p>
                <p class="second-text">
                  5 6 شارع عبد الله ابن ياسين - الحسيمة{" "}
                </p>
              </div>
            </div>
          </main>
        </div> */}
      </div>
    </div>
  );
}