<template>
<div> 
  <h2>Comidas</h2>
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Descripcion</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="comida in comidas" :key="comida.id">
        <td>{{comida.nombrecomida}}</td>
        <td>{{comida.precio}}</td>
        <td>{{comida.descripcion}}</td>

      </tr>
    </tbody>
  </table>

</div>
</template>

<script>


export default {

  async setup(){
    const data = await fetch('https://61b24f08c8d4640017aaf359.mockapi.io/comidas')
    const comidas = await data.json()
    return {comidas}
  }
  
};
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid red;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th, td {
  padding: 20px;
}

</style>
