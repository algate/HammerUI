import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    cn: require('./static/i18n/cn'),
    en: require('./static/i18n/en')
}

export const i18n = new VueI18n({
    locale: 'cn',
    messages
})
