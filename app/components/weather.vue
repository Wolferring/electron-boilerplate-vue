<template>
<transition name="fade">
  <div id="weather" v-show="weather.show" >
    
    <div class="weather-icon grid">
      <span class="icon">
        <i class="wi wi-windy"></i>
      </span>
      <span class="info">
        <p>{{weather.now.text}}</p>
        <p>27 ~ 10</p>
      </span>
    </div>
    <div class="weather-detail">
      <div class="weather-temp">
        <div class="grid">
          <span class="now">
            {{weather.now.temperature}}
          </span>
        </div>

        <div class="grid">
          <span class="grid-item">{{weather.location.name}}</span>
          <span class="grid-item">
            {{date.day}}
          </span>
        </div>
      </div>
    </div>
    
  </div>
</transition>
</template>
<style lang="less">
@import url('../assets/fonts/weather-icon.less');
  #weather{
    // position: fixed;
    // left: 0;
    // top:0;
    
    width: 30vw;
    max-width: 300px;
    padding: .5rem;

    .weather-icon{
      font-weight: bold;
      padding: 1rem 0;
      .icon{
        margin-top: -2rem;
      }
      .info{
        text-align: right;
        p{
          font-size: 1.25rem;
        }
      }
      .wi{
        font-size: 5rem;
        line-height: 4rem;
        vertical-align: middle;
        text-shadow:3px 3px 0px #707070;
        display: block;
        margin-bottom: 5px;
        // -webkit-box-reflect: below 0 -webkit-linear-gradient(top,rgba(250,250,250,0),rgba(250,250,250,.0) 30%,rgba(250,250,250,0.8));
        &:before{
     
        }
      }
    }
    .weather-temp{
      border-top:1px solid #fff; 
      text-align: left;
      .grid{
        line-height: 1.5;
      }
      .now{
        font-size: 2rem;
        font-weight: bold;
        &:after{
          content: "℃";
          font-size: 1rem;
        }
      }
      p{
        font-size: 1rem;
      }
    }
    .grid{
      align-items:center;
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
        date:{
          day:(function(){
            var day = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六',]
            return day[new Date().getDay()]
          })(),
          fullDate:(function(){
            return new Date().toLocaleString().slice(0, 9)
          })()
        }
  		}
  	},
    mounted:function(){
      this.$store.dispatch('getWeatherConfig',"1")
    },
  	computed:{
  		weather:function(){
  			return this.$store.getters.getWeatherConfig
  		},

  	}
  }
</script>