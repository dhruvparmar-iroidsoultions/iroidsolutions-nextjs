"use client";
import "./cstypo.css";
import { useEffect, useState } from "react";

const CsTypo = ({ csFontFamily, colorPallete }) => {
  const [fontFamily, setFontFamily] = useState("Arial");
  useEffect(() => {
    const fontFromAPI = csFontFamily;

    // Check if the font family is not already loaded
    if (!document.fonts.check(`1em '${fontFromAPI}'`)) {
      // Load the font dynamically
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css2?family=${fontFromAPI.replace(
        /\s+/g,
        "+"
      )}&display=swap`;
      link.rel = "stylesheet";
      document.head.appendChild(link);

      // Update the font family once the font is loaded
      link.onload = () => {
        setFontFamily(fontFromAPI);
      };
    } else {
      setFontFamily(fontFromAPI);
    }
  }, []);
  return (
    <div className="csTypo container mt-5 py-5 wow animate__animated animate__fadeIn">
      <h1 className="mb-5 csSecTitle">Typography & Color pallete</h1>
      <div className="csTypoContainer d-flex flex-wrap flex-md-nowrap gap-5 align-items-center align-items-lg-start justify-content-center justify-content-md-between ">
        <div className="csTypoLeft">
          <h1 style={{ fontFamily: fontFamily }}>Aa</h1>
          <span className="f48 mb-3" style={{ fontFamily: fontFamily }}>
            {fontFamily}
          </span>
          <p style={{ fontFamily: fontFamily }}>
            Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx
            Yy Zz
          </p>
        </div>
        <div className="csTypoRight d-flex gap-3 gap-sm-5 align-items-center justify-content-between ">
          {colorPallete?.map((colorPallete, idx) => (
            <div className="colorPalleteContainer" key={idx}>
              <div
                className="colorPallete mb-3 w-100"
                style={{ background: colorPallete }}
              ></div>
              <span className="" style={{ fontFamily: fontFamily }}>
                {colorPallete}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CsTypo;
