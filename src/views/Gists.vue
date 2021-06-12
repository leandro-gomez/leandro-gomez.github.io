<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h1 class="text-center">My personal gists</h1>
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
          <div v-for="gist in gists" :key="gists.indexOf(gist)">
            <h2 class="text-center text-muted">{{gist.description}}</h2>
            <div v-for="(values, filename, index) in gist.files" :key="index">
              <div class="card">
                <div class="card-header">
                  <a :href="gist.html_url"><i class="fas fa-code"></i> {{values.filename}}</a>
                </div>
                <div class="card-body">
                  <pre><code v-html="highlightAuto(values.content)"></code></pre>
                  <div class="btn-group" role="group" aria-label="Actions">
                    <a :href="gist.html_url" target="__blank" class="btn btn-info">Go to Gist <i class="fab fa-github"></i></a>
                    <a :href="values.raw_url" :download="values.filename" target="__blank" class="btn btn-outline-info">Download <i class="fas fa-download"></i></a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import { githubClient } from '@/libs/httpclient.js'

export default {
  name: 'Gists',
  data () {
    return {
      loading: true,
      gistIds: ['0d1f5eea30fada61492863dfdc2a746f', 'fb3cab86ff181e4e5b3a4aeb03c80830'],
      gists: [],
      progress: 42, // :)
      showError: false
    }
  },
  mounted () {
    this.fetchGists()
  },
  methods: {
    highlightAuto (content) {
      return hljs.highlightAuto(content).value
    },
    fetchGists () {
      const promises = this.gistIds.map(gistId => githubClient.getGist(gistId))
      Promise.all(promises).then(results => {
        this.gists = results.map(result => {
          return result.data
        })
        this.loading = false
      }).catch(_ => {
        this.loading = false
        this.showError = true
      })
    }
  }
}
</script>
