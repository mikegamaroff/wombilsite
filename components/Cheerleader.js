import React, { Component } from "react";
import { gsap, CSSPlugin, TweenLite, Power4 } from "gsap";

gsap.registerPlugin(CSSPlugin);

class Cheerleader extends Component {
  constructor(props) {
    super(props);
  }
  state = { loaded: false };

  componentDidMount() {
    let tl = gsap.timeline();
    let removeCheerleaders = this.props.removeCheerleaders;
    this.setState({ loaded: true }, () => {
      tl.set(".animation-cheerleader", { yPercent: 80 })
        .fromTo(
          ".animation-cheerleader",
          { yPercent: 80 },
          {
            yPercent: 0,
            delay: 0.2,
            duration: 1,
            ease: "Power4.out",
          }
        )
        .fromTo(
          ".animation-cheerleader",
          { yPercent: 0 },
          {
            yPercent: 80,

            duration: 1,
            delay: 3,
            ease: "Power4.in",
            onComplete: removeCheerleaders,
          }
        );
      gsap.fromTo(
        ".animation-cheerleader",
        { rotation: -10 },
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
          duration: 0.5,
          rotation: 25,
          yoyo: true,
          yoyoEase: true,
          ease: "Power4.out(.5, .5)",
          repeat: 400,
          transformOrigin: "96% 73%",
        }
      );
      gsap.fromTo(
        ".animation-cheerleader-armr",
        { rotation: -10 },
        {
          duration: 0.5,
          rotation: 50,
          yoyo: true,
          yoyoEase: true,
          ease: "Power4.out(.5, .5)",
          repeat: 400,
          transformOrigin: "2% 68%",

          /*  delay: 2, */
        }
      );
    });
  }

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <>
            <div className={`animation-cheerleader ${this.props.cheer}`}>
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
          </>
        ) : null}
      </div>
    );
  }
}
export default Cheerleader;
