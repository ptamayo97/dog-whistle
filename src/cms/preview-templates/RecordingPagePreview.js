import React from "react";
import PropTypes from "prop-types";
import { RecordingPageTemplate } from "../../templates/recording-page";

const RecordingPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <RecordingPageTemplate
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

RecordingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default RecordingPagePreview;
