import React from "react";
import PropTypes from "prop-types";
import { VideosPageTemplate } from "../../templates/videos-page";

const VideosPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <VideosPageTemplate
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

VideosPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default VideosPagePreview;
