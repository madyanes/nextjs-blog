export default async function callAPI (method = 'GET', endpoint) {
  const response = await fetch(endpoint, { method: method })
  const contentType = response.headers.get("content-type")
  if (contentType && contentType !== -1) {
    return response.json()
  } 
  return response.text()
}
