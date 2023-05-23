'use client'

import { Metadata } from 'next';
import { FormEvent, useContext } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/home.module.scss';
import logo from '../../public/logo.svg';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AuthContext } from '@/contexts/AuthContext';

export const metadata: Metadata = {
  title: 'DevPizzaria - Faça seu Login',
};

export default function Home() {

  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    let data = {
      email: "algm@te.com",
      password: "123123"
    }
    await signIn(data);
  }

  return (
    <div className={styles.containerCenter}>
      <Image src={logo} alt='Logo Pizzaria Dev' />
      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input placeholder='Digite seu email' type='text' />
          <Input placeholder='Sua senha' type='password' />
          <Button type="submit" loading={false}>Acessar</Button>
        </form>
        <Link href="/signup" className={styles.text}>
          Não possui uma conta? Cadastre-se
        </Link>
      </div>
    </div>
  )
}
