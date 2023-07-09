import React from "react";
import { LdsRoller, LdsRollerItem } from "./LoaderStyles";

const Loader: React.FC = () => {
  return (
    <LdsRoller>
      {[...Array(8)].map((_, index) => (
        <LdsRollerItem
          key={index}
          style={{ animationDelay: `${-0.036 * index}s` }}
        />
      ))}
    </LdsRoller>
  );
};

export default Loader;
