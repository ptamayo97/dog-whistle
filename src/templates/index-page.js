import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
// import Navbar from "../components/Navbar";
import Card from "../components/Card";

export const IndexPageTemplate = ({ title }) => {
  console.log({ title });
  return (
    <Fragment>
      <div>
        <section className='hero is-dark is-fullheight-with-navbar'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns is-centered '>
                <div className='column is-half has-text-centered'>
                  <h1 className='title'>{title}</h1>
                  <h2 className='subtitle'>Large subtitle</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className='columns'>
              <div className='column'>
                <Card />
              </div>
              <div className='column'>
                <Card />
              </div>
              <div className='column'>
                <Card />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate title={frontmatter.title} />
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
