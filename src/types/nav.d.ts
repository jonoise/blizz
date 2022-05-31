export interface NavItemProps {
  id: number
  name: string
  hasDropdown?: boolean
  glow?: boolean
  children?: {
    id: number
    name: string
    href: string
    icon?: IconType | string
  }[]
  href?: string
}
