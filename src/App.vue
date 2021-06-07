<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>

html {
  scroll-behavior: smooth;
}

body {
  background-color: #f8f9fa;
}
</style>
