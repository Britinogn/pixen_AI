import { ref } from "vue";
//import { useRouter } from "vue-router";
import { supabase } from "../lib/supabaseClient";

const user = ref<any>(null)
const loading = ref(false)
const error = ref<string | null >(null)

//const router = useRouter()

supabase.auth.onAuthStateChange((_event, Session) => {
    user.value = Session?.user ?? null
})

// supabase.auth.onAuthStateChange((event, session) => {
//   if (session) {
//     router.push('/generator') // redirect if logged in
//   } else {
//     router.push('/login') // redirect if logged out
//   }
// })

export function useAuth(){
    const signUp = async(email: string , password: string) =>{
        loading.value = true
        error.value = null
        const{data, error: err } = await supabase.auth.signUp({email, password})
        if(err) error.value = err.message 
        loading.value = false
        return data
    }


    const signIn = async(email: string , password: string) =>{
        loading.value = true
        error.value = null
        const{data, error: err } = await supabase.auth.signInWithPassword({email, password})
        if(err) error.value = err.message 
        loading.value = false
        return data
    }

    const signOut = async() =>{
        await supabase.auth.signOut()
        user.value = null
    }

    const getUser = async () => {
        const { data } = await supabase.auth.getUser()
        user.value = data.user
        return user.value
    }


    return{user , loading , error , signIn , signUp , signOut , getUser}
}