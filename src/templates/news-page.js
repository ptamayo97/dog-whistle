import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export const NewsPageTemplate = ({ title }) => {
  console.log({ title });
  return <>{title}</>;
};

NewsPageTemplate.propTypes = {
  title: PropTypes.string
};

const NewsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <NewsPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

NewsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default NewsPage;

export const pageQuery = graphql`
  query NewsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "news-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
