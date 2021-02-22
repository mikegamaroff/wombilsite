import React, { Component } from "react";

import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";
/* import AwsSliderStyles from "react-awesome-slider/src/styles.scss"; */

const brandPath = "/images/portfolio/brand/";
const fullstackPath = "/images/portfolio/fullstack/";
const mobilePath = "/images/portfolio/mobile/";

const brandPhotos = [
  brandPath + "cubeCou____ture_v1.jpg",
  brandPath + "cubeCou____ture_v2.jpg",
  brandPath + "cv_fur____ry.jpg",
  brandPath + "cv_pu____lse.jpg",
  brandPath + "citizentruck3.jpg",
  brandPath + "Filin____gs360_logo_v1_pageCorner.jpg",
  brandPath + "Filin____gs360_logo_v2_circle.jpg",
  brandPath + "QoS_998x650_SUN_overlay_BACKUP.jpg",
  brandPath + "gem____ify_v2_necklace2.jpg",
  brandPath + "gip____per1_v2.jpg",
  brandPath + "lern____oo1.jpg",
  brandPath + "lern____oo2.jpg",
  brandPath + "Adswagner.jpg",
  brandPath + "newScientistMini.jpg",
  brandPath + "logo-oxi____de.jpg",
  brandPath + "logo-peri____odic.jpg",
  brandPath + "logo-scri____pt.jpg",
  brandPath + "logo-sterb____oul.jpg",
  brandPath + "axe.jpg",
  brandPath + "bmwroadside.jpg",
  brandPath + "mara____thon_v1.jpg",
  brandPath + "mara____thon_v2.jpg",
  brandPath + "mara____thon_v3.jpg",
  brandPath + "mara____thon_v4.jpg",
  brandPath + "netw____orkyy1.jpg",

  brandPath + "revo____lution21_graffiti.jpg",
  brandPath + "revo____lution21_graffiti2.jpg",
  brandPath + "revo____lution21_halfStar.jpg",
  brandPath + "sep____tor.jpg",
  brandPath + "torq____uee.jpg",
  brandPath + "west____coast.jpg",
  brandPath + "accentureClearer.jpg",
  brandPath + "zan____ran1.jpg",
  brandPath + "zan____ran2.jpg",
  brandPath + "zan____ran3.jpg",
];

const fullstackPhotos = [
  fullstackPath + "legendary.jpg",
  fullstackPath + "FED-Challenge.jpg",
  fullstackPath + "fashionia.jpg",
  fullstackPath + "fashionib.jpg",
  fullstackPath + "PremiereCollectibles.jpg",
  fullstackPath + "bitlincs0.jpg",
  fullstackPath + "bitlincs1.jpg",
  fullstackPath + "bitlincs2.jpg",
  fullstackPath + "clubbattle1.jpg",
  fullstackPath + "clubbattle2.jpg",
  fullstackPath + "clubbattle3.jpg",
  fullstackPath + "snowWhite.jpg",
  fullstackPath + "vanish_master_final.jpg",
  fullstackPath + "virginHolidays1.jpg",
  fullstackPath + "virginHolidays3.jpg",
  fullstackPath + "anchorman.jpg",
  fullstackPath + "pubHero.jpg",
  fullstackPath + "nsXmas.jpg",
  fullstackPath + "missionRed.jpg",
  fullstackPath + "castroledge.jpg",
  fullstackPath + "guinness250_fund_phase02.jpg",
  fullstackPath + "Facebook_FootballLive_v1.3.jpg",
  fullstackPath + "catnabbers.jpg",
  fullstackPath + "changeReaction.jpg",
  fullstackPath + "gamescom.jpg",
  fullstackPath + "miniroar.jpg",
  fullstackPath + "justbecause.jpg",
  fullstackPath + "countyRoars1.jpg",
  fullstackPath + "countyRoars2.jpg",
  fullstackPath + "adoreme.jpg",
  fullstackPath + "wrigleys.jpg",
  fullstackPath + "airwick.jpg",
  fullstackPath + "TastyTunes1.jpg",
  fullstackPath + "TastyTunes2.jpg",
  fullstackPath + "cokecelebration.jpg",
  fullstackPath + "countryTime.jpg",
  fullstackPath + "teamone.jpg",
  fullstackPath + "OhhProfile.jpg",
  fullstackPath + "teamone1.jpg",
  fullstackPath + "baselineNutritionals1.jpg",
  fullstackPath + "countyRoar.jpg",
  fullstackPath + "endsleigh.jpg",
  fullstackPath + "gstarRaw.jpg",
  fullstackPath + "guinnessHurlingCubed.jpg",
  fullstackPath + "maltina.jpg",
  fullstackPath + "loveFilmLemsip.jpg",
  fullstackPath + "mebo.jpg",
];
const mobilePhotos = [
  mobilePath + "wheedl.jpg",
  mobilePath + "malibu.jpg",
  mobilePath + "bigleague.jpg",
  mobilePath + "minaj.jpg",
  mobilePath + "fonU2.jpg",
  mobilePath + "paramount.jpg",
  mobilePath + "mio.jpg",
  mobilePath + "getSet.jpg",
];

class PastWork extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    fullstack: true,
    mobile: false,
    branding: false,
  };
  setToggler = (val) => {
    this.setState({ [val]: this.state[val] == true ? false : true });
  };

  /* unitOn = (id) => {
    //  document.getElementById(id).className = "unitOver";

    TweenLite.fromTo(
      document.getElementById(id),
      0.3,
      { opacity: 0, display: "hidden" },
      {
        opacity: 1,
        display: "inherit",
        ease: Power4.easeOut,
        //  onComplete: this.tweenDone
      }
    );
  };
  unitOff = (id) => {
    TweenLite.fromTo(
      document.getElementById(id),
      0.3,
      { opacity: 1, display: "inherit" },
      {
        opacity: 0,
        display: "hidden",
        ease: Power4.easeOut,
        //  onComplete: this.tweenDone
      }
    );
  }; */
  render() {
    return (
      <div className="masonryHolder">
        <div className="logo">
          <img src="/images/portfolio/gd_Creds_hi-1.png" />
        </div>
        <FsLightbox toggler={this.state.branding} sources={brandPhotos} />
        <FsLightbox toggler={this.state.fullstack} sources={fullstackPhotos} />
        <FsLightbox toggler={this.state.mobile} sources={mobilePhotos} />
        <div className="categoryButtonsContainer">
          <div className="categoryButtons">
            <button onClick={() => this.setToggler("fullstack")}>Web</button>
            <button onClick={() => this.setToggler("mobile")}>Mobile</button>
            <button onClick={() => this.setToggler("branding")}>
              Branding
            </button>
            {/*       <button onClick={this.setToggler}>View my work</button> */}
          </div>
        </div>
        <div className="navLink">
          | <Link to="/">Home</Link> |
        </div>
      </div>
    );
  }
}

export default PastWork;
