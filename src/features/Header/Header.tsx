import { FC } from 'react'

import s from './header.module.scss'

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.headerMenu}>
        <span>Logo</span>
        <span>Menu</span>
      </div>
    </header>
  )
}
