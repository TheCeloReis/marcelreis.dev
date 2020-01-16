import { keyframes } from "styled-components";

export const outOfBox = (index: number) => keyframes`
	0% {
		opacity: 0;
		transform: scale(0.1) translateY(-750%); 
	}
	25% {
		opacity: 1;
	}
	50% {
		transform: scale(0.25) translateY(-100%) ${
      index === 0
        ? "translateX(-20%)"
        : index === 1
        ? "translateX(0%)"
        : index === 2
        ? "translateX(20%)"
        : 0
    };
	}
	100% {
		transform: scale(1) ${
      index === 0
        ? "translate(-100%, 0)"
        : index === 1
        ? "translate(0%, 0)"
        : index === 2
        ? "translate(100%, 0)"
        : 0
    };
	}
`;
