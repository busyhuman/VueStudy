<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";

export default {
  created() {
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_ASK")
        .then(() => {
          console.log("fetched");
          bus.$emit("end:spinner");
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  },
  components: {
    ListItem,
  },
  // computed: {
  //   ...mapGetters(["fetchedAsk"]),

  //   Spread 연산자(...)를 사용하면 배열이나 문자열과 같이 반복 가능한 문자를
  //   0개 이상의 인수 또는 요소로 확장하여, 0개 이상의 키-값의 객체로 확장시킬 수 있다.

  //   #2
  //   ...mapState({
  //     ask: (state) => state.ask,
  //   }),

  //   #1
  //   ask() {
  //     return this.$store.state.ask
  //   },
  // },

  // created() {
  //   this.$store.dispatch("FETCH_ASK")
  // },
};
</script>
