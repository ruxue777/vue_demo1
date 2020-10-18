<template>
  	<div id="app">
    	<keep-alive>
      		<router-view v-if="$route.meta.keepAlive"/>
    	</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"/>
  	</div>
</template>

<style>
body{
  padding: 0;
  margin: 0;
}
</style>
