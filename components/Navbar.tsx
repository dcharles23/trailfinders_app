import { NAV_LINKS } from "@/constants"
import Image from "next/image"
// import above gives faster load times
import Link from "next/link"

const navbar = () => {
  return (
    // used semantic html nav tag below for the navbar to improve SEO
    <nav className="flexBetween max-container
     padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />

        <ul className="hidden h-full gap-12">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={Link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
      </Link>
    </nav>
  )
}

export default navbar

