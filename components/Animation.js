import React, { Component } from "react";
import { gsap, CSSPlugin } from "gsap";

import Cheerleader from "./Cheerleader";
gsap.registerPlugin(CSSPlugin);
let benefitsFromArrayY = [-1800, -1800, -1800, -1800, -1800, -1800, -1800];
let benefitsFromArrayX = [-600, -400, -200, 0, 200, 400, 600];
let marketingItemFromArrayY = [-300, -200, -400, -300, -300];
let marketingItemFromArrayX = [-250, -150, 100, -40, 150];
/* let benefitsArrayX = [100,200,300,400,500,600,700] */

let tl = gsap.timeline();
let tl2 = gsap.timeline();
class Animation extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    face: "ok",
    rhand: "rfist",
    lhand: "lhand",
    cheerleaders: false,
    ipad: "",
  };

  ipadChange = (ipad) => {
    this.setState({ ipad: ipad });
  };
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
  pause = () => {
    tl.pause();
  };
  play = () => {
    tl.play("grabipad");
  };
  componentDidMount() {
    let faceChange = this.faceChange;
    let handChange = this.handChange;
    let ipadChange = this.ipadChange;
    let removeCheerleaders = this.removeCheerleaders;
    let textChange = this.props.textChange;

    tl.addLabel("text1_thinkingofselling")
      .fromTo(
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
      .to(
        ".animation-arm_l",
        {
          duration: 1,
          rotation: -20,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "9% 10%",
        },
        "text1_thinkingofselling"
      )
      .to(
        ".animation-forearm",
        {
          duration: 1,
          delay: 0.5,
          rotation: 13,
          ease: "Expo.easeInOut(1, 1)",
          transformOrigin: "40% 90%",
        },
        "text1_thinkingofselling"
      )
      .to(
        ".animation-arm_r",
        {
          duration: 1,
          rotation: 55,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "13% 20%",
        },
        "text1_thinkingofselling"
      )
      .to(
        ".animation-forearm_r",
        {
          duration: 1,
          rotation: -120,
          ease: "Expo.easeInOut(1, 1)",
          transformOrigin: "90% 90%",
        },
        "text1_thinkingofselling"
      )
      .fromTo(
        ".animation-head",
        {
          rotation: 10,
        },
        {
          duration: 1,
          rotation: 0,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "50% 90%",
        },
        "text1_thinkingofselling"
      )
      .fromTo(
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
        "+=.5"
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
      // TEXT CHANGE
      .addLabel("text2_maybeAlreadyAre")
      .to(".textChanger", {
        duration: 0,
        onComplete: textChange,
      })
      .fromTo(
        ".animation-desk",
        {
          yPercent: 430,
        },
        {
          yPercent: 0,
          duration: 1,

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
      // TEXT CHANGE
      .addLabel("text3_byNowYouRealize")
      .to(".textChanger", {
        duration: 0,

        onComplete: textChange,
      })

      .to(".textChanger", {
        delay: 3,

        onComplete: textChange,
      })
      .addLabel("text4_thanSimplySetting")
      .fromTo(
        ".animation-sign",
        {
          rotate: -180,
          /*     yPercent: -300, */
        },
        {
          rotate: 0,
          delay: 3,
          /*   yPercent: 0, */
          duration: 1,
          transformOrigin: "50% 0%",
          ease: "Elastic.easeOut(1, 1)",
        },
        "text4_thanSimplySetting"
      )

      .to(
        ".animation-head",
        {
          rotation: 0,
          duration: 1,
          delay: 0,
          ease: "Power1.easeInOut(1, 1)",
          onCompleteParams: ["meh"],
          onComplete: faceChange,
        },
        "text4_thanSimplySetting",
        "=-2"
      )
      .to(
        ".animation-desk",
        {
          duration: 0.5,
          yPercent: 100,
          delay: 3,
          ease: "Power1.easeInOut(1, 1)",
        },
        "-=.5"
      ) // TEXT CHANGE
      .addLabel("text5_whatabouteverythingelse")
      .to(
        ".textChanger",
        {
          duration: 0,
          onComplete: textChange,
        },
        "-=.5"
      )
      .to(
        ".animation-sign",
        {
          yPercent: -300,
          duration: 1,
          transformOrigin: "50% 0%",
          ease: "Power4.easeIn(1, 1)",
        },
        "-=1"
      )
      .to(".animation-head", {
        rotation: 0,
        duration: 0.5,
        onCompleteParams: ["rhand", "lhand"],
        onComplete: handChange,
      })
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
        "text5_whatabouteverythingelse"
      )
      .fromTo(
        ".animation-inventory",
        {
          scale: 1,
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
          scale: 1,
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
        ease: "Expo.easeIn(1, 1)",
      })
      .to(".animation-forearm_r", {
        duration: 0.5,
        rotation: 10,
        yPercent: 12,
        xPercent: 3,
        ease: "Power1.easeInOut(1, 1)",
        transformOrigin: "90% 90%",
        onCompleteParams: ["shout"],
        onComplete: faceChange,
      })
      // TEXT CHANGE
      .addLabel("text6_orTheFullTimeJob")
      .to(".textChanger", {
        duration: 0,
        onComplete: textChange,
      })
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
        "text6_orTheFullTimeJob"
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
        "text6_orTheFullTimeJob"
      )
      .to(
        ".animation-forearm",
        {
          duration: 0.4,
          rotation: 13,
          ease: "Expo.easeInOut(1, 1)",
          transformOrigin: "40% 90%",
        },
        "text6_orTheFullTimeJob"
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
      // TEXT CHANGE
      .addLabel("text7_orMakingSureOneTimeCustomers")
      .to(".textChanger", {
        duration: 0,
        onComplete: textChange,
      })
      .to(
        ".animation-arm_l",
        {
          duration: 0.4,
          rotation: 60,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "9% 10%",
          yPercent: -5,
        },
        "text7_orMakingSureOneTimeCustomers"
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
        "text7_orMakingSureOneTimeCustomers"
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
        "text7_orMakingSureOneTimeCustomers"
      )
      .to(
        ".animation-forearm",

        {
          duration: 1,
          rotation: 70,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "35% 90%",
        },
        "text7_orMakingSureOneTimeCustomers"
      )
      .to(
        ".animation-megaphone",

        {
          scale: 0,
          duration: 0.3,
          ease: "Power4.easeInOut(1, 1)",
        },
        "text7_orMakingSureOneTimeCustomers"
      )
      .to(
        ".animation-head",
        {
          rotation: 15,
          duration: 2,
        },
        "text7_orMakingSureOneTimeCustomers"
      )

      .to(
        ".animation-head",
        {
          duration: 0,
          onComplete: removeCheerleaders,
        },
        "text7_orMakingSureOneTimeCustomers"
      )
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
      // TEXT CHANGE
      .addLabel("text8_soundsExpensive")
      .to(
        ".textChanger",
        {
          duration: 0,
          onComplete: textChange,
        },
        "-=1"
      )
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
      // TEXT CHANGE
      .addLabel("text9_wombilTurnkey")
      .to(
        ".textChanger",
        {
          duration: 0,
          onComplete: textChange,
        },
        "-=1"
      )
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
          rotation: 30,
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
          rotation: -120,
          yPercent: -5,
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
      )
      .fromTo(
        ".benefit",
        {
          yPercent: (index, elem) => {
            return benefitsFromArrayY[index];
          },
          xPercent: (index, elem) => {
            return benefitsFromArrayX[index];
          },
        },
        {
          duration: 1,
          yPercent: 0,
          xPercent: 0,
          stagger: 0.3,
          ease: "Power4.easeOut(1, 1)",
        },
        "-=.1"
      )
      .to(".benefit", { duration: 0.3, stagger: 0.3, opacity: 0 }, "-=2.1 ")
      .to(".animation-head", {
        rotation: 0,
        duration: 0.4,
        onCompleteParams: ["elated"],
        onComplete: faceChange,
      })
      /////// BILL NOTE
      .addLabel("fallingBill")
      .fromTo(
        ".animation-bill",
        { rotate: -50 },
        {
          rotate: 50,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "0% -50%",
        },
        "fallingBill"
      )
      .fromTo(
        ".animation-bill",
        { yPercent: -250 },
        {
          yPercent: 800,
          duration: 5,
        },
        "fallingBill"
      )
      .fromTo(
        ".animation-ipadBig",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 3,
          duration: 0.01,
        },
        "fallingBill"
      )
      // TEXT CHANGE
      .addLabel("text10_lowMonthlyFee")
      .to(
        ".textChanger",
        {
          duration: 0,
          onComplete: textChange,
        },
        "-=3"
      )
      .to(".pause", {
        duration: 3,
      })
      .to(".itemLabel", {
        css: { display: "none" },
      })
      .addLabel("ipadGrow")
      .to(".animation-ipadBig", {
        rotationY: 80,
        scale: 2,
        duration: 0.5,
        yPercent: -80,
        xPercent: 80,

        ease: "Power1.easeIn(1, 1)",
      })
      .to(".animation-lady", {
        duration: 0.01,
        css: { zIndex: 8 },
      })
      .to(".animation-ipadBig", {
        duration: 0.01,
        css: { display: "none" },
      })
      .fromTo(
        ".animation-laptop",
        { rotationY: 90 },
        {
          rotationY: 0,

          duration: 1,
          scale: 1,
          ease: "Power4.easeOut(1, 1)",
          transformOrigin: "50% 100%",
        }
      )
      .to(
        ".animation-ipad",
        {
          opacity: 0,
          duration: 0.1,
        },
        "ipadGrow"
      )
      .to(
        ".animation-lady",
        {
          duration: 1,
          yPercent: 40,
          xPercent: -15,

          ease: "Power1.easeInOut(1, 1)",
          onCompleteParams: ["happyUp"],
          onComplete: faceChange,
        },
        "ipadGrow"
      )
      .to(
        ".animation-head",

        {
          duration: 1,
          rotation: -15,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "50% 90%",
        },
        "ipadGrow"
      )
      .addLabel("text11_beautifullyBrandedStore")
      .to(
        ".textChanger",
        {
          duration: 0,
          onComplete: textChange,
        },
        "-=1"
      )
      .fromTo(
        ".animation-store",
        { scale: 0 },
        {
          scale: 1,
          duration: 0.6,
          delay: 0.6,
          ease: "Elastic.easeOut(1, 1)",
        },
        "ipadGrow"
      )
      .to(".animation-store", {
        scaleY: 0,
        duration: 0.3,
        delay: 3,
        ease: "Power4.easeOut(1, 1)",
      })
      .fromTo(
        ".animation-inventory",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          xPercent: -35,
          yPercent: 0,
          duration: 0.5,
          ease: "Elastic.easeOut(1, 1)",
        },
        "-=.3"
      )
      .to(".animation-inventory", {
        scaleY: 0,
        duration: 0.3,
        delay: 1,
        ease: "Power4.easeOut(1, 1)",
      })
      .fromTo(
        ".animation-truck",
        { scale: 0.5, opacity: 0, xPercent: 0 },
        {
          scale: 1,
          opacity: 1,
          xPercent: -40,
          yPercent: 30,
          duration: 0.5,
          ease: "Elastic.easeOut(1, 1)",
          transformOrigin: "150% 220%",
        },
        "-=.3"
      )
      .to(".animation-truck", {
        xPercent: -100,
        opacity: 0,
        duration: 0.3,
        delay: 1,
        ease: "Power4.easeIn(1, 1)",
      })
      .fromTo(
        ".package",
        { scale: 0, rotation: -20 },
        {
          duration: 0.7,
          rotation: 0,
          scale: 1,
          ease: "Elastic.easeOut(1, 1)",
          stagger: 0.1,
        }
      )
      .to(
        ".package",

        {
          duration: 0.5,
          scale: 0,
          rotation: 20,
          delay: 1,
          ease: "Power4.easeIn(2, .1)",
          stagger: 0.1,
        }
      )
      .fromTo(
        ".dollar",
        { scale: 0, rotation: -30 },
        {
          duration: 0.5,
          rotation: 0,
          scale: 1,
          ease: "Elastic.easeOut(1, 1)",
          stagger: 0.1,
        },
        "-=.8"
      )
      .to(
        ".dollar",

        {
          duration: 0.5,
          scale: 0,
          rotation: 20,
          delay: 1,
          ease: "Power4.easeIn(2, .1)",
          stagger: 0.1,
        }
      )
      .fromTo(
        ".marketing-item",
        {
          yPercent: -40,
          xPercent: 0,
          scale: 0,
        },
        {
          duration: 1,
          yPercent: (index, elem) => {
            return marketingItemFromArrayY[index];
          },
          xPercent: (index, elem) => {
            return marketingItemFromArrayX[index];
          },
          scale: 1,
          stagger: 0.2,
          ease: "Elastic.easeOut(1, 1)",
        },
        "-=1"
      )
      .fromTo(
        ".marketing-measure",
        {
          scale: 0,
        },
        {
          duration: 0.6,
          scale: 1,
          ease: "Elastic.easeOut(1, 1)",
        },
        "-=.5"
      )
      .addLabel("endscene", "+=2")
      .to(
        ".marketing-item",
        {
          xPercent: 600,
          duration: 1,
          scale: 1,
          stagger: 0.2,
          ease: "Power3.easeIn(1, 1)",
        },
        "endscene"
      )
      .to(
        ".animation-laptop",
        {
          yPercent: 600,
          duration: 1,
          scale: 1,
          ease: "Power3.easeIn(1, 1)",
        },
        "endscene"
      )
      .to(
        ".marketing-measure",
        {
          yPercent: 600,
          duration: 1,
          scale: 1,
          ease: "Power3.easeIn(1, 1)",
        },
        "endscene"
      )
      .to(
        ".animation-lady",
        {
          duration: 1.3,
          yPercent: 0,
          xPercent: -15,

          ease: "Power1.easeInOut(1, 1)",
          onCompleteParams: ["happyUp"],
          onComplete: faceChange,
        },
        "endscene"
      )
      .to(
        ".animation-head",

        {
          duration: 1,
          rotation: 0,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "50% 90%",
        },
        "endscene"
      )
      .to(
        ".animation-arm_r",
        {
          duration: 1,
          rotation: 40,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "13% 20%",
        },
        "endscene"
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
        },
        "endscene"
      )
      .to(
        ".animation-arm_l",
        {
          duration: 0.4,
          rotation: 20,
          yPercent: -3,
          ease: "Power1.easeInOut(1, 1)",
          transformOrigin: "9% 10%",
        },
        "endscene"
      )
      .to(
        ".animation-forearm",
        {
          duration: 0.4,
          rotation: 120,
          xPercent: -19,
          yPercent: -5,
          ease: "Expo.easeInOut(1, 1)",
          transformOrigin: "40% 90%",
          onCompleteParams: ["rhand", "lhand"],
          onComplete: handChange,
        },
        "endscene"
      );

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
        <div className="animation-marketing">
          <div className="marketing-chat marketing-item">
            <img src={`/images/animation/marketing/chat.svg`} />
          </div>
          <div className="marketing-fb marketing-item">
            <img src={`/images/animation/marketing/fb.svg`} />
          </div>
          <div className="marketing-jet marketing-item">
            <img src={`/images/animation/marketing/jet.svg`} />
          </div>
          <div className="marketing-measure">
            <img src={`/images/animation/marketing/measure.svg`} />
          </div>
          <div className="marketing-search marketing-item">
            <img src={`/images/animation/marketing/search.svg`} />
          </div>
          <div className="marketing-twitter marketing-item">
            <img src={`/images/animation/marketing/twitter.svg`} />
          </div>
        </div>
        <div className="animation-dollars">
          <div className="dollar">
            <img src={`/images/animation/dollar.svg`} />
          </div>
          <div className="dollar">
            <img src={`/images/animation/dollar.svg`} />
          </div>
          <div className="dollar">
            <img src={`/images/animation/dollar.svg`} />
          </div>
          <div className="dollar">
            <img src={`/images/animation/dollar.svg`} />
          </div>
          <div className="dollar">
            <img src={`/images/animation/dollar.svg`} />
          </div>
          <div className="dollar">
            <img src={`/images/animation/dollar.svg`} />
          </div>
          <div className="dollar">
            <img src={`/images/animation/dollar.svg`} />
          </div>
          <div className="dollar">
            <img src={`/images/animation/dollar.svg`} />
          </div>
          <div className="dollar">
            <img src={`/images/animation/dollar.svg`} />
          </div>
          <div className="dollar">
            <img src={`/images/animation/dollar.svg`} />
          </div>
        </div>
        <div className="animation-packagelabels">
          <div className="package">
            <img src={`/images/animation/package.svg`} />
          </div>
          <div className="package">
            <img src={`/images/animation/package.svg`} />
          </div>

          <div className="package">
            <img src={`/images/animation/package.svg`} />
          </div>
          <div className="package">
            <img src={`/images/animation/package.svg`} />
          </div>
          <div className="package">
            <img src={`/images/animation/package.svg`} />
          </div>
          <div className="package">
            <img src={`/images/animation/package.svg`} />
          </div>
          <div className="package">
            <img src={`/images/animation/package.svg`} />
          </div>
          <div className="package">
            <img src={`/images/animation/package.svg`} />
          </div>
        </div>
        <div className="animation-ipadBig">
          <div>
            <img src={`/images/animation/ipad${this.state.ipad}.svg`} />
          </div>
        </div>
        <div className="animation-store">
          <div>
            <img src={`/images/animation/store.svg`} />
          </div>
        </div>
        <div className="animation-laptop">
          <div>
            <img src={`/images/animation/laptop.svg`} />
          </div>
        </div>
        <div className="buttonMovie" onClick={this.pause}>
          Pause
        </div>
        <div className="buttonMovie" onClick={this.play}>
          Go
        </div>
        <div className="animation-sign">
          <div id="sign">
            <img src={`/images/animation/sign.svg`} />
          </div>
        </div>
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
        <div className="animation-bill">
          <div id="bill">
            <img src={`/images/animation/bill.svg`} />
          </div>
        </div>
        <div className="animation-inventory">
          <div className="itemLabel">Inventory Management</div>
          <div id="inventory">
            <img src={`/images/animation/inventory.svg`} />
          </div>
        </div>
        <div className="animation-handbagbroke">
          <div className="itemLabel">Returns</div>
          <div id="handbagbroke">
            <img src={`/images/animation/handbag_broke.svg`} />
          </div>
        </div>

        <div className="animation-truck">
          <div className="itemLabel">Shipping</div>
          <div id="truck">
            <img src={`/images/animation/truck.svg`} />
          </div>
        </div>
        <div className="animation-50percent">
          <div className="itemLabel">Discounting</div>
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
          <div className="itemLabel">Promotions</div>
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
            <div className="benefitsHolder">
              <div className="benefit"> </div> <div className="benefit"></div>
              <div className="benefit"> </div> <div className="benefit"></div>
              <div className="benefit"></div> <div className="benefit"></div>
              <div className="benefit"></div>
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
