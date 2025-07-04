<template>
  <HyperHeader v-if="$route.name !='NotFound'"  />
  <router-view />
  <HyperFooter v-if="$route.name !='NotFound'"  />
  <Register/>
  <Login/>
</template>
<script>
import HyperHeader from './components/HyperHeader.vue';
import HyperFooter from './components/HyperFooter.vue';
import Login from '@/components/LoginModal.vue';
import Register from '@/pages/RegisterModal.vue';
export default {
  components: {
    HyperHeader,
    HyperFooter,
    Login,
    Register
  }
}
</script>
