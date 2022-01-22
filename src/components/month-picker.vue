<template>
    <div>
        month-picker
        <span>foodList: {{foodList}}</span>
        <span>foodListComputed: {{foodListComputed}}</span>
    </div>
</template>

<script>
export default {
    name: 'month-picker',
    inject: ['foodList', 'foodListComputed']
}
</script>
