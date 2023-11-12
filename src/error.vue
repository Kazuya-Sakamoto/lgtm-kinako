<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="boo-wrapper">
      <div class="boo">
        <div class="face"></div>
      </div>
      <div class="shadow"></div>

      <h1>ページが存在しません</h1>
      <p class="px-1 py-4">
        <br />
        URLが間違っている可能性があります。
      </p>
      <div class="mt-6">
        <nuxt-link to="/">
          <button
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded"
          >
            ホームに戻る
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$bgColor: #f7f7f7;
$jaggedDistance: 32px;

// boo
$booSize: $jaggedDistance * 5;
$booBg: $bgColor;
$booShadow: darken($booBg, 5%);

// face
$booFaceSize: round($jaggedDistance / 1.3333);
$booFaceColor: #9b9b9b;

// ===========

@keyframes floating {
  0% {
    transform: translate3d(0, 0, 0);
  }
  45% {
    transform: translate3d(0, -10%, 0);
  }
  55% {
    transform: translate3d(0, -10%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes floatingShadow {
  0% {
    transform: scale(1);
  }
  45% {
    transform: scale(0.85);
  }
  55% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
}

// ===========

@mixin border-bottom-jagged($size, $color-outer) {
  position: relative;
  padding-bottom: $size;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: calc(-#{$size} / 1.7);
    bottom: calc(-#{$jaggedDistance} / 3.85);
    width: calc(100% + #{$size});
    height: $size;
    background-repeat: repeat-x;
    background-size: $size $size;
    background-position: left bottom;
    background-image: linear-gradient(
        -45deg,
        $color-outer calc(#{$size} / 2),
        transparent 0
      ),
      linear-gradient(45deg, $color-outer calc(#{$size} / 2), transparent 0),
      linear-gradient(-45deg, $booFaceColor calc(#{$size} / 1.7), transparent 0),
      linear-gradient(45deg, $booFaceColor calc(#{$size} / 1.7), transparent 0);
  }
}

// ===========

body {
  background-color: $bgColor;
}

.container {
  font-family: "Varela Round", sans-serif;
  color: $booFaceColor;
  position: relative;
  height: 100vh;
  text-align: center;
  font-size: calc(#{$jaggedDistance} / 2);

  h1 {
    font-size: $jaggedDistance;
    margin-top: $jaggedDistance;
  }
}

.boo-wrapper {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: $jaggedDistance * 2;
  padding-bottom: $jaggedDistance * 2;
}

.boo {
  width: $booSize;
  height: $booSize + ($booSize * 0.15);
  background-color: $booBg;
  margin-left: auto;
  margin-right: auto;
  border: calc((calc(#{$jaggedDistance} / 1.65) - calc(#{$jaggedDistance} / 2)))
    solid $booFaceColor;
  border-radius: calc(#{$booSize} / 2) calc(#{$booSize} / 2) 0 0;
  border-bottom: 0;
  overflow: hidden;
  box-shadow: calc(-#{$jaggedDistance} / 2) 0 0 2px rgba($booShadow, 0.5) inset;
  @include border-bottom-jagged($jaggedDistance, $bgColor);
  animation: floating 3s ease-in-out infinite;

  .face {
    width: $booFaceSize;
    height: calc(#{$jaggedDistance} / 10);
    border-radius: 5px;
    background-color: $booFaceColor;
    position: absolute;
    left: 50%;
    bottom: calc(#{$jaggedDistance} + #{$booFaceSize});
    transform: translateX(-50%);

    &::before,
    &::after {
      content: "";
      display: block;
      width: calc(#{$booFaceSize} / 4);
      height: calc(#{$booFaceSize} / 4);
      background-color: $booFaceColor;
      border-radius: 50%;
      position: absolute;
      bottom: calc(#{$jaggedDistance} + #{$booFaceSize} / 3);
    }

    &::before {
      left: -$booFaceSize;
    }

    &::after {
      right: -$booFaceSize;
    }
  }
}

.shadow {
  width: calc(#{$booSize} - #{$jaggedDistance});
  height: calc(#{$jaggedDistance} / 2);
  background-color: rgba($booShadow, 0.75);
  margin-top: $jaggedDistance * 1.25;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  animation: floatingShadow 3s ease-in-out infinite;
}
</style>
