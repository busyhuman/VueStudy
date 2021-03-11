<template>
  <div>
    <!-- :info="userInfo"는 propsData로 info에 userInfo(state에 user 데이터를 갖고 있는)를 넣어주겠다는 것이다. 
    그러면 UnserProfile에서 info를 받아 화면에 뿌려주는 것이다. -->
    <user-profile :info="userInfo"></user-profile>

    <!-- <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p> -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile,
  },

  computed: {
    userInfo() {
      return this.$store.state.user
    },
  },
  created() {
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName)
  },
}
</script>

<style></style>
