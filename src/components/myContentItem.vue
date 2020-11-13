<template>
<div>
    <div class="btnOne" v-for="(item,index) in contentItem" :key="index" @click="itemClick(index)">{{item.name}}</div>
</div>
</template>

<script>
export default {
    name: 'myContentItem',
    data() {
        return {
            contentItem: [{
                    name: "github",
                    url: "https://github.com/"
                },
                {
                    name: "bilibili",
                    url: "https://www.bilibili.com/"
                },
                {
                    name: "W3school",
                    url: "https://www.w3school.com.cn/"
                },
                {
                    name: "Vue",
                    url: "https://cn.vuejs.org/"
                },
                {
                    name: "Bootstrap",
                    url: "https://www.bootcss.com/"
                },
                {
                    name: "贴图库",
                    url: "http://www.tietuku.com/"
                },
                {
                    name: "谷歌字体",
                    url: "http://www.googlefonts.net/"
                },
                {
                    name: "75CDN",
                    url: "https://cdn.baomitu.com/"
                },
                {
                    name: "bootCDN",
                    url: "https://www.bootcdn.cn/"
                },
                {
                    name: "CSDN",
                    url: "https://www.csdn.net/"
                }
            ]
        }
    },
    methods: {
        itemClick(index) {
            window.location.href = this.contentItem[index].url;
        }
    },
}
</script>

<style scoped>
.btnOne {
    flex: 1;
    display: inline-block;
    padding: 15px 30px;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    transition: 1s;
    letter-spacing: 4px;
    overflow: hidden;
    cursor: pointer;
    margin-top: 40px;
    margin-left: 38px;
    margin-right: 20px;
    background-color: rgba(255, 255, 255, .1);
    font-size: 19px;
    font-family: 'Rajdhani';
    text-shadow: 0px 0px 5px #f182e8;
}

.btnOne:hover {
    background: #ffffff;
    color: #000000;
    box-shadow: 0 0 5px #f182e8, 0 0 25px #f182e8, 0 0 50px #f182e8, 0 0 200px #f182e8;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
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
