<template>
    <div key="schedule">
        <el-card shadow="always" class="box-card" >
          <div class="text item schedule">
            <h1>SCHEDULE WITH US</h1>
            
            <el-image
              style="width: 10%;"
              :src="heartUrl"></el-image>

            <p>Ready to get started? Click below to schedule a consultation with one of our outstanding team members.</p>

            <section class="scheduleButtons">
              <el-button type="primary" round icon="el-icon-user-solid">
                  <a target="_blank" href="https://calendly.com/sterling-group-health/group-health-care-consultation?month=2020-09">
                    IN PERSON MEETING
                  </a>
              </el-button>

              <el-button type="primary" round icon='el-icon-video-camera'>
                <a target="_blank" href="https://calendly.com/sterling-group-health/group-health-care-consultation-zoom?month=2020-09">
                ZOOM MEETING
                </a>
              </el-button>
            </section>
            

          </div>
        </el-card>
        </div>
</template>

<script>



    export default {
        data() {
            return {
                heartUrl: require('@/assets/imgs/heartShield.png'),
            }
        },
    }
</script>

<style scoped>
  .scheduleButtons {
    margin:10px 0;
  }

  .schedule {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

a {
    text-decoration: none;
}

  a:visited {
      color:white;
  }
</style>