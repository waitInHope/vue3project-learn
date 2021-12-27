<template>
  <div class="hello">
    {{ msg }}
    <div>{{ computedMsg }}</div>
    <div>{{ name }}</div>
  </div>
</template>

<script>
import { onMounted, ref, watch, toRefs, computed } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    console.log('收到的属性值', props);

    let { msg } = toRefs(props);
    console.log('从父组件传进来的参数', msg)

    let name = ref('Tom');
    console.log('name', name)
    console.log('name.value', name.value)

    let computedMsg = computed(() => {
      return name.value + 'computed!!!!!'
    })

    let changeName = () => {
      setTimeout(() => {
        name.value = 'Jack';
      }, 2000)
    }

    watch(name, (newVal, oldValue) => {
      console.log('name old value is', oldValue)
      console.log('name new value is', newVal)
    })

    onMounted(changeName)

    return {
      name,
      computedMsg
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
