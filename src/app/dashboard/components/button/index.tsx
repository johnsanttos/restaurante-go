"use client"

import { useFormStatus } from 'react-dom';

interface ButtonProps {
    name: string;
}


import styles from './styles.module.scss'
export function Button({name}: ButtonProps) {
    const {pending} = useFormStatus()

    return (
        <button className={styles.button}
        disabled={pending}
        type='submit'>
            {pending ? 'Carregando...': name}
        
        </button>
    )

}