import React from "react";
import styled from "styled-components";
import Card from "../Card";

const StyledCard = styled(Card)`
  transition: all 0.2s ease-out;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), transparent);
  position: relative;

  > h1 {
    font-size: 18px;
    font-weight: bold;
  }

  > img {
    width: 100px;
  }

  &:after {
    transition: all 0.2s ease-out;
    content: "";
    background: url(${({ logo }) => logo}) no-repeat;
    background-size: cover;
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }

  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;

function ArtistCard(props) {
  // console.log("props *****---->>>", props);
  // console.log("props.logo *****---->>>", props.logo);
  return (
    <StyledCard logo={props.logo}>
      <h1>{props.name}</h1>
    </StyledCard>
  );
}

export default ArtistCard;
