<template>
    <div class="header">
        <img
            src="@/assets/imgs/chingal.png"
            alt="chingal"
            class="w-[170px] h-[70px]"
        />
        <div class="leftSide">
            <div>
                <input
                    v-if="route.path == '/users'"
                    type="text"
                    v-model="search"
                    placeholder="جستجو..."
                    class="rounded-md text-white pr-4 w-[400px] h-full"
                />
            </div>
            <div class="darkmode">
                <SunIcon class="items rounded-md text-white" />
                <MoonIcon class="items bg-[#0559FD] rounded-md text-white" />
            </div>
        </div>
    </div>
    <hr class="" />
</template>
<script setup>
import { ref,watch } from "vue";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const search = ref("");

function getItem(search){
    let filterd = users.value;
    filterd = filterd.filter(user=>user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    return filterd ;
}
watch(search,(newValue)=>{
    search.value = getItem(search.value);
    // newValue = newValue.toLocaleLowerCase();
    // console.log(search.value);
})
</script>
<style scoped>
.header {
    width: 100%;
    height: 80px;
    justify-content: space-between;
    padding-top: 24px;
    padding-right: 48px;
    padding-bottom: 24px;
    padding-left: 48px;
    display: flex;
    align-items: center;
}
.leftSide {
    width: 500px;
    height: 36px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.darkmode {
    padding: 3px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    background: linear-gradient(204.51deg, #020b1f 0%, #0c132c 84.34%);
    border: 1px solid;
    border-image-source: linear-gradient(
        206.57deg,
        #182040 0%,
        rgba(24, 32, 64, 0) 83.33%
    );
}
.items {
    width: 30px;
    height: 30px;
    padding: 5px;
}
input {
    background: linear-gradient(200.68deg, #020b1f 0%, #0c132c 82.07%);
    border: 1px solid rgba(24, 32, 64, 1);
}
</style>