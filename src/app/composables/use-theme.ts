import {onMounted, ref} from "vue";
import type {AppTheme} from "../types";

const theme = ref<AppTheme>('light');

export function useTheme () {
    const setTheme = (mode: AppTheme) => {
        theme.value = mode;
        document.documentElement.setAttribute('data-theme', mode);
        localStorage.setItem('theme', mode);
    }

    onMounted(() => {
        const savedTheme = localStorage.getItem('theme') as AppTheme | null;

        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setTheme(prefersDark ? 'dark' : 'light')
        }
    });

    return { theme, setTheme };
}