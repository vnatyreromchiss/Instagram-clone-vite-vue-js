<script>
  import Header from '../components/Header/Header.vue';
  // import Main from '../components/Main/Main.vue';

  export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    }, methods: {
      createPost() {
          this.post.id = Date.now();
          this.$emit('create', this.post, 'lol', 'g')
          this.post = {
            title : '',
            body : '',
          }
        }
    }
  }
  
</script>

<template>
  <!-- <Header></Header> -->

    <div class="container">
        <form @submit.prevent @create="createPost">
          <h3>Add post</h3>
          <input
                v-model="post.title"
                class="input"
                type="text"
                placeholder="Name:"
          >
          <input
                v-model="post.body"
                class="input"
                type="text"
                placeholder='Description:'
          >
          <button  @click="createPost">
            Create </button>
        </form>
    </div> 
  
</template>

<style scoped>

</style>