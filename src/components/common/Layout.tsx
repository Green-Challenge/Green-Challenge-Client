import React from "react";
import styled from "styled-components";

interface CommonProps {
  children: React.ReactNode;
}

function Layout({ children }: CommonProps) {
  return <Wrapper>{children}</Wrapper>;
}

function Header({ children }: CommonProps) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

function Footer({ children }: CommonProps) {
  return <FooterStyled>{children}</FooterStyled>;
}

const HeaderStyled = styled.div`
  background-color: #c7fced;
  position: fixed;
  transform: translateX(-50%);
  z-index: 1;
  top: 0;
  left: 50%;
  width: 360px;
  height: 52px;
  display: flex;
  margin-top: 24px;
  justify-content: space-around;
  align-items: center;
`;

const FooterStyled = styled.div`
  background-color: #29d3c6;
  position: fixed;
  transform: translateX(-50%);
  bottom: 0;
  left: 50%;
  width: 360px;
  height: 67px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  background-color: white;
`;

export { Layout };
export { Header };
export { Footer };
