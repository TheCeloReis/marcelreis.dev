import React, { useEffect } from "react";
import Router from "next/router";

type PropsType = {
  path: string;
};

export default function Redirect(props: PropsType) {
  useEffect(() => {
    Router.push(props.path);
  }, [props.path]);

  return <></>;
}
