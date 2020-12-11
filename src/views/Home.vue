<template>
  <div id=app>
    <!-- head -->
    <div class=head>
      <!--  搜索条  -->
      <div class=search>
        <img class=searchImg src="../assets/搜索.png" alt="">
        <input value=搜索：商品关键字 class=searchText type="text">
      </div>
      <!--  海报  -->
      <div class=post>
        <img class=postImg :src="swiperData[0].assetUrl" alt="">
      </div>
    </div>
    <!-- 分类 -->
    <div class=category>
      <div class=cateImgBox>
        <img class=cateImg :src="sCategory[0].photoUrl" alt="">
        <p class=textCate>{{ sCategory[0].kindName }}</p>
      </div>
      <div class=cateImgBox>
        <img class=cateImg :src="sCategory[1].photoUrl" alt="">
        <p class=textCate>{{ sCategory[1].kindName }}</p>
      </div>
      <div class=cateImgBox>
        <img class=cateImg :src="sCategory[2].photoUrl" alt="">
        <p class=textCate>{{ sCategory[2].kindName }}</p>
      </div>
      <div class=cateImgBox>
        <img class=cateImg :src="sCategory[3].photoUrl" alt="">
        <p class=textCate>{{ sCategory[3].kindName }}</p>
      </div>
      <div class=cateImgBox>
        <img class=cateImg :src="sCategory[4].photoUrl" alt="">
        <p class=textCate>{{ sCategory[4].kindName }}</p>
      </div>
      <div class=cateImgBox>
        <img class=cateImg :src="sCategory[5].photoUrl" alt="">
        <p class=textCate>{{ sCategory[5].kindName }}</p>
      </div>
      <div class=cateImgBox>
        <img class=cateImg :src="sCategory[6].photoUrl" alt="">
        <p class=textCate>{{ sCategory[6].kindName }}</p>
      </div>
      <div class=cateImgBox>
        <img class=cateImg :src="sCategory[7].photoUrl" alt="">
        <p class=textCate>{{ sCategory[7].kindName }}</p>
      </div>
      <div class=cateImgBox>
        <img class=cateImg :src="sCategory[8].photoUrl" alt="">
        <p class=textCate>{{ sCategory[8].kindName }}</p>
      </div>
      <div class=cateImgBox>
        <img class=cateImg :src="sCategory[9].photoUrl" alt="">
        <p class=textCate>{{ sCategory[9].kindName }}</p>
      </div>
    </div>
    <!--  Ps  -->
    <div class=centerCon>
      <div class=ps>
        <img class=psImg src="../assets/ps.png" alt="">
      </div>
      <!--  活动专区  -->
      <div>
        <p class=title1>活动专区</p>
        <div style=background:rgb(212,47,53) class=activeBox>
          <span class=activeText>零食好货</span>
          <br>
          <span class=activeTextSmall>馋嘴必备</span>
          <img class=activeImg :src="activeArea[0].photoUrl" alt="">
        </div>
        <div style=background:rgb(212,47,53) class=activeBox>
          <span class=activeText>防疫物品</span>
          <br>
          <span class=activeTextSmall>优惠促销</span>
          <img class=activeImg :src="activeArea[1].photoUrl" alt="">
        </div>
        <div style=background:rgb(9,80,186) class=activeBox>
          <span class=activeText>日用百货</span>
          <br>
          <span class=activeTextSmall>品质囤货</span>
          <img class=activeImg :src="activeArea[2].photoUrl" alt="">
        </div>
        <div style=background:rgb(9,80,186) class=activeBox>
          <span class=activeText>办公文具</span>
          <br>
          <span class=activeTextSmall>新品上架</span>
          <img class=activeImg :src="activeArea[3].photoUrl" alt="">
        </div>
      </div>
      <!--   平台爆款   -->
      <div>
        <p class=title1>平台爆款</p>
        <div class=boomBox>
          <img class=imgGoods :src="goodsList[0].photoUrl" alt="">
          <p class=goodsText>{{ goodsList[0].skuName }}</p>
          <p class=goodsPrinceText>￥{{ goodsList[0].priceDiscount }}</p>
          <div class=plus>
            <span class=plusText>+</span>
          </div>
        </div>
        <div class=boomBox>
          <img class=imgGoods :src="goodsList[11].photoUrl" alt="">
          <p class=goodsText>{{ goodsList[11].skuName }}</p>
          <p class=goodsPrinceText>￥{{ goodsList[11].priceDiscount }}</p>
          <div class=plus>
            <span class=plusText>+</span>
          </div>
        </div>
        <div class=boomBox>
          <img class=imgGoods :src="goodsList[1].photoUrl" alt="">
          <p class=goodsText>{{ goodsList[1].skuName }}</p>
          <p class=goodsPrinceText>￥{{ goodsList[1].priceDiscount }}</p>
          <div class=plus>
            <span class=plusText>+</span>
          </div>
        </div>
        <div class=boomBox>
          <img class=imgGoods :src="goodsList[4].photoUrl" alt="">
          <p class=goodsText>{{ goodsList[4].skuName }}</p>
          <p class=goodsPrinceText>￥{{ goodsList[4].priceDiscount }}</p>
          <div class=plus>
            <span class=plusText>+</span>
          </div>
        </div>
        <div class=boomBox>
          <img class=imgGoods :src="goodsList[5].photoUrl" alt="">
          <p class=goodsText>{{ goodsList[5].skuName }}</p>
          <p class=goodsPrinceText>￥{{ goodsList[5].priceDiscount }}</p>
          <div class=plus>
            <span class=plusText>+</span>
          </div>
        </div>
        <div class=boomBox>
          <img class=imgGoods :src="goodsList[17].photoUrl" alt="">
          <p class=goodsText>{{ goodsList[17].skuName }}</p>
          <p class=goodsPrinceText>￥{{ goodsList[17].priceDiscount }}</p>
          <div class=plus>
            <span class=plusText>+</span>
          </div>
        </div>
        <div class=boomBox>
          <img class=imgGoods :src="goodsList[9].photoUrl" alt="">
          <p class=goodsText>{{ goodsList[9].skuName }}</p>
          <p class=goodsPrinceText>￥{{ goodsList[9].priceDiscount }}</p>
          <div class=plus>
            <span class=plusText>+</span>
          </div>
        </div>
        <div class=boomBox>
          <img class=imgGoods :src="goodsList[8].photoUrl" alt="">
          <p class=goodsText>{{ goodsList[8].skuName }}</p>
          <p class=goodsPrinceText>￥{{ goodsList[8].priceDiscount }}</p>
          <div class=plus>
            <span class=plusText>+</span>
          </div>
        </div>
      </div>
      <!--   底部海报   -->
      <div>
        <img class=footImg src="../assets/foot.png" alt="">
      </div>
      <br>
      <br>
      <p class=bottom>本平台旨在为注册会员提供产品售后及其他增值服务</p>
      <br>
      <br>
    </div>
    <Menu msg="sdsd" />
  </div>
