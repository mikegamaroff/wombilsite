import React, { Component } from "react";
import { gsap, CSSPlugin, TweenLite, Power4 } from "gsap";

gsap.registerPlugin(CSSPlugin);

class Cheerleader extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  componentDidMount() {
    let tl = gsap.timeline();

    gsap.fromTo(
      ".animation-cheerleader",
      { rotation: -10, css: { display: "block" } },
      {
        duration: 0.8,
        rotation: 10,
        yoyo: true,
        yoyoEase: true,
        ease: "Power4.out(.5, .5)",
        repeat: 400,
        transformOrigin: "50% 100%",

        /*  delay: 2, */
      }
    );
    gsap.fromTo(
      ".animation-cheerleader-arml",
      { rotation: -60 },
      {
        duration: 0.8,
        rotation: 35,
        yoyo: true,
        yoyoEase: true,
        ease: "Power4.out(.5, .5)",
        repeat: 400,
        transformOrigin: "96% 83%",
      }
    );
    gsap.fromTo(
      ".animation-cheerleader-armr",
      { rotation: -10 },
      {
        duration: 0.8,
        rotation: 50,
        yoyo: true,
        yoyoEase: true,
        ease: "Power4.out(.5, .5)",
        repeat: 400,
        transformOrigin: "5% 75%",

        /*  delay: 2, */
      }
    );
  }

  render() {
    return (
      <div className="animation-cheerleader">
        <div className="animation-cheerleader-head">
          <div id="cheerleader-head">
            <img src={`/images/animation/cheerleader_head.svg`} />
          </div>
        </div>
        <div className="animation-cheerleader-arml">
          <div id="cheerleader-arml">
            <img src={`/images/animation/cheerleader_arml.svg`} />
          </div>
        </div>
        <div className="animation-cheerleader-armr">
          <div id="cheerleader-armr">
            <img src={`/images/animation/cheerleader_armr.svg`} />
          </div>
        </div>
        <div className="animation-cheerleader-body">
          <div id="cheerleader-body">
            <img src={`/images/animation/cheerleader_body.svg`} />
          </div>
        </div>
      </div>
    );
  }
}
export default Cheerleader;
