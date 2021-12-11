import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";
export default function FooterComponent() {
  return (
    <FooterStyled>
      <div className="item">
        <FaFacebook size={24} />
      </div>
      <div className="item">
        <FaGoogle size={24} />
      </div>
      <div className="item">
        <FaInstagram size={24} />
      </div>
      <div className="item">
        <FaYoutube size={24} />
      </div>
    </FooterStyled>
  );
}
const FooterStyled = styled.div`
  display: flex;
  justify-content: right;
  padding-bottom: 50px;
  .item {
    margin: 0px 5px;
    :hover {
      cursor: pointer;
    }
  }
`;
