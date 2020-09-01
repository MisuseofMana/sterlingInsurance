<template>
     <el-header height="150px">

        <section>
          <h1>STERLING INSURANCE GROUP</h1>
          <p>The insurance help you've been looking for.</p>
        </section>

        <el-menu
          :default-active="index"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#fff"
          text-color="#000"
          active-text-color="#0E70B6">
          <el-menu-item index="1">Home</el-menu-item>
          <el-menu-item index="2">Scheduling</el-menu-item>
          <el-menu-item index="3">Who We Serve</el-menu-item>
          <el-menu-item index="4">Employee Benefits</el-menu-item>
          <el-menu-item index="5">Medicare</el-menu-item>
        </el-menu>
      </el-header>
</template>

<script>
    export default {
        name:"HeaderBlock",
        props: ['index'],
        methods: {
            handleSelect(key) {
                this.$emit('switch-page', key)
            }
        }
    }
</script>

<style scoped>
 .el-header {
    background-color: #fff;
    color: #333;
    text-align: center;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
  }

  .el-header h1 {
    color:black;
    font-size:25px;
  }

    .el-menu-item {
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .el-header p {
    color:black;
    font-size:15px;
    line-height:0px;
  }
</style>