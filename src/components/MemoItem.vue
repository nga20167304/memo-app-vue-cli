<template>
  <div>
    <div class="memo-item">
      <div class="memo-title">
        <input v-model="title" v-if="isEdit"/>
        <span v-else>{{ title }}</span>
      </div>
      <div class="memo-action">
        <button v-if="!isEdit" @click="showDetail">{{ textDetail }}</button>
        <button @click="handleEdit">{{ textEdit }}</button>
        <button v-if="!isEdit" @click="handleDelete">削除</button>
      </div>
    </div>
    <div v-if="isShow">
      <span>{{ memo.content }}</span>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'MemoItem',
  data: function() {
    return {
      isShow: false,
      isEdit: false,
      title: this.memo.title,
    }
  },
  props: {
    memo: Object
  },
  computed: {
    textDetail: function(){
      return this.isShow ? "隠れる" : "詳細"
    },
    textEdit: function() {
      return this.isEdit ? "保存" : "編集"
    }
  },
  methods: {
    ...mapMutations(['editMemo', 'deleteMemo']),
    showDetail: function() {
      this.isShow = !this.isShow;
    },
    handleEdit: function() {
      if(this.isEdit) {
        this.handleSave();
      } else {
        this.isEdit = true;
      }
    },
    handleSave: function() {
      this.editMemo({...this.memo, title:this.title});
      this.isEdit = false;
    },
    handleDelete: function() {
      this.deleteMemo({...this.memo, id:this.memo.id})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.memo-item {
  display: flex;
  justify-content: center;
}

.memo-title {
  width: 200px;
}

button {
  margin: 10px
}
</style>
