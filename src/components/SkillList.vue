<template>
  <div class="col-4">
    <h5 class="text-center">{{ title }}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="skill in skills" :key="skills.indexOf(skill)">
        {{skill.title}}
        <div class="progress">
          <div :class="['progress-bar', 'progress-bar-striped', 'progress-bar-animated', progressClass]" role="progressbar" :style="{ width: skill.value + '%' }" :aria-valuenow="skill.value" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SkillList',
  props: ['skills', 'title', 'progressClass']
}
</script>
