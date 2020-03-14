import React from "react";

import * as S from "./styled";

import { Input } from "../../base/input";
import { Textarea } from "../../base/textarea";

const Contact = () => {
  return (
    <S.Form name="contact" method="POST" data-netlify="true">
      <S.NameLabel>
        <span>Name:</span>
        <Input
          type="text"
          name="name"
          placeholder="Fill here your name"
          required
        />
      </S.NameLabel>

      <S.EmailLabel>
        <span>Email:</span>
        <Input
          type="email"
          name="email"
          placeholder="Fill here your email"
          required
        />
      </S.EmailLabel>

      <S.MessageLabel>
        <span>Message:</span>
        <Textarea
          name="message"
          rows="4"
          placeholder="Write here your message"
          required
        ></Textarea>
      </S.MessageLabel>

      <S.StyledButton type="submit">SEND</S.StyledButton>
    </S.Form>
  );
};

export default Contact;
