<template>
    <div>
        <DatePicker v-model:title.customerize='title'>
            <template #header>我是header</template>
            <template #default='{fruitList}'>
                <div v-for="(item, index) in fruitList" :key="index">
                    来自date-picker中的数据, {{item}}
                </div>
            </template>
            <template #footer>我是footer</template>
        </DatePicker>
    </div>
</template>

<script>
import DatePicker from './date-picker.vue'
export default {
    name: 'component-test',
    components: {
        DatePicker
    },
    data() {
        return {
            title: ''
        }
    },
    watch: {
        title(newVal, oldVal) {
            console.log('***** newVal', newVal);
            console.log('***** oldVal', oldVal);
        }
    }
}
</script>
