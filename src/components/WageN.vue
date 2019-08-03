<template>
  <div class="body">
    <div class="top1">
      <el-button type="primary" icon="el-icon-circle-plus-outline" >添加账套</el-button>
      <el-button type="primary" palain icon="el-icon-refresh" size="small" style="float:right;background: #3FDD86; border: 0;"></el-button>
    </div>
    <div class="down">
      <el-table :data="tableData" style="width: 100%" max-height="420" :row-class-name="tableRowClassName" >
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column fixed prop="date" label="账套名称" width="104">
        </el-table-column>
        <el-table-column prop="name" label="基本工资" width="80">
        </el-table-column>
        <el-table-column prop="province" label="交通补助" width="80">
        </el-table-column>
        <el-table-column prop="city" label="午餐补助" width="80">
        </el-table-column>
        <el-table-column prop="address"  label="养老金" width="150">
          <el-table-column prop="address" label="比率" width="75">
          </el-table-column>
          <el-table-column prop="address" label="基数" width="75">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="address"  label="医疗保险" width="150">
          <el-table-column prop="address" label="比率" width="75">
          </el-table-column>
          <el-table-column prop="address" label="基数" width="75">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="address"  label="公积金" width="150">
          <el-table-column prop="address" label="比率" width="75">
          </el-table-column>
          <el-table-column prop="address" label="基数" width="75">
          </el-table-column>
        </el-table-column>
         <el-table-column   label="操作" width="150">
          <el-table-column prop="btn1" label="编辑" width="75">
             <el-button type="primary" plain size="small" >编辑</el-button>
          </el-table-column>
          <el-table-column prop="btn2" label="删除" width="75">
             <el-button type="primary" size="small" >删除</el-button>
          </el-table-column>
        </el-table-column>

      </el-table>
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
            date: '市场部工资账套',
            name: '9000',
            province: '500',
            city: '800',
            address: '4000',
            zip: 200333
          },
          {
            date: '市场部工资账套',
            name: '9000',
            province: '500',
            city: '400',
            address: '4000',
            zip: 200333
          },
          {
            date: '市场部工资账套',
            name: '9000',
            province: '500',
            city: '500',
            address: '4000',
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
      },
      tableRowClassName({
        row,
        rowIndex
      }) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    }
  }
</script>

<style scoped>
  .body {
    width: 1000px;
    float: left;
    margin: 20px 0 0 20px;
  }

  .top1 {
    width: 1000px;
    height: 50px;
    float: left;
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

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
