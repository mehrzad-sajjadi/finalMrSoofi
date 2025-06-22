<template>
    <div class="h-full ">
        <Layout >
            <div class="w-full flex flex-row ">
                <div class="w-full py-5 px-2">
                    <div class="banner w-full rounded-xl flex ">
                        <Face />
                        <div class="text-white px-3 flex flex-wrap content-center">
                            <h3 class="text-2xl py-3">
                                چینگال چیست ؟
                            </h3>
                            <p class="text-ms">
                                چینگال سامانه‌ایست که برای شما آماده شده است تا با پیاده‌سازی آن هم تمرینی کرده باشید و هم اینکه نتیجه‌ی پیاده‌سازی شما مورد بررسی تیم کلاینت قرار گیرد.
                            </p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-2 mt-3">
                        <Service>
                            <template #icon>
                                <RocketLaunchIcon class="icon size-14 text-[#8A910E]" />
                            </template>
                            <template #title>
                                لورم ایپسوم
                            </template>
                        </Service>
                        <Service>
                            <template #icon>
                                <MusicalNoteIcon class="icon size-14 text-[#058F9A]" />
                            </template>
                            <template #title>
                                لورم ایپسوم
                            </template>

                        </Service>
                        <Service>
                            <template #icon>
                                <UserGroupIcon class="icon size-14 text-[#8D2129]" />                                
                            </template>
                            <template #title>
                                لیست کاربران
                            </template>
                        </Service>
                        <Service>
                            <template #icon>
                                <AcademicCapIcon class="icon size-14 text-[#8D5A14]" />
                            </template>
                            <template #title>
                                لورم ایپسوم
                            </template>
                        </Service>
                        <Service>
                            <template #icon>
                                <WrenchScrewdriverIcon class="icon size-14 text-[#18903A]" />                                
                            </template>
                            <template #title>
                                لورم ایپسوم
                            </template>
                        </Service>
                        <Service>
                            <template #icon>
                                <CameraIcon class="icon size-14 text-[#8D5A14]" />                                   
                            </template>
                            <template #title>
                                لورم ایپسوم
                            </template>
                        </Service>
                    </div>
                </div>
                <div class="flex flex-col">
                    <Notification />
                    <Statistics />    
                </div>
            </div>
        </Layout>
    </div>
</template>
<script setup>
import Layout from "@/components/Layout.vue";
import Notification from "@/components/Notification.vue";
import Statistics from "@/components/Statistics.vue";
import Face from "@/components/Face.vue"
import Service from "@/components/Service.vue";
import { UserGroupIcon ,RocketLaunchIcon ,MusicalNoteIcon ,AcademicCapIcon ,WrenchScrewdriverIcon ,CameraIcon} from "@heroicons/vue/24/outline";

</script>
<style scoped>
.banner{
    background: #033699;
    background: radial-gradient(circle,rgba(3, 54, 153, 1) 14%, rgba(12, 19, 44, 1) 100%);
}

</style>