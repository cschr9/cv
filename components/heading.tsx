import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Heading = ({ children }: Props) => {
  return <h2 className="text-xl font-bold">{children}</h2>;
};

export default Heading;
