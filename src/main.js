import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            hello: 'hello world',
            about: 'About',
            register: 'Register',
            users: 'User',
            services: 'Services',
            projects: 'Projects',
            setting: 'Setting',
            history: 'History',
            login: 'Login',
            blogs: 'blogs',
            careers:'career'
        },
        khm: {
            hello: 'សួស្តី​ពិភពលោក',
            about: 'អំពីយើង',
            register: 'ចុះឈ្មោះ',
            users: 'អ្នកប្រើប្រាស់',
            services: 'សេវាកម្ម',
            projects: 'គម្រោង',
            setting: 'ការកំណត់',
            history: 'ប្រវត្តិ',
            login:'ចូលប្រព័ន្ធ',
            blogស:'ប្លុក',
            careers:'ការងារ'

        }
    }
}
)


const app = createApp(App)
app.use(router)
app.use(i18n)


app.mount('#app')

