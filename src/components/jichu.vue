<template>
  <div>
  <el-tabs v-model="activeName" type="card" >
    <el-tab-pane label="用户管理" name="first">
      <el-input style="width: 540px;" placeholder="输入部门名称或搜索部门..." prefix-icon="el-icon-search" v-model="input2">
      </el-input>
       <el-tree
          :data="data"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent">
        </el-tree>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
      <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
        </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    <el-tab-pane label="权限组" name="five">权限组</el-tab-pane>
  </el-tabs>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<script>
  let id = 1000;

  export default {
    data() {
      const data = [{
        id: 1,
        label: '股东会',
        children: [{
          id: 4,
          label: '董事会',
          children: [{
            id: 9,
            label: '总办',
            children:[{
              id:5,
              label:'财务部',
            },
            {
              id:5,
              label:'市场部',
              children:[{
                id:6,
                label:'华北市场部',
                children:[{
                  id:7,
                  label:'石家庄市场部',
                }]
              },
              {
                id:6,
                label:'华南市场部',
              },
              {
                id:6,
                label:'西北市场部',
                children:[{
                  id:7,
                  label:'西安市场部',
                  children:[{
                    id:8,
                    label:'莲花区市场',
                  }]
                }]
              }
              ]
            },
            {
              id:5,
              label:'技术部',
            },
            {
              id:5,
              label:'运维部',
            }
            ]
          }]
        }]
      }];
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      return {
        data: JSON.parse(JSON.stringify(data)),
        data: JSON.parse(JSON.stringify(data))
      }
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
        <span class="custom-tree-node">
            <span> {node.label} </span>
            <span>
              <el-button size="mini"  type="text" style="height:16px;width:60px; border:0;background:#006699; line-height:1px;color:#ffffff;" on-click={ () => this.append(data) }>添加部门</el-button>
              <el-button size="mini" type="text" style="height:16px;width:60px; border:0;background:#ff6666; line-height:1px;color:#ffffff;" on-click={ () => this.remove(node, data) }>删除部门</el-button>
            </span>
          </span>
          );
      }
    }
  };
</script>
<style>
  .custom-tree-node {
    float: left;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    text-align: center;
    padding-right: 18px;
  }
</style>
