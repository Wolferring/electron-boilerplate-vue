<template>
  <div class="wrap">
    <div class="row row-header">
      <weather>
        
      </weather>
      <clock>
          
      </clock>

    </div>
    <div class="row">
      <custom-canvas server='httpServer'>
        
      </custom-canvas>
    </div>
    <div class="row row-footer">    
      <rss>
        
      </rss>
    </div>
  </div>
</template>

<script>
  import weather from './components/weather'
  import clock from './components/clock'
  import rss from './components/rss'
  import canvas from './components/canvas'
  import * as io from 'socket.io-client'
  export default {
    data(){
      return {
        httpServer: null
      }
    },
    components: {
      weather: weather,
      clock: clock,
      rss: rss,
      customCanvas: canvas
    },
    methods:{
      listners:function(){
        var self =this
        this.httpServer.on('weather',function(data){
          self.$store.dispatch('weather',data)
        })
        this.httpServer.on('rss',function(data){
          self.$store.dispatch('rss',data)
        }) 
        this.httpServer.on('todos', function(todo) {
          self.$store.dispatch('todos',todo)
        });
        this.httpServer.on('canvas', function(data) {
          self.$store.dispatch('canvas',data)
        });          
      }
    },
    created:function(){
      var self =this
      this.httpServer = io.connect('http://localhost:3000');
      this.httpServer.on('connect', function(event) {
        self.httpServer.emit('online',{
          id:"C0eP3"
        })
      }); 
      this.listners();           
    }
  }
</script>

<style lang="less">
  @import url('./assets/css/style.less');
</style>