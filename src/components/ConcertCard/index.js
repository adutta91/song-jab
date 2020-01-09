import React from "react";
import moment from "moment";
import styled from "styled-components";
import Card from "../Card";
import Button from "../Button";

const StyledCard = styled(Card)`
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
      <p>
        {props.ticket_status === "available" ? (
          <Button onClick={() => (window.location = props.ticket_links[0].url)}>
            Buy Tickets
          </Button>
        ) : (
          "Tickets Unavailable"
        )}
      </p>
    </StyledCard>
  );
}

export default ConcertCard;
