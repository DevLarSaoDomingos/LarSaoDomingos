// ActivitiesList.js
import React from "react";
import "../styles/ActivitiesList.css";

const ActivitiesList = ({ activities }) => {
  return (
    <div className="ActivitiesList">
      <div className="list-activities">
        {activities.map((activity, index) => (
          <div className="activities" key={index}>
            <img src={activity.imageSrc} alt={activity.title} />
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesList;
