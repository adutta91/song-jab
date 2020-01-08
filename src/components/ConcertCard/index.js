import React from "react";
import moment from "moment";
import Card from "../Card";
import Button from "../Button";

function ConcertCard(props) {
  return (
    <Card>
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
    </Card>
  );
}

export default ConcertCard;
