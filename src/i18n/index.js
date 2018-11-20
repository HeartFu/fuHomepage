import i18next from 'i18next'
import zh from './zh.js'
import en from './en.js'

let nLng = 'en'
if (navigator.language.startsWith('zh')) {
    nLng = 'zh'
}
const lng = localStorage.lng || nLng || 'en'
localStorage.lng = lng

i18next.init({
    lng, // 'en' | 'zh-CN'
    // debug: true,
    resources: {
        zh: {
            translation: zh
        },
        en: {
            translation: en
        },
    },
}, (err, t) => {
    if (err) {
        return err
    }
    return t
})

  
// i18next.changeLanguage(lng);
