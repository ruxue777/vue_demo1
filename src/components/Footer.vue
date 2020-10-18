<template>
    <footer>
        <div class="time-number">
            <input type="number" placeholder="月" v-model="month" class="date">
        </div>
        <div class="time-number">
            <input type="number" placeholder="日" v-model="day" class="date">
        </div>
        <button type="button" class="submit" @click="sendDate">查看</button>
    </footer>
</template>

<script>
export default {
    data(){
        return {
            month:'',
            day:''
        }
    },
    methods:{
        sendDate(){
            this.$emit('child-event',`${this.month}/${this.day}`)
        }
    }
}
</script>

<style>
footer{
    background-color: #eee;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    height: 35px;
    line-height: 35px;
    padding: 5px 0;
}
.time-number{
    flex: 1;
    padding-left: 5px;
}
.date{
    border: 0;
    background-color: #fff;
    color: #666;
    padding: 5px;
    width: 90%;
    height: 25px;
}
.submit{
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background-color: #fff;
    width: 20%;
    height: 100%;
    color: #666;
}
</style>