import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthService } from '../services/auth.service';

const storeApi = (set) => ({
    username: '',
    accessToken: '',
    authStatus: 'unauthorized',

    loginUser: async (credentials) => {
        const { username, token } = await AuthService.loginUser(credentials);

        set({
            username,
            accessToken: token,
            authStatus: 'authorized'
        });
    },

    registerUser: async (userInfo) => {
        const { username, token } = await AuthService.registerUser(userInfo);

        set({
            username,
            accessToken: token,
            authStatus: 'authorized'
        });
    },

    logout: () => {
        set({
            username: '',
            accessToken: '',
            authStatus: 'unauthorized'
        });
    }
});

export const useAuthStore = create( 
    persist(storeApi, { name: 'arithmetic-auth-storage' })
);
