import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div className="js">
      <Helmet>
        <html lang="en" />

        <title>{/*{title}&mdash;*/}Dog Whistle Records</title>
        <meta name="description" content={description} />

        <link
          rel="icon"
          type="image/png"
          // href={`${withPrefix("/")}img/icon_gear.png`}
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Fragment>{children}</Fragment>
    </div>
  );
};

export default TemplateWrapper;
