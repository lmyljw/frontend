<template>
    <Form :model="formTop" label-position="top">
        <FormItem label="Title">
            <Input v-model="formTop.input1"></Input>
        </FormItem>
        <FormItem label="Title name">
            <Input v-model="formTop.input2"></Input>
        </FormItem>
        <FormItem label="Aligned title">
            <Input v-model="formTop.input3"></Input>
        </FormItem>
    </Form>
</template>
<script>
export default {
    
}
</script>

