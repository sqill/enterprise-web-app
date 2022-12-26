import Link from 'next/link'
import Image from 'next/image'

function Avatar({ avatar, linkTo, size = 56, thumb = false }) {
  if (linkTo) {
    return (
      (<Link href={linkTo} className="hover:opacity-75" style={{ height: size }}>

        <Image className="rounded-full" src={avatar?.[thumb ? 'thumb' : 'large'] || '/images/avatar.png'} alt="avatar" width={size} height={size} />

      </Link>)
    );
  } else {
    return <Image className="rounded-full" src={avatar?.[thumb ? 'thumb' : 'large'] || '/images/avatar.png'} alt="avatar" width={size} height={size} />
  }
}

export default Avatar
