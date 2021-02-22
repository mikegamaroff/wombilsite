import React, { Component } from "react";

import './css/main.css';
import './css/noscript.css';
import axios from "axios";
import moment from "moment";
export class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    news: []
  };

  componentDidMount() {
    axios
      .get("https://us-central1-mikegamaroff-8ec96.cloudfunctions.net/getNews")
      .then(res => {
        console.log(res.data)
        this.setState({ news: res.data })
      }).catch(err => {
        console.log(err)
      })
  }

  render() {



    return (
      <div className="App">
        <section id="header">
          <div className="inner">
            <span className="mainPhoto"><img src="/images/talkanim.gif" /></span>
            <div className="blackBack">
              <h1>Mike Gamaroff</h1>
              <p>If it aint broke, break it.</p></div>
            <ul className="actions special">
              <li><a href="#one" className="button scrolly">Start</a></li>
            </ul>
          </div>
        </section>


        <section id="one" className="main style1">
          <div className="summaryHolder">
            <div className="summaryContainer">
              <div >
                <header className="major">
                  <h2>Summary</h2>
                </header>
                <p>My specialties are rooted in the emerging and converging media landscape, with a focus on IoT, mobile, data and social influencer marketing. I also consult on executive coaching, corporate relationship management and employee personal development for optimal organizational efficiency and performance.</p>

                <p>Since 1999, I have worked for leading digital marketing agencies in a wide mix of disciplines such as creative direction, application of emerging technology for media and advertising, programmatic buying implementation, data logic and software design.</p>
                <p>Following the founding and successful acquisition of my own London-based brand activation agency by advertising giant WPP, I became head of Innovation for Kinetic Worldwide in New York, WPP's Out of Home media buying arm, and the largest buyer of outdoor media in the world. I then achieved the most prestigious US immigration category as an “Alien of Extraordinary Ability” for my contributions to the industry.</p>

                <p>Having been immersed deeply in many spheres of the media world, - in companies big, small and self-started - both in emerging digital and traditional channels, I can comfortably claim a wealth of unique insights which are always solidly backed with proven revenue-generating thrust. </p>
              </div>
              <div className="specialties">

                <div>
                  <span className=""><img src="/images/skills/media.jpg" alt="" /></span>


                  <p>14 years of deep immersion in media strategy and buying, serving in agencies big and small - with a specific focus in online, social and digital outdoor media.</p>

                </div>
                <div>
                  <span className=""><img src="/images/skills/creative.jpg" alt="" /></span>


                  <p>With a career forged in digital design and creative direction for online media, I am in tune with developing creative technology trends and have an award-winning track record</p>

                </div>
                <div>
                  <span className=""><img src="/images/skills/businessStrategy.jpg" alt="" /></span>


                  <p>Having completed one successful exit, I have a talent for helping pivot companies towards revenue growth through innovation</p>

                </div>
                <div>
                  <span className=""><img src="/images/skills/executiveCoaching.jpg" alt="" /></span>


                  <p>A strong EQ amd interpersonal communication skill has led companies to trust me to develop corporate skills in staff at all levels</p>

                </div>
                <div>
                  <span className=""><img src="/images/skills/leadership.jpg" alt="" /></span>


                  <p>I have served in leadership positions since early in my career, and I applied these skills to grow a successful creative technology business. I lead through listening and inward reflection.</p>

                </div>
                <div>
                  <span className=""><img src="/images/skills/mobile.jpg" alt="" /></span>


                  <p>I shifted directly into the emerging mobile channel in 2009, I've developed or presided over countless campaigns, apps and products, as well a focus on media, data strategy and geolocation</p>

                </div>
                <div>
                  <span className=""><img src="/images/skills/dataStrategy.jpg" alt="" /></span>


                  <p>Being passionate about data, much of my career has involved analysis, contextual planning, audience insights centering around emerging sources of data.</p>

                </div>
                <div>
                  <span className=""><img src="/images/skills/softwareEngineer.jpg" alt="" /></span>


                  <p>As a former software engineer, I have developed or presided over campaigns, apps and branded products using VR/AR, proximity, IoT, face and eye tracking, gesture control and more.</p>

                </div>

              </div>
            </div>
          </div >
        </section >


        <section id="two" className="main style2">
          <header className="major">
            <h2>Past roles</h2>
          </header>
          <div className="jobContainer">
            <div className="container">
              <div className="jobHolder">
                <div className="jobHolderImage">
                  <img src="images/pastRoles/buntin.jpg" alt="" />
                </div>
                <div className="">
                  <header className="major">
                    <h3>The Buntin Group</h3>
                    <h4>Nashville, TN - 2019</h4>
                  </header>
                  <p>EVP of Technology at TBG, the largest independent full-service advertising agency in the United States, helping clients derive measurable business goals with cutting edge consumer and business innovation.</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="jobHolder">
                <div className="jobHolderImage">
                  <img src="images/pastRoles/varius.jpg" alt="" />
                </div>
                <div className="">
                  <header className="major">

                    <h3>Varius</h3>
                    <h4>Venice, CA - 2018</h4>
                  </header>
                  <p>Brand activation startup focusing on innovative use of blockchain technologies to help advertisers reach and engage consumers in more meaningful and longer term ways.</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="jobHolder">
                <div className="jobHolderImage">
                  <img src="images/pastRoles/sito.jpg" alt="" />
                </div>
                <div className="">
                  <header className="major">
                    <h3>SITO Mobile</h3>
                    <h4>New York, NY - 2016</h4>
                  </header>
                  <p>Behavioral location data and full-stack mobile media delivery company focusing on more efficient targeting of consumers using location-aware data management.</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="jobHolder">
                <div className="jobHolderImage">
                  <img src="images/pastRoles/kinetic.jpg" alt="" />
                </div>
                <div className="">
                  <header className="major">

                    <h3>Kinetic Worldwide, WPP</h3>
                    <h4>New York, NY - 2014</h4>
                  </header>
                  <p>The largest buyer of outdoor media in the world and part of advertising giant, WPP. I served as Head of Innovation, introducing new ways to reach consumers on the go.</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="jobHolder">
                <div className="jobHolderImage">
                  <img src="images/pastRoles/gamaroffDigital.jpg" alt="" />
                </div>
                <div className="">
                  <header className="major">

                    <h3>Gamaroff Digital</h3>
                    <h4>London, UK - 2008</h4>
                  </header>
                  <p>My privately owned Facebook Preferred Marketing marketing company specializing in emerging channels and social brand activations for Mini, Guinness, Vodafone before acquisition by WPP in 2014.</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="jobHolder">
                <div className="jobHolderImage">
                  <img src="images/pastRoles/tbg.jpg" alt="" />
                </div>
                <div className="">
                  <header className="major">

                    <h3>TBG Digital</h3>
                    <h4>London, UK - 2006</h4>
                  </header>
                  <p>Art Director and engineer leading creative team, and introduced a sophisticated and lucrative A/B testing analytics tool for online display media that led to account for more than half of total revenue.</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="jobHolder">
                <div className="jobHolderImage">
                  <img src="images/pastRoles/companyHuskies.jpg" alt="" />
                </div>
                <div className="">
                  <header className="major">

                    <h3>Company of Huskies</h3>
                    <h4>Dublin, Ireland - 2003</h4>
                  </header>
                  <p>I was hired to grow the role of creative services in digital marketing, deployment and facilitation of online display campaigns, growing the company to what is now the leading agency for media and creative in Ireland.</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="jobHolder">
                <div className="jobHolderImage">
                  <img src="images/pastRoles/tecbrand.jpg" alt="" />
                </div>
                <div className="">
                  <header className="major">

                    <h3>Tecbrand</h3>
                    <h4>Dublin, Ireland - 2001</h4>
                  </header>
                  <p>An Irish B2B Direct Marketing agency specializing in the technology sector, with such clients as Siemens and HP. I joined the company in 2001 as Head of Interactive services as the company sought to expand into digital realms.</p>
                </div>
              </div>
            </div>
            <div className="container" id="lastOne">
              <div className="jobHolder">
                <div className="jobHolderImage">
                  <img src="images/pastRoles/net1.jpg" alt="" />
                </div>
                <div className="">
                  <header className="major">

                    <h3>Net 1 Aplitec</h3>
                    <h4>Johannesburg, South Africa - 1999</h4>
                  </header>
                  <p>Net1 created the first smart card payment system for rural communities and was widely adopted given its suitability for emerging markets. As part of an engineering team I built the WAP interfaces for the payment systems, but also designed and deployed the primary consumer marketing campaigns in print media.
</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="" className="newsContainer">
          <div className="">
            <header className="major">
              <h2>In the news</h2>
            </header>
            <div className="pressLogos"><p>I have been sought out for comment by notable publishers such as Time, Adweek, Adage, New York Post, Mashable, Mediapost and many more...</p><img src="/images/pressLogos.png" /></div>


            <div className="newsGrid">
              {this.state.news && this.state.news.map((item, i) => {
                return (
                  <div>
                    <span className=""><img src={"/images/news/" + item.image} alt="" /></span>
                    <h3>{item.title}</h3>

                    <div className="dateCaption">{moment(item.createdAt._seconds * 1000).format('LL')}</div>
                    <p>{item.caption}<br /><a href={item.url}>Read more</a></p>

                  </div>
                )
              })}
            </div>
          </div>
        </section>


        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Get in touch</h2>
            </header>
            <p>Sed lacus nascetur ac ante amet sapien.</p>
            <ul className="actions special">
              <li><a href="#" className="button wide primary">Sign Up</a></li>
              <li><a href="#" className="button wide">Learn More</a></li>
            </ul>
          </div>
        </section>


        <section id="five" className="main style1">
          <div className="container">
            <header className="major special">
              <h2>Elements</h2>
            </header>

            <section>
              <h4>Text</h4>
              <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
						This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
						This is <u>underlined</u> and this is code: <code>for (;;) </code>. Finally, <a href="#">this is a link</a>.</p>
              <hr />
              <header>
                <h4>Heading with a Subtitle</h4>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
              <header>
                <h5>Heading with a Subtitle</h5>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
              <hr />
              <h2>Heading Level 2</h2>
              <h3>Heading Level 3</h3>
              <h4>Heading Level 4</h4>
              <h5>Heading Level 5</h5>
              <h6>Heading Level 6</h6>
              <hr />
              <h5>Blockquote</h5>
              <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
              <h5>Preformatted</h5>

            </section>

            <section>
              <h4>Lists</h4>
              <div className="row">
                <div className="col-6 col-12-medium">
                  <h5>Unordered</h5>
                  <ul>
                    <li>Dolor pulvinar etiam.</li>
                    <li>Sagittis adipiscing.</li>
                    <li>Felis enim feugiat.</li>
                  </ul>
                  <h5>Alternate</h5>
                  <ul className="alt">
                    <li>Dolor pulvinar etiam.</li>
                    <li>Sagittis adipiscing.</li>
                    <li>Felis enim feugiat.</li>
                  </ul>
                </div>
                <div className="col-6 col-12-medium">
                  <h5>Ordered</h5>
                  <ol>
                    <li>Dolor pulvinar etiam.</li>
                    <li>Etiam vel felis viverra.</li>
                    <li>Felis enim feugiat.</li>
                    <li>Dolor pulvinar etiam.</li>
                    <li>Etiam vel felis lorem.</li>
                    <li>Felis enim et feugiat.</li>
                  </ol>
                  <h5>Icons</h5>
                  <ul className="icons">
                    <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                  </ul>
                </div>
              </div>
              <h5>Actions</h5>
              <div className="row">
                <div className="col-6 col-12-medium">
                  <ul className="actions">
                    <li><a href="#" className="button primary">Default</a></li>
                    <li><a href="#" className="button">Default</a></li>
                  </ul>
                  <ul className="actions small">
                    <li><a href="#" className="button primary small">Small</a></li>
                    <li><a href="#" className="button small">Small</a></li>
                  </ul>
                  <ul className="actions stacked">
                    <li><a href="#" className="button primary">Default</a></li>
                    <li><a href="#" className="button">Default</a></li>
                  </ul>
                  <ul className="actions stacked">
                    <li><a href="#" className="button primary small">Small</a></li>
                    <li><a href="#" className="button small">Small</a></li>
                  </ul>
                </div>
                <div className="col-6 col-12-medium">
                  <ul className="actions stacked">
                    <li><a href="#" className="button primary fit">Default</a></li>
                    <li><a href="#" className="button fit">Default</a></li>
                  </ul>
                  <ul className="actions stacked">
                    <li><a href="#" className="button primary small fit">Small</a></li>
                    <li><a href="#" className="button small fit">Small</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h4>Table</h4>
              <h5>Default</h5>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item One</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Two</td>
                      <td>Vis ac commodo adipiscing arcu aliquet.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Three</td>
                      <td> Morbi faucibus arcu accumsan lorem.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Four</td>
                      <td>Vitae integer tempus condimentum.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Five</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2"></td>
                      <td>100.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <h5>Alternate</h5>
              <div className="table-wrapper">
                <table className="alt">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item One</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Two</td>
                      <td>Vis ac commodo adipiscing arcu aliquet.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Three</td>
                      <td> Morbi faucibus arcu accumsan lorem.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Four</td>
                      <td>Vitae integer tempus condimentum.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Five</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2"></td>
                      <td>100.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </section>

            <section>
              <h4>Buttons</h4>
              <ul className="actions">
                <li><a href="#" className="button primary">Primary</a></li>
                <li><a href="#" className="button">Default</a></li>
              </ul>
              <ul className="actions">
                <li><a href="#" className="button large">Large</a></li>
                <li><a href="#" className="button">Default</a></li>
                <li><a href="#" className="button small">Small</a></li>
              </ul>
              <ul className="actions fit">
                <li><a href="#" className="button fit">Fit</a></li>
                <li><a href="#" className="button primary fit">Fit</a></li>
                <li><a href="#" className="button fit">Fit</a></li>
              </ul>
              <ul className="actions fit small">
                <li><a href="#" className="button primary fit small">Fit + Small</a></li>
                <li><a href="#" className="button fit small">Fit + Small</a></li>
                <li><a href="#" className="button primary fit small">Fit + Small</a></li>
              </ul>
              <ul className="actions">
                <li><a href="#" className="button primary icon solid fa-download">Icon</a></li>
                <li><a href="#" className="button icon solid fa-download">Icon</a></li>
              </ul>
              <ul className="actions">
                <li><span className="button primary disabled">Disabled</span></li>
                <li><span className="button disabled">Disabled</span></li>
              </ul>
            </section>

            <section>
              <h4>Form</h4>

            </section>

            <section>
              <h4>Image</h4>
              <h5>Fit</h5>
              <div className="box alt">
                <div className="row gtr-uniform gtr-50">
                  <div className="col-12"><span className="image fit"><img src="images/pic06.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
                </div>
              </div>
              <h5>Left &amp; Right</h5>
              <p><span className="image left"><img src="images/pic05.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
              <p><span className="image right"><img src="images/pic05.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
            </section>

          </div>
        </section>

        <section id="footer">
          <ul className="icons">
            <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="#" className="icon solid alt fa-envelope"><span className="label">Email</span></a></li>
          </ul>
          <ul className="copyright">
            <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </section>
      </div >
    );
  }
}
export default App;
