import { FC } from 'react'

import cn from 'classnames'
import s from './badge.module.scss'

interface BadgeProps {
  type: 'new' | 'top' | null
}

const Badge: FC<BadgeProps> = ({ type }) => {
  return <div className={cn(s.badge, { [s.new]: type === 'new' })}>{type}</div>
}

export default Badge
