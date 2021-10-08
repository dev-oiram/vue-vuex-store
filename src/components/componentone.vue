<template>
    <div>
        <div class="card">
            <div class="card-header bg-success bg-opacity-70 text-white">
                Componente - UNO
            </div>
            <div class="card-body">
                <h5 class="card-title">Resultado: {{ store.state.contador }}</h5>
                <button type="button" class="btn btn-success" @click="store.incrementar">Incrementar</button>
                <button type="button" class="btn btn-primary ms-2" @click="store.decrementar">Decrementar</button>
                <button type="button" class="btn btn-danger ms-2" @click="store.reiniciar">Reiniciar</button>
            </div>
        </div>
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