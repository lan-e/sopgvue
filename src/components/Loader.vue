<template>
  <div class="flexCol loaderFlex">
    <img
      src="@/assets/img/SOPGlogo.png"
      alt="ljesnjak"
      width="100"
      rel="preload"
    />
    <span class="loader"></span>
  </div>
</template>

<style>
.flexCol {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.loaderFlex {
  margin: 250px 0;
}

.loader {
  width: 300px;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: #d38f76;
  overflow: hidden;
  margin: 48px 0;
}

.loader::after {
  content: "";
  width: 192px;
  height: 4.8px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}

@keyframes animloader {
  0% {
    left: 0;
    transform: translateX(-100%);
  }

  100% {
    left: 100%;
    transform: translateX(0%);
  }
}
</style>
