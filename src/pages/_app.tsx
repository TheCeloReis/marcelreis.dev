import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Navbar from "../components/modules/navbar";
import Footer from "../components/modules/footer";
import Background from "../components/modules/background";

import "../sass/index.scss";

const MyApp = ({ Component, pageProps }) => {
  const [background, setBackground] = useState("full");
  const router = useRouter();

  useEffect(() => {
    setBackground("full");

    setTimeout(() => {
      setBackground("normal");
    }, 600);
  }, [router.pathname]);

  return (
    <>
      <Background mode={background} />
      <Navbar />
      <div style={{ paddingTop: "72px", paddingBottom: "50px" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
};

export default MyApp;
