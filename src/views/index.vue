<template>
  <div>
    <NavMenu/>
    <NavList/>
  </div>
</template>
<script>
import NavMenu from '@/components/nav-menu.vue'
import NavList from '@/components/nav-list.vue'
export default {
  name: 'VueIndex',
  components: { NavMenu, NavList }
}
</script>