<template>
  <div class="col-sm-4">
    <div class="card text-center">
      <img class="card-img-top rounded-circle img-thumbnail" width="150" src="../assets/profile.jpg" alt="Leandro Gomez">
      <div class="card-body">
        <h5 class="card-title">Leandro Gomez</h5>
        <h6 class="card-subtitle mb-2 text-muted">Full Stack Developer</h6>
        <h6 class="card-subtitle mb-2 text-muted">Guayaquil, Ecuador</h6>
        <a href="#contact-form" @click.prevent="focusElement('contact-form')" class="btn btn-outline-info">Contact</a>
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
