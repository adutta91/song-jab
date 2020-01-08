import { combineReducers } from "redux";

//reducers
import concertReducer from "./concert-reducer";
import artistReducer from "./artist-reducer";
import venueReducer from "./venue-reducer";

export default combineReducers({
  concertReducer,
  artistReducer,
  venueReducer
});
