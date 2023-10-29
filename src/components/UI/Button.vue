<template>

    <button class="btn">
        <slot></slot>
    </button>

</template>

<script>
export default {
    name: "my-button"
}



</script>


<style lang="scss">
@use '@/style/variables' as v;

.btn {

width: 223px;
height: 42px;
left: 1465px;
top: 85px;

border-radius: 12px;
border: none;

font-family: 'Gudea';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;

cursor: pointer;

background-color: v.$main-color;


}


</style>