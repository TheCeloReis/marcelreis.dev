import React from "react";

import * as S from "./contact.style";

import { Input } from "../../base/input";
import { Textarea } from "../../base/textarea";

export default function Contact() {
	return (
		<S.Form name="contact" method="POST" data-netlify="true">
			<S.NameLabel>
				<span>Seu Nome:</span>
				<Input type="text" name="name" placeholder="Insira seu nome" required />
			</S.NameLabel>

			<S.EmailLabel>
				<span>Seu Email:</span>
				<Input
					type="email"
					name="email"
					placeholder="Insira seu email"
					required
				/>
			</S.EmailLabel>

			<S.MessageLabel>
				<span>Mensagem:</span>
				<Textarea
					name="message"
					rows="4"
					placeholder="Escreve aqui o seu recado..."
					required
				></Textarea>
			</S.MessageLabel>

			<S.StyledButton type="submit">ENVIAR</S.StyledButton>
		</S.Form>
	);
}
