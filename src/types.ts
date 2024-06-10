import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface SidebarItems {
  links: Array<{
    title: string | undefined;
    label: string;
    href: string;
    icon?: LucideIcon;
  }>;
  extras?: ReactNode;
}