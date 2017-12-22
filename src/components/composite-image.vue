<template>
  <div class="container">
    <div class="handleBtnBox">
      宽度：
      <el-input
        class="sizeInput"
        placeholder="e.g.:150"
        v-model="imgWidth"
        clearable>
      </el-input>
      高度：
      <el-input
        class="sizeInput"
        placeholder="e.g.:300"
        v-model="imgHeight"
        clearable>
      </el-input>
      图片名：
      <el-input
        class="inputStyle"
        placeholder="e.g.:elevater.png"
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
        <template v-for="(imgone, index) in thumbnailImg">
          <img :src="imgone.src" :id="imgone.id" ref="images" @click="selectedImg(index)">
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
        <canvas ref="canvas" width="150" height="300"></canvas>
        <canvas ref="reCanvas" style="display: none;"></canvas>
      </div>
      <div class="boxSize compositeBox">
        <a href="" download="elevater" ref="linkDown">
          <img src="" ref="downImg">
        </a>
        <!-- <a href="" download="elevater" ref="reLinkDown" style="display: none;">
          <img src="" ref="reDownImg">
        </a> -->
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
      imgWidth: '',
      imgHeight: '',
      fileName: '',
      dialogImageUrl: '',
      canvas: '',
      ctx: '',
      canvasImgArr: []
    }
  },
  mounted () {
    this.draw()
  },
  methods: {
    draw: function() {
      this.canvas = this.$refs.canvas
      this.ctx = this.canvas.getContext('2d')
    },
    saveImageInfo: function() {
      // if(this.imgHeight || this.imgWidth){
      //   let reImage = this.reDraw().toDataURL("image/png")
      //   this.$refs.reLinkDown.href = reImage
      //   this.$refs.reDownImg.src = reImage
      // }else{
        let image = this.canvas.toDataURL("image/png")
        this.$refs.linkDown.href = image
        this.$refs.downImg.src = image
      // }
    },
    saveAsLocalImage: function() {
      let image
      if(this.imgHeight || this.imgWidth){
        image = this.reDraw().toDataURL("image/png").replace("image/png", "image/octet-stream")
      }else{
        image = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
      }
      let save_link = this.$parent.$el.ownerDocument.createElementNS('http://www.w3.org/1999/xhtml', 'a')
      save_link.href = image
      save_link.download = this.fileName ? this.fileName : 'elevater.png'
      let event = this.$parent.$el.ownerDocument.createEvent('MouseEvents')
      event.initMouseEvent('click',true,false,window,0,0,0,0,0,false,false,false,false,0,null)
      save_link.dispatchEvent(event)
    },
    handleRemove(file, fileList) {
      console.log(file)
      console.log(fileList)
    },
    handlePictureCardPreview(file) {
      let img = new Image()
      img.src = file.url
      this.ctx.drawImage(img, 0, 0, 150, 300)
      this.canvasImgArr.push(img)
    },
    selectedImg: function(index) {
      this.ctx.drawImage(this.$refs.images[index], 0, 0, 150, 300)
      this.canvasImgArr.push(this.$refs.images[index])
    },
    reDraw: function() {
      let reCanvas = this.$refs.reCanvas
      reCanvas.setAttribute('width',this.imgWidth ? this.imgWidth : this.imgHeight/2);
      reCanvas.setAttribute('height',this.imgHeight ? this.imgHeight : this.imgWidth*2);
      let rectx = reCanvas.getContext('2d')
      for (let i = 0; i < this.canvasImgArr.length; i++) {
        rectx.drawImage(this.canvasImgArr[i], 0, 0, this.imgWidth ? this.imgWidth : this.imgHeight/2, this.imgHeight ? this.imgHeight : this.imgWidth*2)
      }
      return reCanvas
    }
  }
}
</script>

<style scoped>
  @import './composite-image.css';
</style>
