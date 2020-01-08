import { fetch } from "./utils";

import ConcertCard from "../components/ConcertCard";
import ArtistCard from "../components/ArtistCard";
import VenueCard from "../components/VenueCard";

module.exports = {
  concerts: {
    title: "Concerts",
    apiUrl: "https://hl-candidate-events.herokuapp.com/concerts",
    component: ConcertCard
  },
  artists: {
    title: "Artists",
    apiUrl: "https://hl-candidate-events.herokuapp.com/artists",
    component: ArtistCard
  },
  venues: {
    title: "Venues",
    apiUrl: "https://hl-candidate-events.herokuapp.com/venues",
    component: VenueCard
  }
};
