<template>
  <section>
    <section class="card">
      <h1 class="title">Who Do We Serve?</h1>
    </section>

    <section class="card flexColumn">
      <div>
        <!-- <img class="square floatRight" src="@/assets/imgs/heart-shield-icon.png" alt=""> -->
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
          <li>EAP's, Employee Benefits, and wellness programs</li>
          <li>Retirement fund integration</li>
        </ul>

      </div>

      <br>
      
       <img class="contain" src="@/assets/imgs/insurance.png" alt="">
    </section>
  </section>
</template>

<script>
    export default {
      name: "ServeBlock",
    }
</script>

<style scoped>
img.square {
  width:200px;
  margin:50px;
}

img.contain {
  width:50%;
  margin:0 auto;
}
</style>