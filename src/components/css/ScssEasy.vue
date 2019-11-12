<template>
  <div>
      <h2 class="h2text">Sass</h2>
      <pre>
          // 安装scss
          npm i -D sass sass-loader

          // 使用

          &lt;style lang="scss" scoped&gt;
        &lt;/style&gt;
      </pre>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    $bgw: #ccc;
    .h2text{
       background-color: $bgw;
    }

</style>