<template>
  <div class="container">
    <div class="handleBtnBox">
      <el-input
        class="inputStyle"
        placeholder="请输入文件名"
        v-model="fileName"
        clearable>
      </el-input>
      <el-button 
        type="primary" 
        @click="saveImageInfo">
        保存图片
      </el-button>
      <el-button
        type="primary"
        @click="saveAsLocalImage">
        下载图片
      </el-button>
    </div>
    <div class="showImgBox">
      <div class="boxHeader thumbnailBox">
        <h1>缩略图</h1>
      </div>
      <div class="boxHeader canvasBox">
        <h1>画布</h1>
      </div>
      <div class="boxHeader compositeBox">
        <h1>合成图</h1>
      </div>
    </div>
    <div class="showImgBox">
      <div class="boxSize boxSizeT thumbnailBox">
        <template v-for="imgone in thumbnailImg">
          <img :src="imgone.src" :id="imgone.id" ref="images">
        </template>
        <el-upload
          action=""
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :auto-upload="false"
          class="upload-card">
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <div class="boxSize canvasBox">
        <canvas ref="canvas" width="150" height="300" style="border:1px solid #d3d3d3;"></canvas>
      </div>
      <div class="boxSize compositeBox">
        <a href="" download="elevater" ref="linkDown">
          <img src="" ref="downImg">
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
      thumbnailImg: [{id: 'car', src: '../../static/VC01.png'}, {id: 'ceilling', src: '../../static/DD06A.png'}, {id: 'floor', src: '../../static/DF106.png'}, {id: 'controlBox', src: '../../static/CC102.png'}],
      fileName: 'elevater.png',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  mounted () {
    this.draw()
  },
  methods: {
    draw: function() {
      let canvas = this.$refs.canvas
      let ctx = canvas.getContext('2d')
      for (let i = 0; i < this.$refs.images.length; i++) {
        if(this.$refs.images[i].id === 'car' || this.$refs.images[i].id === 'controlBox' || this.$refs.images[i].id === 'ceilling' || this.$refs.images[i].id === 'floor'){
          ctx.drawImage(this.$refs.images[i], 0, 0, 150, 300)
        }
      }
    },
    saveImageInfo: function() {
      let mycanvas = this.$refs.canvas
      let image = mycanvas.toDataURL("image/png")
      this.$refs.linkDown.href = image
      this.$refs.downImg.src = image
      // 在新的窗口打开查看
      // let w=window.open('about:blank','image from canvas') 
      // w.document.write("<img src='"+image+"' alt='from canvas'/>");
    },
    saveAsLocalImage: function() {
      let myCanvas = this.$refs.canvas
      let image = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
      let save_link = this.$parent.$el.ownerDocument.createElementNS('http://www.w3.org/1999/xhtml', 'a')
      save_link.href = image
      save_link.download = this.fileName
      let event = this.$parent.$el.ownerDocument.createEvent('MouseEvents')
      event.initMouseEvent('click',true,false,window,0,0,0,0,0,false,false,false,false,0,null)
      save_link.dispatchEvent(event)
    },
    handleRemove(file, fileList) {
      console.log(file)
      console.log(fileList)
    },
    handlePictureCardPreview(file) {
      console.log(file.url)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
  @import './composite-image.css';
</style>
