import React, { Fragment } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";
import { Fade } from "react-slideshow-image";
import { importAll } from "@utils/function";

export const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Fade duration={2000} arrows={false} autoplay={true}>
        {images.map((image, idx) => {
          return (
            <div
              key={idx}
              style={{
                backgroundImage: `url(${image.path.default})`,
                height: "100vh",
                backgroundSize: "cover",
              }}
            >
              <Container>
                <div className="logo">Lim Studio</div>
                <div className="description">
                  To see the world, things dangerous to come to, to see behind
                  walls, draw closer, to find each other and to feel. That is
                  the purpose of life.
                  <br />
                  <div>- The Secret Life of Walter Mitty</div>
                </div>
                <div className="action">
                  <div className="enter-btn" onClick={() => navigate("/du-an")}>
                    Enter
                  </div>
                  <div className="action-icon">
                    <div className="item">
                      <FaFacebook size={24} color="#fff" />
                    </div>
                    <div className="item">
                      <FaGoogle size={24} color="#fff" />
                    </div>
                    <div className="item">
                      <FaInstagram size={24} color="#fff" />
                    </div>
                    <div className="item">
                      <FaYoutube size={24} color="#fff" />
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          );
        })}
      </Fade>
    </Fragment>
  );
}

const Container = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  .logo {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  .description {
    font-weight: 300;
    font-style: normal;
    font-size: 16px;
    line-height: 1.8em;
    text-transform: none;
    letter-spacing: 0.09em;
    color: #fff;
  }
  .action {
    margin-top: 20px;
    display: flex;
    .enter-btn {
      background-color: transparent;
      color: rgba(255, 255, 255, 0.8);
      border: 2px solid rgba(255, 255, 255, 0.8);
      transition: color 170ms ease-in-out, border-color 170ms ease-in-out;
      border-radius: 6px;
      padding-top: 1em;
      padding-right: calc(1.44em - 0.2em);
      padding-bottom: 1em;
      padding-left: 1.44em;
      font-family: Lato;
      font-weight: 700;
      font-style: normal;
      font-size: 12.5px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      :hover {
        cursor: pointer;
        color: #000;
        background: #fff;
      }
    }
    .action-icon {
      display: flex;
      margin-left: 10px;
      align-items: center;
      .item {
        margin: 0px 5px;
      }
    }
  }
`;
