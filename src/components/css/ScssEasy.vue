<template>
  <div class="test">
    <h2>Sass安装</h2>
    <pre>
          npm i -D sass sass-loader
          // 使用
          &lt;style lang="scss" scoped&gt; &lt;/style&gt;
      </pre>
    <h2>变量</h2>
    <pre>
        $primary: rgb(100, 98, 250);
        使用：
        .test{
          background-color: $primary;
        }
      </pre>
    <h2>默认变量</h2>
    <pre>
        $baseH: 1.5 !default;
      </pre>
    <h2>局部变量与全局变量</h2>
    <pre>
        $l: #ccc;  // 定义全局变量
        .box {
          color: $l;// 调用全局变量
        }
        .box2 {
          $l: #333; // 定义局部变量
          p {
            color: $l; // 调用局部变量
          }
        }
      </pre>
    <h2>选择器嵌套</h2>
    <pre>
        .test{
          padding: 10px;
          background-color: $primary;
          color: $l;
          h2{
            margin: 5px 0;
          }
          pre{
            $l: rgb(145, 238, 181);
            background-color: rgb(24, 36, 70);
            color: $l;
            padding-top: 10px;
            border-radius: 8px;  
          }
        }
      </pre>
    <h2>属性嵌套</h2>box:
    <div class="box">1</div>
    <pre>
        .box{
          display: inline-block;
          background-color: #fff;
          color: #333;
          padding: {
            top: 1px;
            bottom: 10px;
            left: 12px;
            right: 7px;
          }
        }
      </pre>
    <h2>伪类嵌套</h2>
    <pre>
        pre{
          & :hover{
            box-shadow: 0 0 10px #ccc;
          }
        }
      </pre>
    <h2>混合宏</h2>
    <pre>
        @mixin border-radius{
          -webkit-border-radius: 5px;
          border-radius: 5px;
        }
      </pre>
    <h2>调用混合宏</h2>
    <pre>
        .box{
          @mixin primary;
        }
      </pre>
    <h2>混合宏传参</h2>
    <button class="btn1">传参</button>
    <pre>
        @mixin btn($x){
          color: #fff;
          background-color: $x;
          border-radius: 8px;
          border: none;
          padding: 5px 10px;
        }
        .btn1{
          @include btn(red);
        }

        // 默认参数
        @mixin btn($x: red, $y:#fff){
          color: $y;
          background-color: $x;
          border-radius: 8px;
          border: none;
          padding: 5px 10px;
        }
        .btn1{
          @include btn;
        }
      </pre>
    <h2>继承</h2>
    <button class="btn2">继承</button>
    <pre>
        .btn2{
          @extend .btn1;
        }
      </pre>
      <h2>占位符</h2>
      <button class="btn3">占位符</button>
      <pre>
        %p-1{
          padding: 0.5rem;
        }
        .btn3{
          @extend %p-1;
        }
        %placeholder 声明的代码，如果不被 @extend 调用的话，不会产生任何代码
      </pre>
      <h2>插值</h2>
      <button class="btn4">插值</button>      
      <pre>
        插值通过#{$var}
        $b4: btn4;
        .#{$b4}{
          padding: 25px;
        }
      </pre>
      <h2>if</h2>
      <button class="btn5">if</button>
      <pre>
        @if true {
          color: yellow;
        }
        @else {
          color: black;
        }
      </pre>
      <h2>for</h2>
      <button class="item-1">item1</button>
      <button class="item-2">item2</button>
      <button class="item-3">item3</button>
      <pre>
        @for $i from 1 through 3 {
          .item-#{$i} {
            width: 1rem * $i;
          }
        }
      </pre>
      <h2>while</h2>
      <pre>
        $types: 4;
        $type-width: 20px;
        @while $types > 0 {
            .while-#{$types} {
                width: $type-width + $types;
            }
            $types: $types - 1;
        }
      </pre>
      <h2>each</h2>
      <div class="fs-1">fs1</div>
      <div class="fs-2">fs2</div>
      <div class="fs-3">fs3</div>
      <div class="fs-4">fs4</div>
      <pre>
        $fs: (1,2,3,4);
        @each $i in $fs {
          .fs-#{$i} {
            font-size: $i * 0.5rem;
          }
        }
      </pre>
      <h2>scss函数</h2>
      <pre>
        unquote($string)：删除字符串中的引号。

        quote($string)：给字符串添加引号。

        To-upper-case() 函数将字符串小写字母转换成大写字母

        To-lower-case() 将字符串转换成小写字母：

        percentage($value)：将一个不带单位的数转换成百分比值；

        round($value)：将数值四舍五入，转换成一个最接近的整数；

        ceil($value)：将大于自己的小数转换成下一位整数；

        floor($value)：将一个数去除他的小数部分；

        abs($value)：返回一个数的绝对值；

        min($numbers…)：找出几个数值之间的最小值；

        max($numbers…)：找出几个数值之间的最大值；

        random(): 获取随机数
      </pre>
      <h2>列表函数</h2>
      <pre>
        length($list)：返回一个列表的长度值；

        nth($list, $n)：返回一个列表中指定的某个标签值

        join($list1, $list2, [$separator])：将两个列给连接在一起，变成一个列表；

        append($list1, $val, [$separator])：将某个值放在列表的最后；

        zip($lists…)：将几个列表结合成一个多维的列表；
        
        index($list, $value)：返回一个值在列表中的位置值。
      </pre>
      <h2>Introspection函数</h2>
      <pre>
        ype-of($value)：返回一个值的类型\

        unit($number)：返回一个值的单位\

        unitless($number)：判断一个值是否带有单位\

        comparable($number-1, $number-2)：判断两个值是否可以做加、减和合并\
      </pre>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$primary: rgb(100, 98, 250);
$fs: (1,2,3,4);
@each $i in $fs {
  .fs-#{$i} {
    font-size: $i * 0.5rem;
  }
}
$l: #fff;
$baseH: 1.5 !default;
%p-1{
  padding: 0.5rem;
}
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 1rem * $i;
  }
}
$b4: "btn4";
@mixin primary {
  background-color: $primary;
  color: $l;
  border-radius: 5px;
}
@mixin btn($x: red, $y: #fff) {
  color: $y;
  background-color: $x;
  border-radius: 8px;
  border: none;
  padding: 5px 10px;
}
.test {
  padding: 10px;
  background-color: $primary;
  color: $l;
  h2 {
    margin: 5px 0;
  }
  pre {
    $l: rgb(145, 238, 181);
    background-color: rgb(24, 36, 70);
    color: $l;
    padding-top: 10px;
    border-radius: 8px;
    &:hover {
      box-shadow: 0 0 10px #ccc;
    }
  }
  .box {
    display: inline-block;
    padding: {
      top: 1px;
      bottom: 10px;
      left: 12px;
      right: 7px;
    }
  }
  .btn1 {
    @include btn;
  }
  .btn2 {
    @extend .btn1;
  }
  .btn3{
    @extend %p-1;
  }
  .#{$b4}{
    padding: 25px;
  }
  .btn5{
    background-color: rgb(49, 37, 37);
    border: none;
    padding: 5px 15px;
    @if null {
          color: rgb(236, 236, 67);
        }
        @else {
          color: rgb(57, 70, 182);
        }
  }
}
</style>