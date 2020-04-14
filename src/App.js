import React, { PureComponent } from "react";
import "./App.css";

import Carousel from "./Carosuel";
import DownCarousel from "./DownCarousel";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      topPosition: 0,
      downPosition: 0
    };
    this.topHandleLeftClick = this.topHandleLeftClick.bind(this);
    this.topHandleRightClick = this.topHandleRightClick.bind(this);
  }

  topHandleLeftClick() {
    const { topPosition } = this.state;
    const newTopPosition = topPosition - 1;

    this.setState({ topPosition: newTopPosition });
  }

  topHandleRightClick() {
    const { topPosition } = this.state;
    const newTopPosition = topPosition + 1;
    this.setState({ topPosition: newTopPosition });
  }

  render() {
    const { topPosition, downPosition } = this.state;
    return (
      <div className="App">
        <div>
          <Carousel
            position={topPosition}
            handleLeftClick={this.topHandleLeftClick}
            handleRightClick={this.topHandleRightClick}
          />
          <DownCarousel downPosition={downPosition} />
        </div>
      </div>
    );
  }
}

export default App;
