<template>
  <div class="col-sm-4">
    <div class="card text-center">
      <img class="card-img-top rounded-circle img-thumbnail" width="150" src="https://www.gravatar.com/avatar/73ef53043e8180a56645194622d849d4fcb41d3e9d9abe3a4230151a12a48d35?s=300" alt="Leandro Gomez">
      <div class="card-body">
        <h5 class="card-title">Leandro Gomez</h5>
        <h6 class="card-subtitle mb-2 text-muted">Staff Software Engineer @ Tiendanube</h6>
        <h6 class="card-subtitle mb-2 text-muted">Guayaquil, Ecuador</h6>
        <div class="btn-group">
          <a href="#contact-form" @click.prevent="focusElement('contact-form')" class="btn btn-outline-info">Contact <i class="far fa-paper-plane"></i></a>
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
