<template>
    <div class="navbar">

        <img class="kada-logo" src="../img/logo.png">

        <div class="right--block">
            <button class="btn-d">Возможности</button>
            <button class="btn-d">Войти</button>
            <MyButton>Начать планировать</MyButton>
        </div>

    </div>

</template>


<script>
import MyButton from '@/components/UI/Button.vue';

export default {
    components:{
        MyButton
    }
}


</script>


<style>

.navbar {
    width: 90%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;    
}

.btn-d {
    width: 138px;
    height: 19px;
    font-family: 'Gudea';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    border: none;
    background: none;
    cursor: pointer;
    color: #000000;
}


</style>