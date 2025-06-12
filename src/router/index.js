import { createRouter , createWebHistory  } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import UserView from  "@/views/UserView.vue"
const routes = [
    {
        path : '/',
        name: "main",
        component : HomeView
    },
    {
        path : '/login',
        name: "login",
        component : LoginView
    },
    {
        path : '/users',
        name: "users",
        component : UserView
    }
]
const router  = createRouter({
    history : createWebHistory(),
    routes
})
router.beforeEach((to,from,next)=>{ 
    const name = localStorage.getItem("name");
    const password = localStorage.getItem("password");
    if( (!name || !password) && to.path!="/login" ){
        router.push("/login")
    }else{
        next()
    }
})
export default router ; 