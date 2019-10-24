<template>
  <div class="echarts-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="入门示例" name="first">
        <div ref="ecahrtbox1" class="ecahrtbox1"></div>
        <h3>该企业注册资本185000万元人民币(元)，属于科技推广和应用服务业。注册资金方面,在全国同行企业中，表现优秀。</h3>
        <div ref="ecahrtbox2" class="ecahrtbox1"></div>
        <h3>全国范围内,同业资金集中在5000万以上和1000- 5000万规模的企业中,共115315家,注册资本合计746345381.09万元，占比73.44%.</h3>
        <div ref="ecahrtbox3" class="ecahrtbox1"></div>
        <div ref="ecahrtbox4" class="ecahrtbox1"></div>
        <div ref="ecahrtbox5" class="ecahrtbox1"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "echarts",
  data() {
    return {
      activeName: "first"
    };
  },
  mounted() {
    const myChart = window.echarts.init(this.$refs.ecahrtbox1);
    const myChart2 = window.echarts.init(this.$refs.ecahrtbox2);
    const myChart3 = window.echarts.init(this.$refs.ecahrtbox3);
    const myChart4 = window.echarts.init(this.$refs.ecahrtbox4);
    const myChart5 = window.echarts.init(this.$refs.ecahrtbox5);
    myChart.setOption({
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
    myChart2.setOption({
      title: {
        text: "仪表盘"
      },
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: "业务指标",
          type: "gauge",
          data: [
            {
              value: 80
            }
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: [
                [1 / 3, "rgb(248,90,90)"],
                [2 / 3, "rgb(252,202,56)"],
                [1, "rgb(128,236,70)"]
              ],
              width: 20
            }
          },
          splitLine: {
            show: false
          },
          pointer: {
            length: "100%",
            width: 3
          },
          itemStyle: {
            color: "rgb(102,102,102)"
          },
          startAngle: [180],
          endAngle: [0],
          detail: {
            // 仪表盘详情，用于显示数据。
            show: true, // 是否显示详情,默认 true。
            offsetCenter: [0, "30%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
            color: "black", // 文字的颜色,默认 auto。
            fontSize: 30, // 文字的字体大小,默认 15。
            formatter: "全国范围内" // 格式化函数或者字符串
          },
          axisTick: {
            length: -10,
            splitNumber: 20,
            lineStyle: {
              color: "#ccc"
            }
          },
          axisLabel: {
            formatter: function(e) {
              switch (e + "") {
                case "0":
                  return "偏低";

                case "50":
                  return "中等";

                case "100":
                  return "优秀";
              }
            },
            textStyle: {
              fontSize: 18
            },
            distance: -90
          }
        }
      ]
    });
    myChart3.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: "center",
        data: [
          {
            name: "0-10万"
          },
          {
            name: "10-100万"
          },
          {
            name: "100-1000万"
          },
          {
            name: "1000-5000万"
          },
          {
            name: "5000万以上"
          }
        ]
      },
      series: [
        {
          type: "pie",
          radius: "65%",
          center: ["50%", "50%"],
          selectedMode: "single",
          data: [
            {
              value: 80.7205,
              name: "0-10万",
              label: {
                formatter: "0.07%"
              },
              itemStyle: {
                color: "rgb(240,155,98)"
              }
            },
            {
              value: 3551.702,
              name: "10-100万",
              label: {
                formatter: "3.08%"
              },
              itemStyle: {
                color: "rgb(132,219,86)"
              }
            },
            {
              value: 26996.2415,
              name: "100-1000万",
              label: {
                formatter: "23.41%"
              },
              itemStyle: {
                color: "rgb(250,212,100)"
              }
            },
            {
              value: 27433.4385,
              name: "1000-5000万",
              label: {
                formatter: "23.79%"
              },
              itemStyle: {
                color: "rgb(77,216,229)"
              }
            },
            {
              value: 57253.8975,
              name: "5000万以上",
              label: {
                formatter: "49.95%"
              },
              itemStyle: {
                color: "rgb(103,174,245)"
              }
            }
          ],
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: "{b} : {c} ({d}%)"
              },
              labelLine: { show: true }
            }
          }
        }
      ]
    });
    myChart4.setOption({
      backgroundColor: "#FFF",

      title: {
        text: "折线图",
        subtext: "模拟数据",
        x: "center"
      },

      legend: {
        // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
        orient: "horizontal",
        // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
        x: "left",
        // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
        y: "top",
        data: ["预期", "实际", "假设"]
      },

      //  图表距边框的距离,可选值：'百分比'¦ {number}（单位px）
      grid: {
        top: "16%", // 等价于 y: '16%'
        left: "3%",
        right: "8%",
        bottom: "3%",
        containLabel: true
      },

      // 提示框
      tooltip: {
        trigger: "axis"
      },

      //工具框，可以选择
      toolbox: {
        feature: {
          saveAsImage: {} //下载工具
        }
      },

      xAxis: {
        name: "",
        type: "category",
        axisLine: {
          lineStyle: {
            // 设置x轴颜色
            color: "#333"
          }
        },
        // 设置X轴数据旋转倾斜
        axisLabel: {
          rotate: 0, // 旋转角度
          interval: 0 //设置X轴数据间隔几个显示一个，为0表示都显示
        },
        axisTick: {
          show: false
        },
        // boundaryGap值为false的时候，折线第一个点在y轴上
        boundaryGap: false,
        data: [
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019"
        ]
      },

      yAxis: {
        show: false
      },

      series: [
        {
          name: "假设",
          data: [3.8, 4.1, 4.0, 5.2, 9.7, 11.3, 19.6, 25.6, 8.3, 2.4],
          type: "line",
          // 设置折线上圆点大小
          symbolSize: 10,
          // 设置拐点为实心圆
          symbol: "circle",
          itemStyle: {
            normal: {
              // 拐点上显示数值
              label: {
                show: true,
                formatter: function(params) {
                  if (params.value) {
                    return params.value + "W";
                  } else {
                    return "";
                  }
                }
              },

              lineStyle: {
                // 使用rgba设置折线透明度为0，可以视觉上隐藏折线
                color: "rgb(103,174,245)"
              }
            }
          }
        }
      ],

      color: ["rgb(103,174,245)", "rgb(103,174,245)", "rgb(103,174,245)"]
    });
    myChart5.setOption({
      tooltip: {
        formatter: function(params) {
          return (
            params.seriesName + "<br />" + params.name + "：" + params.value
          );
        } //数据格式化
      },
      visualMap: {
        min: 0,
        max: 1500,
        left: "left",
        top: "bottom",
        text: ["高", "低"], //取值范围的文字
        inRange: {
          color: ["#e0ffff", "#006edd"] //取值范围的颜色
        },
        show: true //图注
      },
      geo: {
        map: "china",
        roam: false, //不开启缩放和平移
        zoom: 1.23, //视角缩放比例
        label: {
          normal: {
            show: true,
            fontSize: "10",
            color: "rgba(0,0,0,0.7)"
          }
        },
        itemStyle: {
          normal: {
            borderColor: "rgba(0, 0, 0, 0.2)"
          },
          emphasis: {
            areaColor: "#F3B329", //鼠标选择区域颜色
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      },
      series: [
        {
          name: "信息量",
          type: "map",
          geoIndex: 0,
          data: [
            { name: "南海诸岛", value: 0 },
            { name: "北京", value: this.randomValue() },
            { name: "天津", value: this.randomValue() },
            { name: "上海", value: this.randomValue() },
            { name: "重庆", value: this.randomValue() },
            { name: "河北", value: this.randomValue() },
            { name: "河南", value: this.randomValue() },
            { name: "云南", value: this.randomValue() },
            { name: "辽宁", value: this.randomValue() },
            { name: "黑龙江", value: this.randomValue() },
            { name: "湖南", value: this.randomValue() },
            { name: "安徽", value: this.randomValue() },
            { name: "山东", value: this.randomValue() },
            { name: "新疆", value: this.randomValue() },
            { name: "江苏", value: this.randomValue() },
            { name: "浙江", value: this.randomValue() },
            { name: "江西", value: this.randomValue() },
            { name: "湖北", value: this.randomValue() },
            { name: "广西", value: this.randomValue() },
            { name: "甘肃", value: this.randomValue() },
            { name: "山西", value: this.randomValue() },
            { name: "内蒙古", value: this.randomValue() },
            { name: "陕西", value: this.randomValue() },
            { name: "吉林", value: this.randomValue() },
            { name: "福建", value: this.randomValue() },
            { name: "贵州", value: this.randomValue() },
            { name: "广东", value: this.randomValue() },
            { name: "青海", value: this.randomValue() },
            { name: "西藏", value: this.randomValue() },
            { name: "四川", value: this.randomValue() },
            { name: "宁夏", value: this.randomValue() },
            { name: "海南", value: this.randomValue() },
            { name: "台湾", value: this.randomValue() },
            { name: "香港", value: this.randomValue() },
            { name: "澳门", value: this.randomValue() }
          ]
        }
      ]
    });
  },
  methods: {
    randomValue() {
      return Math.round(Math.random() * 1000);
    }
  }
};
</script>

<style scoped>
.echarts-container {
  width: 100%;
  margin-bottom: 50px;
  padding: 5px;
}
.ecahrtbox1 {
  margin: 20px 0;
  width: 100%;
  height: 500px;
}
</style>