import Vue from 'vue'
import App from './App.vue'
import MemoList from './components/MemoList.vue'
import Memo from './components/Memo.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [{
      path: '/',
      component: MemoList
    },
    {
      path: '/memos/new',
      component: Memo,
    }
  ]
})

const store = new Vuex.Store({
  state: {
    memos: [{
        id: 1,
        title: 'メモ1',
        content: 'メモ1の内容'
      },
      {
        id: 2,
        title: 'メモ2',
        content: 'メモ2の内容'
      },
      {
        id: 3,
        title: 'メモ3',
        content: 'メモ3の内容'
      }
    ]
  },
  getters: {
    getMemoById: (state) => (id) => {
      return state.memos.find(memo => memo.id === id)
    }
  },
  mutations: {
    addMemo(state, payload) {
      state.memos.push(payload)
    },
    editMemo(state, payload) {
      state.memos = state.memos.map(memo => {
        if (memo.id === payload.id) {
          return payload;
        }
        return memo;
      })
    },
    deleteMemo(state, payload) {
      state.memos = state.memos.filter(memo => memo.id !== payload.id)
    }
  },
  plugins: [createPersistedState()]
})

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#app')
