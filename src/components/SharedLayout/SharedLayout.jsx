import { useOutlet } from "react-router-dom";
import { Suspense } from "react";
import { SyncLoader } from "react-spinners";
import Header1 from "../Header1";
import Footer from "../Footer";

export const Loader = () => {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        backgroundColor: "#e9eeee",
      }}
    >
      <div></div>
    </div>
  );
};

export const SharedLayout = () => {
  const outlet = useOutlet();

  return (
    <>
      <Header1 />
      <main>
        <Suspense fallback={<Loader />}>
          {outlet} {/* Тут рендериться компонент для активного маршруту */}
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
