import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export const TapesPageTemplate = ({ title, tapes }) => {
  console.log({ title, tapes });
  return (
    <section className="section">
      <div className="container">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="columns">
          {tapes.map(tape => (
            <div className="column ">
              {tape.tape} {tape.price}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

TapesPageTemplate.propTypes = {
  title: PropTypes.string,
  tapes: PropTypes.arrayOf(PropTypes.object)
};

const TapesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <TapesPageTemplate title={frontmatter.title} tapes={frontmatter.tapes} />
    </Layout>
  );
};

TapesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default TapesPage;

export const pageQuery = graphql`
  query TapesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "tapes-page" } }) {
      frontmatter {
        title
        tapes {
          tape
          price
        }
      }
    }
  }
`;
