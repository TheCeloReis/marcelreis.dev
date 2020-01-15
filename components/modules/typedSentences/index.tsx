import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

import * as S from "./styled";

type PropsType = {
	sentences: string[];
	speed: number;
};

export default function TypedSentences(props: PropsType) {
	const [index, setIndex] = useState(17);
	const [renderedLetters, setRenderedLetters] = useState(props.sentences[0]);
	const [currentSentence, setCurrentSentence] = useState(props.sentences[0]);
	const [typing, setTyping] = useState(true);

	const router = useRouter();

	useEffect(() => {
		if (process.browser) {
			const start = () => {
				setTyping(false);
			};

			let notCleared = true;
			const timeout = setTimeout(() => {
				start();
				notCleared = false;
			}, 3000);

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

	const memoizedSentenceHandler = useCallback(() => {
		if (typing) {
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

		if (!typing) {
			if (renderedLetters.length <= 1) {
				setTimeout(() => {
					setTyping(true);
					setIndex(0);

					if (
						props.sentences.length >
						props.sentences.indexOf(currentSentence) + 1
					) {
						setCurrentSentence(
							props.sentences[props.sentences.indexOf(currentSentence) + 1]
						);
					} else {
						setCurrentSentence(props.sentences[0]);
					}
				}, 500);
			} else {
				const i = currentSentence.length - index;
				setRenderedLetters(currentSentence.slice(0, i < 2 ? 0 : i));
				setIndex(index + 2);
			}
		}
	}, [currentSentence, index, props.sentences, renderedLetters.length, typing]);

	useEffect(() => {
		const timer = setTimeout(() => {
			memoizedSentenceHandler();
		}, props.speed);
		return () => {
			clearTimeout(timer);
		};
	}, [index, memoizedSentenceHandler, props.speed]);

	return <S.Text>{renderedLetters}</S.Text>;
}
