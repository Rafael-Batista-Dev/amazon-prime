import React from "react";
import Slide from "./home/components/Slide";
import styled from "styled-components";

export default function Header() {
  return (
    <div
      className="img-fluid"
      style={{ marginTop: "4.5rem", background: "#07070D" }}
    >
      <Slide />
      <Title>Assista a filmes e séries.</Title>
      <SubTitle>Uma assinatura, muitos benefícios</SubTitle>
    </div>
  );
}

// Main Title
const Title = styled.h1`
  position: absolute;
  margin-top: -150px;
  margin-left: 15%;
  color: #e0a800;
  font-size: 3rem;
  text-shadow: #000 2px 3px 2px;
  font-weight: 700;
  line-height: 1.1em;
`;

// Main SubTitle
const SubTitle = styled.h2`
  position: absolute;
  margin-top: -100px;
  margin-left: 15%;
  color: #e0a800;
  font-size: 1.8rem;
  text-shadow: #000 2px 3px 2px;
  font-weight: 400;
  line-height: 1.25em;
`;
