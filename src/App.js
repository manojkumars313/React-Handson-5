import "./App.css";

import MovieReview from "./PureComponent/MovieReview";
import React from "react";
import Hoc from "./Hoc/Hoc";
function App() {
  return (
    <div className="app-container">
      <div className="movie">
        <h2>Higher Order Component example</h2>
        {/* <p>
          Movie name itself is a separate component passed as an argument to a
          Higher Order Component which has the functional logic to show tooltip
          on mouse over.
        </p> */}
      <Hoc/>
      </div>
      <div className="review">
        <h2>Pure Component example</h2>
        {/* <p>Here the movie title is a pure component which basically means that whenever the toggle response button is clicked, that particular component with response is re-rendered and others don't re-render.</p> */}
        <MovieReview />
      </div>
    </div>
  );
}

export default App;
