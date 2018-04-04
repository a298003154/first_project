<template>
    <div class="div">
        {{count}}
        <div>
          9999
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 12123
        }
    },
    mounted(){
        console.log('home :',this.count)
    }
}
</script>

<style lang="scss" scoped>
    @import '../home/home.scss';
</style>
