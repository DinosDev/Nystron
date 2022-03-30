export default async function SendRequest(event: any) {
  event.preventDefault()

  const values = {
    name: event.target.name.value,
    lastName: event.target.lastName.value,
    telephone: event.target.telephone.value,
    email: event.target.email.value,
    message: event.target.message.value,
  }

  const API_URL = "http://localhost:8000/"

  const res = await fetch(`${API_URL}api/v1/message`, {
    body: JSON.stringify(values),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  })

  const result = await res.json()
}