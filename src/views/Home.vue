<template>
  <div class="home">
    <Layout>
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <Icon type="ios-search"></Icon>
            <span><li><router-link :to="{name:'list'}">package list</router-link></li></span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="ios-settings"></Icon>
            <span><li><router-link :to="{name:'addPackageForm'}"> 包裹入库</router-link></li></span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="ios-navigate"></Icon>
            <span><li><router-link :to="{name:'appointTimeForm'}"> 预约取件</router-link></li></span>
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
import List from '../views/List.vue'
import AddPackageForm from '../views/AddPackageForm.vue'
import AppointTime from '../views/AppointTime.vue'
export default {
  name: 'home',
   data () {
    return {
      isCollapsed: false
    };
  },
  computed: {
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  mounted:function(){
        this.$store.dispatch('initItem')
    },
  components: {

  }
}
</script>
<style scoped>
    .layout{
      border: 1px solid #d7dde4;
      height: 1000px;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
    }
    .layout-header-bar{
      background: #fff;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .menu-item span{
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
    }
    .menu-item i{
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
    }
    .collapsed-menu span{
      width: 0px;
      transition: width .2s ease;
    }
    .collapsed-menu i{
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;
    }
</style>