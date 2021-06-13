<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h1 class="text-center">My favouries books</h1>
      </div>
    </div>
    <div class="row mt-4" v-for="group in groupedBooks" :key="groupedBooks.indexOf(group)">
      <div class="col-4" v-for="book in group" :key="group.indexOf(book)">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="book.image_url" :alt="book.title">
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
      books: [
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
        }
      ]
    }
  },
  computed: {
    groupedBooks () {
      return groupBy(this.books, 3)
    }
  }
}
</script>
