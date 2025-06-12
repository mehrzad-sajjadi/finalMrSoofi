<template>
    <div class="bg-[#020B1F] h-full">
        <Layout>
            <div class="flex flex-col justify-center flex-wrap content-center">
                <div class="flex justify-end mx-4 my-2">
                    <button 
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
</template>
<script setup>
import {reactive } from "vue";

import Layout from "@/components/Layout.vue";
import Table from "@/components/Table.vue";
import {UserPlusIcon} from "@heroicons/vue/24/outline";
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