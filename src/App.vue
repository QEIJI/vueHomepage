<template>
<div id="app">
    <TimeInfo></TimeInfo>
    <search></search>
</div>
</template>

<script>
import Search from './components/Search';
import TimeInfo from './components/TimeInfo';
export default {
    name: 'App',
    data() {
        return {}
    },
    components: {
        Search,
        TimeInfo
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
