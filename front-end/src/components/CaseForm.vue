<template>
  <div class="case-form">
   
    <div class="form-title">
      <span>Consultation Request Form</span>
    </div>
    <yd-cell-group>
        <yd-cell-item>
            <span slot="left">邮箱：</span>
            <yd-input slot="right" v-model="input3" :debug="true" regex="email" placeholder="请输入邮箱地址"></yd-input>
        </yd-cell-item>

        <yd-cell-item>
            <span slot="left">手机号：</span>
            <yd-input slot="right" v-model="input4" regex="mobile" placeholder="请输入手机号码"></yd-input>
        </yd-cell-item>

        <yd-cell-item>
            <span slot="left">银行卡号：</span>
            <yd-input slot="right" v-model="input5" regex="bankcard" placeholder="请输入银行卡号"></yd-input>
        </yd-cell-item>
 
         <yd-cell-item arrow type="label">
            <span slot="left">性别：</span>
            <select slot="right">
                <option value="">请选择性别</option>
                <option value="1">男</option>
                <option value="2">女</option>
                <option value="3">未知</option>
            </select>
        </yd-cell-item>
         <yd-cell-item arrow type="label">
            <span slot="left">疾病种类：</span>
            <select slot="right">
                <option value="">癌症</option>
                <option value="1">心血管疾病</option>
                <option value="2">儿科</option>
                <option value="3">未知</option>
            </select>
        </yd-cell-item>        
    </yd-cell-group>

    <div>
      <yd-button size="large" type="primary">Submit</yd-button>
    </div>
    
    <yd-tabbar class="footer-nav">
        <yd-tabbar-item title="首页" link="#">
            <yd-icon name="home-outline" slot="icon" size="18px"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="购物车" link="#" dot>
            <yd-icon name="shopcart-outline" slot="icon" size="18px"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="#" active>
            <yd-icon name="ucenter" slot="icon" size="18px"></yd-icon>
            <yd-badge slot="badge" type="danger">2</yd-badge>
        </yd-tabbar-item>
    </yd-tabbar>  
  </div>
</template>

<script>

  
  
  import {Button, ButtonGroup} from 'vue-ydui/dist/lib.px/button'
  import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.px/tabbar'
  import {Icons} from 'vue-ydui/dist/lib.rem/icons'
  import {Badge} from 'vue-ydui/dist/lib.rem/badge'
  import {Input} from 'vue-ydui/dist/lib.px/input'
  import {CellGroup, CellItem} from 'vue-ydui/dist/lib.px/cell'
  import {ActionSheet} from 'vue-ydui/dist/lib.px/actionsheet'

  export default {
    name: 'caseForm',
    components: { 
      ydButton: Button, 
      ydTabbarItem: TabBarItem, 
      ydTabbar: TabBar,
      ydIcon: Icons,
      ydBadge: Badge,
      ydInput: Input,
      ydCellGroup: CellGroup,
      ydCellItem: CellItem,
      ydActionsheet: ActionSheet
    },
    data() {
      return {  
        msg: 'nicolas xu',
        input3: 'ydui@qq.com',
        input4: '',
        input5: '',
        show2: false,
        myItems2: [
          {
            label: '癌症相关',
            method: () => {
                //this.$dialog.toast({mes: 'Say: 我是不会关闭的！'});
            },
            stay: true /* 不关闭 */
          },
          {
            label: '心血管疾病',
            method: () => {
                //this.$dialog.toast({mes: 'Say: 我关闭啦啦啦！'});
            }
          },
          {label: '儿科'},
          {label: '性病'}
        ]
      }
    },
    created() {
      console.log(Button.name)
    }
  }

</script>

<style scoped lang="sass">
  .case-form {
    .form-title {
      background-color: white;
      font-size: 20px;
      // text-decoration: underline;
      padding: 20px;
      border-bottom: 1px solid grey;
    }
    .footer-nav {
      position: fixed;
      bottom: 0;
    }
  }
</style>