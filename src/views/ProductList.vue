<template>
    <div>
       <Suspense>
      <template #default>
        <ProductList />
      </template>
      <template #fallback>
        Cargando
      </template>
    </Suspense>
    </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'
    export default {
        components:{
            ProductList
        }
        
    }
</script>

<style lang="scss" scoped>

</style>