<template>
  <div class="categories">
    <h1>Categories</h1>
    <ul v-if="categories && categories.length">
      <li v-for="category of categories">
        <p><strong>{{category.name}}</strong></p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'categories',
  data () {
    return {
      categories: []
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
