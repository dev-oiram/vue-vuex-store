<template>
    <div>
        <h3>Componente - UNO</h3>
        <p>Resultado: {{ store.state.contador }}</p>
        <button type="button" class="btn btn-success" @click="store.incrementar">Incrementar</button>
        <button type="button" class="btn btn-primary ms-2" @click="store.decrementar">Decrementar</button>
        <button type="button" class="btn btn-danger ms-2" @click="store.reiniciar">Reiniciar</button>
    </div>
</template>

<script>
import { inject } from 'vue'
export default {
    setup () {
        const store = inject('globalstore')

        return {
            store
        }
    }
}
</script>

<style lang="css" scoped>

</style>