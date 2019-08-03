<template>
  <div class="body">
    <div style="width: 100%;height: 50px;float: left;">
      <el-row class="block-col-2">
        <el-col>
          <el-input placeholder="通过员工名搜索员工,记得回车哦" prefix-icon="el-icon-search" v-model="input2" style="width: 260px;height: 10px;margin: 5px 5px;">
          </el-input>
          <el-button type="primary" icon="el-icon-search" v-on:click="show">搜索</el-button>
          <el-dropdown :hide-on-click="false" trigger="click">
            <el-button type="primary" icon="el-icon-arrow-down" v-on:click="show">高级搜索</el-button>
            <el-dropdown-menu slot="dropdown" style="width: 1100px;float: left;margin-left: 236px;">
              <el-dropdown-item>
                <span>
                  政治面貌：
                  <select style="width: 120px;height: 30px; border:#A0A0A0 solid 1px; border-radius: 3px;">
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                  </select>
                </span>
                <span>
                  民族：
                  <select style="width: 120px;height: 30px; border:#A0A0A0 solid 1px; border-radius: 3px;">
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                  </select>
                </span>
                <span>
                  职位：
                  <select style="width: 120px;height: 30px; border:#A0A0A0 solid 1px; border-radius: 3px;">
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                  </select>
                </span>
                <span>
                  职称：
                  <select style="width: 120px;height: 30px; border:#A0A0A0 solid 1px; border-radius: 3px;">
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                  </select>
                </span>
                <span style="margin-left: 10px;">
                  聘用形式：
                  <el-radio v-model="radio" label="1">劳动合同</el-radio>
                  <el-radio v-model="radio" label="2">劳务合同</el-radio>
                </span>
              </el-dropdown-item>
              <el-dropdown-item>
                <span>
                  所属部门：
                  <select style="width: 120px;height: 30px; border:#A0A0A0 solid 1px; border-radius: 3px;">
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                    <option>政治面貌</option>
                  </select>
                </span>
                <span class="block">
                  <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                  </el-date-picker>
                </span>
                <span style="float: right;">
                  <el-button type="primary">取消</el-button>
                  <el-button type="primary" icon="el-icon-search" v-on:click="show">搜索</el-button>
                </span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span style="float: right;">
            <el-button type="primary">导入</el-button>
            <el-button type="primary">导出</el-button>
            <el-button type="primary">添加</el-button>
          </span>
        </el-col>
      </el-row>

    </div>
    <div style="width: 1080px;height:700px;float: left;">
      <el-table :data="tableData" style="width: 100%" max-height="420">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column fixed prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="300">
        </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="240">
          <template slot-scope="scope">
            <input type="button" value="编辑" style="background: #C0C0C0; color: #000000;border: 0; border-radius: 3px;" />
            <input type="button" value="查看高级资料" style="background: #0066ff; color: #FFFFFF;border: 0; border-radius: 3px;" />
            <input type="button" value="删除" style="background: #ff3333; color: #FFFFFF; border: 0; border-radius: 3px;" />
          </template>
        </el-table-column>
      </el-table>
      <div style="width: 1100px;height: 60px;float: left;margin: 5px 0 0 0;">
        <div style="float: left;">
        <el-button type="danger" disabled>批量删除</el-button>
        </div>
        <div style="float: right;">
        <el-pagination background layout="prev, pager, next" :total="500">
        </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        radio: '1',
        value1: '',
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
          }
        ]
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleClick(row) {
        console.log(row);
      }
    }
  }
</script>

<style scoped>
  .body {
    width: 1100px;
    float: left;
    margin: 20px 0 0 20px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
