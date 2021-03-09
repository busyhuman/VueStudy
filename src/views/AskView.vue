<template>
  <div>
    <p v-for="item in fetchedAsk" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
// import { mapState} from 'vuex';
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),

    // Spread 연산자(...)를 사용하면 배열이나 문자열과 같이 반복 가능한 문자를
    // 0개 이상의 인수 또는 요소로 확장하여, 0개 이상의 키-값의 객체로 확장시킬 수 있다.

    // #2
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),

    // #1
    // ask() {
    //   return this.$store.state.ask
    // },
  },

  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>
<style></style>
