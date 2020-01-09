import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { find } from "lodash";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import Map from "./map";

const StyledPage = styled.section`
  label {
    font-weight: bold;
    font-size: 18px;
    color: ${({ theme }) => theme.variables.blue};
  }

  > header {
    > h1 {
      font-size: 32px;
      margin: 0;
      margin-right: 20px;
    }
  }

  > section.row {
    display: flex;
    justify-content: space-between;

    > .info {
      flex: 1;
      margin-right: 20px;

      > p {
        display: flex;
        justify-content: space-between;
        &:first-child {
          margin-top: 0;
        }
      }

      > .artists > ul {
        list-style: none;
        margin: 0;
        padding: 0;

        > li {
          margin: 10px 0;
        }
      }
    }

    > div > div {
      width: 500px !important;
      height: 400px !important;
    }
  }
`;

function ConcertProfile(props) {
  return (
    <StyledPage>
      <header>
        <h1>{props.name}</h1>
        <p>
          {props.ticket_status === "available" ? (
            <Button
              onClick={() => (window.location = props.ticket_links[0].url)}
            >
              Buy Tickets
            </Button>
          ) : (
            <Button disabled>Tickets Unavailable</Button>
          )}
        </p>
      </header>
      <section className="row">
        <section className="info">
          <p>
            <label>Event time </label>
            {moment(props.event_date_time).format("MMMM Do, YYYY h:mma")}
          </p>
          <p>
            <label>Tickets on sale </label>
            {moment(props.on_sale_datetime).format("MMMM Do, YYYY h:mma")}
          </p>
          <section className="artists">
            <label>Performing Artists </label>
            <ul>
              {props.artists &&
                props.artists.map(artistId => {
                  const artist = find(
                    props.allArtists,
                    artist => artist.id === artistId
                  );

                  return artist ? (
                    <li key={artistId}>
                      <Link to={`/artists/${artistId}`}>{artist.name}</Link>
                    </li>
                  ) : null;
                })}
            </ul>
          </section>
        </section>
        <Map
          style={{
            width: "400px",
            height: "400px",
            pointerEvents: "none"
          }}
          className="google-map"
          coordinates={props.loc && props.loc.coordinates}
          name={props.name}
        />
      </section>
    </StyledPage>
  );
}

export default connect(state => ({
  allArtists: state.dataReducer.artists
}))(ConcertProfile);
