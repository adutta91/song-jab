import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { find } from "lodash";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import Map from "../Map";

const StyledPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-weight: bold;
    font-size: 18px;
    color: ${({ theme }) => theme.variables.blue};
  }

  > header {
    text-align: center;

    > h1 {
      font-size: 32px;
      margin: 0;
    }
  }

  > .info {
    flex: 1;
    width: 400px;

    > p {
      display: flex;
      justify-content: space-between;
      &:first-child {
        margin-top: 0;
      }
    }
  }

  > div > div {
    width: 500px !important;
    height: 400px !important;
    margin-bottom: 20px;
  }

  > .artists {
    text-align: center;

    > ul {
      list-style: none;
      margin: 0;
      padding: 0;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      > li {
        margin-bottom: 10px;
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }
      }
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
      <section className="row"></section>
      <section className="info">
        <p>
          <label>Event time </label>
          {moment(props.event_date_time).format("MMMM Do, YYYY h:mma")}
        </p>
        <p>
          <label>Tickets on sale </label>
          {moment(props.on_sale_datetime).format("MMMM Do, YYYY h:mma")}
        </p>
      </section>
      <Map
        className="google-map"
        coordinates={props.loc && props.loc.coordinates}
        name={props.name}
      />
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
                  <Link to={`/artists/${artistId}`}>
                    <Button>{artist.name}</Button>
                  </Link>
                </li>
              ) : null;
            })}
        </ul>
      </section>
    </StyledPage>
  );
}

export default connect(state => ({
  allArtists: state.dataReducer.artists
}))(ConcertProfile);
