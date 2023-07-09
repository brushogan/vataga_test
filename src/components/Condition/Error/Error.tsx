import React from "react";
import { ErrorContainer, ErrorIcon } from "./ErrorStyles";

type Props = {
  errorMessage: string;
};

const Error: React.FC<Props> = ({ errorMessage }) => {
  return (
    <ErrorContainer>
      <ErrorIcon src="error.svg" alt="error" />
      <h2>Oops! Something went wrong</h2>
      {errorMessage}
      <p>Please try again later</p>
    </ErrorContainer>
  );
};

export default Error;
