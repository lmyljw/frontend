<template>
    <div >
         <Table border :columns="columns" :data="showList"></Table>
    </div>
    
</template>
<script>
export default {
    name:'item',
    data () {
        return {
            columns: [
                {
                    title: '订单号',
                    key: 'id'
                },
                {
                    title: '收件人',
                    key: 'customerName'
                },
                {
                    title: '电话',
                    key: 'phoneNumber'
                },
                {
                    title:'状态',
                    key:'status'
                },
                {
                    title:'预约时间',
                    key:'appoinmentTime'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.$store.dispatch('confirmFetch',params.index)
                                    }
                                }
                            }, '确认收货'),
                        ]);
                    }
                }
            ],
        }
    },
    computed:{
        showList:function(){
            if(this.$store.state.showing=='All')
            return this.$store.state.packageList
            if(this.$store.state.showing=='Appointed')
            return this.$store.state.packageList.filter(item=>item.status=='已预约')
            if(this.$store.state.showing=='Fetched')
            return this.$store.state.packageList.filter(item=>item.status=='已取件')
            if(this.$store.state.showing=='Unappoint')
            return this.$store.state.packageList.filter(item=>item.status=='未预约')
        }
    }
}
</script>

