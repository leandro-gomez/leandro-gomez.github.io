import axios from 'axios'

class AxiosHttpClient {
  constructor (axiosInstace) {
    this._axios = axiosInstace
  }

  get (url, config) {
    return this._axios.get(url, config)
  }
}

class GithubClient extends AxiosHttpClient {
  baseUrl = 'https://api.github.com/'

  getGist (gistId) {
    return this.get(`${this.baseUrl}gists/${gistId}`, this.getDefaultConfig())
  }

  getRepo (repoFullName) {
    return this.get(`${this.baseUrl}repos/${repoFullName}`, this.getDefaultConfig())
  }

  getLanguages (repoFullName) {
    return this.get(`${this.baseUrl}repos/${repoFullName}/languages`, this.getDefaultConfig())
  }

  getDefaultConfig () {
    return {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }
  }
}

const githubClient = new GithubClient(axios)

export {
  githubClient
}
