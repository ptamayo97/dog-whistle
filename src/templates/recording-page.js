import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export const RecordingPageTemplate = ({ title }) => {
  console.log({ title });
  return <>{title}</>;
};

RecordingPageTemplate.propTypes = {
  title: PropTypes.string
};

const RecordingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <RecordingPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

RecordingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default RecordingPage;

export const pageQuery = graphql`
  query RecordingPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "recording-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
