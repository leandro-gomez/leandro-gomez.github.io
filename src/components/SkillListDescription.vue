<template>
<span>
  <h5 class="text-center">{{ title }}</h5>
  <p style="white-space: pre-line;" class="test-justify">
    <slot></slot>
  </p>
</span>
</template>

<script>
export default {
  name: 'SkillListDescription',
  props: ['title', 'description']
}
</script>
