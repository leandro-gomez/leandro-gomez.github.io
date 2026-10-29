<template>
  <div class="row mt-4">
    <SkillList :skills="mainSkills" title="Work Experience" progress-class="bg-success"/>
    <SkillList :skills="secondSkills" title="Other work Experience" progress-class="bg-info"/>
    <SkillList :skills="someKnowledge" title="Some knowledge" progress-class="bg-warning"/>
    <div class="col-md text-center">
      <button v-show="!showSkillGroupsDescriptions" type="button" class="btn btn-link text-info" @click="toogleSkillGroupsDesctions">Read more...</button>
      <button v-show="showSkillGroupsDescriptions" type="button" class="btn btn-link text-info" @click="toogleSkillGroupsDesctions">Read less...</button>
      <transition name="fade">
        <span v-show="showSkillGroupsDescriptions">
          <SkillListDescription title="Work Experience" >
            More than 10 years of experience with Python, right now working as a Staff Software Engineer at Tiendanube, leading the design and development of high-performance, scalable applications. <br/>
            Most applications developed with Django (RESTful APIs with Django Rest Framework) and Node.js/NestJS, guiding technical teams and making architecture decisions. Before that, at devartis, I built Django apps with Django-rq queues, websocket integrations with Tornado and deployments to Heroku. <br/>
            PostgreSQL and MySQL are the usual choice for Backend databases along with Redis for caching and Celery broker. <br/>
            Deployments are automated to Linux machines using Redhat's Ansible automation.
            I also maintain and implement infrastructure features on Amazon Web Services, running workloads on Kubernetes (Amazon EKS)
          </SkillListDescription>
          <SkillListDescription title="Other Work Experience" >
            As part of my daily responsabilities, I mentor developers and promote the comunications between developers and operations teams.
            That way, each part knows the requirements and implications of new features, which reduces time to production and bugs. <br/>
            Working as a frontend developer is not one of my strength, but I'm now afair of those technologies.
            When required, I've implemented Javascript/TypeScript features in different frameworks, such as ReactJS, VueJS and even React-Native. <br/>
            I also design asynchronous solutions and complex integrations with the Oracle NetSuite ERP. <br/>
            Of course, every new feature is validated by CI/CD pipelines that I build and optimize with Bitbucket, CircleCI and GitLab. <br/>
            I use tools like ChatGPT and Cursor for rapid prototyping, documentation and to speed up development. <br/>
            On daily basis, We use Docker containers for matching production external services (like databases and caching servers) or implementing specific apps within containers.
          </SkillListDescription>
          <SkillListDescription title="Some knowledge" >
            I like to try new orchestration tools such as Docker Swarm and be ready for any project that requires them. <br/>
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
        { title: 'Python/Django', value: 100 },
        { title: 'Node.js/NestJS', value: 80 },
        { title: 'Team Leadership', value: 85 },
        { title: 'Kubernetes/Amazon EKS', value: 70 },
        { title: 'Docker', value: 80 }
      ],
      secondSkills: [
        { title: 'CI/CD (Bitbucket/CircleCI/GitLab)', value: 85 },
        { title: 'Oracle NetSuite', value: 75 },
        { title: 'Ansible', value: 80 },
        { title: 'Amazon Web Services', value: 75 },
        { title: 'HTML/CSS', value: 75 },
        { title: 'VueJS', value: 75 },
        { title: 'ReactJS/React-Native', value: 70 }
      ],
      someKnowledge: [
        { title: 'Docker Swarm', value: 60 },
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
