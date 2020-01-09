import React from "react";
import moment from "moment";
import styled from "styled-components";
import Card from "../Card";

const StyledCard = styled(Card)`
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), transparent);

  > h1 {
    font-size: 18px;
    font-weight: bold;
  }
`;

function ConcertCard(props) {
  return (
    <StyledCard>
      <h1>{props.name}</h1>
      <p>{moment(props.event_date_time).format("MMMM Do, YYYY h:mma")}</p>
    </StyledCard>
  );
}

export default ConcertCard;
