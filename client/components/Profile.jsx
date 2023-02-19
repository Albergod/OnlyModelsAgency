import Link from "next/link";
import React from "react";
import { SOCIALMEDIALOGOS } from "../utils/socialMediaLogos";

export const Profile = ({ data }) => {
  const modelImage = data.modelImage;
  const imgepath = `/uploads/${modelImage}`;
  return (
    <div className="profileContainer">
      <div className="profileContent">
        <div className="profileImage">
          <img src={imgepath} alt="model" />
        </div>
        <div className="profileData">
          <div className="nickname">
            <h1>{data.nickname}</h1>
            {data.description ? (
              <p>{data.description}</p>
            ) : (
              <p>
                Hey baby subscirbe to my chinel accede a mi contenido y mira
                como luce mi ropa interior🥵😈
              </p>
            )}
          </div>
          <div className="socialmedialinks">
            <SOCIALMEDIALOGOS link={data} />
          </div>
          <div className="subscribeButton">
            <Link href={`${data.onlyfanslink}`}>
              <button>Subscribe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
