<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h1 class="text-center">My personal repositories</h1>
        <div v-if="showError" class="alert alert-danger" role="alert">
          Something went wrong, please try later
        </div>
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
            <div class="card mt-4">
              <div class="card-header">
                <a :href="repo.html_url"><i class="fas fa-code"></i> {{repo.full_name}}</a>
              </div>
              <div class="card-body">
                <ul class="list-unstyled">
                  <li>Language: <span class="badge badge-info"> {{repo.language}}</span></li>
                  <li >Starts: <span class="badge badge-success"> <i class="far fa-star"></i> {{repo.stargazers_count}}</span></li>
                  <li >Watchers: <span class="badge badge-success"> <i class="fas fa-binoculars"></i> {{repo.watchers_count}}</span></li>
                  <li >Issues: <span class="badge badge-success"> <i class="fas fa-tasks"></i> {{repo.open_issues}}</span></li>
                  <li>Languages: <span :key="language" v-for="value,language in repo.languages" class="badge badge-info ml-1"> {{language}} </span></li>
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
import { githubClient } from '@/libs/httpclient.js'

export default {
  name: 'GithubRepositories',
  data () {
    return {
      loading: true,
      reposIds: ['django-base', 'leandro-gomez.github.io'],
      repos: [],
      progress: 10,
      showError: false
    }
  },
  mounted () {
    this.fetchRepos()
  },
  methods: {
    fetchRepos () {
      const promises = this.reposIds.map(repoID => githubClient.getRepo(`leandro-gomez/${repoID}`))
      Promise.all(promises).then(results => {
        this.repos = results.map(result => {
          return result.data
        })
        this.progress = 55
        this.fetchLanguages(this.repos).then(_ => {
          this.progress = 100
          setTimeout(_ => { this.loading = false }, 1000)
        })
      }).catch(_ => {
        this.loading = false
        this.showError = true
      })
    },
    async fetchLanguages (repos) {
      for (var i = repos.length - 1; i >= 0; i--) {
        var repo = repos[i]
        var response = await githubClient.getLanguages(`leandro-gomez/${repo.name}`)
        repo.languages = response.data
      }
    }
  }
}
</script>
