import React from "react";
import PropTypes from "prop-types";
import { TapesPageTemplate } from "../../templates/tapes-page";

const TapesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <TapesPageTemplate
        image={data.image}
        title={data.title}
        tapes={data.tapes}
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

TapesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default TapesPagePreview;
