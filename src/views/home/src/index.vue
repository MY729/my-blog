<template>
  <div class="my-home">
    <div class="my-home__bounce">
      <span class="my-home__letter">F</span>
      <span class="my-home__letter">M</span>
      <span class="my-home__letter">Y</span>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    let canvas = document.getElementById('canvas')
  }
}
</script>

<style lang="scss">
@keyframes bounce {
  0% {
    transform: translate3d(0, 0, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
  }
  100% {
    transform: translate3d(0, -1em, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
  }
}

@include b(home) {
  position: fixed;
  background-color: #0e0e0f;
  height: 100%;
  width: 100%;
  top:0px;
  left:0px;

  @include e(bounce) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: white;
    height: 100%;
    font: normal bold 6rem "Product Sans", sans-serif;
    white-space: nowrap;

    @include e(letter) {
      animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
      display: inline-block;
      transform: translate3d(0, 0, 0);
      margin-top: 0.5em;
      text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
      font: normal 500 6rem 'Varela Round', sans-serif;

      &:nth-child(1) {
        animation-delay: 0s;
      }
      &:nth-child(2) {
        animation-delay: 0.0833333333s;
      }
      &:nth-child(3) {
        animation-delay: 0.1666666667s;
      }
    }
  }
}
</style>