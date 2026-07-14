import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore= create(
    persist(
        (set)=>({
            user:null,
            token:null,
            isAuthenticated:false,

            //called after successful login
            setAuth:(user, token)=>{
                localStorage.setItem('token', token),
                set({user, token, isAuthenticated:true})
            },

            //called on logout
            logout: ()=>{
                localStorage.removeItem('token'),
                set({user:null,token:null, isAuthenticated:false})
            },
            //update user after profile upadate
            setUser:(user)=> set({user}),
        }),
        {
            name:'auth-storage',
            partialize:(state)=>({
                user:state.user,
                token:state.token,
                isAuthenticated:state.isAuthenticated
            }),
        }
    )
)

export default useAuthStore;