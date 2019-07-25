<template>
    <div class="list">
        <FilterBtn></FilterBtn>
        <Item></Item>
    </div>
</template>
<script>
import FilterBtn from '../components/FilterBtn'
import Item from '../components/Item.vue'
export default {
    name:'list',
    components: {
        FilterBtn,
        Item
    },
    
}
</script>
