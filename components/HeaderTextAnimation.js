import React, { Component } from "react";
import { gsap, CSSPlugin } from "gsap";

gsap.registerPlugin(CSSPlugin);

/* let benefitsArrayX = [100,200,300,400,500,600,700] */

class HeaderTextAnimation extends Component {
  constructor(props) {
    super(props);
  }
  state = { textItem: "If you’re thinking about selling your stuff online..." };

  newText = (content) => {
    this.setState({ textItem: content }, () => {
      gsap.fromTo(
        ".headerText",
        { yPercent: -100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "Elastic.easeOut(1, 1)",
        }
      );
    });
  };
  textChange = (content) => {
    gsap.to(".headerText", {
      yPercent: 100,
      opacity: 0,
      duration: 0.5,
      ease: "Elastic.easeIn(1, 1)",
      onComplete: this.newText,
      onCompleteParams: [content],
    });
  };
  componentDidMount() {
    gsap.fromTo(
      ".animation-lady",
      {
        yPercent: 20,
      },
      {
        duration: 1,
        yPercent: 0,
        ease: "Power1.easeOut(1, 1)",
      }
    );
  }

  render() {
    return (
      <div className="animation-headerText-container">
        <div
          className="headerText"
          id="color1"
          /*           data-aos="fade-right"
          data-aos-offset="150"
          data-aos-easing="ease-out"
          data-aos-duration="500" */
        >
          {this.state.textItem}
        </div>
      </div>
    );
  }
}
export default HeaderTextAnimation;
