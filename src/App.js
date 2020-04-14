import React, { PureComponent } from "react";
import "./App.css";

import Carousel from "./Carosuel";
import DownCarousel from "./DownCarousel";

const images = [
  "./images/Image1.jpg",
  "./images/Image2.jpg",
  "./images/Image3.jpg",
  "./images/Image4.jpg",
  "./images/Image5.jpg",
  "./images/Image6.jpg",
  "./images/Image7.jpg",
  "./images/Image8.jpg",
  "./images/Image9.jpg"
];

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      topPosition: 0,
      downPosition: 0
    };
    this.topHandleLeftClick = this.topHandleLeftClick.bind(this);
    this.topHandleRightClick = this.topHandleRightClick.bind(this);

    this.downHandleRightClick = this.downHandleRightClick.bind(this);
    this.downHandleLeftClick = this.downHandleLeftClick.bind(this);
  }

  //logic to change the down carousel if user clicked after 4 images
  handleRightLogic(newTopPosition) {
    if (newTopPosition % 4 === 0) {
      this.downHandleRightClick();
    }
  }

  handleLeftLogic(newTopPosition) {
    if ((newTopPosition + 1) % 4 === 0 && newTopPosition !== 0) {
      this.downHandleLeftClick();
    }
  }

  topHandleLeftClick() {
    const { topPosition } = this.state;
    const newTopPosition = topPosition - 1;

    this.setState(
      { topPosition: newTopPosition },
      this.handleLeftLogic(newTopPosition)
    );
  }

  topHandleRightClick() {
    const { topPosition } = this.state;
    const newTopPosition = topPosition + 1;
    this.setState(
      { topPosition: newTopPosition },
      this.handleRightLogic(newTopPosition)
    );
  }

  downHandleRightClick() {
    const { downPosition } = this.state;
    const newDownPosition = downPosition + 1;
    this.setState({ downPosition: newDownPosition });
  }

  downHandleLeftClick() {
    const { downPosition } = this.state;
    const newDownPosition = downPosition - 1;

    this.setState({ downPosition: newDownPosition });
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
            images={images}
          />
          <DownCarousel
            position={downPosition}
            handleLeftClick={this.downHandleLeftClick}
            handleRightClick={this.downHandleRightClick}
            images={images}
          />
        </div>
      </div>
    );
  }
}

export default App;
