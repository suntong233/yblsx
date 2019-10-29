<template>
  <div class="GridContainer">
    <h2>Grid布局</h2>
    <h4>display: grid</h4>
    <div>
      grid-template-rows 表示行
      <br />grid-template-columns 表示列
    </div>
    <div class="box1">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
    <h4>display: grid</h4>
    <div>
      grid-column: 1/3 表示第一列到第三列
      <br />grid-row: 1/3 表示第一行到第三行
    </div>
    <div class="box2">
      <div style="grid-column: 1/3">1</div>
      <div style="grid-column: 3;grid-row: 1/3">2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <h4>使用repeat()改写</h4>
    <div>
      grid-template-columns: 100px 100px 100px;
      <br />改写成 grid-template-columns: repeat(3, 100px);
    </div>
    <h4>auto-fill 关键字</h4>
    <div>
      用来达到自动填充效果
      <br />grid-template-columns: repeat(auto-fill, 100px);
      <br />
    </div>
    <div class="box3">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h4>fr 关键字</h4>
    <div class="box4">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h4>minmax()</h4>
    <div>minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值</div>
    <div class="box5">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h4>auto 关键字</h4>
    <div>auto关键字表示由浏览器自己决定长度。</div>
    <div class="box6">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h4>
      grid-row-gap 属性，<br>
      grid-column-gap 属性，<br>
      grid-gap 属性
    </h4>
    <div>
        表示行列之间的间距 而grid-gap是简写
    </div>
    <div class="box7">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <h4>grid-auto-flow 属性</h4>
    <div>
        划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行，即下图数字的顺序。
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid"
};
</script>

<style scoped>
.GridContainer {
  width: 100%;
}
.box1 {
  display: grid;
  width: 400px;
  height: 100px;
  background-color: #ccc;
  grid-template-rows: 100px;
  grid-template-columns: 25% 25% 25% 25%;
}
.box1 > div {
  box-sizing: border-box;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.box2 {
  margin-top: 10px;
  display: grid;
  background-color: #ccc;
  width: 300px;
  grid-template-rows: 100px 100px;
  grid-template-columns: 100px 100px 100px;
}
.box2 > div {
  border: 1px solid #333;
  box-sizing: border-box;
}
.box3 {
  display: grid;
  background-color: #ccc;
  grid-template-columns: repeat(auto-fill, 100px);
}
.box3 > div {
  box-sizing: border-box;
  background-color: rgb(176, 243, 198);
  border: 1px solid #333;
  height: 100px;
}
.box4 {
  background-color: #ccc;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr 1fr;
}
.box4 > div {
  box-sizing: border-box;
  background-color: rgb(176, 243, 198);
  border: 1px solid #333;
  width: 100%;
  height: 100px;
}
.box5 {
  background-color: #ccc;
  display: grid;
  grid-template-columns: 1fr 1fr minmax(100px, 1fr);
}
.box5 > div {
  box-sizing: border-box;
  background-color: rgb(176, 243, 198);
  border: 1px solid #333;
  height: 100px;
}
.box6 {
  background-color: #ccc;
  display: grid;
  grid-template-columns: 100px 100px auto;
}
.box6 > div {
  box-sizing: border-box;
  background-color: rgb(176, 243, 198);
  border: 1px solid #333;
  height: 100px;
}
.box7{
    display: grid;
    background-color: #ccc;
    widows: auto;
    grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) ;
    grid-template-rows: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) ;
    grid-gap: 10px;
}

.box7>div{
    box-sizing: border-box;
    border: 1px solid #333;
    background-color: rgb(170, 153, 245);
}
</style>