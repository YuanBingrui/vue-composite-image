<template>
  <div class="container">
    <div class="handleBtnBox">
      <el-button type="primary" @click="saveImageInfo">保存图片</el-button>
      <el-button type="primary" @click="saveAsLocalImage">下载图片</el-button>
    </div>
    <div class="showImgBox">
      <div class="boxSize thumbnailBox">
        <template v-for="imgone in thumbnailImg">
            <img :src="imgone.src" :id="imgone.id">
        </template>
      </div>
      <div class="boxSize canvasBox">
        <canvas id="canvas" width="150" height="300" style="border:1px solid #d3d3d3;"></canvas>
      </div>
      <div class="boxSize compositeBox">
        <a href="" download="elevater" id="linkDown">
          <img src="" id="downImg">
        </a>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CompositeImage',
  data () {
    return {
      thumbnailImg: [{id: 'car', src: '../../static/VC01.png'}, {id: 'ceilling', src: '../../static/DD06A.png'}, {id: 'floor', src: '../../static/DF106.png'}, {id: 'controlBox', src: '../../static/CC102.png'}]
    }
  },
  mounted () {
    this.draw()
  },
  methods: {
    draw: function() {
      let canvas = document.getElementById('canvas')
      let ctx = canvas.getContext('2d')
      console.log(document.images)
      for (var i = 0; i < document.images.length; i++) {
        if(document.images[i].id === 'car' || document.images[i].id === 'controlBox' || document.images[i].id === 'ceilling' || document.images[i].id === 'floor'){
        ctx.drawImage(document.images[i], 0, 0, 150, 300)
        }
      }
    },
    saveImageInfo: function() {
      console.log('save')
      let mycanvas = document.getElementById("canvas")
      let image = mycanvas.toDataURL("image/png")
      document.getElementById("linkDown").href = image
      document.getElementById("downImg").src = image
      // let w=window.open('about:blank','image from canvas') 
      // w.document.write("<img src='"+image+"' alt='from canvas'/>");
    },
    saveAsLocalImage: function() {
      console.log('download')
      let myCanvas = document.getElementById("canvas")
      let image = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
      let save_link=document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
      save_link.href=image
      save_link.download='filename.png'
      let event=document.createEvent('MouseEvents')
      event.initMouseEvent('click',true,false,window,0,0,0,0,0,false,false,false,false,0,null)
      save_link.dispatchEvent(event)
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  padding: 20px 30px;
}
.handleBtnBox{
  height: 50px;
  width: 100%;
  border-bottom: 1px rgba(204, 204, 204, .5) solid;
  margin-bottom: 15px;
}
.showImgBox{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.boxSize{
  height: 400px;
  border: 1px rgba(204, 204, 204, .5) solid;
}
.thumbnailBox{
  width: 20%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
}
.thumbnailBox img{
  width: 50px;
  height: 100px;
  margin: 30px 15px;
}
.canvasBox{
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.compositeBox{
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
