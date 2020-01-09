import React from "react";
import styled from "styled-components";
import Card from "../Card";

const StyledCard = styled(Card)``;

function ArtistCard(props) {
  return <StyledCard>{props.name}</StyledCard>;
}

export default ArtistCard;
