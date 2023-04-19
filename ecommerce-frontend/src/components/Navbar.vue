<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Navbar</a> 
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/"><a class="nav-item nav-link" href="#">Home</a></router-link>
          <router-link to="/category/add"><a class="nav-item nav-link" href="#">Adicionar Categoria</a></router-link>     
          <router-link to="/category/list"><a class="nav-item nav-link" href="#">Listar Categorias</a></router-link>     
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>