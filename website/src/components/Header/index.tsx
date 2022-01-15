import { BsFillHouseDoorFill, BsThermometerSun, BsGearFill, BsLightbulbFill } from 'react-icons/bs';

import { Anchor } from '../Anchor';
import { Button } from '../Button';

import styles from './Header.module.scss';


export default function Header() {

  const links = [{ href: "/", icon: <BsFillHouseDoorFill />, name: "Home" },
  { href: "/sensors", icon: <BsThermometerSun />, name: "Sensor" },
  { href: "/actuators", icon: <BsLightbulbFill />, name: "Actuators" },
  ]

  return (
    <header id={styles.header}>
      <Anchor href="/" className={styles.brand} >
        TT
      </Anchor>
      <ul className={styles.navbar}>
        {links.map((link, index) => {
          return (
            <li key={index} >
              <Anchor href={link.href}>
                {link.icon}
                <span>{link.name}</span>
              </Anchor>
            </li>
          )
        })}
        <li>
          <Anchor>
            <BsGearFill />
          </Anchor>
        </li>
      </ul>

    </header >
  );
}