import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/home.module.scss';
import logo from '../../public/logo.svg';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'DevPizzaria - Faça seu Login',
};

export default function Home() {
  return (
    <div className={styles.containerCenter}>
      <Image src={logo} alt='Logo Pizzaria Dev' />
      <div className={styles.login}>
        <form>
          <Input placeholder='Digite seu email' type='text' />
          <Input placeholder='Sua senha' type='password' />
          <Button type="submit" loading={true}>Acessar</Button>
        </form>
        <Link href="/signup" className={styles.text}>
          Não possui uma conta? Cadastre-se
        </Link>
      </div>
    </div>
  )
}
