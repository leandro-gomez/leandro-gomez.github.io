<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h1 class="text-center">My favouries books & read list</h1>
        <div class="text-center">
            <div class="btn-group mt-1">
              <button @click="setList('favBooks')"
                  :class="['btn', 'btn-outline-info', (this.showList == 'favBooks' ? 'active' : '')]">
                  Favs <i class="far fa-star"></i>
              </button>
              <button @click="setList('readList')"
                  :class="['btn', 'btn-outline-info', (this.showList == 'readList' ? 'active' : '')]">
                  Read list <i class="fas fa-glasses"></i>
              </button>
            </div>
        </div>
      </div>
    </div>
    <div class="row text-center" v-for="group in groupedBooks" :key="groupedBooks.indexOf(group)">
      <div class="col-lg-4 mt-4" v-for="book in group" :key="group.indexOf(book)">
        <div class="card mx-auto" style="width: 18rem;">
          <a :href="book.url" target="__blank">
            <img class="card-img-top" :src="book.image_url" :alt="book.title">
          </a>

          <div class="card-body">
            <h5 class="card-title">{{book.title}}</h5>
            <p class="card-text">{{book.description}}</p>
            <a :href="book.url" target="__blank" class="btn btn-info">Link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { groupBy } from '@/libs/utils.js'

export default {
  name: 'FavBooks',
  data () {
    return {
      showList: 'favBooks',
      readList: [
        {
          title: 'Test-Driven Development with Python: Obey the Testing Goat',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51K8lEqa9SL._SX379_BO1,204,203,200_.jpg',
          description: 'For better understanding of testing',
          url: 'https://www.amazon.com/-/es/dp/1491958707'
        },
        {
          title: 'How Computers Really Work',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51COrZeWTpL._SX376_BO1,204,203,200_.jpg',
          description: 'For better understanding of machines',
          url: 'https://www.amazon.com/-/es/dp/1718500661/'
        },
        {
          title: 'Computer Networks: A Systems Approach',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/5139UsCTBeL._SX403_BO1,204,203,200_.jpg',
          description: 'For better understanding of networking',
          url: 'https://www.amazon.com/-/es/dp/0128182008'
        },
        {
          title: 'Software Craftsman, The: Professionalism, Pragmatism, Pride',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51dvkme2rWL._SX380_BO1,204,203,200_.jpg',
          description: 'For better understanding of software development',
          url: 'https://www.amazon.com/-/es/dp/0134052501/'
        },
        {
          title: 'Soft Skills: The software developer\'s life manual',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51WiLueukSL._SX396_BO1,204,203,200_.jpg',
          description: 'For better understanding of soft skills',
          url: 'https://www.amazon.com/-/es/John-Sonmez/dp/1617292397/'
        },
        {
          title: 'The Pragmatic Programmer: Your Journey To Mastery',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg',
          description: 'For better understanding of programmer?',
          url: 'https://www.amazon.com/-/es/dp/0135957052/'
        },
        {
          title: 'Software Craftsmanship: The New Imperative',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/41Z1V1UfxGL._SX395_BO1,204,203,200_.jpg',
          description: 'For better understanding of programming',
          url: 'https://www.amazon.com/-/es/dp/0201733862/'
        },
        {
          title: 'Genetic Programming: On the Programming of Computers by Means of Natural Selection ',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51fAjpvDvCL._SX342_BO1,204,203,200_.jpg',
          description: 'For better understanding of Skynet',
          url: 'https://www.amazon.com/dp/0262111705/'
        },
        {
          title: 'Time Management for System Administrators',
          image_url: 'https://m.media-amazon.com/images/I/51PxEmVk1vL.jpg',
          description: 'For better understanding of System Administration',
          url: 'https://www.amazon.com/-/es/dp/B0026OR2WM/'
        },
        {
          title: 'Practice of System and Network Administration',
          image_url: 'https://m.media-amazon.com/images/I/51McF37d5bL.jpg',
          description: 'For better understanding of System Administration II',
          url: 'https://www.amazon.com/-/es/dp/B004JLMUJ0/'
        },
        {
          title: 'Invent Your Own Computer Games with Python',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51mpkckeu4L._SX376_BO1,204,203,200_.jpg',
          description: 'For fun! (?)',
          url: 'https://www.amazon.com/-/es/dp/1593277954/'
        },
        {
          title: 'Practice of Cloud System Administration',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51CjsoPclaL._SX379_BO1,204,203,200_.jpg',
          description: 'For better understanding of System Administration III',
          url: 'https://www.amazon.com/-/es/dp/032194318X/'
        },
        {
          title: 'UNIX and Linux System Administration Handbook',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/61ydSUheYOL._SX383_BO1,204,203,200_.jpg',
          description: 'For better understanding of System Administration IIII',
          url: 'https://www.amazon.com/-/es/dp/0134277554/'
        },
        {
          title: 'Practice of System and Network Administration',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/516SY6CfDqL._SX379_BO1,204,203,200_.jpg',
          description: 'For better understanding of System Administration IIIII',
          url: 'https://www.amazon.com/dp/0321919165/'
        }
      ],
      favBooks: [
        {
          title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg',
          description: 'One of the "must read" of every programmer, imho',
          url: 'https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612'
        },
        {
          title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg',
          description: 'If you want to write readable code, read this',
          url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882'
        },
        {
          title: 'The Kubernetes Book',
          image_url: 'https://m.media-amazon.com/images/I/419aaEMtQlS.jpg',
          description: 'THE book for getting starting with k8s',
          url: 'https://www.amazon.com/Kubernetes-Book-Version-November-2018-ebook/dp/B072TS9ZQZ'
        },
        {
          title: 'Computer Networks',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/41bdzcfQKbL._SX384_BO1,204,203,200_.jpg',
          description: 'I leant networking with this book',
          url: 'https://www.amazon.com/Computer-Networks-5th-Andrew-Tanenbaum/dp/0132126958'
        },
        {
          title: 'C Programming Language',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/411ejyE8obL._SX377_BO1,204,203,200_.jpg',
          description: 'I don\'t remember much about C, but this book was cool to read',
          url: 'https://www.amazon.com/-/es/dp/0131103628'
        },
        {
          title: 'Construcción de software: Una mirada ágil',
          image_url: 'https://m.media-amazon.com/images/I/41cTSFNSTkL.jpg',
          description: 'This book helped me to approve Nicolás Paez\'s subject :)',
          url: 'https://www.amazon.com/-/es/Nicolás-Paez-ebook/dp/B01M1L858Z'
        }
      ]
    }
  },
  computed: {
    groupedBooks () {
      return groupBy(this.$data[this.showList], 3)
    }
  },
  methods: {
    setList (listName) {
      this.showList = listName
    }
  }
}
</script>
