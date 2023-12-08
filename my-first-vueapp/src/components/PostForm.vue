<template>
    <form @submit.prevent>
        <input 
            v-model="post.title"
            class="input" 
            type="text" 
            placeholder="Название поста"
            >
        <input 
            v-model="post.body"
            class="input" 
            type="text" 
            placeholder="Описание поста"
            >
        <button 
           @click="createPost"
        >Добавить пост</button>
    </form>
</template>

<script>

export default {
    data(){
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('createPost', this.post, 'second param')
            this.post ={
                title: '',
                body: ''
            }
        }
    }
}
</script>

<style>

</style>