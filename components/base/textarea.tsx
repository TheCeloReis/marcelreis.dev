import React, { useState, useRef } from "react";
import styled from "styled-components";

const Autosized = styled.textarea`
	width: 100%;
	resize: none;
	border: 1px solid ${({ theme }) => theme.color.baseD};
	border-radius: 4px;
	padding: 8px;
`;

const calcMinHeight = (cloneNode: HTMLElement) =>
	cloneNode.scrollHeight + cloneNode.offsetHeight - cloneNode.clientHeight;

export const Textarea: any = (props: any) => {
	const [height, setHeight] = useState("auto");
	const textarea = useRef(null);

	const onChange = (event: any) => {
		if (textarea.current && textarea.current.parentNode) {
			const clone: any = textarea.current.cloneNode();

			clone.style.display = "hidden";
			clone.style.height = "auto";

			textarea.current.parentNode.insertBefore(clone, textarea.current);
			setHeight(calcMinHeight(clone) + "px");
			textarea.current.parentNode.removeChild(clone);
		}

		if (props.onChange) {
			props.onChange(event);
		}
	};

	return (
		<Autosized
			{...props}
			onChange={onChange}
			style={{ ...props.style, height }}
			ref={textarea}
		>
			{props.children}
		</Autosized>
	);
};
