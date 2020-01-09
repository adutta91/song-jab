import React from "react";
import SpotifyPlayer from "react-spotify-player";

import styled from "styled-components";

const StyledPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    > h1 {
      font-size: 32px;
      margin: 0;
      margin-right: 20px;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    &.links,
    &.genres {
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
  }

  ul.links {
    > li {
      i {
        font-size: 40px;
      }
    }
  }

  ul.genres {
    > li {
      margin: 10px 5px;
      opacity: 0.5;
    }
  }

  > .bio {
    line-height: 24px;
    font-size: 16px;
  }
`;

function ArtistProfile(props) {
  console.log("props *****---->>>", props);
  return (
    <StyledPage>
      <header>
        <h1>{props.name}</h1>
      </header>
      <ul className="links">
        {props.spotify_url ? (
          <li>
            <a
              href={props.spotify_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-spotify"></i>
            </a>
          </li>
        ) : null}
        {props.last_fm_url ? (
          <li>
            <a
              href={props.last_fm_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-lastfm-square"></i>
            </a>
          </li>
        ) : null}
      </ul>
      <ul className="genres">
        {props.genres &&
          props.genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
      {props.spotify_id ? (
        <SpotifyPlayer
          uri={`spotify:artist:${props.spotify_id}`}
          size="large"
          view="black"
          theme="list"
        />
      ) : null}
      {props.bio ? <p className="bio">{props.bio}</p> : <p>No info</p>}
    </StyledPage>
  );
}

export default ArtistProfile;
