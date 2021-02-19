export function request(method, path, { params, data, headers = {} }) {
  const url         = new URL(path)
  const baseHeaders = { 'Content-Type': 'application/json' }

  if (params) {
    url.search = new URLSearchParams(params).toString()
  }

  const options = {
    method:  method.toUpperCase(),
    headers: { ...baseHeaders, ...headers }
  }

  if (data) {
    options.body = JSON.stringify(data)
  }

  return fetch(url.toString(), options)
}

export async function getResponseData(response) {
  return isJsonResponse(response) ? await response.clone().json() : response.clone().text()
}

export function isJsonResponse(response) {
  return response.headers.get('Content-Type') === 'application/json'
}
