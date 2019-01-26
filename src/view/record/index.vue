<template>
  <div class="recorde-contian bg-f4f5f6">
    <div class="list-contian">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <div class="recorde-list-cell bg-fff border-box" v-for="(item,index) in list" :key="index+item.storeName">
          <div
            class="recorde-list-cell_title flex flex-align-center font-12 border-bottom-1 padding-lr-12 border-box">
            <van-icon name="shop-o" />{{ item.storeName }}
          </div>
          <div class="flex border-box padding-lr-12">
            <div class="recorde-list-cell_left flex-1">
              <div class="list-cell_left_name font-12 color-232326">{{ item.goodsName }}</div>
            </div>
            <div class="recorde-list-cell_right flex-1 text-right">
              <div class="list-cell_right_num font-13 color-232326 ">{{ item.newPrice }}</div>
              <div class="list-cell_right_num font-13 color-848689 "><s>{{ item.oldPrice }}</s></div>
            </div>
          </div>
          <div class="flex border-bottom-1 border-box padding-lr-12">
            <div class="flex-1 font-12 color-848689">颜色分类：{{ item.color }}   尺码：{{ item.size }}</div>
            <div class="flex-1 font-12 color-848689 text-right"><van-icon name="cross"></van-icon>{{ item.goodsNum}}</div>
          </div>
          <div class="recorde-list-cell_sub flex flex-align-center border-box padding-lr-12">
            <div class="list-cell_sub_date flex-1 font-12 color-232326">{{ item.date }}购买</div>
            <div class="list-cell_sub_all flex-1 font-12 color-232326 text-right">共{{ item.goodsNum }}件商品 实付款：{{ item.priceAll }}</div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { List, Icon  } from 'vant';
export default {
  name: "record",
  components: {
    [List.name]: List,
    [Icon.name]: Icon
  },

  data() {
    return {
      list: [
        {
          storeName: 'MG江苏南京秦淮区大洋百货新街口店(MATERIAL GIRL)',
          goodsName: '哥斯拉加厚白色鸭绒羽绒服女中长款2018冬装新款绿连帽外套太平鸟',
          newPrice: '1059.99',
          oldPrice: '1899.00',
          color: '元气绿',
          size: 'M',
          date: '2018-12-06',
          goodsNum: '1',
          priceAll: '12345.90'
        }
      ],
      loading: false,
      finished: false
    };
  },

  computed: {

  },

  methods: {
     onLoad() {
      const that = this;
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          // this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        that.loading = false;

        // 数据全部加载完成
        if (that.list.length >=1) {
          that.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
.recorde-list-cell_title {
  height: 42px;
}

.recorde-list-cell_sub {
  height: 42px;
}
</style>
