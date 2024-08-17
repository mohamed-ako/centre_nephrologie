import "./Style.css";
import React from "react";
export default function Dates() {
  return (
    <div className="Dates">
      <div>
        <h1>مواقيت العمل</h1>
        <table>
          <thead>
            <tr>
              <th className="frist">اليوم</th>
              <th>الدخول</th>
              <th className="last">الخروج</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>الاثنين</td>
              <td>9:30 صباحًا</td>
              <td>16:00 مساءً</td>
            </tr>
            <tr>
              <td>الثلاثاء</td>
              <td>9:30 صباحًا</td>
              <td>16:00 مساءً</td>
            </tr>
            <tr>
              <td>الأربعاء</td>
              <td>9:30 صباحًا</td>
              <td>16:00 مساءً</td>
            </tr>
            <tr>
              <td>الخميس</td>
              <td>9:30 صباحًا</td>
              <td>16:00 مساءً</td>
            </tr>
            <tr>
              <td>الجمعة</td>
              <td>9:30 صباحًا</td>
              <td>16:00 مساءً</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td className="first">السبت</td>
              <td>9:30 صباحًا</td>
              <td className="last">16:00 مساءً</td>
            </tr>
          </tfoot>
          {/* <tr>
              <td className="first">الأحد</td>
              <td>8:30 صباحًا</td>
              <td className="last">4:30 مساءً</td>
            </tr> */}
        </table>
      </div>
    </div>
  );
}
