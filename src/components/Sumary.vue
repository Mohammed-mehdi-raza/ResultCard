<script setup lang="ts">
</script>


<template>
    <div class="sm:w-64 w-80 h-96 p-5 font-semibold grid justify-center">
        <p class="text-lg text-slate-900">Summary</p>
        <div class="grid grid-rows-4 gap-3 mt-4 h-56">
            <div class="w-56 rounded-lg p-2 bg-red-100 flex">
                <font-awesome-icon icon="fa-solid fa-bolt" class="text-red-800 mt-1.5" />
                <p class="text-red-800 w-32 ml-3">Reaction</p>
                <p class="text-slate-700">80<span class="text-slate-500">/100</span> </p>
            </div>
            <div class="w-56 rounded-lg p-2 bg-yellow-100 flex">
                <font-awesome-icon icon="fa-solid fa-brain" class="text-yellow-800 mt-1.5" />
                <p class="text-yellow-800 w-32 ml-3">Memory</p>
                <p class="text-slate-700">92<span class="text-slate-500">/100</span> </p>
            </div>
            <div class="w-56 rounded-lg p-2 bg-green-100 flex">
                <font-awesome-icon icon="fa-solid fa-comment" class="text-green-800 mt-1.5" />
                <p class="text-green-800 w-32 ml-3">Verbal</p>
                <p class="text-slate-700">61<span class="text-slate-500">/100</span> </p>
            </div>
            <div class="w-56 rounded-lg p-2 bg-indigo-100 flex">
                <font-awesome-icon icon="fa-solid fa-eye" class="text-indigo-800 mt-1.5" />
                <p class="text-indigo-800 w-32 ml-3">Visual</p>
                <p class="text-slate-700">72<span class="text-slate-500">/100</span> </p>
            </div>
        </div>
        <button class="mt-6 text-base text-white bg-slate-700 rounded-3xl w-56 h-10 hover:text-slate-700 hover:bg-slate-300">Continue</button>
    </div>
</template>
