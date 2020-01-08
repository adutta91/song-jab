import React from "react";
import moment from "moment";
import Card from "../Card";

function ConcertCard(props) {
  return (
    <Card>
      <h1>{props.name}</h1>
      <p>{moment(props.event_date_time).format("MMMM Do, YYYY h:mma")}</p>
      <p>
        {props.ticket_status === "available" ? (
          <a href={props.ticket_links[0].url}>Buy Tickets</a>
        ) : (
          "Tickets Unavailable"
        )}
      </p>
    </Card>
  );
}

export default ConcertCard;
