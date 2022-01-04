<template>
  <div id="'app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{ message }}</p>
    <button v-on:click="inc">Add 1</button>
    <p>clicked {{ count }} times</p>
    <br>
    <p> 總共{{ total_cost() }}元 </p>
    <br>
    <h1>國際貨幣計算器</h1>
    <div>台幣 <input type="text" v-model="twd"></div>
    <div>美金 <input type="text" v-model="usd"></div>
    <div>
      <button v-bind:disabled="isBtnDisabled" v-on:click="change_flag">click here!!!</button>
      <button :disabled="!isBtnDisabled" v-on:click="change_flag">click here!!!</button>
    </div>
    <div>
      <textarea v-model="message" placeholder="type something"></textarea>
      <input v-model.lazy="message">
      <div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="mary" value="Mary" v-model="checkedNames">
        <label for="mary">Mary</label>
        <input type="checkbox" id="zed" value="Zed" v-model="checkedNames">
        <label for="zed">Zed</label>
        <input type="checkbox" id="all" value="Jack" v-model="checkedNames" v-on:click="selectedAll($event)">
        <label for="all">ALL</label>

        <p>chicked name: {{ checkedNames }}</p>
      </div>
      <div>
        <select v-model="selected">
          <option disabled value="">select</option>
          <option v-bind:disabled='isBtnDisabled'>A</option>
          <option>B</option>
          <option>C</option>
        </select>

        <p>{{ selected || '無' }}</p>
      </div>
      <input type="text" v-on:keydown.enter="pushCheckedName" v-model="name">
      <p>{{ name }}</p>
    </div>
    <div id="1-6">
      <p v-if=true> v-if 當值為falsy時，element會被移除 </p>
      <p v-show=true> v-show 當值為falsy時，透過CSS的 display:none 來隱藏 </p>

      <div>
        <div> v-if, v-else-if, v-else</div>
        <p v-if="count === 0 " style="color:red;"> {{ count }} </p>
        <p v-else-if="count < 5 " style="color:yellowgreen;"> {{ count }} </p>
        <p v-else style="color:green;"> {{ count }} </p>
      </div>

      <div>
        <select>
          <option v-for="item in arr" v-bind:key="item"> {{ item }}</option>
        </select>
      </div>
      <div>
        <li v-for="item in arr" v-bind:key="item">
          <label><input type="checkbox">{{ item }}</label>
        </li>
      </div>
    </div>


  </div>
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message: 'This is my first vue',
      count: 0,
      price: 20,
      twd: 1,
      isBtnDisabled: true,
      checkedNames: [],
      selectedAllFlag: false,
      selected: null,
      name: '',
      arr: ['This', 'is', 'my', 'first', 'vue']
    }
  },
  methods: {
    inc() {
      this.count += 1
    },
    total_cost() {
      return this.count * this.price
    },
    selectedAll(event) {
      if (this.selectedAllFlag) {
        this.selectedAllFlag = false
        this.checkedNames = ["Jack", "Mary", "Zed"]
      } else {
        this.selectedAllFlag = true
        this.checkedNames = []
      }
      console.log(event.target.tagName)
    },
    change_flag() {
      this.isBtnDisabled = !this.isBtnDisabled
    },
    pushCheckedName() {
      this.checkedNames.push(this.name)
      this.name = ''
    }
  },
  computed: {
    usd: {
      get() {
        return Number.parseFloat(this.twd / 27.84)
      },
      set(val) {
        this.twd = Number.parseFloat(val * 27.84)
      }
    }
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log('mounted')
  },
  updated(){
    console.log('updated')
  },
  unmounted() {
    console.log('unmounted')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
