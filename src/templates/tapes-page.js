import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export const TapesPageTemplate = ({ title }) => {
  console.log({ title });
  return <>{title}</>;
};

TapesPageTemplate.propTypes = {
  title: PropTypes.string
};

const TapesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <TapesPageTemplate title={frontmatter.title} />
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
      }
    }
  }
`;
