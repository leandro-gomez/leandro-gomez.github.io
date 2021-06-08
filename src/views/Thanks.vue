<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-8 offset-2">
        <div class="jumbotron">
          <h1 class="display-4">Thanks for your message!</h1>
          <p class="lead">I'll reply as soon as possible.</p>
          <hr class="my-4">
          <p>In the meantime, feel free to explore my profile.</p>
          <router-link to="/" v-slot="{ href, navigate }">
              <a class="btn btn-primary btn-lg" :href="href" @click="navigate">Go to profile</a>
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Thanks'
}
</script>
