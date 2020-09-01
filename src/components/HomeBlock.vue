<template>
    <el-card shadow="always" class="box-card flex">
        <div class="text item flex">
            <el-image
            style="width: 200px;"
            :src="url"></el-image>
        
            <h1>YOUR FRIENDLY NEIGHBORHOOD INSURANCE GROUP</h1>

            <p>
                Sterling Insurance Group is a Greenwood, Indiana insurance boutique, providing health insurance to the Indianapolis, and Central Indiana community for over 20 years.
            </p>
            
            <p>
                As a family owned, boutique employee benefits agency, Sterling Insurance Group is carrier and technology agnostic, and therefore we are able to customize an unbiased employee benefit strategy to meet the objectives of your unique organization.
            </p>

            <p>
                We’re able to work with your needs, regardless of insurance carrier, payroll provider, or enrollment platform.
            </p>
        </div>
    </el-card>
</template>

<script>
    export default {
        name:"HomeBlock",
        data() {
            return {
                url: require('@/assets/imgs/logoonly.png'),            
            }
        },
    }
</script>

<style scoped>
.flex {
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
}
</style>