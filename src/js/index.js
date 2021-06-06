var app = new Vue({
  el: '#app',
  data: {
    title: "Leandro Gomez",
    navlinks: [
    	{"href": "https://github.com/leandro-gomez/", "text": "Github"},
    	{"href": "https://www.linkedin.com/in/leandrogzvz/", "text": "Linkedin"}
    ],
    personalInformation: [
      {"title": "", "icon": "fas fa-2x fa-male", "style": {}, "text": "Leandro Gomez", "href": ""},
      {"title": "", "icon": "far fa-2x fa-envelope", "style": {}, "text": "leandro.gz73@gmail.com", "href": "mailto:leandro.gz73@gmail.com"},
      {"title": "", "icon": "fas fa-2x fa-map-marked-alt", "style": {}, "text": "Born in Argentina, currently in Ecuador", "href": ""},
      {"title": "", "icon": "fas fa-2x fa-globe", "style": {}, "text": "https://leandro-gomez.github.io/", "href": "https://leandro-gomez.github.io/"},
      {"title": "", "icon": "fab fa-2x fa-github", "style": {}, "text": "@leandro-gomez", "href": "https://github.com/leandro-gomez"},
      {"title": "", "icon": "fab fa-2x fa-linkedin", "style": {"color": "#0077B5"}, "text": "@leandrogzvz", "href": "https://www.linkedin.com/in/leandrogzvz/"},
      {"title": "", "icon": "fas fa-2x fa-laptop-house", "style": {"color": "#771818"}, "text": "Senior Developer @ Devartis SA", "href": "https://devartis.com"},
      {"title": "", "icon": "fab fa-2x fa-medium", "style": {}, "text": "@leandro_gomez", "href": "https://medium.com/@leandro_gomez"}
    ],
    skillGroups: [
      {
        "title": "Work experience",
        "progressClass": "bg-success",
        "skills": [
          {"title": "Python", "value": 100},
          {"title": "Ansible", "value": 95},
          {"title": "Docker", "value": 80},
          {"title": "Linux", "value": 75},
          {"title": "Amazon Web Services", "value": 75}
        ]
      },
      {
        "title": "Other work experience",
        "progressClass": "bg-info",
        "skills": [
          {"title": "DevOps", "value": 80},
          {"title": "ReactJS/React-Native", "value": 80},
          {"title": "HTML/CSS", "value": 75},
          {"title": "Jenkins", "value": 70},
          {"title": "Javascript", "value": 60},
        ]
      },
      {
        "title": "Some knowledge",
        "progressClass": "bg-warning",
        "skills": [
          {"title": "Gitlab-CI", "value": 90},
          {"title": "Jenkins", "value": 80},
          {"title": "VueJS", "value": 60},
          {"title": "Kubernetes", "value": 60},
          {"title": "Ruby", "value": 40}
        ]
      }
    ]
  }
})