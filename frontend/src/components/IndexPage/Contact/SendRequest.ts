import ValidateInputs from "./ValidateInputs"

export default async function SendRequest(event: any) {
  event.preventDefault()

  const values = {
    name: event.target.name.value,
    lastName: event.target.lastName.value,
    telephone: event.target.telephone.value,
    email: event.target.email.value,
    message: event.target.message.value,
  }

  const Validation = ValidateInputs(values)

  if (Validation === true) {
    const API_URL = "https://nystron.herokuapp.com/"

    const res = await fetch(`${API_URL}api/v1/message`, {
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    })

    const result = await res.json()

    if (result.Type === "Success") {
      alert("Mensagem Enviada com Sucesso!")
    } else if (result["Status Code"] === "400") {
      alert(result.Message)
    } else {
      alert("Sua Mensagem não pode ser enviada, tente novamente mais tarde!")
    }
  } else {
    alert(Validation)
  }
}