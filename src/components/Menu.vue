<template>
  <div class=con>
    <div class=boxBig>
      <div class=menuBox>
        <a class=menuUrl href="#/">
          <img class=menuImg src="../assets/首页.svg" alt="">
          <p>首页</p>
        </a>
      </div>
      <div class=menuBox>
        <a class=menuUrl href="#/category">
          <img class=menuImg src="../assets/分类.svg" alt="">
          <p>分类</p>
        </a>
      </div>
      <div class=menuBox>
        <a class=menuUrl href="#/shop">
          <img class=menuImg src="../assets/商城.svg" alt="">
          <p>商城</p>
        </a>
      </div>
      <div class=menuBox>
        <a class=menuUrl href="#/personal">
          <img class=menuImg src="../assets/个人.svg" alt="">
          <p>个人中心</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  },
  mounted () {
    this.Fun1()
  },
  methods: {
    Fun1 () {
      if (location.hash === '#/') {
        const box = document.getElementsByClassName('menuImg')[0]
        box.src = '/img/首页红.3b54d494.svg'
        document.getElementsByClassName('menuUrl')[0].style.color = '#D42F35'
      } else if (location.hash === '#/category') {
        const box = document.getElementsByClassName('menuImg')[1]
        box.src = '/img/分类红.076899a8.svg'
        document.getElementsByClassName('menuUrl')[1].style.color = '#D42F35'
      } else if (location.hash === '#/shop') {
        const box = document.getElementsByClassName('menuImg')[2]
        box.src = '/img/商城红.82f2470d.svg'
        document.getElementsByClassName('menuUrl')[2].style.color = '#D42F35'
      } else if (location.hash === '#/personal') {
        const box = document.getElementsByClassName('menuImg')[3]
        box.src = '/img/个人中心红.9a477e66.svg'
        document.getElementsByClassName('menuUrl')[3].style.color = '#D42F35'
      }
    }
  }
}
</script>

<style scoped>
.con {
  position: fixed;
  height: 10vh;
  width: 114vw;
  background: white;
  top: 91.1vh;
}

.menuImg {
  width: 8vw;
}

.menuBox {
  display: inline-block;
  margin-top: 1vh;
  margin-left: 7.5vw;
  margin-right: 7.5vw;
}

.boxBig {
  position: relative;
  left: -7vw;
}

a {
  color: rgb(81, 81, 81);
  text-decoration: none
}
</style>
