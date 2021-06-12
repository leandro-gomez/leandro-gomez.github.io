<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h1 class="text-center">My personal repositories</h1>
        <transition name="fade">
          <span class="mt-4 mb-4" v-if="loading">
            <h2 class="text-center text-muted">Loading...</h2>
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" :style="{width: progress + '%'}" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </span>
        </transition>
        <span>
          <div v-for="repo in repos" :key="repos.indexOf(repo)">
            <div class="card">
              <div class="card-header">
                <a :href="repo.html_url"><i class="fas fa-code"></i> {{repo.full_name}}</a>
              </div>
              <div class="card-body">
                <ul class="list-unstyled">
                  <li>Language: <span class="badge badge-info"> {{repo.language}}</span></li>
                  <li >Starts: <span class="badge badge-success"> <i class="far fa-star"></i> {{repo.stargazers_count}}</span></li>
                  <li >Watchers: <span class="badge badge-success"> <i class="fas fa-binoculars"></i> {{repo.watchers_count}}</span></li>
                  <li >Issues: <span class="badge badge-success"> <i class="fas fa-tasks"></i> {{repo.open_issues}}</span></li>
                </ul>
                  <p>{{repo.description}}</p>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'GithubRepositories',
  data () {
    return {
      loading: true,
      reposIds: ['django-base'],
      baseUrl: 'https://api.github.com/repos/leandro-gomez/',
      repos: [],
      progress: 42 // :)
    }
  },
  mounted () {
    this.fetchRepos()
  },
  methods: {
    fetchRepos () {
      const config = {
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      }
      const promises = this.reposIds.map(repoID => axios.get(`${this.baseUrl}${repoID}`, config))
      Promise.all(promises).then(results => {
        this.repos = results.map(result => {
          return result.data
        })
        this.loading = false
      })
    }
  }
}
</script>
