import { useOutlet } from "react-router-dom";
import { Suspense } from "react";

import Header1 from "../Header1";
import Footer from "../Footer";

export const SharedLayout = () => {
    const outlet = useOutlet();

    return (
        <>
            <Header1 />
            <main>
                <Suspense fallback={null}>
                    {outlet} {/* Тут рендериться компонент для активного маршруту */}
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default SharedLayout;
