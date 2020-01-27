import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./SiteMetadata";
import Navbar from "./Navbar";
import "bulma";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div className='js has-background-grey'>
      <Helmet>
        <html lang='en' className='has-background-grey-dark' />

        <title>Dog Whistle Records</title>
        <meta name='description' content={description} />

        <link
          rel='icon'
          type='image/png'
          // href={`${withPrefix("/")}img/icon_gear.png`}
        />
        <meta name='theme-color' content='#fff' />

        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
      </Helmet>
      <Navbar />
      <Fragment>{children}</Fragment>
    </div>
  );
};

export default TemplateWrapper;
