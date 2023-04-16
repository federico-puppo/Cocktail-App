import "./style.scss";
import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { CupStraw } from "react-bootstrap-icons";

const Loading = () => {
  return (
    <>
      <div className="loading">
        <Spinner animation="grow" className="spinner">
          <CupStraw size={24} />
        </Spinner>
        <span>Loading...</span>
      </div>
    </>
  );
};

export default Loading;
