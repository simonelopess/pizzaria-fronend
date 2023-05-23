import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from './signup.module.scss';
import logo from '../../../public/logo.svg';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'DevPizzaria - Cadastre-se',
};

export default function SignUp() {
    return (
        <div className={styles.containerCenter}>
            <Image src={logo} alt='Logo Pizzaria Dev' />
            <div className={styles.login}>
                <h1>Criando sua conta</h1>
                <form>
                    <Input placeholder='Digite seu nome' type='text' />
                    <Input placeholder='Digite seu email' type='text' />
                    <Input placeholder='Sua senha' type='password' />
                    <Button type="submit" loading={true}>Cadastrar</Button>
                </form>
                <Link href="/" className={styles.text}>
                    Já possui uma conta? Faça login
                </Link>
            </div>
        </div>
    )
}
