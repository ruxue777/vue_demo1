<template>
    <ul class="list">
        <li v-for="(item,index) in list" :key="index">
            <router-link :to="{path:`/details/${item.e_id}`}">
                {{index + 1}}.{{item.title}}
                <em>{{item.date.split('年')[0]}}年</em>
            </router-link>
        </li>
    </ul>
</template>

<script>
import {request} from '../http/request.js';
export default {
    props:['today'],
    data(){
        return {
            key:'90eb8f4f60079d6931df0b39c70cc470',
            list :[]
        }
    },
    watch:{
        today(val){
            this.getList()
        }
    },
    //初始化
    mounted(){
        this.getList()
    },

    methods:{
        getList(){
            request(`/queryEvent.php?key=${this.key}&date=${this.today}`).then(res=>{
                if(res.error_code === 0){
                    this.list = res.result
                }
            })
        }
    }
}
</script>

<style>
.list{
    list-style-type: none;
    margin: 40px 0;
    padding: 0;
}
.list li{
    border-bottom: 1px solid #eee;
    font-size: 14px;

}
.list li a{
    color: #666;
    text-decoration: none;
    display: block; 
    padding: 10px;
}
.list li a:hover{
    background-color: #333;
    color: #fff;
}
.list li a em{
    float: right;
    font-style: normal;
    padding-right: 5px;
}
</style>