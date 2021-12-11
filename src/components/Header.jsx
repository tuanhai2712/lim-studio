import React from "react";
import { Layout, Menu, Dropdown, Button } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;
export default function HeaderComponent() {
  const navigate = useNavigate();
  const menu = () => {
    return (
      <MenuStyled>
        <Menu.Item className="menu-item" key="Dự án">
          Dự án
        </Menu.Item>
        <Menu.Item className="menu-item" key="Nghiên cứu">
          Nghiên cứu
        </Menu.Item>
        <Menu.Item className="menu-item" key="Về chúng tôi">
          Về chúng tôi
        </Menu.Item>
        <Menu.Item className="menu-item" key="Liên hệ">
          Liên hệ
        </Menu.Item>
        <Menu.Item className="menu-item" key="Tuyển dụng">
          Tuyển dụng
        </Menu.Item>
      </MenuStyled>
    );
  };

  return (
    <HeaderStyled>
      <div onClick={() => navigate("/du-an")} className="logo-title">
        LIM STUDIO
      </div>
      <Dropdown
        overlay={menu()}
        placement="bottomLeft"
        arrow={false}
        trigger={["hover"]}
      >
        <Button type="link" className="right-menu-item">
          Danh mục
        </Button>
      </Dropdown>
    </HeaderStyled>
  );
}
const HeaderStyled = styled(Header)`
  align-items: center;
  height: 80px;
  justify-content: space-between;
  display: flex;
  background: #fff;
  width: 100%;
  padding: 0px;
  .logo-title {
    font-family: Open Sans;
    font-weight: 300;
    font-style: normal;
    line-height: 0em;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3.8px;
    color: #000;
    width: 100%;

    :hover {
      cursor: pointer;
    }
  }

  .right-menu-item {
    font-family: Open Sans;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.48px;
    color: #111;
  }
`;

const MenuStyled = styled(Menu)`
  background: #f0f2f5;
  padding: 5px;

  .menu-item {
    padding: 10px 20px;
  }
`;
