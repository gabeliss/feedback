import React from 'react'
import { useState } from 'react';

function StaticStars({selected}) {

  const rating = selected;

  return (
    <div className="star-rating-static">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <div id='static-star'
            type="button"
            key={index}
            className={index <= (rating) ? "on" : "off"}
          >
            <span className="star">&#9733;</span>
          </div>
        );
      })}
    </div>
  );
};

export default StaticStars