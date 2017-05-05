<template>
  <div class="wrap">
    <div class="row">
      <weather>
        
      </weather>
      <clock>
        
      </clock>
    </div>
    <div class="row">
      <custom-canvas>
        
      </custom-canvas>
    </div>
    <div class="row">    
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
  export default {
    components: {
      weather: weather,
      clock: clock,
      rss: rss,
      customCanvas: canvas
    },
    created:function(){

    }
  }
</script>

<style lang="less">
  @import url('./assets/css/style.less');
</style>