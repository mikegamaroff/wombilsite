import React, { Component } from "react";
import { gsap, CSSPlugin } from "gsap";

gsap.registerPlugin(CSSPlugin);

/* let benefitsArrayX = [100,200,300,400,500,600,700] */

let tl = gsap.timeline();
let textItems = [
  "If you’re thinking of selling your stuff online...",
  "or maybe you already are",
  "by now you’re realizing there’s more to being an internet merchant",
  "than simply setting up an online shop.",
  "What about everything else?",
  "Or the full time job of driving quality leads and sales?",
  "Or making sure those one-time customers become loyal brand ambassadors?",
  "Sounds expensive, right?",
  "With Wombil, you get a turnkey e-commerce and marketing solution,",
  "with everything taken care of, for a low monthly fee.",
  "Sign up and get a beautifully branded online store,",
  "with reliable inventory management,",
  "integration with all major shipping carriers",
  "automatic bulk labelling,",
  "a customer relationship program to drive repeat purchases,",
  "and a full suite of marketing services to keep customers coming, day or night.",
  "Sign up to Wombil now and discover hassle-free online selling, from soup to nuts.",
];
class HeaderTextAnimation extends Component {
  constructor(props) {
    super(props);
  }
  state = { textItem: 0 };

  newText = (reset) => {
    this.setState({ textItem: reset ? 0 : this.state.textItem + 1 }, () => {
      gsap.fromTo(
        ".headerText",
        { yPercent: -20, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "Power1.easeOut(1, 1)",
        }
      );
    });
  };
  textChange = (reset) => {
    gsap.to(".headerText", {
      yPercent: 20,
      opacity: 0,
      duration: 1,
      ease: "Power1.easeOut(1, 1)",
      onComplete: this.newText,
      onCompleteParams: [reset],
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
        <h2
          className="headerText"
          id="color1"
          /*           data-aos="fade-right"
          data-aos-offset="150"
          data-aos-easing="ease-out"
          data-aos-duration="500" */
        >
          {textItems[this.state.textItem]}
        </h2>
      </div>
    );
  }
}
export default HeaderTextAnimation;
