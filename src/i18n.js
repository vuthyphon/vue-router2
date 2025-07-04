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
            careers:'career',
            docs: 'Docs'
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
            careers:'ការងារ',
            blogs: 'ប្លុក',
            docs: 'ឯកសារ'

        }
    }
}
)

export default i18n