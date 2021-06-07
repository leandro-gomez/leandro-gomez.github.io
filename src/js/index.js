var LGProfile = {
  methods: {
    toogleSkillGroupsDesctions () {
      this.showSkillGroupsDescriptions = !this.showSkillGroupsDescriptions
    },
    focusElement ($event, elemRef) {
      const element = this.$refs[elemRef]
      setTimeout(function () {
        element.focus()
      }, 500)
    }
  },
  data () {
    return {
      title: 'Leandro Gomez',
      navlinks: [
      	{ href: 'https://github.com/leandro-gomez/', text: 'Github' },
      	{ href: 'https://www.linkedin.com/in/leandrogzvz/', text: 'Linkedin' }
      ],
      mainPersonalInformation: [],
      extraPersonalInformation: [],
      showSkillGroupsDescriptions: false,
      skillGroups: [
        {
          title: 'Work experience',
          description: 'More than 8 years of experience with Python, right now working as a Senior Developer. \n' +
                         'Most applications developed with Django, while implementing RESTful APIs with Django Rest Framework and Asynchronous Queue Processing with Celery. \n' +
                         'PostgreSQL and MySQL are the usual choice for Backend databases along with Redis for caching and Celery broker. \n' +
                         "Deployments are automated to Linux machines using Redhat's Ansible automation. " +
                         'Currently also I maintain and implement new infrastructure features using Amazon Web Services as hosting service',
          progressClass: 'bg-success',
          skills: [
            { title: 'Python', value: 100 },
            { title: 'Ansible', value: 95 },
            { title: 'Docker', value: 80 },
            { title: 'Linux', value: 75 },
            { title: 'Amazon Web Services', value: 75 }
          ]
        },
        {
          title: 'Other work experience',
          description: 'As part of my daily responsabilities, I promote the comunications between developers and operations teams. ' +
                         'That way, each part knows the requirements and implications of new features, which reduces time to production and bugs. \n' +
                         "Working as a frontend developer is not one of my strength, but I'm now afair of those technologies. " +
                         "When required, I've implemented Javascript features in different frameworks, such as ReactJS, VueJS and event React-Native. \n " +
                         'Of course, every new feature is validated against automated Processing in the CI server, which can be Jenkins, Gitlab-CI or Circle CI. \n' +
                         'On daily basis, We use Docker containers for matching production external services (like databases and caching servers) or implementing specific apps within containers.',
          progressClass: 'bg-info',
          skills: [
            { title: 'DevOps', value: 80 },
            { title: 'Gitlab-CI/Jenkins', value: 80 },
            { title: 'HTML/CSS', value: 75 },
            { title: 'VueJS', value: 75 },
            { title: 'ReactJS/React-Native', value: 70 }

          ]
        },
        {
          title: 'Some knowledge',
          description: "Even I don't have working experience with the Kubernetes and Docker Swarm, I like to try them and be ready for any project that requires them. \n" +
                         "Lastly, I have some working experience with Ruby and Chef. I've developed a Rails application with Spree framework some years ago and " +
                         'currently using Chef for specific apps deployments.',
          progressClass: 'bg-warning',
          skills: [
            { title: 'Docker Swarm', value: 60 },
            { title: 'Kubernetes', value: 60 },
            { title: 'Ruby', value: 40 },
            { title: 'Chef', value: 30 }
          ]
        }
      ]
    }
  }
}

var app = Vue.createApp(LGProfile)

app.mount('#app')
