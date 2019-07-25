<template>
    <div>
        <label>包裹入库</label>
        <Form :model="package" label-position="left" :label-width="100">
            <FormItem label="运单号">
                <Input v-model="package.id"></Input>
            </FormItem>
            <FormItem label="收件人">
                <Input v-model="package.customerName"></Input>
            </FormItem>
            <FormItem label="电话">
                <Input v-model="package.phoneNumber"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="addPackage">Submit</Button>
                <Button style="margin-left: 8px">Cancel</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            package:{
                id: '',
                customerName: '',
                phoneNumber: ''
            }
        }
    },
    methods:{
        addPackage(){
            this.$store.dispatch('addPackage',this.package);
        }
    }
}
</script>