</template>

<script>
import { getHomeActiveArea, getHomeGoodsList, getHomeSCategory, getHomeSwiper } from '@/network/home'
import Menu from '@/components/Menu'

export default {
  components: {
    Menu
  },
  data () {
    return {
      swiperData: [],
      sCategory: [],
      goodsList: [],
      activeArea: []
    }
  },
  methods: {
    // 首页轮播图
    getHomeSwiperH () {
      getHomeSwiper().then(res => {
        console.log(res)
        this.swiperData = res.data.data
      })
    },

    // 首页分类栏
    getHomeSCategoryH () {
      getHomeSCategory().then(res => {
        // console.log(res)
        this.sCategory = res.data.data
      })
    },

    // 首页爆款（商品列表）
    getHomeGoodsListH () {
      getHomeGoodsList().then(res => {
        // console.log(res)
        this.goodsList = res.data.data
      })
    },

    // 活动专区
    getHomeActiveAreaH () {
      getHomeActiveArea().then(res => {
        // console.log(res)
        this.activeArea = res.data.data
      })
    }
  },
  mounted () {
    // 网络请求
    // 获取首页轮播图
    this.getHomeSwiperH()
    // 获得分类
    this.getHomeSCategoryH()
    // 首页爆款
    this.getHomeGoodsListH()
    // 活动专区
    this.getHomeActiveAreaH()
  }
}
</script>

