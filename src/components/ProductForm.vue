<template>
  <div id="form">
    <h3>Formulario de Comidas</h3>
    <p>
      <input
        type="text"
        placeholder="Nombre de la Comida"
        v-model="nombrecomida"
      />
      <span v-if="v$.nombrecomida.$error">
        {{ v$.nombrecomida.$errors[0].$message }}
      </span>
    </p>
    <p>
      <input type="text" placeholder="Descripcion" v-model="descripcion" />
      <span v-if="v$.descripcion.$error">
        {{ v$.descripcion.$errors[0].$message }}
      </span>
    </p>
    <p>
      <input type="Number" placeholder="Precio" v-model="precio" />
      <span v-if="v$.precio.$error">
        {{ v$.precio.$errors[0].$message }}
      </span>
    </p>
    <button @click="agregarComida">Agregar</button>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useValidate(),
      nombrecomida: '',
      descripcion: '',
      precio: '',
    };
  },

  methods: {
    agregarComida() {
      this.v$.$validate(); //checkallInputs
      if (!this.v$.$error) {
        const NewFood = {
          nombrecomida: this.nombrecomida,
          descripcion: this.descripcion,
          precio: this.precio,
        };
        this.$store.dispatch("agregarComida", NewFood);
        alert("Comida Agregada correctamente");
      } else {
        alert(console.log(this.v$.$error));
      }
    },
    validations() {
      return {
        nombrecomida: { required },
        precio: { required },
      };
    },
  },
};
</script>

<style scoped>
#form {
  width: 400px;
  background-color: rgb(183, 240, 183);
  margin: 0 auto;
  padding: 5px;
  border-radius: 10px;
}
</style>
