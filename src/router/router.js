import WelcomePage from '@/pages/WelcomePage.vue';
import TasksPage from '@/pages/TasksPage.vue';

import { createRouter, createWebHistory } from 'vue-router';

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
    history: createWebHistory(),
    routes,
});

export default router;