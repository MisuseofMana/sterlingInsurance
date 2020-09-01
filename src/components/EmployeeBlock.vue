<template>
    <div>
      <el-card shadow="always"  key="benefits" class="box-card">
        <div class="text item">
            
          <h1>EMPLOYEE BENEFITS</h1>

            <el-image
            style="width: 100%;"
            :src="employeeUrl"></el-image>

          <p>Finding the right employee insurance can feel like an stalemate game of chess.</p>

          <p>
            Now more than ever, key employees are scrutinizing employee benefit programs and prioritizing organizations that are forward thinking, with rich benefit plans and perks at the top of their lists.
          </p>

          <p>
          A recent survey by the American Institute of Certified Public Accountants concluded that 80% of those surveyed would choose a job with benefits, even if an identical job was offered with a 30% greater salary with no benefits. 
          </p>

          <p>
          The job market is oversaturated, and finding the right employees can make or break your company.
          </p>

          <p>
          We can help design your unique benefit plan, we can help you attract loyal, higher quality employees.
          </p>
          
          <p>
          Let us help you design a plan that puts you at the top of the list!
          </p>
          
        </div>
      </el-card>

      <scheduling-block/>
    </div>
</template>

<script>

import SchedulingBlock from '@/components/SchedulingBlock'

    export default {
        name:'EmployeeBlock',
        components: {
          SchedulingBlock
        },
        data() {
          return {
            employeeUrl: require('@/assets/imgs/employee.jpg')
          }
        },
    }
</script>

<style scoped>
/* Default Styles */


/* Mobile Portrait */
@media (min-width: 667px) {

}

/* Tablets */
@media (min-width: 768px) {

}
</style>