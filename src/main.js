import App from './App.vue';
// import BadgeList from './components/BadgeList.vue';
// import TheHeader from './components/TheHeader.vue';
// import UserInfo from './components/UserInfo.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';
import { createApp } from 'vue';

const app = createApp(App);

// app.component('the-header', TheHeader);
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
