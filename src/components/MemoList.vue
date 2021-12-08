<template>
  <div class="memos">
  <router-link to="/">メモ一覧</router-link>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="memo in memos" :key="memo.id">
        <MemoItem :memo="memo"/>
      </li>
    </ul>
    <router-link to="/memos/new"><button>+</button></router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import MemoItem from './MemoItem.vue'

export default {
  name: 'MemoList',
  props: {
    msg: String
  },
  computed: mapState(['memos']),
  components: {
    MemoItem
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
