import "./style.scss";
import React from "react";
import { useSelector } from "react-redux";
import { Card, Ratio, Container } from "react-bootstrap";

const Drink = () => {
  const cocktail = useSelector((store) => store.cocktail);
  return (
    <>
      <div className="cocktail">
        <Card>
          <Card.Img
            variant="top"
            src={cocktail.strDrinkThumb + "/preview"}
            alt="#"
          />
          <Card.Header>{cocktail.strDrink}</Card.Header>
          <Card.Body>
            <Card.Title>{cocktail.strCategory}</Card.Title>
            <Card.Text>{cocktail.strInstructions}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Drink;

/*
        <Ratio aspectRatio="1x1">
          <embed
            type="image/svg+xml"
            src={cocktail.strDrinkThumb + "/preview"}
          />
        </Ratio>
*/

/*<div className="cocktail">
<Ratio aspectRatio="1x1">
  <embed
    type="image/svg+xml"
    src={cocktail.strDrinkThumb + "/preview"}
  />
</Ratio>
<Card>
  <Card.Img
    variant="top"
    src={cocktail.strDrinkThumb + "/preview"}
    alt="#"
  />
  <Card.Header>{cocktail.strDrink}</Card.Header>
  <Card.Body>
    <Card.Title>{cocktail.strCategory}</Card.Title>
    <Card.Text>{cocktail.strInstructions}</Card.Text>
  </Card.Body>
</Card>
</div>*/
