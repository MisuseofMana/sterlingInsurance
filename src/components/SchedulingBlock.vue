<template>
  <section>
    <section class="card">
        <h1>Schedule a Consultation</h1>
    </section>

    <section class="card flexRow">
      <section class="leftImage">
        <img src="@/assets/imgs/schedule.png" alt="">
      </section>

      <section>
        <p>Ready to get started? Click below to schedule a consultation with one of our outstanding team members.</p>

        <section class="flexRow">
          <a href=" https://calendly.com/sterling-group-health/group-health-care-consultation-zoom" target="_blank"><button>Schedule an In Person Consultation</button></a>
          <a href=" https://calendly.com/sterling-group-health/group-health-care-consultation-zoom" target="_blank"><button>Schedule an Online Zoom Consultation</button></a>
        </section>
      </section>
        
    </section>
  </section>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  a button {
    background:var(--primary);
    border:none;
    border-radius:10px;
    padding:15px;
    margin:10px;
    font-size:1vw;
    color:white;
  }

  a button:hover {
    cursor:pointer;
    background:var(--primaryHover)
  }

  .leftImage img {
    height:500px;
  }
</style>