  <script>
      import Header from '../components/Header/Header.vue';
      import AddNewPostPage from './AddNewPostPage.vue';
      export default {
        props: {
          posts: {
            type: Array,
            required:true
          }
        },
        data(){
          return {
            posts: [
              {id:1, title: 'JS 1', body: 'Post description 1'},
              {id:2, title: 'JS 2', body: 'Post description 2'},
              {id:3, title: 'JS 3', body: 'Post description 3'},
              {id:4, title: 'JS 4', body: 'Post description 4'},
            ],
          }
        },
        methods: {
          createPost(post, second, third) {
            console.log(post);
            console.log(second);
            console.log(third);
          },  
        }
      }
  </script>

<template>
  <!-- <Header></Header> -->
  <div class="container">
    <div>
     
      <div class="post" :posts="posts"  v-for="post in posts">
        <div class=""><strong>Name:</strong> {{ post.title }}</div>
        <div class=""><strong>Description:</strong> {{ post.body }}</div>
      </div>

    </div>
  </div>
  
</template>




<style scoped>
  .post {
    margin-top: 15px;
    padding: 15px;
    border: 3px solid red;
  }
</style>