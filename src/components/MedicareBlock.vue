<template>
<div>
    <el-card shadow="always" class="box-card">
          <div class="text item">

              <h1>MEDICARE MADE EASY</h1>

              <el-image
            style="width: 100%;"
            :src="medicareUrl"></el-image>

            <p>
              <strong>We Know.</strong> Medicare can be Stressful. With so many plans available, it’s hard to find the right plan for you.
              </p>

<p>
Saving money is always tempting especially when you’re on a fixed income. However, picking the lowest cost plan isn’t always the best idea. Deductibles, co-pays, cost shares, and uncovered medical services may end up costing you more in the long run,.
</p>
<p>
 We'll save you the time of researching on your own, let us help.
</p>

<p>
We’re dedicated to making Medicare easy.
            </p>
            

          </div>
        </el-card>
        
        <scheduling-block/>
        
        </div>
</template>

<script>
import SchedulingBlock from '@/components/SchedulingBlock'

    export default {
        name: "MedicareBlock",
         components: {
          SchedulingBlock
        },
        data() {
            return {
                medicareUrl: require('@/assets/imgs/medicare.jpg'),
            }
        },
    }
</script>

<style scoped>

</style>