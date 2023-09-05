import "./style.scss";
import React from "react";
import { useSelector } from "react-redux";
import { Card, Badge, Container } from "react-bootstrap";

const Drink = () => {
  const cocktail = useSelector((store) => store.cocktail);

  // Función para obtener las Badges de los ingredientes
  const getIngredientBadges = () => {
    const ingredientBadges = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      if (ingredient) {
        ingredientBadges.push(
          <Badge key={i} variant="primary">
            {cocktail[`strIngredient${i}`]}
          </Badge>
        );
      }
    }
    return ingredientBadges;
  };

  return (
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
          <Card.Footer />
          <Card.Title>Ingredients</Card.Title>
          <Container>{getIngredientBadges()}</Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Drink;
