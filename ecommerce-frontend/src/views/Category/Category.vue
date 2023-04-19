<template>
  <div class="d-flex align-items-center flex-column">
    <h2 class="my-5 pt-3">Categorias</h2>
    <div>{{ categories[0] }}</div>
    <!-- <CategoryBox /> -->
  </div>
</template>
<script>
import CategoryBox from '../../components/CategoryBox.vue'
import api from '../../services/api'

export default {
  name: 'Category',
  components: {
    CategoryBox
  },
  data() {
    return {
      categories: []
    }
  },
  methods: {
    async getCategories() {
      try {
        const response = await api.get('/category')
        this.categories = response.data
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
  },

  mounted() {
    this.getCategories()
  }
}
</script>