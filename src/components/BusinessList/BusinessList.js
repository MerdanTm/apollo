// import React, { Component } from "react";
import React from "react";
import Business from "../Business/Business";
import "./BusinessList.css";

function BusinessList({ businesses }) {
  return (
    <div className="BusinessList">
      {businesses.map((business) => {
        return <Business business={business} key={business.id} />;
      })}
    </div>
  );
}

export default BusinessList;
