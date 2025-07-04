<template>
    <HeroBanner />
    <BannerLeft />

</template>
<script>
import HeroBanner from '@/components/HeroBanner.vue'
import BannerLeft from '@/components/BannerLeft.vue'
import Register from '@/pages/RegisterModal.vue';
import Login from '@/components/LoginModal.vue';
export default {
    components: {
        HeroBanner,
        BannerLeft,
        Register,
        Login
    }
}
</script>