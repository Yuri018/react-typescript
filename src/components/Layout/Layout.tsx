import { useLocation, Link } from "react-router-dom";

import {
  LayoutWrapper,
  Header,
  Footer,
  Main,
  NavContainer,
  StyledLink,
  FooterNaveContainer,
  FooterStyledLink,
} from "./styles";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  console.log(location);
  return (
    <LayoutWrapper>
      <Header>
        <Link to="/">Logo</Link>
        <NavContainer>
          <StyledLink
            style={({ isActive }: any) => ({
              color: isActive ? "blue" : "white",
            })}
            to="/"
          >
            Home
          </StyledLink>
          <StyledLink
            style={({ isActive }: any) => ({
              color: isActive ? "blue" : "white",
            })}
            to="/users"
          >
            Users
          </StyledLink>
          <StyledLink
            style={({ isActive }: any) => ({
              color: isActive ? "blue" : "white",
            })}
            to="/about"
          >
            About
          </StyledLink>
          <StyledLink
            style={({ isActive }: any) => ({
              color: isActive ? "blue" : "white",
            })}
            to="/clients"
          >
            Clients
          </StyledLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterNaveContainer>
          <FooterStyledLink to="/">Home</FooterStyledLink>
          <FooterStyledLink to="/users">Users</FooterStyledLink>
          <FooterStyledLink to="/about">About</FooterStyledLink>
          <FooterStyledLink to="/clients">Clients</FooterStyledLink>
        </FooterNaveContainer>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
