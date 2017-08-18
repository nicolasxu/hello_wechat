<template>
  <div class="case-form">
    <h1>case form</h1>
      <div>
        <yd-button size="large" type="primary">primary</yd-button>
        <yd-button size="large" type="danger">danger</yd-button>
        <yd-button size="large" type="warning">warning</yd-button>
        <yd-button size="large" type="disabled" disabled>disabled</yd-button>
        <yd-button size="large" type="hollow">hollow</yd-button>
        <yd-button size="large" bgcolor="#000" color="#FFF">Custom Color</yd-button>
    </div>
  
  </div>
</template>

<script>

  import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.px/tabbar';
  import {Button, ButtonGroup} from 'vue-ydui/dist/lib.px/button';
  export default {
    name: 'caseForm',
    components: { ydButton: Button},
    data() {
      return {  
        msg: 'nicolas xu'
      }
    }
  }

</script>

<style scoped lang="sass">
  .case-form {

  }
</style>