import React from "react";
import PropTypes from "prop-types";
import { NewsPageTemplate } from "../../templates/news-page";

const NewsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <NewsPageTemplate
        image={data.image}
        title={data.title}
        subheading={data.subheading}
        sectionTitle={data.sectionTitle}
        sectionDescription={data.sectionDescription}
        description={data.description}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

NewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default NewsPagePreview;
