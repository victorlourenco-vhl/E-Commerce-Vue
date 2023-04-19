<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" src="category.imageUrl" alt="Imagem de capa do card" />
    <div class="card-body">
      <h5 class="card-title">{{category.name}}</h5>
      <p class="card-text">
        {{ category.description }}
      </p>
      <a href="#" class="btn btn-primary">Visitar</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CategoryBox',
//   props: ["category"],
//   methods: {

//   }
}
</script>