import React, { useState, useRef } from "react";

import * as S from "./styled";

const calcMinHeight = (cloneNode: HTMLElement) =>
  cloneNode.scrollHeight + cloneNode.offsetHeight - cloneNode.clientHeight;

export const Textarea: any = (props: any) => {
  const [height, setHeight] = useState("auto");
  const textarea: any = useRef(null);

  const onChange = (event: any) => {
    if (textarea.current && textarea.current.parentNode) {
      const clone: any = textarea.current.cloneNode();

      clone.style.display = "hidden";
      clone.style.height = "auto";

      textarea.current.parentNode.insertBefore(clone, textarea.current as any);
      setHeight(calcMinHeight(clone) + "px");
      textarea.current.parentNode.removeChild(clone);
    }

    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <S.Autosized
      {...props}
      onChange={onChange}
      style={{ ...props.style, height }}
      ref={textarea}
    />
  );
};
