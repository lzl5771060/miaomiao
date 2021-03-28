<template>
  <div id="main">
    <Header title="我的中心"></Header>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    <tabbar></tabbar>
  </div>
</template>
<script>
import Header from '@/components/header'
import tabbar from '@/components/tabbar'
export default {
  name:"mine",
  components:{
    Header,
    tabbar
  }
}
</script>
<style scoped>

</style>