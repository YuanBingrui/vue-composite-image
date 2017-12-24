<template>
  <div class="container">
    <div class="switchLangBox">
      <el-dropdown 
        @command="switchLang"
        size="mini">
        <span class="el-dropdown-link">
          EN<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <template
          v-for="lang in langList">
            <el-dropdown-item :command="lang.key">{{lang.value}}</el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="handleBtnBox">
      {{ $t('imgWidth') }}：
      <el-input
        class="sizeInput"
        placeholder="e.g.:150"
        v-model="imgWidth"
        clearable>
      </el-input>
      {{ $t('imgHeight') }}：
      <el-input
        class="sizeInput"
        placeholder="e.g.:300"
        v-model="imgHeight"
        clearable>
      </el-input>
      {{ $t('fileName') }}：
      <el-input
        class="inputStyle"
        placeholder="e.g.:elevater.png"
        v-model="fileName"
        clearable>
      </el-input>
      <el-button 
        type="primary" 
        @click="saveImageInfo">
        {{ $t('saveImgBtn') }}
      </el-button>
      <el-button
        type="primary"
        @click="saveAsLocalImage">
        {{ $t('downloadImgBtn') }}
      </el-button>
    </div>
    <div class="showImgBox">
      <div class="boxHeader thumbnailBox">
        <h1>{{ $t('thumbnailPic') }}</h1>
      </div>
      <div class="boxHeader canvasBox">
        <h1>{{ $t('canvas') }}</h1>
      </div>
      <div class="boxHeader compositeBox">
        <h1>{{ $t('compositePic') }}</h1>
      </div>
    </div>
    <div class="showImgBox">
      <div class="boxSize boxSizeT thumbnailBox">
        <template
          v-for="(imgone, index) in thumbnailImg">
          <img 
            :src="imgone.src"
            :id="imgone.id" ref="images"
            @click="selectedImg(index)">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompositeImage',
  data () {
    return {
      langList: [{ key: 'zh', value: '简体中文' }, { key: 'tw', value: '繁体中文' }, { key: 'en', value: 'EN' }],
      thumbnailImg: [{id: 'car', src: '../../static/VC01.png'}, {id: 'ceilling', src: '../../static/DD06A.png'}, {id: 'floor', src: '../../static/DF106.png'}, {id: 'controlBox', src: '../../static/CC102.png'}],
      imgWidth: '',
      imgHeight: '',
      fileName: '',
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
      let image = this.canvas.toDataURL("image/png")
      this.$refs.linkDown.href = image
      this.$refs.downImg.src = image
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
    },
    switchLang: function(command) {
      this.$i18n.locale = command
    }
  }
}
</script>

<style scoped>
  @import './composite-image.css';
</style>
