<template>
<transition name="fade">
  <div id="clock">
    
    <div class="clock-time grid">
      <span class="after">
        {{hour}}
      </span>
      <span class="after">
        {{minute}}
      </span>
      <span>
        {{second}}
      </span>
    </div>
    <div class="grid">
      <span>
        {{date.fullDate}}
      </span>
      <span>{{date.day}}</span>
    </div>
    <div class="divider"></div>
  </div>
</transition>
</template>
<style lang="less">
@import url('../assets/fonts/weather-icon.less');
  #clock{
    // position: fixed;
    // right: 0;
    // top:0;
    width: 35vw;
    max-width: 500px;
    padding: .5rem;
    .clock-time{
      span{
        display: block;
        width: 33.3%;
        font-size: 2.5rem;
        position: relative;
        &.after:after{
          content: ":";
          position: absolute;
          right: -5px;
          bottom: 5px;
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }    
</style>
<script>
  export default{
  	data(){
  		return {
        now:new Date().getTime(),
        date:{
          day:(function(){
            var day = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六',]
            return day[new Date().getDay()]
          })(),
          fullDate:(function(){
            return new Date().toLocaleString().slice(0, 9).replace(/\//g,'-')
          })()
        }
  		}
  	},
    methods:{
      update:function(){
        this.now = new Date().getTime();
      }
    },
    created:function(){
      let self = this
      setInterval(self.update,1000)
    },
  	computed:{
    
      second:function(){
        let sec = new Date(this.now).getSeconds().toString()
        return sec.length>1?sec:("0"+sec)
      },
      minute:function(){
        let sec = new Date(this.now).getMinutes().toString()
        return sec.length>1?sec:("0"+sec)
      },
      hour:function(){
        let sec = new Date(this.now).getHours().toString()
        return sec.length>1?sec:("0"+sec)
      },            
  	}
  }
</script>