import { useMedia } from "../../hooks/useMedia";
import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuList from "./Menu/MenuList";
import LangSelect from "./LangSelect";
import Phone from "./Phone";
import scss from "./Header.module.scss";

const Header = () => {
    const { isDesktop, isTablet } = useMedia();
    return (
        <>
            <div className={scss.headerWrapper}>
                <header className={scss.header}>
                    <Container>
                        <div className={scss.wrapper}>
                            <div className={scss.leftWrapper}>
                                <Logo />
                                {isDesktop && <MenuList />}
                            </div>
                            <div className={scss.rightWrapper}>
                                {(isTablet || isDesktop) && <Phone />}
                                <LangSelect />
                                <Menu />
                            </div>
                        </div>
                    </Container>
                </header>
            </div>
        </>
    );
};

export default Header;
