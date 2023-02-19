import React, { useEffect, useState } from "react";

import HeaderComponet from "../../components/Header";
import Layout from "../../components/Layout";
import { Profile } from "../../components/Profile";

const ModelProfile = ({ model }) => {
  const [modeldata, setModeldata] = useState([]);

  useEffect(() => {
    setModeldata(model);
  }, [model]);

  return (
    <Layout>
      <HeaderComponet textbutton={"Atras"} href={"/"} />
      <Profile data={modeldata} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const idModel = context.params.id;
  const response = await fetch(
    "https://onlymodelsagency.vercel.app/api/models/getone/" + idModel
  );
  const model = await response.json();
  return {
    props: {
      model,
    },
  };
}

export default ModelProfile;
