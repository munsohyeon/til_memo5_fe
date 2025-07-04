<script setup>
import httpService from '@/services/HttpService';
// reactive 화면 변경 담당
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const state = reactive ({
    memo: {
        id: 0,
        title: '',
        content: '',
        createdAt: '',
    }
})

onMounted(async () => { 
    const id = route.params.id;
    const data = await httpService.get(id);
    state.memo = data.resultData;
});

const toForm = () => {
    const json = JSON.stringify(state.memo);
    router.push({
        path: '/memo/add',
        state: {
            data: json
        }
    })
}

</script>

<template>
    <div class="mb-3">
      등록일시: {{ state.memo.createdAt }}
    </div>
    <div class="mb-3">
      제목: {{ state.memo.title }}
    </div>
    <div class="mb-3">
      내용: {{ state.memo.content }}
    </div>
    <button type="button" class="btn btn-primary w-100 py-3" @click="toForm">수정</button>
</template>

<style scoped>
</style>
