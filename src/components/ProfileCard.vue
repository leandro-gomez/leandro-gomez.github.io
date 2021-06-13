<template>
  <div class="col-sm-4">
    <div class="card text-center">
      <img class="card-img-top rounded-circle img-thumbnail" width="150" src="../assets/profile.jpg" alt="Leandro Gomez">
      <div class="card-body">
        <h5 class="card-title">Leandro Gomez</h5>
        <h6 class="card-subtitle mb-2 text-muted">Full Stack Developer</h6>
        <h6 class="card-subtitle mb-2 text-muted">Guayaquil, Ecuador</h6>
        <div class="btn-group">
          <a href="#contact-form" @click.prevent="focusElement('contact-form')" class="btn btn-outline-info">Contact <i class="far fa-paper-plane"></i></a>
        </div>
        <div class="btn-group mt-1">
          <a href="/#/gists" class="btn btn-outline-info">Gists <i class="fab fa-github"></i></a>
          <a href="/#/repos" class="btn btn-outline-info">Repositories <i class="fab fa-github"></i></a>
        </div>
        <div class="btn-group mt-1">
          <a href="/#/books" class="btn btn-outline-info">Fav. Books <i class="fas fa-journal-whills"></i>
</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  methods: {
    focusElement (elemRef) {
      var element = document.getElementById(elemRef)
      window.scrollTo(0, element.offsetTop)
    }
  }
}
</script>
