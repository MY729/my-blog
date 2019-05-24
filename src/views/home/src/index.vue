<template>
  <div class="my-home">
    <span class="my-home__item">首页</span>
  </div>
</template>
<style lang="scss">
@include b(home) {
  position: fixed;
  background-color: #95dfde;
  height: 100%;
  width: 100%;
  top:0px;
  left:0px;

  @include e(item) {
    color: yellow
  }
}
</style>