<template>
    <div class="h-full">
        <Layout>
            <div class="flex flex-col justify-center flex-wrap content-center">
                <div class="flex justify-end mx-4 my-2">
                    <button
                        @click="target = true"
                        type="button"
                        class="h-8 px-4 flex min-w-min items-center m-2 text-sm text-indigo-100 transition-colors duration-150 bg-blue-700 hover:bg-blue-900 cursor-pointer rounded-lg focus:shadow-outline"
                    >
                        <UserPlusIcon class="size-5" />
                        افزودن کاربر
                    </button>
                </div>
                <Table :header="header" :datas="users" />
            </div>
        </Layout>              
    </div>
    <teleport to="body">
        <Modal
            v-if="target"
            ref="modalRef"
            @closeModal="
                () => {
                    target = !target;
                }
            "
        >
            <template #header_title>
                افزودن کاربر جدید
            </template>
            <template #content>
                <div
                    class="flex flex-col w-5/6 mx-auto my-16 border border-gray-500 rounded-lg"
                >
                    <div class="flex flex-col justify-between">
                        <div>
                            <div class="mb-5 py-2 px-2 w-full">
                                <div
                                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 sm:gap-x-2"
                                >
                                    <div>
                                        <label
                                            class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                                        >
                                            نام شرکت
                                        </label>
                                        <input
                                            class="block w-[100%] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            autofocus                       
                                        />
                                    </div>
                                    <div>
                                        <label
                                            class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                                        >
                                            تلفن
                                        </label>
                                        <input
                                            class="block w-[100%] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                </div>
        
                                <label
                                    class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                                >
                                    آدرس
                                </label>
        
                                <input
                                    class="block w-[100%] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div class="flex flex-row justify-between mb-4">
                            <button
                                as="button"
                                type="button"
                                class="h-9 px-4 m-2 text-lg duration-150 rounded focus:shadow-outline bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-white dark:hover:border-transparent"
                            >
                                افزودن کاربر
                            </button>
                        </div>
                    </div>
                </div>
    
            </template>
        </Modal>
    </teleport>
</template>
<script setup>
import {reactive, ref } from "vue";
import Layout from "@/components/Layout.vue";
import Table from "@/components/Table.vue";
import Modal from "@/components/Modal.vue";
import {UserPlusIcon} from "@heroicons/vue/24/outline";

const target = ref(false);
const header =[
    "نام کاربری",
    "سن",
    "شماره تماس",
    "آدرس",
    "شرکت",
    "ایمیل"
]
const users = reactive([
    {
        name: 'مهرزاد',
        age: 22,
        phoneNumber: '09123456789',
        address: 'کرج',
        company: 'گروه نرم‌افزاری پارت',
        email: 'mehrzad@partsoft.ir'
    },
    {
        name: 'امیرحسین',
        age: 27,
        phoneNumber: '09124567891',
        address: 'تهران',
        company: 'ایرانسرور',
        email: 'amirhossein@iranserver.com'
    },
    {
        name: 'الناز',
        age: 25,
        phoneNumber: '09351234567',
        address: 'اصفهان',
        company: 'نوآوران داده‌پرداز',
        email: 'elnaz@navdata.ir'
    },
    {
        name: 'کیانا',
        age: 30,
        phoneNumber: '09128903456',
        address: 'رشت',
        company: 'شرکت پارس دیتا',
        email: 'kiana@parsdata.com'
    },
    {
        name: 'علی',
        age: 24,
        phoneNumber: '09211234567',
        address: 'تبریز',
        company: 'فناوری اطلاعات تبریز',
        email: 'ali@tabriztech.ir'
    },
    {
        name: 'حمید',
        age: 29,
        phoneNumber: '09137778888',
        address: 'شیراز',
        company: 'فناوری سپهر',
        email: 'hamid@sepahrayaneh.ir'
    },
    {
        name: 'فاطمه',
        age: 26,
        phoneNumber: '09393334444',
        address: 'مشهد',
        company: 'شرکت داده‌ورزان',
        email: 'fatemeh@dadevarzan.ir'
    },
    {
        name: 'یاسمن',
        age: 28,
        phoneNumber: '09125552222',
        address: 'اهواز',
        company: 'راهکارهای نوین خوزستان',
        email: 'yasaman@khoztech.ir'
    },
    {
        name: 'حسین',
        age: 31,
        phoneNumber: '09120001111',
        address: 'یزد',
        company: 'پردازشگران کویر',
        email: 'hossein@kavirdp.ir'
    },
    {
        name: 'ریحانه',
        age: 23,
        phoneNumber: '09381234567',
        address: 'ارومیه',
        company: 'توسعه‌گران وب ارومیه',
        email: 'reyhaneh@urmiadev.ir'
    },
    {
        name: 'رضا',
        age: 35,
        phoneNumber: '09141112233',
        address: 'زنجان',
        company: 'زنجان سیستم',
        email: 'reza@zanjansystem.ir'
    }
]);
</script>