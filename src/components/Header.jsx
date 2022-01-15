import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
const { Header } = Layout;
export default function HeaderComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  console.log("pathname", pathname);
  return (
    <HeaderStyled>
      <div onClick={() => navigate("/du-an")} className="logo-title">
        LIM STUDIO
      </div>
      <MenuStyled>
        <div
          className={`menu-item ${
            pathname === "/du-an" ? "menu-item-active" : ""
          }`}
          key="Dự án"
          onClick={() => navigate("/du-an")}
        >
          dự án
        </div>
        <div
          className={`menu-item ${
            pathname === "/nghien-cuu" ? "menu-item-active" : ""
          }`}
          key="Nghiên cứu"
          onClick={() => navigate("/nghien-cuu")}
        >
          Nghiên cứu
        </div>
        <div
          className={`menu-item ${
            pathname === "/ve-chung-toi" ? "menu-item-active" : ""
          }`}
          key="Về chúng tôi"
        >
          Về chúng tôi
        </div>
        <div
          className={`menu-item ${
            pathname === "/lien-he" ? "menu-item-active" : ""
          }`}
          key="Liên hệ"
          onClick={() => navigate("/lien-he")}
        >
          Liên hệ
        </div>
        <div
          className={`menu-item ${
            pathname === "/tuyen-dung" ? "menu-item-active" : ""
          }`}
          key="Tuyển dụng"
          onClick={() => navigate("/tuyen-dung")}
        >
          Tuyển dụng
        </div>
      </MenuStyled>
    </HeaderStyled>
  );
}
const HeaderStyled = styled(Header)`
  align-items: center;
  height: 80px;
  display: flex;
  background: #fff;
  width: 100%;
  padding: 0px;
  .logo-title {
    width: 150px;

    :hover {
      cursor: pointer;
    }
  }
`;

const MenuStyled = styled.div`
  width: 100%;
  display: flex;

  .menu-item {
    color: #999;
    margin: 0px 10px;
    text-transform: uppercase;
    font-size: 12px;
    font-family: proxima_nova_rgregular;
    font-weight: 500;
    letter-spacing: 0.12em;
    :hover {
      color: #000;
      cursor: pointer;
    }
  }
  .menu-item-active {
    color: #000;
  }
`;
