<template>
    <div id="app">
        <h1 class="ui center aligned header">Staff Directory</h1>
        <StaffDirectory developer="jlVALENCIAPLAZA"/>
    </div>
</template>

<script>
    import StaffDirectory from "../components/StaffDirectory.vue";
    export default {
        name: 'HomePage',
        components: { StaffDirectory }
    }
</script>