import React from "react"
import styled from "styled-components"

const InputContainer = styled.input`
    width: 60%;
    margin: 10px auto;
    font-size: 20px;
    padding: 10px;
    text-align: center;
`

interface InputProps {
    Title: string,
    Name: string,
    Type: string
}

export default function Input(props: InputProps) {
    return (
        <React.Fragment>
            <label htmlFor={props.Name}>{props.Title}</label>
            <InputContainer id={props.Title} name={props.Name} type={props.Type} required />
        </React.Fragment>
    )
}