import WelcomePage from '@/pages/WelcomePage.vue';
import TasksPage from '@/pages/TasksPage.vue';

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: WelcomePage
    },
    {
        path: '/tasks',
        component: TasksPage
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
});

export default router;