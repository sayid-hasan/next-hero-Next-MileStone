import React from "react";

const CategoriesDetailsPage = ({ params }) => {
  console.log(params);
  if (params.features.length == 3) {
    return <div>This is a {params.features[2]}</div>;
  } else if (params.features.length === 2) {
    return <div>This is a {params.features[1]} </div>;
  }

  return <div>Categories Details</div>;
};

export default CategoriesDetailsPage;
