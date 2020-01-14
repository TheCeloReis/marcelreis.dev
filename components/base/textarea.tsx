import React, { useState, useRef } from "react";
import styled from "styled-components";

const Autosized = styled.textarea`
	width: 100%;
	resize: none;
	border: 1px solid ${({ theme }) => theme.colors.base[5]};
	border-radius: 4px;
	padding: 8px;
`;

const calcMinHeight = (cloneNode: HTMLElement) =>
	cloneNode.scrollHeight + cloneNode.offsetHeight - cloneNode.clientHeight;

export const Textarea: any = (props: any) => {
	const [height, setHeight] = useState("auto");
	const textarea = useRef(null);

	const onChange = (event: any) => {
		if (textarea.current && (textarea.current as any).parentNode) {
			const clone: any = (textarea.current as any).cloneNode();

			clone.style.display = "hidden";
			clone.style.height = "auto";

			(textarea.current as any).parentNode.insertBefore(
				clone,
				textarea.current as any
			);
			setHeight(calcMinHeight(clone) + "px");
			(textarea.current as any).parentNode.removeChild(clone);
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
