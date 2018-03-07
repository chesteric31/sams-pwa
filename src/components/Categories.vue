<template>
  <div class="categories">
    <vue-accordion :items="menus"></vue-accordion>

    <h1>Categories</h1>
    <ul v-if="categories && categories.length">
      <li v-for="category of categories">
        <p><strong>{{category.name}}</strong></p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import {vueAccordion} from 'vue-accordion'

Vue.component('vueAccordion', vueAccordion)

export default {
  name: 'categories',
  data () {
    return {
      categories: [],
      menus: []
    }
  },
  created () {
    this.getCategories()
  },
  methods: {
    getCategories () {
      axios.get('https://ksams.herokuapp.com/api/categories')
        .then(response => {
          this.categories = response.data._embedded.categories
          let tmp = []
          this.categories.map((value, key) => {
            tmp.push({
              title: value.name,
              text: 'text',
              url: '#',
              image: '/images'
            })
          })
          this.menus = tmp
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
