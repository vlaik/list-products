import { Footer, Header } from 'features'
import { FC } from 'react'

import s from './layout.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.container}>{children}</main>
      <Footer />
    </div>
  )
}
