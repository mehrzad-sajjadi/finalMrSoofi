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
                    class="flex flex-col w-full h-full"
                >
                
                    <form @submit.prevent="addUser" class="text-[#7E848E] h-full flex flex-col justify-between">                            
                        <!-- اطلاعات کاربر -->
                        <div>

                            <div class="grid grid-cols-2 gap-3 my-5">
                                <div class="w-full">
                                    <label>نام کاربر</label>
                                    <input 
                                        v-model="newUser.name"
                                        placeholder="نام کاربری را وارد کنید"
                                        type="text" 
                                        class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                    >
                                </div>
                                <div class="w-full">
                                    <label>سن</label>
                                    <input 
                                        v-model="newUser.age"
                                        placeholder="سن کاربر جدید را وارد کنید"
                                        type="text" 
                                        class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                    >
                                </div>

                                <div class="w-full">
                                    <label>ایمیل</label>
                                    <input 
                                        v-model="newUser.email"
                                        placeholder="ایمیل کاربری را وارد کنید"
                                        type="email" 
                                        class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                    >
                                </div>
                                <div class="w-full">
                                    <label>شماره تلفن</label>
                                    <input 
                                        v-model="newUser.phoneNumber"
                                        placeholder="شماره کاربر جدید را وارد کنید"
                                        type="text" 
                                        class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                    >
                                </div>
                            </div>
                            <div class="grid grid-cols-4 gap-5">
                                <div class="w-full">
                                    <label>کشور</label>
                                    <input 
                                        placeholder="کشور"
                                        type="text" 
                                        class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                    >
                                </div>
                                <div class="w-full">
                                    <label>شهر</label>
                                    <input 
                                        v-model="newUser.address"
                                        placeholder="شهر"
                                        type="text" 
                                        class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                    >
                                </div>
                                <div class="w-full">
                                    <label>خیابان</label>
                                    <input 
                                        placeholder="خیابان"
                                        type="text" 
                                        class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                    >
                                </div>
                                <div class="w-full">
                                    <label>کد پستی</label>
                                    <input 
                                        placeholder="کد"
                                        type="text" 
                                        class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                    >
                                </div>
                            </div>
                            <div class="my-5">
                                <label>شرکت</label>
                                <input 
                                    v-model="newUser.company"
                                    placeholder="نام شرکت کاربر جدید را وارد کنید"
                                    type="text" 
                                    class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                >
                            </div>

                        </div>
                        <!-- دکمه ها -->
                        <div class="grid grid-cols-2 gap-3 mt-12">
                            <button 
                                @click="target=false"
                                type="button"
                                class="rounded-xl border text-[#0559FD] border-[#0559FD] text-xl py-1 cursor-pointer "
                            >
                                لغو
                            </button>
                            <button 
                                type="submit"
                                class="bg-[#0559FD] text-white rounded-xl py-1 cursor-pointer "
                            >
                                تایید
                            </button>
                        </div>
                        
                    </form>
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
import Face from "@/components/Face.vue"
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
const newUser = reactive({
    name : "",
    age : "", 
    phoneNumber : "",
    address : "",
    company : "",
    email : ""
});
const addUser=()=>{
    users.push(
        {
            name: newUser.name ,
            age: newUser.age ,
            phoneNumber: newUser.phoneNumber ,
            address: newUser.address ,
            company: newUser.company ,
            email: newUser.email ,
        },
    );
    target.value = false ;
    // alert("تبریک ! کاربر مرود نظر با موفقیت اضافه شد");
}
</script>
<style scoped>

</style>