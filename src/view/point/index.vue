<template>
  <div class="point-contain">
    <div class="point-header border-box">
      <p class="font-13 color-cfa972">可用积分</p>
      <div class="point-number font-50 color-cfa972">{{ pointNum }}</div>
    </div>
    <div class="point-body">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <div class="point-list-cell border-box flex border-bottom-1" v-for="(item,index) in list" :key="index+item.name">
          <div class="point-list-cell_left flex-1">
            <div class="list-cell_left_name font-15 color-232326">{{ item.name }}</div>
            <div class="list-cell_left_brand font-12 m-t-6 color-232326">{{ item.brandName }}</div>
            <div class="list-cell_left_date font-12 m-t-8 color-848689">{{ item.date }}</div>
          </div>
          <div class="point-list-cell_right flex-1 text-right">
            <div class="list-cell_right_num font-18 color-000">+{{ item.point }}</div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { List  } from 'vant';
export default {
  name: "point",
  components: {
    [List.name]:List
  },

  data() {
    return {
      pointNum: '10,000',
      list: [
        {
          name: '今日签到',
          brandName: '[MATERIAL GIRL]',
          date: '2018-12-06 10:32',
          point: '5'
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
.point-header {
  width: 100%;
  padding: 15px 0 15px 31px;
  background: url('../../assets/images/banner_bg.png') no-repeat center center;
  background-size: 100%;
}
.point-list-cell {
  width: 100%;
  padding: 15px;
}
</style>
