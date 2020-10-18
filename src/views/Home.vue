<template>
  <div class="home">
	  <Header :today="today"></Header>
	  <List :today="today"></List>
	  <Footer @child-event="getsendDate"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import List from '@/components/List';
import Footer from '@/components/Footer';

export default {
  	name: 'Home',
  	components: {
		Header,
		List,
		Footer
	},
	data(){
		return {
			today:this.getDate()
		}
	},
	methods:{
		getDate(){
            const date = new Date()

            return `${date.getMonth()+1}/${date.getDate()}`
		},
		getsendDate(today){
			if(today !== '/'){
				this.today = today
			}else{
				this.today = this.getDate()
			}
		}
	}
}
</script>
