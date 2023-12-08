<template>
    <post-form
        @createPost="createPost"
    />
    <post-list :posts="posts"/>
    
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [
                {id: 1, title: 'JavaScript', body: 'Описание поста JS'},
                {id: 2, title: 'JavaScript 2', body: 'Описание поста JS 2 '},
                {id: 3, title: 'JavaScript 3', body: 'Описание поста JS 3'},
            ]
        }
    },
    methods: {
        createPost(post, second) {
            this.posts.push(post);
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}


</style>