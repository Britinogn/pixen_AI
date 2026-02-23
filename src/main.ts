import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
//import { supabase } from './lib/supabaseClient'

// supabase.auth.onAuthStateChange(( session) => {
//   if (session) {
//     router.push('/generator') // redirect if logged in
//   } else {
//     router.push('/login') // redirect if logged out
//   }
// })

// createApp(App).use(router as any).mount('#app')
const app = createApp(App)
app.use(router as any) 
app.mount('#app')