import CardsModels from "../components/CardsModels";
import HeaderComponet from "../components/Header";
import Layout from "../components/Layout";
import { ToastContainer } from "react-toastify";

export default function Home({ models }) {
  return (
    <>
      <Layout>
        <HeaderComponet href={"/subscribe"} textbutton={"Unirse"} />
        <main className="">
          <CardsModels modelData={models} />
        </main>
      </Layout>
      <ToastContainer />
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://onlymodelsagency.vercel.app/api/models/all"
  );
  const models = await response.json();
  return {
    props: {
      models,
    },
  };
}
