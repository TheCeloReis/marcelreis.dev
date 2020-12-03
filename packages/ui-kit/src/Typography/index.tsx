import React, { PropsWithChildren } from "react";

const Typography = (props: PropsWithChildren<{}>) => {
  return <div>This is {props.children}</div>;
};

export default Typography;
