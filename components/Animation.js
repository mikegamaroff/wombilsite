import React, { Component } from "react";
import { gsap, CSSPlugin } from "gsap";

import Cheerleader from "./Cheerleader";
gsap.registerPlugin(CSSPlugin);

class Animation extends Component {
  constructor(props) {
    super(props);
  }
  state = { face: "ok", rhand: "rfist", lhand: "lhand", cheerleaders: false };

  faceChange = (face) => {
    this.setState({ face: face });
  };
  handChange = (rhand, lhand) => {
    this.setState({ rhand: rhand, lhand: lhand });
  };
  removeCheerleaders = () => {
    this.setState({ cheerleaders: !this.state.cheerleaders });
  };
  cheernull = () => {
    console.log("cheernull");
  };
  componentDidMount() {
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    let faceChange = this.faceChange;
    let handChange = this.handChange;
    let removeCheerleaders = this.removeCheerleaders;
    tl.fromTo(
      ".animation-lady",
      {
        yPercent: 20,
      },
      {
        duration: 1,
        yPercent: 0,
        ease: "Power1.easeOut(1, 1)",
        onCompleteParams: ["meh"],
        onComplete: faceChange,
      }
    )
      /*  .fromTo(
        ".animation-thoughtbubble",
        {
          scaleX: 0,
          scaleY: 0,
        },
        {
          duration: 1,
          scaleX: 1,
          scaleY: 1,
          ease: "elastic.out(1, 1)",
          delay: 0,
          transformOrigin: "0% 100%",
          onCompleteParams: ["mehr"],
          onComplete: faceChange,
        }
      )

      .to(".animation-head", {
        rotation: -5,
      })

      .fromTo(
        ".animation-handbag",
        {
          scaleX: 0,
          scaleY: 0,
          rotate: 90,
        },
        {
          scaleX: 1,
          scaleY: 1,
          duration: 1,
          ease: "elastic.out(.5, .5)",
          rotate: 0,
        },
        "-=.5"
      )
      .fromTo(
        ".animation-pointer",
        {
          xPercent: 450,
          yPercent: 450,
          rotate: -90,
          scaleX: 1,
          scaleY: 1,
        },
        {
          xPercent: -200,
          yPercent: 200,
          duration: 0.5,
          ease: "Power1.out(1, 1)",
          rotate: -10,
          scaleX: 1,
          scaleY: 1,
        }

      )

      .fromTo(
        ".animation-pointer",
        {
          scaleX: 0.8,
          scaleY: 0.8,
        },
        {
          scaleX: 1,
          scaleY: 1,
          duration: 0.5,
        },
        "+=2"
      )
      .to(
        ".animation-handbag",
        {
          scaleX: 0,
          scaleY: 0,
          duration: 0.5,
          ease: "elastic.inOut(1, 1)",
          rotate: 180,
        },
        "-=.5"
      )
      .to(
        ".animation-thoughtbubble",
        {
          duration: 0.3,
          scaleX: 0,
          scaleY: 0,
          ease: "Power1.out(.5, .5)",
          delay: 0,
          transformOrigin: "0% 100%",
        },
        "-=.2"
      )
      .to(
        ".animation-pointer",
        {
          xPercent: -320,
          yPercent: 230,
          duration: 0.5,
          ease: "elastic.inOut(1, 1)",
          rotate: 180,
          scaleX: 0,
          scaleY: 0,
        },
        "-=.5"
      )
      .fromTo(
        ".animation-desk",
        {
          yPercent: 430,
        },
        {
          yPercent: 0,
          duration: 0.7,
          ease: "Power1.inOut(1, 1)",
        }
      )
      .to(
        ".animation-head",
        {
          rotation: 10,
        },
        "-=.5"
      )
      .to(
        ".animation-arm_l",

        {
          duration: 0.3,
          rotation: 40,
          ease: "Power1.easeOut(1, 1)",
          transformOrigin: "9% 10%",
          yPercent: -5,
          onCompleteParams: ["mehd"],
          onComplete: faceChange,
        },
        "-=.5"
      )
      .to(
        ".animation-head",
        {
          rotation: 13,
          duration: 1,
        },
        "-=.5"
      )
      .to(
        ".animation-forearm",

        {
          duration: 2,
          rotation: 50,

          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "35% 90%",
        },
        "-=.5"
      )
      .to(".animation-lady", {
        duration: 0.5,
        yPercent: 5,
        ease: "Power1.easeOut(1, 1)",
      })

      .to(
        ".animation-desk",
        {
          duration: 0.5,
          yPercent: 100,
          ease: "Power1.easeInOut(1, 1)",
        },
        "-=.5"
      )
      .to(
        ".animation-head",
        {
          rotation: 0,
          duration: 0.5,
          onCompleteParams: ["rhand", "lhand"],
          onComplete: handChange,
        },
        "-=.9"
      )
      .to(
        ".animation-forearm_r",
        {
          duration: 1,
          rotation: 20,
          xPercent: 10,
          yPercent: 10,
          ease: "Expo.easeInOut(1, 1)",
          transformOrigin: "90% 90%",
          onCompleteParams: ["surprise"],
          onComplete: faceChange,
        },
        "-=1"
      )
      .fromTo(
        ".animation-inventory",
        {
          opacity: 0,
          yPercent: 20,
        },
        {
          duration: 0.3,
          opacity: 1,
          yPercent: -20,
          ease: "Expo.easeOut(1, 1)",
        }
      )
      .to(".animation-inventory", {
        duration: 0.3,
        opacity: 0,
        yPercent: -60,
        delay: 0.5,
        ease: "Expo.easeIn(1, 1)",
      })
      .fromTo(
        ".animation-50percent",
        {
          opacity: 0,
          yPercent: 20,
        },
        {
          duration: 0.3,
          opacity: 1,
          yPercent: -20,
          ease: "Expo.easeOut(1, 1)",
        }
      )
      .to(".animation-50percent", {
        duration: 0.3,
        opacity: 0,
        yPercent: -60,
        delay: 0.5,
        ease: "Expo.easeIn(1, 1)",
        onCompleteParams: ["shock"],
        onComplete: faceChange,
      })
      .fromTo(
        ".animation-balloons",
        {
          yPercent: 120,
        },
        {
          duration: 2,

          yPercent: -180,
        },
        "-=.3"
      )
      .fromTo(
        ".animation-truck",
        {
          opacity: 0,
          yPercent: 20,
        },
        {
          duration: 0.5,
          opacity: 1,
          yPercent: -20,
          ease: "Expo.easeOut(1, 1)",
          onCompleteParams: ["surprise"],
          onComplete: faceChange,
        },
        "-=.5"
      )
      .to(".animation-truck", {
        duration: 0.5,
        opacity: 0,
        yPercent: -60,
        delay: 0.5,
        ease: "Expo.easeIn(1, 1)",
      })
      .fromTo(
        ".animation-handbagbroke",
        {
          opacity: 0,
          yPercent: 0,
        },
        {
          duration: 0.5,
          opacity: 1,
          yPercent: -40,
          ease: "Expo.easeOut(1, 1)",
          onCompleteParams: ["surprise"],
          onComplete: faceChange,
        }
      )
      .to(".animation-handbagbroke", {
        duration: 0.5,
        opacity: 0,
        yPercent: -80,
        delay: 0.5,
        ease: "Expo.easeIn(1, 1)",
      })
      .to(".animation-forearm_r", {
        duration: 0.5,
        rotation: 10,
        yPercent: 12,
        xPercent: 3,
        delay: 1,
        ease: "Power1.easeInOut(1, 1)",
        transformOrigin: "90% 90%",
        onCompleteParams: ["shout"],
        onComplete: faceChange,
      })
      .addLabel("megaphoneraise")
      .to(
        ".animation-arm_r",
        {
          duration: 0.5,
          rotation: -25,
          xPercent: -3,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "13% 20%",
          onCompleteParams: ["rfist", "lhand"],
          onComplete: handChange,
        },
        "-=.1"
      )
      .fromTo(
        ".animation-megaphone",
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.3,
          ease: "Elastic.easeInOut(1, 1)",
        },
        "+=.1"
      )
      .to(
        ".animation-head",
        {
          rotation: -10,
          duration: 2,
        },
        "megaphoneraise"
      )
      .to(
        ".animation-arm_l",
        {
          duration: 0.4,
          rotation: -30,
          ease: "Power1.easeOut(1, 1)",
          transformOrigin: "9% 10%",
          yPercent: 1,
        },
        "megaphoneraise"
      )
      .to(
        ".animation-forearm",
        {
          duration: 0.4,
          rotation: 13,
          ease: "Expo.easeInOut(1, 1)",
          transformOrigin: "40% 90%",
        },
        "megaphoneraise"
      )
      .addLabel("megaphone-item1")
      .to(".animation-megaphone", {
        duration: 0.1,
        scale: 1.15,
        ease: "Expo.easeInOut(1, 1)",
      })
      .to(".animation-megaphone", {
        duration: 0.1,
        scale: 1,
        ease: "Expo.easeInOut(1, 1)",
      })
      .addLabel("megaphone-item2")
      .to(".animation-megaphone", {
        duration: 0.1,
        scale: 1.15,
        delay: 0.2,
        ease: "Expo.easeInOut(1, 1)",
      })
      .to(".animation-megaphone", {
        duration: 0.1,
        scale: 1,
        ease: "Expo.easeInOut(1, 1)",
      })
      .addLabel("megaphone-item3")
      .to(".animation-megaphone", {
        duration: 0.1,
        scale: 1.15,
        delay: 0.2,
        ease: "Expo.easeInOut(1, 1)",
      })
      .to(".animation-megaphone", {
        duration: 0.1,
        scale: 1,
        ease: "Expo.easeInOut(1, 1)",
      })
      .addLabel("megaphone-item4")
      .to(".animation-megaphone", {
        duration: 0.1,
        scale: 1.15,
        delay: 0.2,
        ease: "Expo.easeInOut(1, 1)",
      })
      .to(".animation-megaphone", {
        duration: 0.1,
        scale: 1,
        ease: "Expo.easeInOut(1, 1)",
      })
      .addLabel("megaphone-item5")
      .to(".animation-megaphone", {
        duration: 0.1,
        scale: 1.15,
        delay: 0.2,
        ease: "Expo.easeInOut(1, 1)",
      })
      .to(".animation-megaphone", {
        duration: 0.1,
        scale: 1,
        ease: "Expo.easeInOut(1, 1)",
      })
      .fromTo(
        ".box",
        { scale: 0, yPercent: 50, xPercent: 200 },
        {
          duration: 1,
          scale: 2,
          yPercent: -70,
          xPercent: 400,
          opacity: 0,
          ease: "Power4.in(2, .1)",
          stagger: 0.4,
        },
        "-=1.8"
      )
      .addLabel("cheerleaders")
      .to(
        ".animation-arm_l",
        {
          duration: 0.4,
          rotation: 60,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "9% 10%",
          yPercent: -5,
        },
        "cheerleaders"
      )
      .to(
        ".animation-arm_r",
        {
          duration: 0.5,
          rotation: 65,
          xPercent: 2,

          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "13% 20%",
          onCompleteParams: ["rfist", "lhand"],
          onComplete: handChange,
        },
        "cheerleaders"
      ) 
      .to(
        ".animation-forearm_r",
        {
          duration: 0.5,
          rotation: 90,
          yPercent: 14,
          xPercent: -12,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "90% 90%",
          onCompleteParams: ["smile"],
          onComplete: faceChange,
        },
        "cheerleaders"
      )
      .to(
        ".animation-forearm",

        {
          duration: 1,
          rotation: 70,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "35% 90%",
        },
        "cheerleaders"
      )
      .to(
        ".animation-megaphone",

        {
          scale: 0,
          duration: 0.3,
          ease: "Power4.easeInOut(1, 1)",
        },
        "cheerleaders"
      )
      .to(
        ".animation-head",
        {
          rotation: 15,
          duration: 2,
        },
        "cheerleaders"
      )
      .to(
        ".animation-head",
        {
          duration: 0,
          onComplete: removeCheerleaders,
        },
        "cheerleaders"
      )*/
      .to(".animation-head", {
        rotation: 0,
        duration: 2,
        onCompleteParams: ["cringe"],
        onComplete: faceChange,
      })
      .to(".animation-head", {
        rotation: 10,
        duration: 0.8,
        onCompleteParams: ["mehd"],
        onComplete: faceChange,
      })
      .fromTo(
        ".animation-money",
        { yPercent: -500 },
        {
          duration: 1,
          strength: 40,
          squash: 3,
          yPercent: -10,
          ease: "Bounce.easeOut(500,900)",
        },
        "-=.6"
      )
      .fromTo(
        ".animation-cloud",
        { scaleY: 0, scaleX: 0 },
        {
          duration: 0.1,
          scaleY: 1,
          scaleX: 1.5,
        },
        "-=.6"
      )
      .to(
        ".animation-cloud",

        {
          duration: 1,
          scaleY: 0.5,
          scaleX: 1,
          opacity: 0,
          ease: "Power4.easeOut(1,1)",
        },
        "-=.5"
      )
      .to(".animation-cloud", {
        delay: 1,
        onCompleteParams: ["meh"],
        onComplete: faceChange,
      })
      .fromTo(
        ".animation-cloud",
        { scaleY: 0, scaleX: 0, opacity: 1 },
        {
          duration: 0.1,
          scaleY: 1.5,
          scaleX: 2.5,
          delay: 1,
        }
      )
      .addLabel("grabipad")
      .to(".animation-cloud", {
        duration: 1,
        scaleY: 0.5,
        scaleX: 1,
        opacity: 0,

        ease: "Power4.easeOut(1,1)",
      })

      .to(
        ".animation-money",
        {
          duration: 0.3,
          scale: 0,
          rotate: 180,
          ease: "Power.easeIn(1,1)",
        },
        "-=1"
      )
      .to(
        ".animation-head",
        {
          rotation: 15,
          duration: 0.4,
          onCompleteParams: ["happy"],
          onComplete: faceChange,
        },
        "grabipad"
      )

      .to(
        ".animation-arm_r",
        {
          duration: 0.4,
          rotation: 40,
          xPercent: 2,

          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "13% 20%",
          onCompleteParams: ["rfist", "lhand"],
          onComplete: handChange,
        },
        "grabipad"
      )
      .to(
        ".animation-forearm_r",
        {
          duration: 0.4,
          rotation: -130,

          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "90% 90%",
        },
        "grabipad"
      )
      .to(
        ".animation-arm_l",
        {
          duration: 0.4,
          rotation: 72,
          yPercent: -3,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "9% 10%",
        },
        "grabipad"
      )
      .to(
        ".animation-forearm",
        {
          duration: 0.4,
          rotation: 20,
          xPercent: -2,
          yPercent: 2,
          ease: "Expo.easeInOut(1, 1)",
          transformOrigin: "40% 90%",
          onCompleteParams: ["rhold", "lhold"],
          onComplete: handChange,
        },
        "grabipad"
      )
      .fromTo(
        ".animation-ipad",
        { yPercent: 200 },
        {
          duration: 0.6,
          yPercent: 0,
          ease: "Elastic.easeInOut(1, 1)",
          transformOrigin: "40% 90%",
        },
        "grabipad"
      );
    gsap.fromTo(
      ".animation-head",
      {
        rotation: 10,
      },
      {
        duration: 1,
        rotation: 0,
        ease: "Power1.easeInOut(1, 1)",
        transformOrigin: "50% 90%",
      }
    );
    gsap.to(".animation-arm_l", {
      duration: 1,
      rotation: -20,
      ease: "Power1.easeInOut(1, 1)",
      transformOrigin: "9% 10%",
    });
    gsap.to(".animation-forearm", {
      duration: 1,
      delay: 0.5,
      rotation: 13,
      ease: "Expo.easeInOut(1, 1)",
      transformOrigin: "40% 90%",
    });
    gsap.to(".animation-arm_r", {
      duration: 1,
      rotation: 55,
      ease: "Power1.easeInOut(1, 1)",
      transformOrigin: "13% 20%",
    });
    gsap.to(".animation-forearm_r", {
      duration: 1,
      rotation: -120,
      ease: "Expo.easeInOut(1, 1)",
      transformOrigin: "90% 90%",
    });

    /*
    gsap.to(".animation-forearm", {
      duration: 0.5,
      rotation: 100,
      ease: "Expo.easeInOut(1, 1)",
      yoyo: true,
      transformOrigin: "40% 90%",
      repeat: 200,
    });
    gsap.to(".animation-arm_r", {
      duration: 0.5,
      rotation: 40,
      ease: "Power1.easeInOut(1, 1)",
      yoyo: true,
      transformOrigin: "15% 33%",
      repeat: 200,
    });
    gsap.to(".animation-forearm_r", {
      duration: 0.5,
      rotation: 60,
      ease: "Expo.easeInOut(1, 1)",
      yoyo: true,
      transformOrigin: "80% 90%",
      repeat: 200,
    }); */
  }

