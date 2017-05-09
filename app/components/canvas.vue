<template>
<div id="canvas">
	<div class="title">
		<h3>{{info.title}}</h3>
	</div>
	<div class="image">
		<img :src="info.image" v-if="info.image" alt="">
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		computed:{
			info:function(){
				return this.$store.getters.getCanvas
			}
		}
	}
</script>
<style lang="less">
	#canvas{
		width:100%;
		flex-grow:1; 
		text-align: center;
	    display: flex;
	    justify-content:center;	
	    flex-direction:column;
		.image{
			align-self:center;
			max-width: 70%;
			max-height: 80vh;
			img{
				max-height: 80vh;
			}
		}
		.title{
			display: inline-block;
			max-width: 70%;
			align-self:center;
		}
	}
</style>