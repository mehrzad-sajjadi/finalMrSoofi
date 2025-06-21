<template>
    <div class="w-[70%] p-4 rounded-lg text-md shadow-md text-white flex ">
        <table class="w-full text-center min-h-min rounded-lg overflow-hidden border border-indigo-500/20">
            <thead class="text-center bg-gradient-to-r from-[#1E2A44] to-[#2A3B5A]">
                <tr>
                    <th v-for="(headerData, index) in header" 
                        :key="index"
                        class="px-4 py-3 min-w-min text-center text-gray-200 text-md"
                    >
                        {{ headerData }}
                    </th>
                </tr>
            </thead>
            <tbody class="">
                <tr v-for="(data, index) in datas" 
                    :key="index"
                    class="hover:bg-indigo-600/10 transition-colors duration-200"
                >
                    <td v-for="(text, index) in data"
                        :key="index"
                        class="px-4 py-3 border-t border-indigo-500/10 text-gray-300 text-md"
                    >
                        {{ text }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
const props = defineProps({
    header: Object,
    datas: Object
});

</script>
