<template>
<div>
    <div ref="title" class="time">
        <h1 @mouseenter="titleHover()" @mouseout="titleHover2()">{{nowTime}}</h1>
    </div>
</div>
</template>

<script>
import {
    inputMixin
} from './Mixin/inputMixin.js'
export default {
    name: "TimeInfo",
    data() {
        return {
            nowTime: '',
            currentTime: '',
        }
    },
    mixins: [inputMixin],
    created() {
        this.Time()
        setInterval(this.Time, 1000);
    },
    mounted() {
        this.$store.state.eventTitle = this.$refs.title
    },
    methods: {
        Time() {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            this.nowTime = hours + ":" + minutes;
            this.currentTime = year + "年" + month + "月" + day + "日 " + hours + ":" + minutes;
        },
        titleHover() {
            this.$refs.title.style.transform = "scale(1.15)";
            setTimeout(() => this.$refs.title.style.transform = "scale(1.1)", 250);
        },
        titleHover2() {
            this.$refs.title.style.transform = "scale(0.95)";
            setTimeout(() => this.$refs.title.style.transform = "scale(1)", 250);
        }
    }
}
</script>

<style scoped>
.time {
    position: absolute;
    width: 100px;
    left: 50%;
    margin-left: -37px;
    top: 100px;
    text-align: center;
    transition: all .25s;

    @media screen and (max-width:600px) {}
}

h1 {
    color: #fff;
    font-size: 50px;
    font-weight: inherit;
    font-family: 'Rajdhani';
    text-shadow: 0 0 20px rgba(0, 0, 0, .35);
    cursor: pointer;
    transition: all .25s;
    animation-name: delayedFadeIn;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-delay: 0s;

    @media screen and (max-width:600px) {
        font-size: 27px
    }
}

h1:hover::after {
    transform: scale3d(1, 1, 1);

    @media screen and (max-width:600px) {
        width: 80%;
        bottom: 15px;
        left: 10%
    }
}

h1:active {
    color: rgba(255, 255, 255, .6)
}

@font-face {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: regular;
    src: url('//lib.baomitu.com/fonts/rajdhani/rajdhani-regular.eot');
    /* IE9 Compat Modes */
    src: local('Rajdhani'), local('Rajdhani-Normal'),
        url('//lib.baomitu.com/fonts/rajdhani/rajdhani-regular.eot?#iefix') format('embedded-opentype'),
        /* IE6-IE8 */
        url('//lib.baomitu.com/fonts/rajdhani/rajdhani-regular.woff2') format('woff2'),
        /* Super Modern Browsers */
        url('//lib.baomitu.com/fonts/rajdhani/rajdhani-regular.woff') format('woff'),
        /* Modern Browsers */
        url('//lib.baomitu.com/fonts/rajdhani/rajdhani-regular.ttf') format('truetype'),
        /* Safari, Android, iOS */
        url('//lib.baomitu.com/fonts/rajdhani/rajdhani-regular.svg#Rajdhani') format('svg');
    /* Legacy iOS */
}
</style>
