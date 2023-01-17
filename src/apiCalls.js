export const getOrders = async () => {
  const response = await fetch('http://localhost:3001/api/v1/orders')
  const data = await response.json()
  return data
}

export const sendOrder = async (name, ingredients) => {
  const response = await fetch('http://localhost:3001/api/v1/orders',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name: name, ingredients: ingredients})
    })
    const data = await response.json()
    return data
}

export const deleteOrdersApi = async (id) => {
  return await fetch(`http://localhost:3001/api/v1/orders/${id}`,
  {
    method: 'DELETE'
  })
}