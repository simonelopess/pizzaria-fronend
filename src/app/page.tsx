import { Metadata } from 'next';
import Image from 'next/image';

import styles from '../styles/home.module.scss';
import logo from '../../public/logo.svg';
import { Input } from '@/components/ui/Input';

export const metadata: Metadata = {
  title: 'DevPizzaria - Faça seu Login',
};

export default function Home() {
  return (
    <>
      <div>
        <Image src={logo} alt='Logo Pizzaria Dev' />
        <div className={styles.login}>
          <form>
            <Input placeholder='Digite seu email' type='text' />
            <Input placeholder='Sua senha' type='password' />
          </form>
        </div>
      </div>
    </>
  )
}
