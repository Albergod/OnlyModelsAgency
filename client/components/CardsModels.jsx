import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { HiSearch } from "react-icons/hi";

const CardsModels = ({ modelData }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [buscador, seBuscador] = useState(null);

  useEffect(() => {
    // setLoading(true);

    setData(modelData);
    // setLoading(false);
  }, []);

  console.log(data);

  const result = !buscador
    ? data
    : data.filter((x) =>
        x.nickname.toLowerCase().includes(buscador.toLowerCase())
      );
  return (
    <>
      <div className="content_container">
        <div className="top-container">
          <h1
            style={{
              textAlign: "center",
              margin: "10px",
              color: "white",
              fontFamily: "Dancing Script, cursive",
            }}
          >
            Modelos
          </h1>
          <div className="searchInput">
            <div className="input">
              <HiSearch />
              <input
                type="text"
                placeholder="search"
                onChange={(e) => seBuscador(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="cards">
          <Cards data={result} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
};

export default CardsModels;
