<template>
  <div>
    <div id="screen" v-bind:class="state" @click="onClickScreen">{{message}}</div>
    <div id="txt_btn" v-show="result.length">
    <div id="txt">Average time: {{average}}ms</div>
    <button @click="onReset">Reset</button>
  </div>
  </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
export default {
  data() {
    return {
      result: [],
      state: "waiting",
      message: "Click here to Start"
    };
  },
  computed: {
    average() {
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
    }
  },
  methods: {
    onReset() {
      this.result = [];
    },
    onClickScreen() {
      if (this.state === "waiting") {
        this.state = "ready";
        this.message = "Click the screen when it is RED";
        timeout = setTimeout(() => {
          this.state = "now";
          this.message = "Click Now!";
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000); // 2-3초
      } else if (this.state === "ready") {
        clearTimeout(timeout);
        this.state = "waiting";
        this.message = "It is too soon, wait until you see RED color";
      } else if (this.state === "now") {
        endTime = new Date();
        this.state = "waiting";
        this.message = "Click the screen to start";
        this.result.push(endTime - startTime);
      }
    }
  }
};
</script>
<style scoped>
#screen {
  display: flex;
  height: 50%;
  width: 50%;
  margin: 5% 25%;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-family: monospace;
  font-size: 25px;
  padding: 10px;
}
#screen.waiting {
  background-color: orange;
}
#screen.ready {
  background-color: teal;
  color: aliceblue;
}
#screen.now {
  background-color: red;
}

#txt_btn {
  text-align: center;
}

#txt {
  margin: 2%;
  font-family:monospace;
  font-size: 20px;
}

button {
  background-color:dodgerblue;
  font-size: 20px;
  font-family: monospace;
}
</style>