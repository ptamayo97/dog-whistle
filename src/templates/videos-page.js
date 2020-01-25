import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Video from "../components/Video";
// import Navbar from "../components/Navbar";
// import Card from "../components/Card";
// import { Carousel } from "react-responsive-carousel";
export class VideosPage extends React.Component {
  state = {
    vids: [
      {
        title: "1",
        className: "has-ratio",
        // width: 640,
        // height: 360,
        src: "https://www.youtube.com/embed/zdfjCivNxGY",
        frameBorder: 0,
        allowfullScreen: true
      },
      {
        title: "2",
        className: "has-ratio",
        width: null,
        height: null,
        src: "https://www.youtube.com/embed/qW2LV9BPqCQ",
        frameBorder: 0,
        allowfullScreen: false
      },
      {
        title: "3",
        className: "has-ratio",
        width: null,
        height: null,
        src: "https://www.youtube.com/embed/zdfjCivNxGY",
        frameBorder: 0,
        allowfullScreen: false
      },
      {
        title: "4",
        className: "has-ratio",
        width: null,
        height: null,
        src: "https://www.youtube.com/embed/zdfjCivNxGY",
        frameBorder: 0,
        allowfullScreen: false
      }
    ],
    vidsCarousel: []
  };

  componentDidMount() {
    this.loopVids();
  }

  loopVids = () => {
    const { vids } = this.state;
    const vidsArray = [...vids];
    vidsArray.shift();
    console.log({ vidsArray });
    this.setState({ ...this.state, vidsCarousel: vidsArray });
  };

  render() {
    const { vids, vidsCarousel } = this.state;
    console.log(vids[0]);
    return (
      <>
        <section className="section">
          <div className="container ">
            <div className="columns">
              <div className="column is-four-fifths">
                <figure className="image is-16by9">
                  <Video attr={vids[0]} />
                </figure>
              </div>
              <div className="column">
                <h1>Title</h1>
                <p>
                  Description: Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Quo ullam neque fugit est iste accusamus
                  saepe asperiores velit adipisci esse?
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              {vidsCarousel.map((vid, idx) => {
                console.log({ vid });
                return (
                  <div key={idx} className="column level">
                    <div className="level-item">
                      <Video attr={vid} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <footer className="footer hero is-info">
          <div className="container content">
            <div className="has-text-centered">Contact us about sessions</div>
            <div className="level">
              <div className="level-item">
                <br />
                <form>
                  <input type="text" />
                  <button>SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

VideosPage.propTypes = {};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <VideosPage />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query VideosPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
