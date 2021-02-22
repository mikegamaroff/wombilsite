import React, { Component, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "../css/loginStyles";
import Divider from "../css/divider.svg";
import Divider2 from "../css/divider2.svg";
import Dividerb from "../css/dividerb.svg";
import Divider2b from "../css/divider2b.svg";
import FooterPink from "../css/footer_pink.svg";
import FooterBlue from "../css/footer_blue.svg";
import BeyondTheAd from "../css/beyondTheAd.svg";
import { TweenLite, Power4 } from "gsap/all";
import axios from "axios";

let slideNum;

const BlueDividerRight = () => (
  <div className="divider2">
    <img
      src={Divider2}
      data-aos="slide-left"
      data-aos-offset="100"
      data-aos-easing="ease-out-quad"
      data-aos-duration="900"
    />
  </div>
);

const BlueDividerLeft = () => (
  <div className="divider2b">
    <img
      src={Divider2b}
      data-aos="slide-right"
      data-aos-offset="100"
      data-aos-easing="ease-out-quad"
      data-aos-duration="900"
    />
  </div>
);
const PinkDividerRight = () => (
  <div className="divider">
    <img
      src={Divider}
      data-aos="slide-left"
      data-aos-offset="100"
      data-aos-easing="ease-out-quad"
      data-aos-duration="500"
    />
  </div>
);

const PinkDividerLeft = () => (
  <div className="dividerb">
    <img
      src={Dividerb}
      data-aos="slide-right"
      data-aos-offset="100"
      data-aos-easing="ease-out-quad"
      data-aos-duration="500"
    />
  </div>
);

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    news: [],
    topslide: 0,
    bottomslide: 1,
    currentlyLoading: null,
  };

  newSlideFlip = () => {
    slideNum = Math.floor(Math.random() * 31);

    this.setState({ bottomslide: slideNum, currentlyLoading: "first" }, () => {
      if (!this.state.currentlyLoading) {
        this.slideChange();
      }
    });
  };

  slideReset = () => {
    this.setState({ topslide: this.state.bottomslide }, () => {
      // this.newSlideFlip();

      TweenLite.to(document.getElementById("topslide"), 0.1, {
        opacity: 1,
        display: "block",
        onComplete: this.newSlideFlip,
      });
    });
  };

  slideChange = () => {
    TweenLite.fromTo(
      document.getElementById("topslide"),
      2,
      { opacity: 1, display: "block" },
      {
        opacity: 0,
        display: "none",
        delay: 3,
        ease: Power4.easeOut,
        onComplete: this.slideReset,
      }
    );
  };
  slideLoaded() {
    if (this.state.currentlyLoading) {
      this.slideChange();
    }
    //  this.newSlideFlip();
    console.log("loaded");
  }
  componentDidMount() {
    /* axios
      .get("https://us-central1-mikegamaroff-8ec96.cloudfunctions.net/getNews")
      .then((res) => {
        console.log(res.data);
        this.setState({ news: res.data });
      })
      .catch((err) => {
        console.log(err);
      }); */
    // this.slideChange();
    Aos.init();
    this.slideChange();
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    this.setState({ sending: true, errors: {} });
    e.preventDefault();
    axios
      .post(
        "https://us-central1-mikegamaroff-8ec96.cloudfunctions.net/sendEmail",
        this.state
      )
      .then((res) => {
        console.log(res);
        this.setState({ sending: false, sent: true });
      })
      .catch((err) => {
        this.setState({ sending: false, errors: err.response.data });
        console.log(err.response.data);
      });
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <div>
        {" "}
        <section className="blackback" id="plain">
          <div className="header">
            <div>
              <div className="headerImage">
                <img src="/images/mainLogo.svg" />
              </div>
              <div className="mainTitles">
                <h2
                  id="color1"
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-easing="ease-out"
                  data-aos-duration="500"
                >
                  brand activation
                </h2>
                <h2
                  id="color2"
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-easing="ease-out"
                  data-aos-duration="600"
                >
                  crypto e-commerce
                </h2>
                <h2
                  id="color3"
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-easing="ease-out"
                  data-aos-duration="700"
                >
                  smart contracts
                </h2>
                <h2
                  id="color4"
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-easing="ease-out"
                  data-aos-duration="800"
                >
                  web apps
                </h2>
              </div>
            </div>
            <div className="slideShow">
              <div className="screenHolder">
                <img id="screen" src="/images/macimage.png" />
                <img
                  id="topslide"
                  src={"/images/macPngs/" + this.state.topslide + ".png"}
                />
                <img
                  id="bottomslide"
                  onLoad={this.slideLoaded.bind(this)}
                  src={"/images/macPngs/" + this.state.bottomslide + ".png"}
                />
              </div>
              {/*       <img src="/images/portfolio/fullstack/virginHolidays1.jpg" /> */}
            </div>
          </div>

          <PinkDividerRight />
        </section>
        <section id="light">
          <BlueDividerLeft />
          <BlueDividerRight />
          <div className="innerContentContainer">
            <div className="beyondTheAd">
              <h2 id="light">engage beyond the ad</h2>

              <img id="beyond" src={BeyondTheAd} alt="Beyond the ad" />

              <div id="blurb">
                Consumers enjoy being challenged, entertained, enticed, helped,
                educated and enthralled. It’s the only way to forge meaningful
                relationships that last beyond the click.
              </div>
            </div>
          </div>
        </section>
        <section className="blackback" id="plain">
          <PinkDividerLeft />
          <PinkDividerRight />
          <div className="innerContentContainer">
            <h2 id="dark">get it here</h2>
            <div className="serviceCards">
              <div
                className="serviceCard"
                id="color1"
                data-aos="fade-down"
                data-aos-offset="150"
                data-aos-easing="ease-in-out-cubic"
                data-aos-duration="500"
              >
                <h2 id="service">
                  brand
                  <br />
                  activation
                </h2>

                <p>
                  Contests, challenges, mini-games, incentives, sampling,
                  couponing, location-based, events, social sharing, display
                  media units, mobile experiential and more.
                </p>
              </div>
              <div
                className="serviceCard"
                id="color2"
                data-aos="fade-down"
                data-aos-offset="150"
                data-aos-easing="ease-in-out-cubic"
                data-aos-duration="700"
              >
                <h2 id="service">
                  crypto
                  <br />
                  e-commerce
                </h2>

                <p>
                  Bitcoin payment apps, rewards, virtual currency, tokens,
                  digital collectibles, wallets, exchange rate calculators,
                  invoicing, statements, fintech.
                </p>
              </div>
              <div
                className="serviceCard"
                id="color3"
                data-aos="fade-down"
                data-aos-offset="150"
                data-aos-easing="ease-in-out-cubic"
                data-aos-duration="900"
              >
                <h2 id="service">
                  smart
                  <br />
                  contracts
                </h2>

                <p>
                  Digital rights management, fractional commodity trading, data
                  privacy, service exchange, supply chain management, identity,
                  gaming
                </p>
              </div>
              <div
                className="serviceCard"
                id="color4"
                data-aos="fade-down"
                data-aos-offset="150"
                data-aos-easing="ease-in-out-cubic"
                data-aos-duration="1100"
              >
                <h2 id="service">
                  web
                  <br />
                  apps
                </h2>

                <p>
                  Utilities, business tools,  e-learning, platforms, social
                  networking, communication, online stores, multimedia, UX/UI,
                  full-stack development, responsive web sites.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="light">
          <BlueDividerRight />
          <BlueDividerLeft />
          <div className="innerContentContainer">
            <h2 id="light">they seem to like it</h2>
            <div className="logoContainer">
              <div className="logoFrame">
                <img src="images/logos/logo1.png" />
              </div>
              <div className="logoFrame">
                <img src="images/logos/logo2.png" />
              </div>
              <div className="logoFrame">
                <img src="images/logos/logo3.png" />
              </div>
              <div className="logoFrame">
                <img src="images/logos/logo4.png" />
              </div>
              <div className="logoFrame">
                <img src="images/logos/logo5.png" />
              </div>
              <div className="logoFrame">
                <img src="images/logos/logo6.png" />
              </div>
              <div className="logoFrame">
                <img src="images/logos/logo7.png" />
              </div>
              <div className="logoFrame">
                <img src="images/logos/logo8.png" />
              </div>
              <div className="logoFrame">
                <img src="images/logos/logo9.png" />
              </div>
              <div className="logoFrame">
                <img src="images/logos/logo10.png" />
              </div>
            </div>
          </div>
        </section>
        <section className="blackback" id="nashville">
          <PinkDividerLeft />
          <div className="divider">
            <img
              src={FooterPink}
              data-aos="slide-left"
              data-aos-offset="150"
              data-aos-easing="ease-out-quad"
              data-aos-duration="500"
            />
          </div>
          <div className="footerblue">
            <img
              src={FooterBlue}
              data-aos="slide-left"
              data-aos-offset="150"
              data-aos-easing="ease-out-quad"
              data-aos-duration="900"
            />
          </div>

          <div className="innerContentContainer">
            <div className="formContainer">
              <div>
                <h2 id="contact">Get in touch</h2>

                <p id="shortp">Send us a note to get in touch.</p>

                <form noValidate className={classes.root}>
                  <div className="accountTable">
                    <div className="createCampaignFields">
                      <div className="textFieldContainer">
                        <TextField
                          /* id="email" */
                          name="name"
                          label="Name"
                          id="standard-basic"
                          defaultValue={""}
                          autoComplete="off"
                          onChange={this.handleChange}
                          fullWidth
                          helperText={errors && errors.name}
                          error={errors && errors.name ? true : undefined}
                          InputProps={{
                            className: classes.input,
                            style: { padding: "10px" },
                          }}
                          InputLabelProps={{
                            className: classes.label,
                            style: { padding: "10px" },
                          }}

                          //sclassName={classes.textField}
                        ></TextField>
                      </div>

                      <div className="textFieldContainer">
                        <TextField
                          /* id="email" */
                          name="from"
                          label="Email"
                          id="standard-basic"
                          defaultValue={""}
                          autoComplete="off"
                          fullWidth
                          onChange={this.handleChange}
                          helperText={errors && errors.from}
                          error={errors && errors.from ? true : undefined}
                          InputProps={{
                            className: classes.input,
                            style: { padding: "10px" },
                          }}
                          InputLabelProps={{
                            className: classes.label,
                            style: { padding: "10px" },
                          }}
                          x

                          //sclassName={classes.textField}
                        ></TextField>
                      </div>

                      <div className="textFieldContainer">
                        <TextField
                          /* id="email" */
                          name="message"
                          label="Message"
                          id="standard-basic"
                          defaultValue={""}
                          autoComplete="off"
                          fullWidth
                          multiline
                          rows={3}
                          onChange={this.handleChange}
                          helperText={errors && errors.message}
                          error={errors && errors.message ? true : undefined}
                          InputLabelProps={{
                            className: classes.label,
                            style: { padding: "10px" },
                          }}
                          InputProps={{
                            className: classes.input,
                            style: { height: "80px", padding: "10px" },
                          }}
                          //className={classes.textField}
                        ></TextField>
                      </div>
                    </div>
                    <div className="loginButtonContainerAccount">
                      {!this.state.sent ? (
                        <Button
                          onClick={this.handleSubmit}
                          disabled={this.state.sending}
                          variant="contained"
                          className={classes.button}
                          color="primary"
                        >
                          {this.state.sending ? "Sending" : "Send"}
                        </Button>
                      ) : (
                        <div className="thankyouMessage">
                          <img src="/images/copyComplete.gif" />
                          <div>
                            Thank you for your message. I'll be in touch
                            shortly.
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/*   <p>{errors && errors.error.general}</p> */}
                </form>
              </div>
              <div className="basedInContainer">
                <div className="basedIn">
                  <div className="basedInFlag">
                    <img src="/images/TN.png" />
                  </div>
                  Based in Nashville, TN
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Unit;
