<template>
  <div class="echarts-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="入门示例" name="first">
        <div ref="ecahrtbox1" class="ecahrtbox1"></div>
        <h3>该企业注册资本185000万元人民币(元)，属于科技推广和应用服务业。注册资金方面,在全国同行企业中，表现优秀。</h3>
        <div ref="ecahrtbox2" class="ecahrtbox1"></div>
        <h3>全国范围内,同业资金集中在5000万以上和1000- 5000万规模的企业中,共115315家,注册资本合计746345381.09万元，占比73.44%.</h3>
        <div ref="ecahrtbox3" class="ecahrtbox1"></div>
      </el-tab-pane>
      <el-tab-pane label="undo" name="second">undo</el-tab-pane>
      <el-tab-pane label="undo" name="third">undo</el-tab-pane>
      <el-tab-pane label="undo" name="fourth">undo</el-tab-pane>
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
  },
  methods: {}
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