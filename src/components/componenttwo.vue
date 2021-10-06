<template>
    <div>
        <h3>Componente - DOS</h3>
        <p>Resultado: {{ store.state.contador }}</p>
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