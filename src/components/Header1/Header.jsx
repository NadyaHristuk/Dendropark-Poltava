import { useMedia } from "../../hooks/useMedia";
import { useNavigate } from "react-router-dom";
import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuList from "./Menu/MenuList";
import LangSelect from "./LangSelect";
import Phone from "./Phone";
import scss from "./Header.module.scss";

const Header = () => {
  const { isDesktop, isTablet } = useMedia();
  const navigate = useNavigate();
  const show = navigate.location === "/admin";

  return (
    <>
      {show ? (
        <div className={scss.headerWrapper}>
          <header className={scss.header}>
            <div className={scss.container}>
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
            </div>
          </header>
        </div>
      ) : null}
    </>
  );
};

export default Header;
