<template>
    <header>
        <h3 class="top-title">历史上的今天：{{today}}</h3>
    </header>
</template>

<script>
export default {
    props:['today']
}
</script>

<style scoped>
header{
    background-color: #eee;
    position: fixed;
    top: 0;
    width: 100%;
}
.top-title{
    margin: 0;
    padding: 0;
    text-align: center;
    color: #666;
    font-weight: normal;
    line-height: 40px;
}
</style>