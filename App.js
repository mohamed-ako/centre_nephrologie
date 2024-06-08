import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./DR/Home";
import Dates from "./DR/Dates";
import Contact from "./DR/Contact";
import About from "./DR/About";
import Services from "./DR/Services";
import NavBar from "./DR/NavBar";
export default function App() {
  const images = [
    "https://scontent.ffez1-1.fna.fbcdn.net/v/t1.6435-9/37234335_939728236234075_3859230266681720832_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwsRfHhKUHcsPOE9uroWoRfQhVLOmLCM19CFUs6YsIzdy0w1fZPkF-9cnWqZBl1l-_wnGV0nKWN74Vu4IUute2&_nc_ohc=Po2pAYhNEoIQ7kNvgHqwXwH&_nc_oc=Adi-M90oTS2FSZ-RZk9_2p0z1OJ6FM70QUn_SenbUG64M8NKKfuplJ0Lx_-hUPkoiHM&_nc_ht=scontent.ffez1-1.fna&oh=00_AYAV3Tv5XO9HjGv-ODOkL55MDdOx4pxj6GgKB9o280j0yg&oe=6665C43B",
    "https://scontent.ffez1-1.fna.fbcdn.net/v/t1.6435-9/37213206_939708196236079_5087152126593859584_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFgWSZMEgNl-4_cdLhFLmn-0I2d3MdTlkDQjZ3cx1OWQLqzL3zNo6B-1d-81AMeMB_thTfMNKkDFWUBRPqwppUd&_nc_ohc=X8xfqhrXb7sQ7kNvgF9mP9q&_nc_ht=scontent.ffez1-1.fna&oh=00_AYBKPWrZURnmjS2C1tkS5qLYuGenr-xSoHbrZwMK5bkaiA&oe=6665BCA0",
    "https://scontent.ffez2-2.fna.fbcdn.net/v/t1.6435-9/37180580_939707942902771_3278616762039402496_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH0ajsNzKW18CTK40kizgWilyjMtzQpEkWXKMy3NCkSRU1WgRnae-dwwbC1xPl05NxpTXms-LT7nKfjKEiS6oGA&_nc_ohc=m9XXeOlA0Y0Q7kNvgGwSK3F&_nc_ht=scontent.ffez2-2.fna&oh=00_AYAS9OUPzac-b4bOCrQqhCCo1yQ-DzaQa6tNEer2vEnglQ&oe=6665C4CB",
    "https://scontent.ffez1-1.fna.fbcdn.net/v/t1.6435-9/37194042_939707842902781_3032844401056415744_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF_SQynUYX3qC-P4i6lU-BSRwO2duYfoglHA7Z25h-iCUSKpF2yRR4bt98qCtvBI3IRtkH9xY8fCTkdaoUdhbLP&_nc_ohc=sbdnFeo1VZYQ7kNvgHp5cV_&_nc_oc=AdhogFTyL0FtlbSXMxM-WZfR0eIWOf6pmIapVSJqa8v6ANNN0_2hSd-0WhlOujXxBpU&_nc_ht=scontent.ffez1-1.fna&oh=00_AYCTQBcqcv8Bso2me39TkkaZORbwufUhmCE1EKrzXxPj9g&oe=6665ED5D",
    "https://scontent.ffez1-1.fna.fbcdn.net/v/t1.18169-9/16807224_674602062746695_1778874730589979294_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGNlTjYO_tNgXfSZC6kFZDo-qqksgd0rsb6qqSyB3SuxjRyH_y_pl0C9Tznnq3k3ygY2HhZRBoAImvdVxNiOJHe&_nc_ohc=S00JTdOCcEQQ7kNvgE37R6H&_nc_ht=scontent.ffez1-1.fna&oh=00_AYATf1-d_C8fG59EMaXzYqBcmf6LHvan5SUzH-uNsJh3cg&oe=666EE7F9",
  ];
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services images={images} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/dates" element={<Dates />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
