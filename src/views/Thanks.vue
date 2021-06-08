<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-8 offset-2">
        <div class="jumbotron">
          <h1 class="display-4">Thanks for your message!</h1>
          <p class="lead">I'll reply as soon as possible.</p>
          <p class="lead">In the meantime, feel free to go back to my profile.</p>
          <hr class="my-4">
          <router-link to="/" v-slot="{ href, navigate }">
              <a class="btn btn-info btn-lg" :href="href" @click="navigate">Go to profile</a>
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
