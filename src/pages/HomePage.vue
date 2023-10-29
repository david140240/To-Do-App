<template>

    <div class="nav-c">
    
        <NavBar></NavBar>
    </div>
    
    </template>
    
    
    <script>
    import NavBar from '@/components/NavBar.vue';
    
    export default {
        components:{
            NavBar
        }
    }
    
    
    
    </script>
    
    
    <style>
    .nav-c{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    
    </style>