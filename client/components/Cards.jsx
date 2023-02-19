import Link from "next/link";
import { useEffect, useState } from "react";

import { SOCIALMEDIALOGOS } from "../utils/socialMediaLogos";

const Cards = ({ data }) => {
  return (
    <>
      {data.length === 0 ? (
        <p style={{ textAlign: "center" }}>"Aun no hay modelos"</p>
      ) : (
        data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card_image">
                <img src={`uploads/${item.modelImage}`} alt="model" />
              </div>
              <div className="modelDetail">
                <a href="#">{item.nickname}</a>

                <SOCIALMEDIALOGOS link={item} />
                <Link href={`models/${item.id}`}>
                  <button>Subscribirse</button>
                </Link>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

// export async function  getStaticsProps() {
//   const response = await axios.get("http://localhost:4000/api/models/all");
//   const models = await response.data;

//   return {
//     props: { models },
//   };
// }

export default Cards;
