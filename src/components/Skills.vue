<template>
  <div class="row mt-4">
    <SkillList :skills="mainSkills" title="Work Experience" progress-class="bg-success"/>
    <SkillList :skills="secondSkills" title="Other work Experience" progress-class="bg-info"/>
    <SkillList :skills="someKnowledge" title="Some knowledge" progress-class="bg-warning"/>
    <div class="col text-center">
      <button v-show="!showSkillGroupsDescriptions" type="button" class="btn btn-link text-info" @click="toogleSkillGroupsDesctions">Read more...</button>
      <button v-show="showSkillGroupsDescriptions" type="button" class="btn btn-link text-info" @click="toogleSkillGroupsDesctions">Read less...</button>
      <transition name="fade">
        <span v-show="showSkillGroupsDescriptions">
          <SkillListDescription title="Work Experience" >
            More than 8 years of experience with Python, right now working as a Senior Developer. <br/>
            Most applications developed with Django, while implementing RESTful APIs with Django Rest Framework and Asynchronous Queue Processing with Celery. <br/>
            PostgreSQL and MySQL are the usual choice for Backend databases along with Redis for caching and Celery broker. <br/>
            Deployments are automated to Linux machines using Redhat's Ansible automation.
            Currently also I maintain and implement new infrastructure features using Amazon Web Services as hosting service
          </SkillListDescription>
          <SkillListDescription title="Other Work Experience" >
            As part of my daily responsabilities, I promote the comunications between developers and operations teams.
            That way, each part knows the requirements and implications of new features, which reduces time to production and bugs. <br/>
            Working as a frontend developer is not one of my strength, but I'm now afair of those technologies.
            When required, I've implemented Javascript features in different frameworks, such as ReactJS, VueJS and event React-Native. <br/>
            Of course, every new feature is validated against automated Processing in the CI server, which can be Jenkins, Gitlab-CI or Circle CI. <br/>
            On daily basis, We use Docker containers for matching production external services (like databases and caching servers) or implementing specific apps within containers.
          </SkillListDescription>
          <SkillListDescription title="Some knowledge" >
            Even I don't have working experience with the Kubernetes and Docker Swarm, I like to try them and be ready for any project that requires them. <br/>
            Lastly, I have some working experience with Ruby and Chef. I've developed a Rails application with Spree framework some years ago and
            currently using Chef for specific apps deployments.
          </SkillListDescription>
        </span>
      </transition>
      <transition name="fade">
        <button v-show="showSkillGroupsDescriptions" type="button" class="btn btn-link text-info" @click="toogleSkillGroupsDesctions">Show less</button>
      </transition>
    </div>
  </div>
</template>

<script>
import SkillList from '@/components/SkillList.vue'
import SkillListDescription from '@/components/SkillListDescription.vue'

export default {
  name: 'Skills',
  components: {
    SkillList, SkillListDescription
  },
  methods: {
    toogleSkillGroupsDesctions () {
      this.showSkillGroupsDescriptions = !this.showSkillGroupsDescriptions
    }
  },
  data: function () {
    return {
      showSkillGroupsDescriptions: false,
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
<style type="text/css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
