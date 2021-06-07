<template>
  <div class="row mt-4">
    <SkillList :skills="mainSkills" title="Work Experience" progress-class="bg-success"/>
    <SkillList :skills="secondSkills" title="Other work Experience" progress-class="bg-info"/>
    <SkillList :skills="someKnowledge" title="Some knowledge" progress-class="bg-warning"/>
  </div>
</template>

<script>
import SkillList from '@/components/SkillList.vue'

export default {
  name: 'Skills',
  components: {
    SkillList
  },
  data: function () {
    return {
      mainSkills: [
        { title: 'Python', value: 100 },
        { title: 'Ansible', value: 95 },
        { title: 'Docker', value: 80 },
        { title: 'Linux', value: 75 },
        { title: 'Amazon Web Services', value: 75 }
      ],
      secondSkills: [
        { title: 'DevOps', value: 80 },
        { title: 'Gitlab-CI/Jenkins', value: 80 },
        { title: 'HTML/CSS', value: 75 },
        { title: 'VueJS', value: 75 },
        { title: 'ReactJS/React-Native', value: 70 }
      ],
      someKnowledge: [
        { title: 'Docker Swarm', value: 60 },
        { title: 'Kubernetes', value: 60 },
        { title: 'Ruby', value: 40 },
        { title: 'Chef', value: 30 }
      ]
    }
  }
}
</script>
