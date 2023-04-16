import "./style.scss";
import { React, useCallback, useEffect } from "react";
import { getRandomCocktail } from "../../CocktailApi";
import { useDispatch } from "react-redux";
import { setCocktail } from "../../redux/slices/cocktailSlice";
import { setLoading } from "../../redux/slices/loadingSlice";
import { Button } from "react-bootstrap";

const RandomButton = () => {
  const dispatch = useDispatch();
  const fetchCocktailHandler = useCallback(() => {
    dispatch(setLoading(true));
    getRandomCocktail()
      .then((res) => {
        updateRedux(res);
      })
      .catch((e) => console.log(e))
      .finally(() => dispatch(setLoading(false)));
  }, []);

  useEffect(() => {
    fetchCocktailHandler();
  }, [fetchCocktailHandler]);

  const updateRedux = (data) => {
    dispatch(setCocktail(data));
  };

  return (
    <Button
      className="randomButton"
      variant="outline"
      onClick={fetchCocktailHandler}
    >
      Get random drink
    </Button>
  );
};

export default RandomButton;
