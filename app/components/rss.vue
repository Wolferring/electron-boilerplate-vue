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
				list:[
					{
						'id':1,
						'title':'RSS-1'
					},
					{
						'id':2,
						'title':'RSS-2'
					},
					{
						'id':3,
						'title':'RSS-3'
					}										
				],
				current:0
			}
		},
		computed:{
			currentId:function(){
				return this.list[this.current].id
			}
		},
		created:function(){
			var self = this;
			var len = this.list.length-1;
			setInterval(function(){
				self.current = self.current>=len?0:(self.current+1)
			},4000)
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
  .slide-fade-enter, .slide-fade-leave-active {
    opacity: 0;
    transform:translateY(20px)
  } 
</style>