<template>
<div class="contentbox">
    <my-content-item> </my-content-item>
</div>
</template>

<script>
import myContentItem from './myContentItem'
export default {
    name: 'myContent',
    components: {
        myContentItem
    }
}
</script>

<style scoped>
.contentbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 320px;
    left: calc(50% - 465px);
    height: 450px;
    width: 900px;
    outline: none;
    border: none;
    padding: 13px 15px;
    border-radius: 30px;
    font-size: small;
    font-weight: 400;
    font-family: microsoft yahei, sans-serif;
    background-color: rgba(255, 255, 255, .25);
    transition: all .25s;
}
</style>
