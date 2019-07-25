<template>
    <div class="filterBtn">
        <Button @click="showAll">All</Button>
        <Button @click="showAppointed">已预约</Button>
        <Button @click="showFetched">已取件</Button>
        <Button @click="showUnappoint">未预约</Button>
        <Button @click="addItem">添加</Button>
    </div>
</template>
<script>
export default {
    name:"filterBtn",
    methods:{
        showAll(){
            this.$store.commit('showAll');
        },
        showAppointed(){
            this.$store.commit('showAppointed');
        },
        showFetched(){
            this.$store.commit('showFetched');
        },
        showUnappoint(){
            this.$store.commit('showUnappoint')
        },
        addItem(){
            this.$store.dispatch('addItem');
        }
    }
}
</script>

