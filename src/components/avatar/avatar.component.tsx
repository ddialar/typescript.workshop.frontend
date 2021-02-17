import { FC } from 'react'
import { Image } from 'semantic-ui-react'

import { AVATAR_ALT } from './avatar.constants'

interface Porps {
    floated: 'left' | 'right'
    size: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'
    src: string
}

export const Avatar: FC<Porps> = ({ floated, size, src }) => (
  <Image
    circular
    floated={floated}
    size={size}
    referrerPolicy="no-referrer"
    src={src}
    alt={AVATAR_ALT}
  />
)
