import { reactive, readonly } from "vue";

const state = reactive({
  contador: 0
});

const reiniciar = ()=> {
    state.contador = 0
}

const incrementar = ()=> {
  state.contador++
}

const decrementar = ()=> {
    state.contador--
}

// readonly: crea una copia de solo lectura
export default { 
    state: readonly(state),
    reiniciar,
    incrementar, 
    decrementar 
}