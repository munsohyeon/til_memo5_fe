<script setup>
import httpService from '@/services/HttpService';
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const state = reactive({
    memo: {
        id: 0,
        title: "",
        content: "",
        createdAt: ""
    }
});

onMounted(() => {
    const memoData = history.state.data;
    if (history.state.data) {
        state.memo = JSON.parse(memoData);
    }
});
</script>

<template>
 <form class="detail" @submit.prevent="procSubmit">
    <div class="mb-3" v-if="state.memo.createdAt">
      등록일시: {{ state.memo.createdAt }}
    </div>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input type="text" id="title" class="form-control p-3" v-model="state.memo.title" />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea id="content" class="form-control p-3" v-model="state.memo.content"></textarea>
    </div>
    <button type="submit" class="btn btn-primary w-100 py-3">{{ state.memo.id > 0? '수정' : '저장' }}</button>
  </form>
</template>

<style scoped>

</style>