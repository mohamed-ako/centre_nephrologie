import "./Style.css";
import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3030/send-email", formData);
      console.log("Email sent successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsappClick = (wtsp) => {
    window.open(`https://wa.me/${wtsp}`, "_blank");
  };

  return (
    <div className="Contact">
      <div>
        <main className="table-contact">
          <table>
            <tbody>
              <tr onClick={() => handlePhoneClick("+212661441950")}>
                <th>الهاتف المحمول</th>
                <td>+212 661 44 19 50</td>
              </tr>
              <tr onClick={() => handlePhoneClick("+212539982030")}>
                <th>الهاتف الثابت / الفاكس</th>
                <td>+212 539 98 20 30</td>
              </tr>
              <tr onClick={() => handleWhatsappClick("212767312364")}>
                <th>الواتساب</th>
                <td>+212 76 731 23 64</td>
              </tr>
              <tr onClick={() => handleEmailClick("zallach@yahoo.fr")}>
                <th>بريد الطبيب</th>
                <td>
                  <a href="mailto:zallach@yahoo.fr">zallach@yahoo.fr</a>
                </td>
              </tr>
              <tr
                onClick={() =>
                  handleEmailClick("centredialysealiallach016@gmail.com")
                }
              >
                <th>بريد المصحة</th>
                <td>
                  <a href="mailto:centredialysealiallach016@gmail.com">
                    centredialysealiallach016@gmail.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="facebook">
            <p> تابعنا على الفيسبوك</p>

            {/* <a href="https://www.facebook.com/"> */}
            <div class="tooltip-container">
              <div class="tooltip">
                <div class="profile">
                  <div class="user">
                    <div class="img">Fb</div>
                    <div class="details">
                      <div class="name">Ali Allach</div>
                      <div class="username">@username</div>
                    </div>
                  </div>
                  <div class="about">700+ Friends</div>
                </div>
              </div>
              <div class="text">
                <a
                  class="icon"
                  href="https://www.facebook.com/profile.php?id=100054326748841"
                >
                  <div class="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="facebookSVG">
                      <svg
                        viewBox="0 0 40 40"
                        // xml:space="preserve"
                        // xmlns="http://www.w3.org/2000/svg"
                      >
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
                          y2="407.5726"
                          y1="406.6018"
                          x2="-277.375"
                          x1="-277.375"
                          id="a"
                        >
                          <stop stop-color="#0062e0" offset="0"></stop>
                          <stop stop-color="#19afff" offset="1"></stop>
                        </linearGradient>
                        <path
                          d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
                          fill="url(#a)"
                        ></path>
                        <path
                          d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div class="text">Facebook</div>
                </a>
              </div>
            </div>
            {/* </a> */}
          </div>
        </main>
        <main class="form-contact">
          <form class="form" onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="name">إسمك</label>
              <input
                placeholder="إسمك"
                required=""
                name="name"
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              <label for="email">بريدك الإلكتروني</label>
              <input
                placeholder="بريدك الإلكتروني"
                required=""
                name="email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div class="form-group form-group-2">
              <label for="message">رسالتك</label>
              <textarea
                placeholder="رسالتك"
                required=""
                cols="50"
                rows="10"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              >
                {" "}
              </textarea>
            </div>
            <button type="submit" class="form-submit-btn">
              إرسال
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
