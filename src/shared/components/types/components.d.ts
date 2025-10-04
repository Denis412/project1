export interface AppButtonProps {
    label?: string;
    variant?: 'primary' | 'secondary';
}

export type AppButtonEmits = {
    (e: 'click', event: MouseEvent): void;
}

export class AppButtonSlots {}