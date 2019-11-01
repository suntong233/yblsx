<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  ul {
      list-style: none;
  }
  html,body{
    margin: 0 auto;
    width: 100%;
    position: relative;
  }
  #app{
    position: relative;
    width: 100%;
  }
  .mdBox{
    padding: 10px;
    border-radius: 8px;
    background-color: rgb(33, 30, 43);
    color: rgb(197, 212, 226);
    box-shadow: 0 0 4px #ccc;
    overflow: auto;
  }
  .mdBox ul li{
    margin: 3px;
    margin-left: 20px;
    list-style: disc;
  }
  .mdBox pre{
    margin: 5px;
    color: rgb(198, 218, 151);
  }
</style>
