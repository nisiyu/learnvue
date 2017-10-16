<template>
  <div>
    <h2>模版部分语法</h2>
    <section>
      <h3>1. 文本绑定</h3>
      <h4>用mustache语法渲染变量</h4>
      <div>{{ message }}</div>

      <h4>可以用表达式</h4>
      <div>{{ message + ' with some other words' }}</div>
    </section>

    <section>
      <h3>2. 指令 v-</h3>
      <h4>v-bind绑定元素属性</h4>
      <div v-bind:id="bindid">绑定ID为{{bindid}}</div>

      <h4>可以使用:缩写</h4>
      <div :id="bindid">绑定ID为{{bindid}}</div>
      <br/><br/>

      <h4>v-on可以绑定事件</h4>
      <button v-on:click="clickButton">hello</button>

      <h4>可以使用@缩写</h4>
      <button @click="clickButton">hello</button>
      <br/><br/>

      <h4>v-if进行条件渲染</h4>
      <button @click="toggle">开/关</button>
      <div v-if="condition">开关为开</div>
      <div v-else>开关关了</div>

      <h4>v-show根据条件决定是否display</h4>
      <div v-show="condition">开关为开时显示</div>
      <div v-show="!condition">开关关了时显示</div>
      <br/><br/>

      <h4>v-for进行列表渲染</h4>
      <div v-for="element, index in arr" :key="index">{{ element }}</div>
      <br/><br/>

      <h4>v-model进行表单的双向绑定</h4>
      <input v-model="input_value" />
      <div>{{ input_value }}</div>
    </section>

    <router-link to="/example2"><h3>NEXT</h3></router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'example1',
      bindid: 'highlighted',
      condition: false,
      arr: [
        '项目1',
        '项目2',
        '项目3'
      ],
      input_value: ''
    }
  },
  methods: {
    clickButton () {
      alert('hello');
    },
    toggle () {
      this.condition = !this.condition
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
