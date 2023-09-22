<template>
    <div class="container">
        <div class="editProfilePage">
            <h1>Edit Profile</h1>
    
            <div class="main">
                <router-link to="/profile">Go to Messenger with Image</router-link>
                <img :src="imageUrl" alt="Selected Image" >
                <!-- src="../../src/components/images/ProfileAvatar.png" -->

                <div class="uploadButton">
                    <input type="file" @change="updateImage">
                </div>
            </div>

        </div>
    
    </div>
    <div>
        
    </div>
</template>

<script>
   import { RouterLink, RouterView } from 'vue-router';
    

    export default {
        data() {
            return {
            imageUrl: null,
            };
        },
        methods: {
            updateImage(event) {
            this.imageUrl = URL.createObjectURL(event.target.files[0]);
            },
        },
    };

</script>

<style lang="scss" scoped>

</style>