import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Text = styled.h1`
	user-select: none;
	color: #fff;
	width: 100%;
	font-family: "Roboto Mono", monospace;

	::after {
		position: absolute;
		height: 3.5rem;
		content: "";
		border-left: 0.1em solid white;
		margin-left: 0.5rem;
		animation: caret 1s steps(1) infinite;

		@media screen and (min-width: 600px) {
			height: 7rem;
		}
	}

	@keyframes caret {
		50% {
			border-color: transparent;
		}
	}
`;

type PropsType = {
	sentences: string[];
	speed: number;
};

export default function TypedSentences(props: PropsType) {
	const [index, setIndex] = useState(0);
	const [renderedLetters, setRenderedLetters] = useState("");
	const [currentSentence, setCurrentSentence] = useState("");
	const [typing, setTyping] = useState(true);

	const router = useRouter();

	useEffect(() => {
		if (process.browser) {
			const start = () => {
				setCurrentSentence(props.sentences[0]);
				setIndex(0);
			};

			let notCleared = true;
			const timeout = setTimeout(() => {
				start();
				notCleared = false;
			}, 500);

			window.onload = () => {
				if (notCleared) {
					clearTimeout(timeout);
					start();
				}
			};

			return () => {
				window.onload = null;
			};
		}
	}, [props.sentences, router.pathname]);

	function nextSentence() {
		if (props.sentences.length > props.sentences.indexOf(currentSentence) + 1) {
			setCurrentSentence(
				props.sentences[props.sentences.indexOf(currentSentence) + 1]
			);
		} else {
			setCurrentSentence(props.sentences[0]);
		}
	}

	function typeText() {
		if (renderedLetters.length === currentSentence.length) {
			setTimeout(() => {
				setTyping(false);
				setIndex(0);
			}, 2000);
		} else {
			setRenderedLetters(currentSentence.slice(0, index));
			setIndex(index + 1);
		}
	}

	function deleteText() {
		if (renderedLetters.length <= 1) {
			setTimeout(() => {
				setTyping(true);
				setIndex(0);
				nextSentence();
			}, 500);
		} else {
			const i = currentSentence.length - index;
			setRenderedLetters(currentSentence.slice(0, i < 2 ? 0 : i));
			setIndex(index + 2);
		}
	}

	function sentenceHandler() {
		if (typing) {
			typeText();
		} else {
			deleteText();
		}
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			sentenceHandler();
		}, props.speed);
		return () => {
			clearTimeout(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index]);

	return <Text>{renderedLetters}</Text>;
}
