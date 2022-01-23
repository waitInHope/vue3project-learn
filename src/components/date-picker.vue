<template>
    <div>
        <div>date-picker</div>
        <input type="text" :value="title" @input="inputEvent">
        <div>
            <slot name='header'></slot>
        </div>
        <div>
            <slot :fruitList='fruitList'></slot>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>

        <month-picker></month-picker>

        <Suspense>
            <AsyncComponent></AsyncComponent>
        </Suspense>
    </div>
</template>

<script>
import MonthPicker from './month-picker.vue'
import { defineAsyncComponent } from 'vue'
export default {
    name: 'date-picker',
    components: {
        MonthPicker,
        AsyncComponent: defineAsyncComponent(() => import('./async-component.vue'))
    },
    props: {
        title: String,
        titleModifiers: {
            default: () => ({})
        }
    },
    data() {
        return {
            fruitList: ['apple', 'banana', 'orange']
        }
    },
    emits: ['update:title'],
    methods: {
        inputEvent(event) {
            console.log('titleModifiers', this.titleModifiers)
            let val = event.target.value;
            console.log('输入事件的值', val);
            if(this.titleModifiers.customerize) {
                val = val[0].toUpperCase() + val.slice(1)
            }
            console.log('触发事件自定义处理后的值', val);
            this.$emit('update:title', val);
        }
    }
}
</script>