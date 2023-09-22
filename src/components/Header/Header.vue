<script>
import { RouterLink, RouterView } from 'vue-router';


/*==================== DARK LIGHT THEME ====================*/
// const themeButton = document.getElementById('theme-button');
// const darkTheme = 'dark-theme';
// const iconTheme = 'uil-sun';

// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// if(selectedTheme) {
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
// }

// themeButton.addEventListener('click', () => {
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })











export default {
    
}
</script>

<template>
  <header>
    <div class="container">
        <div class="wrapper">
            <nav>
                <div class="left__part">
                    <RouterLink to="/"><img src="../icons/Logo.png" alt="" srcset=""></RouterLink>     
                </div>
                <div class="center__part">
                    <input class="center__part__input" type="text" placeholder="Search">     
                </div>
                <div class="right__part">
                    <RouterLink class="icons" to="/"><img src="../icons/HomeIcon.png" alt="" srcset=""></RouterLink>
                    <RouterLink class="icons" to="/messenger"><img src="../icons/Messenger.png" alt="" srcset=""></RouterLink>
                    <RouterLink class="icons" to="/addNewPost"><img src="../icons/NewPosts.png" alt="" srcset=""></RouterLink>
                    <RouterLink class="icons" to="/findPeople"><img src="../icons/FindPeople.png" alt="" srcset=""></RouterLink>
                    <RouterLink class="icons" to="/likes"><img src="../icons/ActivityFeed.png" alt="" srcset=""></RouterLink>
                    <RouterLink class="icons" to="/profile"><img src="../icons/ActivityFeed.png" alt="" srcset=""></RouterLink>
                    <i class="uil uil-moon change-theme icons" id="theme-button"></i>
                    
                </div>
            </nav>
        </div>
    </div>
  </header>

</template>

<style>
header {
    display: flex;
    align-items: center;
    height: 53px;
}
.container {
    margin: 0 auto;
    width: 935px;
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
   
}
.center__part {
    margin-left: 110px;
}
/* .right__part {
   
} */
.center__part__input {
    border: 1px solid #DBDBDB;
    padding: 4px;
    text-align: center;
    border-radius: 3px;
}
.center__part__input::placeholder {
    background: url('../icons/Search.png') no-repeat center left;
}
.icons:not(:last-child)  {
    margin-right: 22px;

}
</style>
