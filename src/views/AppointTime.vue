<template>
    <Form :model="package" label-position="top">
        <FormItem label="运单号">
            <Input v-model="package.id" style="width:200px"></Input>
        </FormItem>
        <FormItem label="取件时间">
            <DatePicker type="datetime" v-model="time" format="yyyy-MM-dd HH:mm" placeholder="Select date and time" style="width: 200px"></DatePicker>
        </FormItem>
        <FormItem>
                <Button type="primary" @click="appointTime">Submit</Button>
                <Button style="margin-left: 8px">Cancel</Button>
            </FormItem>
    </Form>
</template>
<script>
export default {
    name:'appointTime',
    data () {
        return {
            package: {
                id: '',
                appoinmentTime: ''
            },
            time:''
        }      
    },
    methods:{
        appointTime(){
            this.package.appoinmentTime=this.time.getTime()
            console.log(this.package)
            this.$store.dispatch('appointTime',this.package);
        }
    }
}
</script>

