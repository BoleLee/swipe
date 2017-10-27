<template>
  <div>
    <h1>Default</h1>
    <p>direction: horizontal, speed: 300, auto: 3000, defaultIndex: 0, disabledDrag: false, continuous: true, showIndicators: false, noDragWhenSingle: true</p>
    <swipe class="my-swipe">
      <swipe-item class="my-swipe-item1">SwipeItem1</swipe-item>
      <swipe-item class="my-swipe-item2">SwipeItem2</swipe-item>
      <swipe-item class="my-swipe-item3">SwipeItem3</swipe-item>
    </swipe>

    <h1>Direction: vertical</h1>
    <swipe :direction="'vertical'" class="my-swipe">
      <swipe-item class="my-swipe-item1">SwipeItem1</swipe-item>
      <swipe-item class="my-swipe-item2">SwipeItem2</swipe-item>
      <swipe-item class="my-swipe-item3">SwipeItem3</swipe-item>
    </swipe>

    <h1>DisabledDrag: true</h1>
    <swipe :disabled-drag="true" class="my-swipe">
      <swipe-item class="my-swipe-item1">SwipeItem1</swipe-item>
      <swipe-item class="my-swipe-item2">SwipeItem2</swipe-item>
      <swipe-item class="my-swipe-item3">SwipeItem3</swipe-item>
    </swipe>

    <h1>Auto: 0</h1>
    <swipe :auto="0" class="my-swipe">
      <swipe-item class="my-swipe-item1">SwipeItem1</swipe-item>
      <swipe-item class="my-swipe-item2">SwipeItem2</swipe-item>
      <swipe-item class="my-swipe-item3">SwipeItem3</swipe-item>
    </swipe>

    <h1>DefaultIndex: 1</h1>
    <swipe :default-index="1" class="my-swipe">
      <swipe-item class="my-swipe-item1">SwipeItem1</swipe-item>
      <swipe-item class="my-swipe-item2">SwipeItem2</swipe-item>
      <swipe-item class="my-swipe-item3">SwipeItem3</swipe-item>
    </swipe>

    <h1>Continuous: false</h1>
    <swipe :continuous="false" class="my-swipe">
      <swipe-item class="my-swipe-item1">SwipeItem1</swipe-item>
      <swipe-item class="my-swipe-item2">SwipeItem2</swipe-item>
      <swipe-item class="my-swipe-item3">SwipeItem3</swipe-item>
    </swipe>

    <h1>ShowIndicators: true</h1>
    <swipe :show-indicators="true" class="my-swipe">
      <swipe-item class="my-swipe-item1">SwipeItem1</swipe-item>
      <swipe-item class="my-swipe-item2">SwipeItem2</swipe-item>
      <swipe-item class="my-swipe-item3">SwipeItem3</swipe-item>
    </swipe>

    <h1>noDragWhenSingle: false</h1>
    <swipe :no-drag-when-single="false" class="my-swipe">
      <swipe-item class="my-swipe-item1">Single SwipeItem</swipe-item>
    </swipe>


    <h1>滚动显示评论例子</h1>
    <div class="barrage-container">
      <swipe :auto="2500" :speed="1000" :direction="'vertical'" :fade="true" :disabled-drag="true" class="barrage-area">
        <swipe-item v-for="(comment, index) in comments" :key="comment.id">
          <div style="display: flex; height: 100%; align-items: center;">
            <div class="barrage-item-wrapper">
              <img :src="comment.avatar_url" alt="头像">
              <div class="barrage-content">{{ comment.content }}</div>
            </div>
          </div>
        </swipe-item>
      </swipe>
    </div>
    
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from '../components/swipe/index.js';

  export default {
    components: {
      swipe: Swipe,
      swipeItem: SwipeItem
    },
    data() {
      return {
        comments: [{
          id: 1,
          avatar_url: './avatar.png',
          content: '这是滚动显示的评论'
        }, {
          id: 2,
          avatar_url: './avatar.png',
          content: '评论加了淡入淡出效果'
        }, {
          id: 3,
          avatar_url: './avatar.png',
          content: '需要使swipe的高度比弹幕的高度高一些，使其垂直居中'
        }]
      }
    }
  };
</script>

<style lang="scss" scoped>
@import 'mixins.scss';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.my-swipe {
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #fff;
  font-size: 30px;
}
.my-swipe-item1 {
  background-color: #0089dc;
  color: #fff;
}
.my-swipe-item2 {
  background-color: #ffd705;
  color: #000;
}
.my-swipe-item3 {
  background-color: #ff2d4b;
  color: #fff;
}

.barrage-container {
  height: px2rem(200px);
  background-color: #eee;
  position: relative;
}
.barrage-area {
  position: absolute;
  top: px2rem(100px);
  left: 0;
  right: 0;
  padding: 0 30px;
  height: px2rem(96px);
  overflow: hidden;
    
  .barrage-item-wrapper {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: px2rem(28px);
    max-width: 100%;
    height: px2rem(56px);
    padding-right: px2rem(20px);
    display: flex;
    align-items: center;

    img {
      width: px2rem(48px);
      height: px2rem(48px);
      border-radius: 50%;
      margin-left: px2rem(4px);
      margin-right: px2rem(4px);
    }
    .barrage-content {
      font-size: px2rem(28px);
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>