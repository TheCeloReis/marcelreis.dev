import React from "react";
import styled from "styled-components";

import { Input } from "../base/input";
import { Button } from "../base/button";
import { Textarea } from "../base/textarea";

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
	return (
		<StyledForm name="contact" method="POST" data-netlify="true">
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
				<span>Mensagem:</span>
				<Textarea
					name="message"
					rows="4"
					placeholder="Escreve aqui o seu recado..."
					required
				></Textarea>
			</MessageLabel>

			<StyledButton type="submit">ENVIAR</StyledButton>
		</StyledForm>
	);
}
