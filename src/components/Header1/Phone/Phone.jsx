import { useMedia } from "../../../hooks/useMedia";
import scss from "./Phone.module.scss"

const Phone = () => {
    const { isDesktop, isMobile, isTablet } = useMedia();
    return (
        <>
            {isMobile && <a className={scss.link} href="tel:+380502894133">+38 (050) 289-41-33</a>}
            {(isDesktop || isTablet) && (
                <a className={scss.link} href="https://t.me/DekorKultur" target="_blank">
                    +38 (050) 289-41-33
                </a>
            )}
        </>
    );
};

export default Phone;
