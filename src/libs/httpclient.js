import axios from 'axios'

class HttpClient {
  constructor (axiosInstace) {
    this._axios = axiosInstace
  }

  get (url) {
    return this._axios.get(url)
  }
}

class GithubClient extends HttpClient {
  baseUrl = 'https://api.github.com/'

  getGist (gistId) {
    const config = {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }
    return this.get(`${this.baseUrl}gists/${gistId}`, config)
  }
}

const githubClient = new GithubClient(axios)

export {
  githubClient
}