<style scoped>
#app {
  background: rgb(237, 237, 237);
}

.head {
  height: 30vh;
  background: rgb(23, 98, 213);
  margin-top: 0px;
}

.post {
  /*margin-top: 10vh;*/
}

.search {
  margin-left: 4vw;
  border-radius: 5vw;
  width: 92vw;
  background: rgb(15, 86, 194);
  position: relative;
  top: 3vh;
  height: 5vh;
  margin-bottom: 3vh;
}

.searchText {
  background: transparent;
  height: 5vh;
  border: 0px;
  float: right;
  width: 80vw;
  color: white;
  font-size: 4vw;
}

.searchImg {
  position: relative;
  top: 1vh;
  left: 1vw;
}

.postImg {
  width: 98vw;
  margin-top: 2vh;
}

.category {
  background: white;
  height: 24vh;
  width: 100vw;
}

.cateImg {
  width: 10vw;
  margin-left: 4vw;
  margin-right: 4vw;
  margin-top: 2vh;
}

.cateImgBox {
  display: inline-block;
}

.textCate {
  font-size: 3vw;
}

.ps {
  background: white;
  margin-top: 2.5vh;
  width: 96vw;
  height: 5vh;
  margin-left: 2vw;
  border-radius: 5vw;
}

.centerCon {
}

.psImg {
  width: 96vw;
}

.title1 {
  margin-right: 76vw;
  margin-left: 6vw;
  margin-top: 1vh;
  font-size: 4.5vw;
}

.activeBox {
  margin-top: 1vh;
  margin-left: 2vw;
  margin-right: 2vw;
  display: inline-block;
  width: 46vw;
  height: 13vh;
  border-radius: 4vw;
}

.activeImg {
  display: inline-block;
  margin-top: -5.5vh;
  margin-left: 22vw;
  height: 12vh;
}

.activeText {
  position: relative;
  right: 10vw;
  top: 2vh;
  font-size: 5vw;
  font-weight: 600;
  color: white;
}

.activeTextSmall {
  position: relative;
  right: 12vw;
  top: 2vh;
  color: white;
}

.boomBox {
  margin-top: -6vh;
  display: inline-block;
  width: 46.5vw;
  height: 33vh;
  margin-left: 1vw;
  margin-right: 1vw;
  background: white;
  border-radius: 4vw;
  margin-top: 1.5vh;
}

.imgGoods {
  margin-top: 3vh;
  width: 35vw;
}

.goodsText {
  text-align: left;
  margin-left: 5vw;
}

.goodsPrinceText {
  margin-top: 0.7vh;
  float: left;
  margin-left: 4vw;
  font-size: 6vw;
  color: rgb(212, 47, 53);
}

.footImg {
  margin-top: 2vh;
  width: 96vw;
}

.bottom {
  font-size: 3.6vw;
  color: grey;
  height: 10vh;
}

.plus {
  display: inline-block;
  width: 7vw;
  height: 7vw;
  background: rgb(212, 47, 53);
  border-radius: 50%;
  margin-top: 1vh;
  float: right;
  margin-right: 3vw;
}

.plusText {
  display: inline-block;
  font-size: 8vw;
  color: white;
  position: relative;
  top: -1vw;
}

</style>
