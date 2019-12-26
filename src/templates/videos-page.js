import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Carousel } from "react-responsive-carousel";
export const VideosPage = ({}) => (
  <>
    <section className="section">
      <div className="container ">
        <div className="columns">
          <div className="column is-four-fifths">
            <figure className="image is-16by9">
              <iframe
                className="has-ratio level-item"
                width={640}
                height={360}
                src="https://www.youtube.com/embed/zdfjCivNxGY"
                frameBorder={0}
                allowFullScreen
              />
            </figure>
          </div>
          <div className="column">
            <h1>Title</h1>
            <p>
              Description: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Quo ullam neque fugit est iste accusamus saepe asperiores
              velit adipisci esse?
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        {/* Start Carousel */}
        {/* <Carousel> */}
        <div className="columns">
          <div className="column level">
            <div className="level-item">
              <iframe
                className="has-ratio "
                // width={640}
                // height={360}
                src="https://www.youtube.com/embed/zdfjCivNxGY"
                frameBorder={0}
              />
            </div>
          </div>
          <div className="column level">
            <div className="level-item">
              <iframe
                className="has-ratio "
                // width={640}
                // height={360}
                src="https://www.youtube.com/embed/zdfjCivNxGY"
                frameBorder={0}
              />
            </div>
          </div>
          <div className="column level">
            <div className="level-item">
              <iframe
                className="has-ratio "
                // width={640}
                // height={360}
                src="https://www.youtube.com/embed/zdfjCivNxGY"
                frameBorder={0}
              />
            </div>
          </div>
        </div>
        {/* </Carousel> */}
      </div>
      {/* End Carousel */}
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
