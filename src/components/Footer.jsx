import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";
export default function FooterComponent() {
  return (
    <FooterStyled>
      <a
        className="item"
        href="https://www.facebook.com/limwork"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook size={24} />
      </a>
      <a className="item" href="/">
        <FaGoogle size={24} />
      </a>
      <a className="item" href="/">
        <FaInstagram size={24} />
      </a>
      <a className="item" href="/">
        <FaYoutube size={24} />
      </a>
    </FooterStyled>
  );
}
const FooterStyled = styled.div`
  display: flex;
  justify-content: right;
  padding-bottom: 50px;

  .item {
    color: #212121;
    margin: 0px 5px;
    :hover {
      cursor: pointer;
    }
  }
`;
