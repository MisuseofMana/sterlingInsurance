<template>
    <el-card shadow="always" class="box-card">
          <div class="text item">

              <h1>WHO WE SERVE</h1>

              <el-image
            style="width: 100%;"
            :src="familyUrl"></el-image>

            <p>
              We help community health care providers, non-profits, and manufacturers make health care easier to access for their employees.
            </p>
            
            <p>
              We reduce the complexity of attracting, hiring, and retaining employees by consulting on the complete employee journey.
            </p>

            <p>
              From pre-hire and onboarding, to designing an employee benefit plan and handling retirement or employee departure.
            </p>

            <p>
              We consult on a variety of technologies to reduce redundancies, eliminate manual processes, and improve overall efficiency throughout the employee journey. This can include but is not limited to:
            </p>

            <ul>
              <li>Applicant tracking programs</li>
              <li>Payroll and benefit onboarding technology and administration</li>
              <li>Benefits compliance</li>
              <li>EAPS, Employee Benefits, and wellness programs</li>
              <li>Retirement fund integration</li>
            </ul>

          </div>
        </el-card>
</template>

<script>
    export default {
        name: "ServeBlock",
        data() {
            return {
                familyUrl: require('@/assets/imgs/family.jpg'),
            }
        },
    }
</script>

<style scoped>

</style>