  render() {
    return (
      <div className="animation-container">
        {this.state.cheerleaders ? (
          <>
            <Cheerleader
              cheer="animation-cheerleader-right"
              removeCheerleaders={this.removeCheerleaders}
            />
            <Cheerleader
              cheer="animation-cheerleader-left"
              removeCheerleaders={this.cheernull}
            />
          </>
        ) : null}

        <div className="animation-cloud">
          <div id="cloud">
            <img src={`/images/animation/cloud.svg`} />
          </div>
        </div>
        <div className="animation-money">
          <div id="money">
            <img src={`/images/animation/money.svg`} />
          </div>
        </div>
        <div className="animation-inventory">
          <div id="inventory">
            <img src={`/images/animation/inventory.svg`} />
          </div>
        </div>
        <div className="animation-handbagbroke">
          <div id="handbagbroke">
            <img src={`/images/animation/handbag_broke.svg`} />
          </div>
        </div>
        <div className="animation-truck">
          <div id="truck">
            <img src={`/images/animation/truck.svg`} />
          </div>
        </div>
        <div className="animation-50percent">
          <div id="50percent">
            <img src={`/images/animation/50percent.svg`} />
          </div>
        </div>
        <div className="animation-thoughtbubble">
          <div id="thoughtbubble">
            <img src={`/images/animation/bubble.svg`} />
          </div>
        </div>
        <div className="animation-balloons">
          <div id="balloons">
            <img src={`/images/animation/balloons.svg`} />
          </div>
        </div>
        <div className="animation-desk">
          <div id="desk">
            <img src={`/images/animation/desk.svg`} />
          </div>
        </div>
        <div className="animation-handbag">
          <div id="handbag">
            <img src={`/images/animation/handbag.svg`} />
          </div>
        </div>
        <div className="animation-pointer">
          <div id="pointer">
            <img src={`/images/animation/pointer.svg`} />
          </div>
        </div>
        <div className="animation-lady">
          <div className="box">Fart</div> <div className="box">Fart</div>
          <div className="box">Fart</div> <div className="box">Fart</div>
          <div className="box">Fart</div>
          <div className="animation-head">
            <div id="head">
              <img src="/images/animation/head.svg" />
            </div>
            <div id="face">
              <img src={`/images/animation/face_${this.state.face}.svg`} />
            </div>
          </div>
          <div className="animation-body">
            <div className="animation-ipad">
              <div id="ipad">
                <img src={`/images/animation/ipad.svg`} />
              </div>
            </div>
            <div className="animation-torso">
              <img src="/images/animation/body.svg" />
            </div>
            <div className="animation-arm_l">
              <div className="animation-upperarm">
                <img src="/images/animation/upperarm.svg" />
              </div>
              <div className="animation-forearm">
                <img
                  src={`/images/animation/forearm_${this.state.lhand}.svg`}
                />
              </div>
            </div>
            <div className="animation-arm_r">
              <div className="animation-upperarm_r">
                <img src="/images/animation/upperarm_r.svg" />
              </div>
              <div className="animation-forearm_r">
                <div className="animation-megaphone">
                  <div id="megaphone">
                    <img src={`/images/animation/megaphone.svg`} />
                  </div>
                </div>
                <img
                  src={`/images/animation/forearm_${this.state.rhand}.svg`}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div id="animation-upperarm">
          <img src="/images/animation/upperarm.svg" />
        </div>
        <div id="animation-forearm">
          <img src="/images/animation/forearm.svg" />
        </div>
        <div id="animation-upperarm_r">
          <img src="/images/animation/upperarm_r.svg" />
        </div>
        <div id="animation-forearm_r">
          <img src="/images/animation/forearm_r.svg" />
        </div> */}
      </div>
    );
  }
}
export default Animation;
