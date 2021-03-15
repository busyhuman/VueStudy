<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
import ListMixin from '@/mixins/ListMixin'

export default {
  name: 'JobsView',
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   bus.$emit('start:spinner');
  //   this.$store.dispatch('FETCH_JOBS')
  //       .then(() => {
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  // }
}
</script>

<style scoped></style>
