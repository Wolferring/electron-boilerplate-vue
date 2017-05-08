<template>
	<div id="rss">
		<transition-group name="slide-fade" tag="div" class="grid">
			<div 
			class="item" 
			v-for="item in list" 
			:key="item.id" 
			v-show="currentId==item.id"
			>
				{{item.title}}
			</div>
		</transition-group>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				current:0
			}
		},
		computed:{
			list:function(){
				return this.$store.getters.getRSSList
			},
			currentId:function(){
				return this.list[this.current].id
			},
			len:function(){
				return this.list.length-1
			}
		},
		created:function(){
			var self = this;
			setInterval(function(){
				self.current = self.current>=self.len?0:(self.current+1)
			},6000)
		}
	}
</script>
<style lang="less">
	#rss{
		width: 100vw;
		align-self:flex-end;
		position: relative;
		height: 4rem;
		overflow:hidden;
		.item{
			width: 100%;
			position: absolute;
			text-align: center;
			overflow:hidden;
		}
	}
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .5s
  }
  .slide-fade-enter{
    opacity: 0;
    transform:translateY(20px)
  } 
  .slide-fade-leave-active {
  	opacity: 0;
  	transform:translateY(-20px)
  }
</style>