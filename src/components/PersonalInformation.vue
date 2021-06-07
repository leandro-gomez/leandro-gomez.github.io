<template>
  <PersonalInformationList :personal-information="personalInfo" />
  <PersonalInformationList :personal-information="extraPersonalInfo" />
</template>

<script>
import PersonalInformationList from '@/components/PersonalInformationList.vue'

export default {
  name: 'PersonalInformation',
  components: {
    PersonalInformationList
  },
  data: function () {
    return {
      personalInfo: [
        { title: '', icon: 'far fa-2x fa-envelope', style: {}, text: 'leandro.gz73@gmail.com', href: 'mailto:leandro.gz73@gmail.com' },
        { title: '', icon: 'fas fa-2x fa-map-marked-alt', style: {}, text: 'Born in Argentina, currently in Ecuador', href: '' },
        { title: '', icon: 'fas fa-2x fa-university', style: {}, text: 'Universidad Nacional de Quilmes', href: 'http://www.unq.edu.ar/' },
        { title: '', icon: 'fas fa-2x fa-globe', style: {}, text: 'https://leandro-gomez.github.io/', href: 'https://leandro-gomez.github.io/' }
      ],
      extraPersonalInfo: [
        { title: '', icon: 'fab fa-2x fa-github', style: {}, text: '@leandro-gomez', href: 'https://github.com/leandro-gomez' },
        { title: '', icon: 'fab fa-2x fa-linkedin', style: { color: '#0077B5' }, text: '@leandrogzvz', href: 'https://www.linkedin.com/in/leandrogzvz/' },
        { title: '', icon: 'fas fa-2x fa-laptop-house', style: { color: '#771818' }, text: 'Senior Developer @ Devartis SA', href: 'https://devartis.com' },
        { title: '', icon: 'fab fa-2x fa-medium', style: {}, text: '@leandro_gomez', href: 'https://medium.com/@leandro_gomez' }
      ]
    }
  }
}
</script>
