<template>
    <div class="div">
        {{count}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 12
        }
    },
    mounted(){
        console.log('home :',this.count)
    }
}
</script>

<style lang="scss" scoped>
    .div{
        width: 100px;
        height: 100px;
        background-color: green;
    }
</style>
