<template>
  <div class="d-flex align-items-center flex-column">
    <h2 class="my-5 pt-3">Cadastrar Categoria</h2>
    <form class="w-50">
      <div class="form-group">
        <label for="nameCategory">Nome</label>
        <input
          type="text"
          class="form-control" 
          id="nameCategory"
          placeholder=""
          v-model="categoryName"
        />
      </div>
      <div class="form-group">
        <label for="descriptionCategory">Descrição</label>
        <textarea
          type="text"
          class="form-control"
          id="descriptionCategory"
          placeholder=""
          v-model="description"
        >
        </textarea>
      </div>
      <div class="form-group">
        <label for="urlImageCategory">Imagem</label>
        <input
          type="text"
          class="form-control"
          id="urlImageCategory"
          placeholder="url"
          v-model="imageUrl"
        />
      </div>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-primary" @click="addCategory">CADASTRAR</button>
      </div>
    </form>
  </div>
</template>
<script>
import api from '../../services/api.js'
import sweetalert from 'sweetalert'

export default {
  name: 'AddCategory',
  data() {
    return {
      categoryName: '',
      description: '',
      imageUrl: ''
    }
  },
  methods: {
    addCategory() {
      console.log(this.categoryName, this.description, this.imageUrl)
      const newCategory = {
        name: this.categoryName,
        description: this.description,
        url: this.imageUrl
      }

      api({
        method: 'post',
        url: '/category',
        data: JSON.stringify(newCategory),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          sweetalert({
            text: 'Categoria cadastrada com sucesso!',
            icon: 'success'
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 2em;
}
</style>
