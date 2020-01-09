import React from "react";
import Card from "../Card";
import styled from "styled-components";

const StyledCard = styled(Card)`
  position: relative;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), transparent);

  > h1 {
    font-size: 18px;
    font-weight: bold;
  }

  &:after {
    transition: all 0.2s ease-out;
    content: "";
    background: url(${({ image }) => image}) no-repeat;
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

function VenueCard(props) {
  return (
    <StyledCard image={props.image}>
      <h1>{props.name}</h1>
      <p>{props.city_state}</p>
    </StyledCard>
  );
}

export default VenueCard;
