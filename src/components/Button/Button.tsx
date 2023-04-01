import { FC } from 'react'

import cn from 'classnames'
import s from './button.module.scss'
import Link from 'next/link'

interface ButtonProps {
  title: string
  onClick: () => void
  variant?: 'default' | 'danger' | 'success'
  size?: 'default' | 'large'
  block?: boolean
  link?: string
}
export const Button: FC<ButtonProps> = ({
  title,
  link,
  size = 'default',
  onClick,
  block = false,
  variant = 'default',
}) => {
  return (
    <div
      className={cn(s.button, {
        [s.danger]: variant === 'danger',
        [s.success]: variant === 'success',
        [s.large]: size === 'large',
        [s.block]: block,
      })}
      onClick={onClick}
    >
      {link ? <Link href={link}>{title}</Link> : title}
    </div>
  )
}
