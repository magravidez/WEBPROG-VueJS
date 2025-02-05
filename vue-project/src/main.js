import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalProfileWebPage from './components/PersonalProfileWebPage.vue'
import Country from './components/Country.vue'
import Comment from './components/Comment.vue'
import CommentForm from './components/CommentForm.vue'

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-profile-web-page', PersonalProfileWebPage)
app.component('country', Country)
app.component('comment', Comment)
app.component('comment-form', CommentForm)

app.mount('#app')