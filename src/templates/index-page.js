import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export const IndexPageTemplate = ({}) => (
  <Fragment>
    <div>
      <section className="hero is-info is-large">
        <div className="hero-body">
          <div className="container">
            <div className="columns ">
              <div className="column is-half">
                <h1 className="title">Large title</h1>
                <h2 className="subtitle">Large subtitle</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="columns">
            <div className="column">
              <Card />
            </div>
            <div className="column">
              <Card />
            </div>
            <div className="column">
              <Card />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Fragment>
);

IndexPageTemplate.propTypes = {};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate />
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
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
