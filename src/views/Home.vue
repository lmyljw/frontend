<template>
  <div class="home">
    <Layout>
            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-2">
                        <Icon type="ios-search"></Icon>
                        <span><li><router-link :to="{name:'list'}">package list</router-link></li></span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-settings"></Icon>
                        <span><li><router-link :to="{name:'form'}"> 包裹入库</router-link></li></span>
                    </MenuItem>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <Header class="layout-header-bar"></Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    <!-- <List></List> -->
  </div>
</template>

<script>
import List from '../components/List.vue'
import AddPackageForm from '../components/AddPackageForm.vue'
export default {
  name: 'home',
  components: {
    List
  }
}
</script>
