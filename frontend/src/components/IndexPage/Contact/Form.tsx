import styled from "styled-components"
import SendRequest from "./SendRequest"
import Input from "./Input"
import Button from "./Button"

const FormContainer = styled.form`
  width: 50%;
  margin: 30px auto;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  padding: 50px;
`

export default function Form() {
  return (
    <FormContainer onSubmit={SendRequest}>
      <Input Title="Nome" Name="name" Type="text" />
      <Input Title="Sobrenome" Name="lastName" Type="text" />
      <Input Title="Telefone" Name="telephone" Type="text" />
      <Input Title="Email" Name="email" Type="mail" />
      <Input Title="Mensagem" Name="message" Type="text" />

      <Button/>
    </FormContainer>
  )
}