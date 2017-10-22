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
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from '../components/swipe/index.js';

  export default {
    components: {
      swipe: Swipe,
      swipeItem: SwipeItem
    }
  };
</script>

<style scoped>
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
</style>