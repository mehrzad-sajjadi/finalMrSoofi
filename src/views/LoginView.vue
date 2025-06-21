<template>
    <div class="min-h-screen flex items-center justify-center">
        <form
            @submit.prevent="register(userName,password)"
            class="flex flex-col bg-[#020B1F] text-white w-full max-w-[540px] p-10 border border-gray-700 rounded-lg shadow-[24px_24px_96px_0px_#0C132C]"
        >
            <img 
                src="@/assets/imgs/chingal.png" 
                alt="chingal"
                class="w-[200px] h-[99.84px] m-auto mb-6"
            >
            <h1 class="text-md font-bold mb-6">ورود به حساب کاربری چینگال</h1>
            <hr class="border-gray-600 mb-6">
            <label class="text-md font-medium mb-2">نام کاربری</label>
            <input 
                v-model="userName"
                type="text" 
                placeholder="نام کاربری خود را وارد کنید" 
                class="bg-[#1A2338] text-sm border border-gray-600 rounded-md p-3 mb-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <label class="text-md font-medium mb-2">رمز عبور</label>
            <div class="relative">
                <input 
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'" 
                    placeholder="رمز عبور خود را وارد کنید"
                    class="bg-[#1A2338] border border-gray-600 rounded-md p-3  w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                <button
                    type="button"
                    class="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2  text-gray-400 "
                    @click="showPassword = !showPassword"
                >
                    <div class="w-5">
                        <EyeIcon v-if="showPassword" />
                        <EyeSlashIcon v-else />
                    </div>
                </button>
            </div>
            <button 
                type="submit" 
                :disabled="userName==='' || password==='' "
                class="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors mt-6"
            >
                ورود به سپهر
            </button>
        </form>
    </div>
</template>
<script setup>
import {ref,onBeforeMount} from 'vue';
import { EyeIcon,EyeSlashIcon} from '@heroicons/vue/24/solid';
import { useRouter, useRoute } from 'vue-router'
onBeforeMount(()=>{
    localStorage.clear();
})

const showPassword = ref(true);
const userName = ref('');
const password = ref('');
const router = useRouter()
const route = useRoute()

function register(name,password){
    localStorage.setItem("name",name);
    localStorage.setItem("password",password);
    router.push("/");
}
</script>