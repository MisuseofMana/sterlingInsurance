<template>
  <header class="flexRow">
    <section class="flexColumn">
      <img src="@/assets/imgs/sterling-insurance-logo-no-text.png" alt="Sterling Insurance Logo - Three Rings interlocked, they are colored green, yellow, and blue.">
    </section>

    <section>
      <h1>"Putting clients before commissions since 1997".</h1>
    </section>
  
    <section>
      <router-link to="/" exact>Home</router-link>
      <router-link to="who-we-serve">Who We Serve</router-link>
      <router-link to="our-team">Your Team</router-link>
      <router-link to="scheduling">Schedule</router-link>
      <router-link to="employee">Employee Benefits</router-link>
      <router-link to="medicare">Medicare</router-link>
    </section>
  </header>
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
  header {
    color: black;
    padding:10px 0;
    margin:0 0 20px 0;
  }

  header h1 {
    color:black;
    font-size:1vw;
  }

  img {
    width:200px;
  }

  .router-link-exact-active {
    color:var(--primary);
    border-bottom:2px solid var(--primary);
  }

  a {
    color:black;
    text-decoration:none;
    margin:10px;
    padding:10px;
  }

  a:hover {
    color:var(--primaryHover);
  }
</style>