import React from "react";

type Props = {
  children?: React.ReactNode;
};

const CVGrid = ({ children }: Props) => {
  return (
    <div className="flex flex-col space-y-4 xl:grid xl:grid-cols-3 xl:gap-4">
      {children}
    </div>
  );
};

export default CVGrid;
