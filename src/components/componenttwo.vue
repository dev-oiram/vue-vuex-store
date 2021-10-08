<template>
    <div>
        <div class="card">
            <div class="card-header bg-primary bg-opacity-70 text-white">
                Componente - DOS
            </div>
            <div class="card-body">
                <h5 class="card-title">Resultado: {{ store.state.contador }}</h5>
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

<style lang="scss" scoped>

</style>