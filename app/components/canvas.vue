<template>
<div id="canvas">
	<div class="image">
		<img src="../assets/images/20170508110450.jpg" alt="">
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return {
				image:"../assets/images/20170508110450.jpg"
			}
		},
		computed:{

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
		.image{
			align-self:center;
			max-width: 70%;
		}
	}
</style>