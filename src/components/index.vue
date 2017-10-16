<template>
  <div id="index">
    <flagCode height="30" width="120" @getCode="getCode"></flagCode>
    <div id="test">
      <div class=" test test1"></div>
      <div class=" test test2"></div>
      <div class=" test test3"></div>
      <div class=" test test4"></div>
      <div class=" test test5"></div>
      <div class=" test test6"></div>
      <div class=" test test7"></div>
      <div class=" test test8"></div>
      <div class=" test test9"></div>
      <div class=" test test10"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    methods: {
      getCode (value) {
        console.log('index')
        console.log(value)
      }
    }
  }
</script>

<style>
  #test {
    clear: both;
  }
  .test {
    width: 140px;
    height: 100px;
    margin: 50px;
    float: left;
  }
  .test1 {
    background: #58a;
    background-image: linear-gradient(white 2px, transparent 0),
    linear-gradient(90deg, white 2px, transparent 0),
    linear-gradient(hsla(0, 0%, 100%, .3) 2px, transparent 0),
    linear-gradient(90deg, hsla(0, 0%, 100%, .3) 2px, transparent 0);
    background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
  }
  .test2 {
    background: #655;
    background-image: radial-gradient(tan 20%, transparent 0);
    background-size: 20px 20px;
  }
  .test3 {
    background: #655;
    background-image: radial-gradient(tan 20%, transparent 0),
    radial-gradient(tan 20%, transparent 0);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
  }
  .test4 {
    background: #eee;
    background-image: linear-gradient(45deg, #bbb 25%, transparent 0), linear-gradient(45deg, transparent 75%, #bbb 0);
    background-size: 20px 20px;
    background-position: 0 0, 15px 15px;
  }

  .test5 {
    background: #eee;
    background-image: linear-gradient(45deg, #bbb 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, #bbb 0),
    linear-gradient(45deg, #bbb 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, #bbb 0);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px, 10px 10px, 20px 20px;
  }

  .test6 {
    background: #eee;
    background-image: linear-gradient(45deg, rgba(45, 11, 90, .75) 25%, transparent 0, transparent 75%, rgba(45, 11, 90, .75) 0),
    linear-gradient(45deg, rgba(0, 0, 0, .15) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, .15) 0);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
  }

  .test7 {
    background: linear-gradient(90deg, #fb3 15%, #655 0, #655 40%, #ab4 0, #ab4 65%, hsl(20, 40%, 90%) 0);
    background-size: 80px 100%;
  }
  .test8 {
    background: hsl(20, 40%, 90%);
    background-image: linear-gradient(90deg, #fb3 10px, transparent 0),
    linear-gradient(90deg, #ab4 20px, transparent 0),
    linear-gradient(90deg, #655 10px, transparent 0);
    background-size: 30px 100%, 50px 100%, 20px, 100%;
  }
</style>
