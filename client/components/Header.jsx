import Image from "next/image";

import { generateImg } from "../utils/generateImg";

import Link from "next/link";
import { useHookContext } from "../context/useContext";

const HeaderComponet = ({ textbutton, href }) => {
  const { showBg } = useHookContext();

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Image src={generateImg("logo")} alt="logo" width={50} />
          <Link
            style={{
              border: "2px solid black",
              background: "none",
              padding: "0 4px",
              color: "#000",
              fontWeight: 800,
            }}
            href={"/"}
          >
            OnlyModelsAgency
          </Link>
        </div>

        <Link href={href}>{textbutton}</Link>
      </div>
      {showBg ? (
        <div className="background">
          <div className="content">
            <h1>OnlyModels</h1>
            <h4>Agency</h4>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HeaderComponet;
