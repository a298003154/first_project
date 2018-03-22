<template>
    <transition>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </transition>
</template>

<script>
    export default {
        data(){
            return {
                count: 1
            }
        },
        mounted(){
            console.log('app: ',this.count);
        }
    }
</script>

