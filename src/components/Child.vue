<template>
  <div>
    <h4>child组件，传入了数据，props可定义数据类型</h4>
    <label>Number:</label>
    <div>{{ number }}</div>
    <label>String:</label>
    <div>{{ string }}</div>
    <label>Object:</label>
    <div v-for="value,key in obj" :key="key">
      {{key}} : {{value}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      number: Number,
      string: String,
      obj: Object
    }
  }
</script>
