import ConcertCard from "../components/ConcertCard";
import ArtistCard from "../components/ArtistCard";
import VenueCard from "../components/VenueCard";

import ConcertProfile from "../components/ConcertProfile";
import ArtistProfile from "../components/ArtistProfile";
import VenueProfile from "../components/VenueProfile";

export default {
  concerts: {
    title: "Concerts",
    slug: "concerts",
    apiUrl: "https://hl-candidate-events.herokuapp.com/concerts",
    cardComponent: ConcertCard,
    profileComponent: ConcertProfile
  },
  artists: {
    title: "Artists",
    slug: "artists",
    apiUrl: "https://hl-candidate-events.herokuapp.com/artists",
    cardComponent: ArtistCard,
    profileComponent: ArtistProfile
  },
  venues: {
    title: "Venues",
    slug: "venues",
    apiUrl: "https://hl-candidate-events.herokuapp.com/venues",
    cardComponent: VenueCard,
    profileComponent: VenueProfile
  }
};
