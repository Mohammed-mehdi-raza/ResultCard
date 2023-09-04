<script setup lang="ts"></script>

<template>
    <div class="sm:w-64 w-80 h-96 p-2 bg-gradient-to-t from-indigo-800 to-indigo-600 rounded-2xl font-semibold">
        <p class="grid justify-center text-lg p-4 text-neutral-300">Your result</p>
        <div class="grid place-content-center">
            <div class="grid place-content-center rounded-full shadow-inner bg-gradient-to-b from-indigo-800 to-indigo-700 w-36 h-36">
                <p class="text-5xl text-white">76</p>
                <p class="text-center text-sm text-neutral-400">of 100</p>
            </div>
        </div>
        <div class="p-4">
            <p class="text-center text-2xl text-white">Great</p>
            <p class="text-center p-2 text-sm text-gray-400">You have scored higher than 65% of the people who have taken these tests.</p> 
        </div>
    </div>
</template>