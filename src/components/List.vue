<template>
    <div class="list">
        <FilterBtn></FilterBtn>
        <Item></Item>
    </div>
</template>
<script>
import FilterBtn from './FilterBtn.vue'
import Item from './Item.vue'
export default {
    name:'list',
    components: {
        FilterBtn,
        Item
    },
    mounted:function(){
        this.$store.dispatch('initItem')
    },
}
</script>
