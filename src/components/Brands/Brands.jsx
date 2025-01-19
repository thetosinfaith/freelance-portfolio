import React from "react";
import "./Brands.css";
import cl from "../../assets/cl.png";
import br from "../../assets/br.png";
import kr from "../../assets/kr.png";
import tv2 from "../../assets/tv.png";
import azu from "../../assets/azu.png";
import tt from "../../assets/tt.png";

const Brands = () => {
  const brands = [
    { name: "Brand A", logo: kr },
    { name: "CliqueShoppa", logo: cl },
    { name: "Brand C", logo: br },
    { name: "Brand D", logo: tv2 },
    { name: "Brand E", logo: azu },
    { name: "Brand F", logo: tt },
  ];

  return (
    <>
      <section className="brands-container">
        <h2 className="brands-title">Top Brands I'm Working With</h2>

        <div className="brands-grid-wrapper">
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`brand-card ${index < 3 ? "special-logo" : ""}`}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="brand-logo"
                />
              </div>
            ))}
          </div>

          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`brand-card ${index < 3 ? "special-logo" : ""}`}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="brand-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
