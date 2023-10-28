import React from "react";

const StarRating = ({ rating }) => {
  const starIcons = [];

  // Determine how many full stars to display
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;

  // Determine the color based on the decimal part
  let starColor;
  if (decimalPart >= 0.2 && decimalPart < 0.8) {
    starColor = "yellow";
  } else {
    starColor = "gray";
  }

  // Add full star icons
  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<div key={i} className={`star full-${starColor}`} />);
  }

  // Add half star icon if needed
  if (decimalPart >= 0.2) {
    starIcons.push(<div key="half" className={`star half-${starColor}`} />);
  }

  // Fill the remaining stars with gray icons
  while (starIcons.length < 5) {
    starIcons.push(<div key={starIcons.length} className="star gray" />);
  }

  return <div className="star-rating">{starIcons}</div>;
};

export default StarRating;
