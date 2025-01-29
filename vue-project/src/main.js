import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalProfileWebsite from './components/PersonalProfileWebsite.vue'
import Countries from './components/Countries.vue'

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-profile-website', PersonalProfileWebsite)
app.component('countries', Countries)

app.mount('#app')