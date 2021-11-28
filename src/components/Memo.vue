<template>
  <div class="add-memo">
    <h1>{{ msg }}</h1>
    <h2>メモを作成する</h2>
    <div>
      <label>タイトル: </label>
        <input type="text" v-model="memo.title">
      </div>
      <div>
        <label>内容: </label>
        <textarea v-model="memo.content"></textarea>
      </div>
      <div>
        <input type="button" @click="createMemo" value="送信">
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Memo',
  props: {
    msg: String
  },
  data: function () {
    return {
      memo: this.defaultMemo()
    }
  },
  computed: {
    ...mapGetters(['getMaxId'])
  },
  created: function () {
  },
  methods: {
    ...mapMutations(['addMemo']),
    defaultMemo: function () {
      return {
        id: 0,
        title: '',
        content: ''
      }
    },
    createMemo: function() {
      if (this.memo.title.trim() === '') {
        this.error = 'タイトルは必須です'
        return
      }
      if (this.memo.content.trim() === '') {
        this.error = '内容は必須です'
        return
      }
      this.memo.id = this.getMaxId
      this.addMemo(this.memo)
      alert('新しいメモが作成されました。')
      this.$router.push('/')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  padding-top: 20px;
}
label {
  padding-right: 10px;
}
</style>
