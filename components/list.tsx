import Image from 'next/image';
import styles from './list.module.scss';

function parseLogo(logo: string): string {
  if (logo.charAt(0) === '/' || logo.slice(0, 4) === 'http')
    return logo;
  return '/' + logo;
}

export default function List({ items }) {
  return (
    <ul>
      {items.map(item => {
        const { name, symbol, logo } = item;
        return (
          <li key={name} className={styles['list-item']}>
            <Image src={parseLogo(logo)} height='64px' width='64px'/>
            <h1>{name}-{symbol}</h1>
          </li>
        );
      })}
    </ul>
  );
}