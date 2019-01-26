<template>
  <div class="index-contain">
    <section>
      <div class="clique-logo">
        <img src="../../assets/images/logo.png" alt="logo" />
      </div>
    </section>
    <section>
      <div class="clique-qrcode">
        <svg id="barcode"></svg>
        <p class="font-13 color-232326">18790876890</p>
      </div>
    </section>
    <section>
      <div class="clique-menu flex">
        <div class="flex-1 flex flex-column clique-menu-cell" @click="changeRoute('point')">
          <p class="color-232326 font-20">10,000</p>
          <p class="color-848689 font-14 m-t-6">可用积分</p>
        </div>
        <div class="flex-1 flex flex-column clique-menu-cell border-left-1" @click="changeRoute('records')">
          <p class="color-232326 font-20">100</p>
          <p class="color-848689 font-14 m-t-6">消费记录</p>
        </div>
        <div class="flex-1 flex flex-column clique-menu-cell border-left-1" @click="changeRoute('cards')">
          <p class="color-232326 font-20"><i class="font-20 font_family icon-qiaquan-"></i></p>
          <p class="color-848689 font-14 m-t-6">卡券</p>
        </div>
        <div class="flex-1 flex flex-column clique-menu-cell border-left-1" @click="toPointMall">
          <p class="color-232326 font-20"><i class="font-20 font_family icon-jifenshangcheng-"></i></p>
          <p class="color-848689 font-14 m-t-6">积分商城</p>
        </div>
      </div>
    </section>
    <section>
      <div class="clique-swiper">
        <van-swipe class="goods-swipe" :autoplay="3000" :height="140">
          <van-swipe-item v-for="thumb in banners.thumb" :key="thumb">
            <img :src="thumb" >
          </van-swipe-item>
        </van-swipe>
      </div>
    </section>
    <section>
      <div class="clique-brand">
        <template v-for="(item,index) in brandList">
          <div 
            :class="['clique-brand-logo', 'border-box',cliqueCard? (index%2 == 0?'b-l-1 half':' half') : (index%3 == 0?'b-l-1':'')]" 
            :key="index+item.src">
            <a class="clique-brand-logo_a" @click="showDialog(item)">
              <img :src="item.src" alt="logo" />
            </a>
          </div>
        </template>
      </div>
    </section>
    <p class="font-12 color-848689 p-tips border-box"><a href="" class="font-12 color-848689 ">让每个人尽享时常圈的乐趣~</a></p>
    <div class="qrcode-dialog_confirm" id="dialog" v-if="qrcodeVisable">
      <div class="qrcode-mask"></div>
      <div class="qrcode-dialog">
          <span class="qrcode-dialog-close" @click="closeDialog">+</span>
          <div class="qrcode-dialog_hd">
            <img :src="dialogData.logo" alt="log0"/>
          </div>
          <div class="qrcode-dialog_bd">
            <img :src="dialogData.qrcode" alt="qrcode"/>
            <p class="font-12 color-666 text-center triangle-p"><i class="triangle-up"></i></p>
            <p class="font-12 color-666 text-center">长 按 二 维 码 关 注 我 们</p>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
import JsBarcode from 'jsbarcode';
import {
  Swipe,
  SwipeItem
} from 'vant';

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },

  data() {
    return {
      cliqueCard: true, // 是否有集团卡
      banners: {
        title: 'test',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: [
          'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
          'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
        ]
      },

      brandList: [
        {
          src: require('../../assets/images/logo01.png'),
          qrcode: '',
        },
        {
          src: require('../../assets/images/logo02.png'),
          qrcode: '',
        },
        {
          src: require('../../assets/images/logo03.png'),
          qrcode: '',
        },
        {
          src: require('../../assets/images/logo04.png'),
          qrcode: '',
        },
        {
          src: require('../../assets/images/logo05.png'),
          qrcode: '',
        },
        {
          src: require('../../assets/images/logo06.png'),
          qrcode: '',
        }
      ],
      qrcodeVisable: true,
      dialogData: {
        logo: require('../../assets/images/logo01.png'),
        qrcode: require('../../assets/images/logo1.png')
      }
    };
  },

  methods: {
    changeRoute(path) {
      this.$router.push(path);
    },

    /**
     * 跳转第三方积分商城
     */
    toPointMall() {
      // const that = this;
    },

    /**
     * 显示公众号二维码弹窗
     */
    showDialog(item) {
      const that = this;
      if (!item.qrcode) {
        return;
      }
      that.qrcodeVisable = true;
      document.body.style.overflow = 'hidden';
    },

    /**
     * 关闭二维码弹窗
     */
    closeDialog() {
      const that = this;
      that.qrcodeVisable = false;
      document.body.style.overflow = 'unset';
    },

    /**
     * 生成条形码
     */
    barcode() {
      JsBarcode("#barcode", "23334444f",{
        format: 'CODE128',
        displayValue: false,
        background: "#ffffff"
      })
    }
  },
  mounted() {
    let that = this;
    that.barcode();
  }
};
</script>

<style lang="less">
@import url(../../assets/css/index.css);

/* 弹窗 */
.qrcode-dialog_confirm {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.qrcode-dialog {
  position: relative;
  padding: 30px 0;

  .qrcode-dialog-close {
    position: absolute;
    top: 18px;
    right: 14px;
    display: block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .qrcode-dialog_hd {
    width: 100%;
    text-align: center;
    img {
      width: 124px;
    }
  }

  .qrcode-dialog_bd {
    img {
      width: 150px;
    }
    p {
      position: relative;

      &.triangle-p {
        width: 100%;
        height: 20px;
      }
    }
  }
}


</style>
