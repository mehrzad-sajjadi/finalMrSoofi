<template>
    <div
        class="fixed top-0 right-0 left-0 bottom-0 bg-[#141211c3] p-10 content-center"
    >
        <div ref="checkOut" class="rounded-md m-auto text-white bg-[#020B1F] w-[450px] h-[600px]">
            <div class="flex flex-row justify-start content-between">
                <XMarkIcon
                    @click="emit('closeModal')"
                    as="button"
                    type="button"
                    class="size-5 cursor-pointer"
                />
                <h2
                    class="font-semibold text-xl leading-tight m-2"
                >
                    <slot name="header_title"></slot>
                </h2>
            </div>
            <div class="flex justify-center py-4">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import {XMarkIcon,} from "@heroicons/vue/24/solid";

const emit = defineEmits("closeModal");
const checkOut = ref(null);
onClickOutside(checkOut, () => {
    emit("closeModal");
});
</script>
