import Link from 'next/link'

function Pill({ name, linkTo }) {
  if (linkTo) {
    return (
      <Link href={linkTo}>
        <a className="px-3 py-2 rounded text-xs text-white bg-gray mr-2 hover:opacity-75">
          {name}
        </a>
      </Link>
    )
  } else {
    return (
      <span className="px-3 py-2 rounded text-xs text-white bg-gray mr-2">
        {name}
      </span>
    )
  }
}

export default Pill
