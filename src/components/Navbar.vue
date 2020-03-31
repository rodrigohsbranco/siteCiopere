<template>
    <div id="mainNavbar">
        <h2>Esta é a minha navbar {{ exemplo }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            exemplo: 'um novo dado'
        }
    }
}
</script>

<style>
    #mainNavbar {
        background: red;
    }
</style>