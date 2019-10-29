# Less

## 引入和使用
* 需要注意的是，link 标签一定要在 Less.js 之前引入，并且 link 标签的 rel 属性要设置为stylesheet/less。
```html
    <link rel="stylesheet/less" href="style.less">
    <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.5.3/less.min.js"></script>
```

* npm
```
    npm i less

    lessc styles.less > styles.css
```

## 值变量

```less
    // 在平时工作中，我们就可以把 常用的变量 封装到一个文件中，这样利于代码组织维护。
    @color: #999;
    @bgColor: skyblue;
    @width: 50%;
    #wrap {
        color: @color;
        background: @bgColor;
        width: @width;
    }
```

## 选择器变量

```less
    /* Less */
    @mySelector: #wrap;
    @Wrap: wrap;
    @{mySelector}{ //变量名 必须使用大括号包裹
    color: #999;
    width: 50%;
    }
    .@{Wrap}{
    color:#ccc;
    }
    #@{Wrap}{
    color:#666;
    }

    /* 生成的 CSS */
    #wrap{
    color: #999;
    width: 50%;
    }
    .wrap{
    color:#ccc;
    }
    #wrap{
    color:#666;
    }
```

## 属性变量

```less
    /* Less */
    @borderStyle: border-style;
    @Soild:solid;
    #wrap{
    @{borderStyle}: @Soild;//变量名 必须使用大括号包裹
    }

    /* 生成的 CSS */
    #wrap{
    border-style:solid;
    }
```

## url变量

```less
    /* Less */
    @images: "../img";//需要加引号
    body {
    background: url("@{images}/dog.png");//变量名 必须使用大括号包裹
    }

    /* 生成的 CSS */
    body {
    background: url("../img/dog.png");
    }
```

## 声明变量

```less
    @background: {background:red;};
    #main{
        @background();
    }
    @Rules:{
        width: 200px;
        height: 200px;
        border: solid 1px red;
    };
    #con{
    @Rules();
    }

    /* 生成的 CSS */
    #main{
    background:red;
    }
    #con{
    width: 200px;
    height: 200px;
    border: solid 1px red;
    }
```

## 变量运算

```less
    /* Less */
    @width:300px;
    @color:#222;
    #wrap{
    width:@width-20;
    height:@width-20*5;
    margin:(@width-20)*5;
    color:@color*2;
    background-color:@color + #111;
    }

    /* 生成的 CSS */
    #wrap{
    width:280px;
    height:200px;
    margin:1400px;
    color:#444;
    background-color:#333;
    }
```

## 变量作用域

```less
    /* Less */
    @var: @a;
    @a: 100%;
    #wrap {
    width: @var;
    @a: 9%;
    }

    /* 生成的 CSS */
    #wrap {
    width: 9%;
    }
```

## 用变量去定义变量

```less
    /* Less */
    @fnord:  "I am fnord.";
    @var:    "fnord";
    #wrap::after{
    content: @@var; //将@var替换为其值 content:@fnord;
    }
    /* 生成的 CSS */
    #wrap::after{
    content: "I am fnord.";
    }
``` 

## 嵌套
* &: 代表的上一层选择器的名字

```less
    #header{
        &:after{
            content:"Less is more!";
        }
        .title{
            font-weight:bold;
        }
        &_content{//理解方式：直接把 & 替换成 #header
            margin:20px;
        }
    }
    /* 生成的 CSS */
    #header::after{
    content:"Less is more!";
    }
    #header .title{ //嵌套了
    font-weight:bold;
    }
    #header_content{//没有嵌套！
        margin:20px;
    }
```

## 媒体查询

```less
    #main{
        //something...

        @media screen{
            @media (max-width:768px){
            width:100px;
            }
        }
        @media tv {
        width:2000px;
        }
    }
    /* 生成的 CSS */
    @media screen and (maxwidth:768px){
    #main{
        width:100px; 
    }
    }
    @media tv{
    #main{
        width:2000px;
    }
}
```

