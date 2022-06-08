<template>
    <div @click="goBack" class="w-24 p-3 text-red-500 hover:text-red-900">
        <span class="sr-only"> Go back </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-8 w-8 bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'GoBackButton',
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
}
</script>