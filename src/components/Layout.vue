<template>
    <div class="flex flex-col min-h-screen bg-[#020B1F]">
        <Header />
        <hr class="h-[2px] bg-gray-600" />
        <div class="flex flex-1 flex-row h-full">
            <Sidebar class="w-64" />
            <div class="w-full">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/SideBar/Sidebar.vue";
import Notification from "@/components/Notification.vue";

</script>