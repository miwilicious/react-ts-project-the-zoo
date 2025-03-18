import React from "react";

export const NotFound: React.FC = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
    <h1 className="fw-bold mb-4 sour-gummy">
      Ops, something went wrong.
    </h1>
    <a className="text-dark" onClick={() => window.history.back()}>
      &#8592; take me back
    </a>
  </div>
  );
};

export default NotFound;
