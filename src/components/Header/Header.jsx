import { useState } from "react"
import { Container } from "../Common/Common.styled";
import { HeaderItem, HeaderBlock, HeaderLogo, HeaderNav, MainButton, UserName, HeaderImg, PopUserName, PopUserMail, PopUserTheme, PopUserThemeP, Checkbox } from "./Header.styled";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";

function Header({ addCard, userData }) {
  const [isOpen, setIsOpen] = useState(false);
  function togglePopUp() {
    setIsOpen((prev) => !prev)
  }
  return (

    <HeaderItem>
      <Container>

        <HeaderBlock>

          <HeaderLogo>
            <a href="" target="_self">
              <HeaderImg src="images/logo.png" alt="logo" />
            </a>

          </HeaderLogo>
          <HeaderLogo>
            <a href="" target="_self">
              <HeaderImg src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>

          <HeaderNav>
            <MainButton id="btnMainNew" onClick={addCard}>
              Создать новую задачу
            </MainButton>
            <UserName href="#" onClick={togglePopUp}>
              {userData.login}
            </UserName>
            {isOpen && <div
              className="header__pop-user-set pop-user-set"

            >
              <a href=""></a>

              <PopUserName>{userData.name}</PopUserName>
              <PopUserMail>{userData.login}</PopUserMail>

              <PopUserTheme>
                <PopUserThemeP>Темная тема</PopUserThemeP>

                <Checkbox type="checkbox" name="checkbox" />
              </PopUserTheme>
              <button type="button" className="_hover03">
                <Link to={AppRoutes.EXIT}>Выйти</Link>
              </button>
            </div>}

          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderItem>
  )
}
export default Header