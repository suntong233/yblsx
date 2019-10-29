<template>
  <div class="deepcopy-container">
      <h2>深拷贝</h2>
      <div>
          const list = {{ list }}
      </div>
        <div class="deepcopy">
            deepCopy(pdata, res = []){    <br>
            <span></span>for(let i in pdata){    <br>
            <span style="width:40px"></span>if(pdata[i] instanceof Object){   <br>
            <span style="width:60px"></span>res[i] = (pdata[i].constructor === Array) ? [] : {};  <br>
            <span style="width:60px"></span>this.deepCopy(pdata[i],res[i])   <br>
            <span style="width:40px"></span>}else{   <br>
            <span style="width:60px"></span>res[i] = pdata[i]   <br>
            <span style="width:40px"></span>}  <br>
            <span></span>}  <br>
            <span></span>return res   <br>
            }   <br>
        </div>
      <div>
          -> res<br>
          {{ deepCopy(list) }}
      </div>
  </div>
</template>

<script>
export default {
    name: 'deepcopy',
    data () {
        return {
            list: [
                {
                    name: "小米"
                },
                {
                    ark: [1,2,3]
                },
                {
                    personData: [
                        {
                            type: 'a'
                        },
                        {
                            type: 'b',
                            children: ['asd','dasd']
                        }
                    ]
                },
            ]
        }
    },
    methods: {
        deepCopy(pdata, res = []){
            for(let i in pdata){
                if(pdata[i] instanceof Object){
                    res[i] = (pdata[i].constructor === Array) ? [] : {};
                    this.deepCopy(pdata[i],res[i])
                }else{
                    res[i] = pdata[i]
                }
            }
            return res
        }
    }
}
</script>

<style scoped>
    .deepcopy> span{
        display: inline-block;
        width: 20px;
    }
    .deepcopy-container{
        color: rgb(167, 204, 143);
        background-color: rgb(19, 31, 54);
        padding: 10px;
        border-radius: 8px;
    }
</style>