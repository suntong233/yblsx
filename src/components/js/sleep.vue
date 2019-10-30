<template>
  <div>
    <button @click="handleSleep(2000)">休眠</button>
    <div>
        代码：<br>
        function sleep() {<br>
        var startTime = new Date().getTime();<br>
        while (new Date().getTime() &lt; startTime + times);<br>
        }<br>
        sleep(10000);<br>
        console.log(1)
    </div>
  </div>
</template>

<script>
export default {
  name: "sleep",
  methods: {
    handleSleep(times) {
      function sleep() {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + times);
      }
      sleep(10000);
      console.log(1)
    }
  }
};
</script>

<style scoped>
</style>