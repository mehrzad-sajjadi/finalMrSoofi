<template>
    <div class="text-white  h-screen w-64 flex  top-0 right-0  flex-col">
        <nav class="flex flex-col gap-4 p-4">
            <SidebarItem url="/" title="خانه" >
                <template #icon>
                    <HomeIcon />
                </template>
            </SidebarItem>
            <SidebarItem url="/users" title="لیست کاربران" >
                <template #icon>
                    <UserGroupIcon />
                </template>
            </SidebarItem>
            <hr>
            <SidebarItem url="/#" title="لورم ایپسوم" >
                <template #icon>
                    <CubeIcon />
                </template>
            </SidebarItem>
            <SidebarItem url="/#" title="لورم ایپسوم" >
                <template #icon>
                    <CubeTransparentIcon />
                </template>
            </SidebarItem>
            <SidebarItem url="/#" title="لورم ایپسوم" >
                <template #icon>
                    <FilmIcon />
                </template>
            </SidebarItem>
            <SidebarItem url="/#" title="لورم ایپسوم" >
                <template #icon>
                    <RssIcon />
                </template>
            </SidebarItem>
            <hr>
            <SidebarItem url="/login" title="خروج" class="text-[#FF3231]">
                <template #icon>
                    <svg width="22" height="22"  fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.24 21.1074H14.11C9.67002 21.1074 7.53001 19.3574 7.16002 15.4374C7.12002 15.0274 7.42002 14.6574 7.84002 14.6174C8.24002 14.5774 8.62002 14.8874 8.66002 15.2974C8.95002 18.4374 10.43 19.6074 14.12 19.6074H14.25C18.32 19.6074 19.76 18.1674 19.76 14.0974V7.57738C19.76 3.50738 18.32 2.06738 14.25 2.06738H14.12C10.41 2.06738 8.93002 3.25738 8.66002 6.45738C8.61001 6.86738 8.26002 7.17738 7.84002 7.13738C7.42002 7.10738 7.12002 6.73738 7.15001 6.32738C7.49002 2.34738 9.64001 0.567383 14.11 0.567383H14.24C19.15 0.567383 21.25 2.66738 21.25 7.57738V14.0974C21.25 19.0074 19.15 21.1074 14.24 21.1074Z" fill="#FF3231"/>
                        <path d="M3.30995 11.5874H14.0001C14.4101 11.5874 14.7501 11.2474 14.7501 10.8374C14.7501 10.4274 14.4101 10.0874 14.0001 10.0874H3.30994L5.37994 8.01737C5.66994 7.72737 5.66994 7.24737 5.37994 6.95737C5.08994 6.66737 4.60994 6.66737 4.31994 6.95737L0.969941 10.3074C0.679941 10.5974 0.679941 11.0774 0.969941 11.3674L4.31994 14.7174C4.46994 14.8674 4.65994 14.9374 4.84994 14.9374C5.03994 14.9374 5.23994 14.8674 5.37994 14.7174C5.66994 14.4274 5.66994 13.9474 5.37994 13.6574L3.30995 11.5874Z" fill="#FF3231"/>
                    </svg>
                </template>
            </SidebarItem>
        </nav>
    </div>
</template>
<script setup>
import { HomeIcon,UserGroupIcon,CubeIcon,CubeTransparentIcon,FilmIcon,RssIcon} from "@heroicons/vue/24/outline";
import SidebarItem from "@/components/SideBar/SidebarItem.vue";
</script>

<style scoped>
.router:hover{
    background: linear-gradient(201.1deg, rgba(2, 11, 31, 0.5) 0%, rgba(24, 32, 64, 0.5) 86.08%);
}
.router.active {
    background: linear-gradient(201.1deg, rgba(2, 11, 31, 0.5) 0%, rgba(24, 32, 64, 0.5) 86.08%);
} 
div{
    background: rgba(2, 11, 31, 0.35);
    border-left:1px solid white;
}
</style>