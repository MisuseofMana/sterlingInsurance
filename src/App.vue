<template>
  <div id="app">
    <el-container>

      <!-- HEADER -->
      <header-block :index="activeIndex" key="home" @switch-page="changePage($event)"/>

      <!-- MAIN -->
      <el-main>
        <transition name="fade" mode="out-in">

        <!-- INTRO -->
        <div key="home" v-if="activeIndex==='1'">
          <home-block />
          <scheduling-block/>
        </div>
        
        <!-- SCHEDULE WITH US -->
        <div key="scheduling" v-else-if="activeIndex==='2'">
          <scheduling-block/>
          <team-block/>
        </div>

        <!-- WHO WE SERVE -->
        <serve-block key="serve" v-else-if="activeIndex==='3'"/>

        <!-- EMPLOYEE BENEFITS -->
        <employee-block key="employee" v-else-if="activeIndex==='4'"/>
        
        <!-- MEDICARE -->
        <medicare-block key="medicare" v-else-if="activeIndex==='5'"/>

        </transition>
      </el-main>

    <el-footer height="170px">
      <section>
      <h1>Find Us</h1>
      <p>402 West Main Street, Greenwood, IN 46142</p>
      <p>
        <i class="el-icon-phone-outline">
          (317)885-9105
        </i>
        </p>
      <p>
        <i class="el-icon-message">
        <a href="mailto:tom@sterlinginsgrp.com"> tom@sterlinginsgrp.com</a>
        </i>
      </p>
      </section>

      <section class="social">
        <h1>Social Media</h1>
        <a target="_blank" href="https://www.linkedin.com/company/sterlinginsgrp/">
          <img class="linkedIn" src="@/assets/imgs/linkedin.png" alt="">
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/sterlinginsgrp/">
          <img src="@/assets/imgs/facebook.png" alt="">
        </a>
      </section>
      <section>
        <p>Site updated 9/1/2020</p>
      </section>
    </el-footer>
      
    </el-container>
  </div>
</template>

<script>
import "@/assets/styles/global.css"

import HeaderBlock from "./components/HeaderBlock";
import HomeBlock from "./components/HomeBlock";
import SchedulingBlock from "./components/SchedulingBlock";
import TeamBlock from "./components/TeamBlock";
import ServeBlock from "./components/ServeBlock";
import EmployeeBlock from "./components/EmployeeBlock";
import MedicareBlock from "./components/MedicareBlock";

export default {
  name: 'app',
  components: {
    HeaderBlock,
    HomeBlock,
    SchedulingBlock,
    TeamBlock,
    ServeBlock,
    EmployeeBlock,
    MedicareBlock,
  },
  data() {
    return {
      activeIndex: '1',
      
      
    }
  },
  methods: {
    changePage(page) {
      this.activeIndex = page; 
    }
  },
}
</script>

<style>
    body > .el-container {
      margin-bottom: 40px;
      font-family: Arial, Helvetica, sans-serif;
    }
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: left;
    line-height: 30px;
  }
  
    .el-footer {
    background-color: #0E70B6;
    font-family:Arial, Helvetica, sans-serif;
    color: #fff;
    text-align: center;
    display:flex;
    justify-content:space-evenly;
    align-items:top;
  }

  a {
    color:white;
    text-decoration:none;
  }

  a:hover {
    color:#3eafff;
  }

  .social img {
    width:50px;
  }

  .social a {
    margin:0 10px;
  }

  .linkedIn {
    filter: invert(1);
  }
</style>
