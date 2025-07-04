import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Careers from '@/pages/Career.vue'
import Services from '@/pages/Services.vue' 
import History from '@/pages/History.vue'
import NotFound from '@/pages/NotFound.vue'
import Setting from '@/pages/Setting.vue'
import Collections from '@/components/Collections.vue'
import PriceList from '@/components/PriceList.vue'
import Projects from '@/pages/Projects.vue'
import Register from '@/pages/RegisterModal.vue'
import User from '@/pages/User.vue'
import Upload from '@/pages/Upload.vue' 

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/careers', component: Careers},
    { path: '/services', component: Services},
    { path: '/history', component: History},
    { path: '/setting', component: Setting,
        children:[
        { path:'',component:Collections },
        {path:'pricing',component:PriceList}
        
    ]},
    { path: '/projects', component : Projects},
    { path: '/register', component : Register},
    { path: '/users', component : User},
    { path: '/docs', component: Upload},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
   
]

const router = createRouter({
    linkActiveClass:'font-bold',
    linkExactActiveClass:'font-bold',
    history: createWebHistory(),
    routes
})

router.afterEach(async (to, from, failure) => {
  if (!failure) setTimeout(() => window.HSStaticMethods.autoInit(), 100);
});


export default router