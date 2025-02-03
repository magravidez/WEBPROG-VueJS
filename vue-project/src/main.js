import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalProfileWebPage from './components/PersonalProfileWebPage.vue'
import Country from './components/Country.vue'
import Feedback from './components/Feedback.vue'
import FeedbackForm from './components/FeedbackForm.vue'

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-profile-web-page', PersonalProfileWebPage)
app.component('country', Country)
app.component('feedback', Feedback)
app.component('feedback-form', FeedbackForm)

app.mount('#app')