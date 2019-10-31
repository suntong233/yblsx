<template>
  <div class="arrayactions-container">
    <h2 style="text-align:center">数组常用操作技巧</h2>
    <div class="arrayactions-item">
      数组去重: array1 = {{ array1 }} ;
      <br />
      [...new Set(array1)] -> {{ array1c }}
    </div>
    <div class="arrayactions-item">
        Array.from <br>
        此方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。 <br>
        现在有这样的数组: <br>
        {{ array2 }} <br>
        现在想只得到他里面的名字：<br>
        {{ array2.map(item=>{return item.name}) }}  <br>
        你可能会想到map方法： <br>
        array2.map(item=>{return item.name})  <br>
        现在使用Array.from()  <br>
        Array.from((array2), x=>x.name)  <br>
        {{ array2c }}   <br>
    </div>
    <div class="arrayactions-item">
        将数组转化为对象 <br>
        {{ array3 }}  <br>  {...array3} <br>
        {{ {...array3} }} 
    </div>
    <div class="arrayactions-item">
        在数组中获取随机值  <br>
        {{ array3 }} <br>
        array3[Math.floor(Math.random()*array3.length)]  <br>
        {{ array3[Math.floor(Math.random()*array3.length)] }}  <br>
    </div>
    <div class="arrayactions-item">
        数组求和  <br>
        {{ array1 }} <br>
         array1.reduce((a,b)=>a+b) <br>
        {{ array1.reduce((a,b)=>a+b) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "arraysactions",
  data() {
    return {
      array1: [1, 2, 3, 4, 6, 8, 5, 1, 3, 5, 2],
      array2: [
          {name:"小白",age:12},
          {name:"小黄",age:8},
          {name:"老王",age:34},
          {name:"小黑",age:18}
      ],
      array3: ['dsdg','wqg','sdga','asd']
    };
  },
  computed: {
    array1c() {
      return [...new Set(this.array1)];
    },
    array2c() {
      return Array.from((this.array2), x=>x.name)
    }
  }
};
</script>

<style scoped>
  .arrayactions-container {
    width: 100%;
  }
  .arrayactions-item {
    margin: 15px 0;
    background-color: rgb(245, 235, 235);
    padding: 5px;
    font-size: 20px;
    color: #444;
  }
</style>