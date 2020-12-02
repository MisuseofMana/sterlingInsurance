<template>
     <footer class="flexRow">
        <section class="flexColumnStart">
            <h3>Info</h3>
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

        <section class="flexColumnStart">
            <section class="flexRow">
                <a target="_blank" href="https://www.linkedin.com/company/sterlinginsgrp/">
                    <img class="linkedIn" src="@/assets/imgs/linkedin.png" alt="">
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/sterlinginsgrp/">
                    <img src="@/assets/imgs/facebook.png" alt="">
                </a>
            </section>
        </section>

        <section>
            <p>Site Updated 12/2/2020</p>
        </section>
    </footer>
</template>

<script>
    export default {
        name:'FooterComponent',
    }
</script>

<style scoped>
footer {
    background: var(--primary);
    padding:20px 0;
}

img {
    height:50px;
    margin:10px;
}

h1, h2, h3, h4, p {
    color:white;
}

a {
    color:white;
    text-decoration:none;
}
</style>