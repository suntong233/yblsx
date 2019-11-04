<template>
  <div>
    <h3>基于node express mongoose的crud</h3>
    <h4>如果无法正常使用，说明node接口被我停掉了</h4>
    <div class="table-container">
      <el-button
        style="margin-bottom: 10px"
        round
        type="primary"
        @click="showdialog = true"
        plain
      >添加</el-button>
      <el-table stripe border :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleUpDate(scope)" round>修改</el-button>
            <el-button @click="handleDel(scope)" size="mini" type="danger" round>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="inputval" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="日期" value="date"></el-option>
            <el-option label="姓名" value="name"></el-option>
            <el-option label="地址" value="address"></el-option>
          </el-select>
          <el-button @click="handleSearch" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <el-dialog title="添加" :visible.sync="showdialog" width="30%" center>
      <div class="dialog-container">
        <div class="dialog-item">
          姓名：
          <el-input v-model="nameval" placeholder="请输入姓名"></el-input>
        </div>
        <div class="dialog-item">
          地址：
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入地址"
            v-model="addressval"
          ></el-input>
        </div>
        <div class="dialog-item">
          日期：
          <el-date-picker
            style="width: 250px;margin-top:5px"
            v-model="dateVal"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleCreate">确 定</el-button>
      </span>
    </el-dialog>
    {{ showSearch }}
  </div>
</template>

<script>
export default {
  name: "crud",
  data() {
    return {
      select: "",
      inputval: "",
      showdialog: false,
      tableData: [],
      nameval: "",
      addressval: "",
      dateVal: "",
      updateid: "",
      showSearch: {}
    };
  },
  created() {
    this.axios.get("http://localhost:5500/api/personlist").then(res => {
      this.tableData = res.data;
    });
  },
  methods: {
    handleDel(scope) {
      this.axios
        .delete(`http://localhost:5500/api/personDel/${scope.row._id}`)
        .then(res => {
          if (res.data.msg) {
            this.renderInit();
          }
        });
    },
    handleSearch() {
      let type = this.select;
      let val = this.inputval.trim();
      if (val === "") {
        console.log("未输入");
      } else {
        switch (type) {
          case "name":
            this.searchApi("Name", val);
            break;
          case "date":
            this.searchApi("Date", val);
            break;
          case "address":
            this.searchApi("Address", val);
            break;
          default:
            break;
        }
      }
    },
    searchApi(type, val) {
      this.axios
        .get(`http://localhost:5500/api/searchBy${type}/${val}`)
        .then(res => {
            if(res.data.unfind){
                console.log('没有数据')
            }else{
                this.showSearch = res.data;
            }
            this.inputval = "";
        });
    },
    handleCancel() {
      this.nameval = "";
      this.addressval = "";
      this.dateVal = "";
      this.updateid = "";
      this.showdialog = false;
    },
    renderInit() {
      this.axios.get("http://localhost:5500/api/personlist").then(res => {
        this.tableData = res.data;
      });
    },
    addzero(n) {
      return n < 10 ? `0${n}` : n;
    },
    handleCreate() {
      if (
        this.nameval.trim() === "" ||
        this.addressval.trim() === "" ||
        !this.dateVal
      ) {
        console.log("输入信息不完整");
        this.showdialog = false;
      } else {
        let tempdate =
          this.updateid !== ""
            ? this.dateVal
            : `${this.dateVal.getFullYear()}-${this.addzero(
                this.dateVal.getMonth() + 1
              )}-${this.addzero(this.dateVal.getDate())}`;
        let result = {
          date: tempdate,
          name: this.nameval,
          address: this.addressval
        };
        this.nameval = "";
        this.addressval = "";
        this.dateVal = "";
        if (this.updateid !== "") {
          this.updateApi(result, this.updateid);
          this.updateid = "";
        } else {
          this.addApi(result);
        }
      }
    },
    handleUpDate(scope) {
      this.updateid = scope.row._id;
      this.nameval = scope.row.name;
      this.addressval = scope.row.address;
      this.dateVal = scope.row.date;
      this.showdialog = true;
    },
    updateApi(val, id) {
      this.axios
        .put(`http://localhost:5500/api/personUpdate/${id}`, val)
        .then(res => {
          if (res.data.success) {
            this.showdialog = false;
            this.renderInit();
          }
        });
    },
    addApi(val) {
      this.axios.post("http://localhost:5500/api/personAdd", val).then(() => {
        this.renderInit();
        this.showdialog = false;
      });
    }
  }
};
</script>

<style scoped>
.table-container {
  padding: 10px;
}
.el-select {
  width: 100px;
  background-color: rgb(216, 229, 238);
  color: rgb(138, 102, 55);
  font-size: 16px;
}
.el-input {
  width: 130px;
}
.input-with-select {
  width: 500px;
}
.dialog-container {
  display: flex;
  flex-direction: column;
}
.dialog-item {
  font-size: 18px;
  display: flex;
  white-space: nowrap;
  align-items: center;
  color: rgb(129, 194, 248);
  font-weight: 600;
  margin-bottom: 5px;
}
</style>