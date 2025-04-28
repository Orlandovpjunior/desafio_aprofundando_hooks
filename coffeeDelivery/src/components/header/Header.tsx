import Logo from '../../assets/Logo.svg'
import { MapPinArea, ShoppingCart } from '@phosphor-icons/react'
import styles from './Header.module.css'

export function Header(){
    return(
        <div className={styles.header}>
            <img src={Logo} alt="" />
            <div className={styles.header_data}>
                <div className={styles.location}>
                    <MapPinArea size={32} />
                    <p>Campina Grande</p>
                </div>
                <div className={styles.cart}>
                    <ShoppingCart size={32} />
                </div>
            </div>
        </div>

    )
}