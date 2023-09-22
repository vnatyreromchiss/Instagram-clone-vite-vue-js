<script>
  import { RouterLink, RouterView } from 'vue-router';

  import Header from '../components/Header/Header.vue';

  import EditProfile from '../pages/EditProfilePage.vue';

  export default {
    computed: {
      profileImageUrl() {
      return this.$route.params.imageUrl || null; // Access imageUrl from route params
    },
      // imageUrl() {
      //   return this.$route.params.imageUrl || null; // Access imageUrl from route params
      // },
    },
  };
</script>

<template>
  <!-- <Header></Header> -->
  <div class="container">
    <div class="top">
      <div class="avatar-block">
        <img :src="profileImageUrl" alt="">
        <!-- src="../components/images/ProfileAvatar.png" -->

      </div>
      <div class="info-block">
        <div class="nickname-block">
          <h2 class="nickname">terrylucas</h2>
          <div class="follow-block">
            <a href="#" class="follow-btn">Follow</a>
          </div>
          <div class="more-block">
            <RouterLink class="more-btn" to="/editProfile"><img src="../components/icons/More.png" alt="" srcset=""></RouterLink>   
          </div>
        </div>
        <div class="stastics-block">
          <ul class="stastics-list">
            <li class="stastics-item">
              <a href="#" class="stastics-link">
                <span class="bold">777</span>
                posts
              </a>
            </li>
            <li class="stastics-item">
              <a href="#" class="stastics-link">
                <span class="bold">123</span>
                followers
              </a>
            </li>
            <li class="stastics-item">
              <a href="#" class="stastics-link">
                <span class="bold">888</span>
                following
              </a>
            </li>
          </ul>
        </div>
        <div class="description-block">
          Terry Lucas
        </div>
      </div>
    </div>
    <div class="center-part">
      <div class="actual-story">
        <img class="actual-story__image" src="../components/images/ProfileAvatar.png" alt="">
        <h5 class="actual-story__title">Made Us</h5>
      </div>
      <div class="actual-story">
        <img class="actual-story__image" src="../components/images/ProfileAvatar.png" alt="">
        <h5 class="actual-story__title">Made Us</h5>
      </div>
      <div class="actual-story">
        <img class="actual-story__image" src="../components/images/ProfileAvatar.png" alt="">
        <h5 class="actual-story__title">Made Us</h5>
      </div>
      <div class="actual-story">
        <img class="actual-story__image" src="../components/images/ProfileAvatar.png" alt="">
        <h5 class="actual-story__title">Made Us</h5>
      </div>
    </div>
      <h1>This is an Profile page</h1>
  </div>




</template>

<style scoped>

</style>