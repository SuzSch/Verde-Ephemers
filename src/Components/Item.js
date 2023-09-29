import React from 'react';
import './Item.css'; 

function Item({ title, description, price, image, buttonText, onButtonClick }) {


  return (


    <div class="card">
      <div class="card-details">
        <img src={image} alt={title} class="card-image" />
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h3>{price}</h3>
      </div>
      <button className="card-button" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>

  );
}

export default Item;


