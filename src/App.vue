<template>
<div id="app">
    <TimeInfo></TimeInfo>
    <search></search>

</div>
</template>

<script>
import Search from './components/Search';
import TimeInfo from './components/TimeInfo';
import myContent from './components/myContent';
export default {
    name: 'App',
    data() {
        return {}
    },
    components: {
        Search,
        TimeInfo,
        myContent
    }
}
</script>

<style>
body {
    padding: 0;

    margin: 0;

    overflow: hidden;

    height: 600px;
}

canvas {
    padding: 0;

    margin: 0;
}
</style>
