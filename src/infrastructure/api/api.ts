import axios from 'axios'

export interface RequestArgs {
  method: 'get' | 'post' | 'put' | 'delete'
  url: string
  body?: string | Record<string, string>
  params?: Record<string, string>
  token?: string
  timeout?: number
}

export const runRequest = async ({ method, url, body, token, params, timeout = 5000 }: RequestArgs) => {
  const requestConfig = {
    method,
    baseUrl: process.env.BASE_URL,
    url,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      Authorization: token && `bearer ${token}`
    },
    params,
    data: body && JSON.stringify(body),
    timeout
  }

  try {
    // NOTE: 'response' is AxiosResponse type.
    const { data } = await axios(requestConfig)
    return data
  } catch (error) {
    // NOTE: 'error' is AxiosError type.
    const data = error.response?.data?.error ? error.response.data : { error: true, message: error.message }
    return data
  }
}
