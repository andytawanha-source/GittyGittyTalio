import type { FC } from 'react'
import type { LucideProps } from 'lucide-react'
import {
  Banknote,
  Briefcase,
  Building2,
  Calculator,
  FileText,
  Landmark,
  PieChart,
  Receipt,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const SERVICE_ICON_MAP: Record<string, FC<LucideProps>> = {
  wallet: Wallet,
  receipt: Receipt,
  'file-text': FileText,
  'shield-check': ShieldCheck,
  'trending-up': TrendingUp,
  calculator: Calculator,
  'building-2': Building2,
  landmark: Landmark,
  briefcase: Briefcase,
  'pie-chart': PieChart,
  banknote: Banknote,
}

type IconProps = {
  className?: string
  name?: string
}

export function ServiceIcon({ name, className }: IconProps) {
  const Icon = (name && SERVICE_ICON_MAP[name]) || Briefcase
  return <Icon className={className} />
}

export function socialPlatformIcon(platform: string) {
  switch (platform) {
    case 'linkedin':
      return FaLinkedin
    case 'instagram':
      return FaInstagram
    case 'facebook':
      return FaFacebook
    default:
      return FaLinkedin
  }
}

export function socialPlatformLabel(platform: string) {
  switch (platform) {
    case 'linkedin':
      return 'LinkedIn'
    case 'instagram':
      return 'Instagram'
    case 'facebook':
      return 'Facebook'
    default:
      return platform
  }
}
