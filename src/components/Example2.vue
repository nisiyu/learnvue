<template>
  <div>
    <h2>script部分语法</h2>

    <section>
      <h3>1. props</h3>
      <child-component :number="123" :string="'string'" :obj="{'foo': 'bar'}"/>
    </section>

    <section>
      <h3>2. computed</h3>
      <input type="tel" v-model="input_value" /><br/>
      <label>Computed Sum: </label>
      <div> {{ computed_sum }}</div>
    </section>

    <section>
      <h3>3. watch</h3>
      <label>Watch Computed Sum: </label>
      <div> {{ async_value }}</div>
    </section>
  </div>
</template>

<script>
import Child from "@/components/Child"

export default {
  name: 'HelloWorld',
  components: {
    'child-component': Child
  },
  data () {
    return {
      input_value: 0,
      async_value: 0
    }
  },
  methods: {
    sum (num) {
      return num * (num + 1) / 2
    }
  },
  computed: {
    computed_sum () {
      return this.sum(this.input_value)
    }
  },
  watch: {
    computed_sum () {
      setTimeout(()=> {
        this.async_value = this.computed_sum
      }, 500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
section {
  width: 500px;
  margin: 0 auto;
  text-align: left;
}

section h3 {
  margin-left: -15px;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

#highlighted {
  background-color: yellow;
}
</style>
