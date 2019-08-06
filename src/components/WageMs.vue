<template>
  <div class="body">
    <div style="width: 1080px;height:700px;float: left; ">
      <el-table :data="tableData" border style="width: 100%" max-height="420">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column fixed prop="date" label="姓名" width="150">
        </el-table-column>
        <el-table-column prop="name" label="工号" width="140">
        </el-table-column>
        <el-table-column prop="province" label="电子邮件" width="180">
        </el-table-column>
        <el-table-column prop="city" label="电话号码" width="120">
        </el-table-column>
        <el-table-column prop="address" label="所属部门" width="100">
        </el-table-column>
        <el-table-column label="所属部门" width="200">
        <el-button style="height:16px; font-size:15px; color: #00F7DE; line-height:1px;">人事部工资账套</el-button>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-delete" color="red"></el-button>
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
        visible: false,
        tableData: [{
            date: '江南一点雨',
            name: '00000001',
            province: 'laowang@qq.com',
            city: '18565558897',
            address: '财务部',
            zip: 200333
          },
          {
            date: '江南一点雨',
            name: '00000002',
            province: 'laowang@qq.com',
            city: '18565558897',
            address: '财务部',
            zip: 200333
          },
          {
            date: '江南一点雨',
            name: '00000003',
            province: 'laowang@qq.com',
            city: '18565558897',
            address: '财务部',
            zip: 200333
          },
          {
            date: '江南一点雨',
            name: '00000004',
            province: 'laowang@qq.com',
            city: '18565558897',
            address: '财务部',
            zip: 200333
          },
          {
            date: '江南一点雨',
            name: '00000005',
            province: 'laowang@qq.com',
            city: '18565558897',
            address: '财务部',
            zip: 200333
          },
          {
            date: '江南一点雨',
            name: '00000006',
            province: 'laowang@qq.com',
            city: '18565558897',
            address: '财务部',
            zip: 200333
          },
          {
            date: '江南一点雨',
            name: '00000007',
            province: 'laowang@qq.com',
            city: '18565558897',
            address: '财务部',
            zip: 200333
          },
          {
            date: '江南一点雨',
            name: '00000008',
            province: 'laowang@qq.com',
            city: '18565558897',
            address: '财务部',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '00000009',
            province: 'laowang@qq.com',
            city: '18565558897',
            address: '财务部',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '00000010',
            province: 'laowang@qq.com',
            city: '18565558897',
            address: '财务部',
            zip: 200333
          }, {
            date: '2016-05-03',
            name: '00000011',
            province: 'laowang@qq.com',
            city: '18565558897',
            address: '财务部',
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
