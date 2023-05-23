import { Metadata } from 'next';
import Image from 'next/image';

import styles from '../styles/home.module.scss';
import logo from '../../public/logo.svg';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

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
            <Button type="submit" loading={true}>Acessar</Button>
          </form>
        </div>
      </div>
    </>
  )
}
