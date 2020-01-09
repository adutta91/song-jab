import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Map from "../Map";
import Button from "../Button";

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
    > h1 {
      font-size: 32px;
      margin: 0;
      text-align: center;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    &.links {
      display: flex;

      > li {
        margin: 10px 20px;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    &.genres {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 10px;

      > li {
        margin-right: 20px;
        margin-bottom: 10px;
        color: white;
        padding: 5px;
        background: rgba(0, 0, 0, 0.4);

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  ul.genres {
    > li {
      margin: 10px 5px;
      opacity: 0.5;
    }
  }

  ul.links {
    > li {
      i {
        font-size: 40px;
      }
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
    margin: 20px;
  }

  > .bio {
    line-height: 24px;
    font-size: 16px;
    text-align: center;
  }

  > .venues {
    text-align: center;

    > ul {
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

function VenueProfile(props) {
  if (!props.name) {
    return (
      <>
        <h1>404</h1>
        <h3>Venue not found</h3>
      </>
    );
  }
  return (
    <StyledPage>
      <header>
        <h1>{props.name}</h1>
        <p>{props.formatted_address || props.city_state}</p>
      </header>
      <ul className="links">
        {props.url_facebook ? (
          <li>
            <a
              href={props.url_facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
        ) : null}
        {props.url_twitter ? (
          <li>
            <a
              href={props.url_twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
          </li>
        ) : null}
      </ul>
      <ul className="genres">
        {props.genres &&
          props.genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
      <section className="info">
        <p>
          <label>Website </label>
          {props.formatted_website || props.website || "Unknown"}
        </p>
        <p>
          <label>Phone </label>
          {props.formatted_phone || "Unknown"}
        </p>
        <p>
          <label>Size </label>
          {props.size || "Unknown"}
        </p>
      </section>
      <Map
        className="google-map"
        coordinates={props.loc && props.loc.coordinates}
        name={props.name}
      />
      {props.description ? (
        <p className="bio">{props.description}</p>
      ) : (
        <p>No description</p>
      )}
      <section className="venues">
        <label>Similar Venues </label>
        <ul>
          {props.similar_venues &&
            props.similar_venues.map(venue => {
              return (
                <li key={venue.slug}>
                  <Link to={`/venues/${venue.slug}`}>
                    <Button>{venue.name}</Button>
                  </Link>
                </li>
              );
            })}
        </ul>
      </section>
      {/* commented out as most images seem to be no longer valid */}
      {/* <section className="images">
        <label>Images</label>
        <ul>
          {props.images &&
            props.images.map((image, idx) => {
              return <img key={idx} src={image} alt="unavailable" />;
            })}
        </ul>
      </section> */}
    </StyledPage>
  );
}

export default connect(state => ({
  allVenues: state.dataReducer.allVenues
}))(VenueProfile);
