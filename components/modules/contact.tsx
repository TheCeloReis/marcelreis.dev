import React from "react";
import styled from "styled-components";

import { Input } from "../base/input";
import { Button } from "../base/button";
import { Textarea } from "../base/textarea";

import serialize from "../utils/serialize";

const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	column-gap: 16px;
	row-gap: 16px;
	grid-template-areas:
		"name"
		"email"
		"message"
		"button";

	@media only screen and (min-width: 600px) {
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"name email"
			"message message"
			"button button";
	}
`;

const StyledLabel = styled.label`
	span {
		line-height: 1.5;
	}
`;
const NameLabel = styled(StyledLabel)`
	grid-area: name;
`;
const EmailLabel = styled(StyledLabel)`
	grid-area: email;
`;
const MessageLabel = styled(StyledLabel)`
	grid-area: message;
`;
const StyledButton = styled(Button)`
	grid-area: button;
`;

export default function Contact() {
	const onSubmit = (event: any) => {
		fetch("/", {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			body: serialize(event.target)
		}).then(() => alert("Obrigado, em breve entrarei em contato"));

		event.preventDefault();
	};

	return (
		<StyledForm name="contact" method="post" onSubmit={onSubmit}>
			<NameLabel>
				<span>Seu Nome:</span>
				<Input type="text" name="name" placeholder="Insira seu nome" required />
			</NameLabel>

			<EmailLabel>
				<span>Seu Email:</span>
				<Input
					type="email"
					name="email"
					placeholder="Insira seu email"
					required
				/>
			</EmailLabel>

			<MessageLabel>
				<span>Message:</span>
				<Textarea
					name="message"
					rows="3"
					placeholder="Escreve aqui o seu recado..."
					required
				></Textarea>
			</MessageLabel>

			<StyledButton type="submit">Send</StyledButton>
		</StyledForm>
	);
}
