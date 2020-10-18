<template>
    <section class="main">
        <div class="item">
            <h3>{{title}}</h3>
            <img v-show="flag" :src="img_url" :alt="pic_title">
            <p>{{content}}</p>
            <button @click="go(-1)">返回</button>
        </div>
    </section>   
</template>

<script>
import {request} from '../http/request'
export default {
    data(){
        return {
            key:'90eb8f4f60079d6931df0b39c70cc470',
            id:this.$route.params.id,
            title:'',
            content:'',
            flag:false,
            img_url:'',
            pic_title:''
        }
    },
    mounted(){
        this.getSingle()
    },
    methods:{
        getSingle(){
            request(`/queryDetail.php?key=${this.key}&e_id=${this.id}`).then(res=>{
                if(res.error_code === 0){
                    let result = res.result[0]
                    this.title = result.title
                    this.content = result.content

                    if(result.picNo > 0){
                        this.flag = true
                        this.img_url = result.picUrl[0].url
                        this.pic_title = result.picUrl[0].pic_title
                    }
                }
            })
        },
        go(step){
            this.$router.go(step)
        }
    }
}
</script>

<style>
.main{
    color: #333;
}
.main div.item{
    padding: 20px;
    line-height: 150%;
}
.main img{
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
}
</style>