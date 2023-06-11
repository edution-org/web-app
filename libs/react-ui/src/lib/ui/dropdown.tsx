/** @jsxImportSource react */
import * as React from 'react'
import { Button } from '../primitives/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../primitives/dropdown-menu'
import { Icon } from './icon'
import { PropsFrom } from '../utils/types'

interface DropdownMenuProps {
  triggerText: string
  label: string
  iconName?: PropsFrom<typeof Icon>['name']
}

export function Dropdown({
  triggerText,
  iconName,
  label,
  children,
}: React.PropsWithChildren<DropdownMenuProps>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {iconName && <Icon name={iconName} className="h-4 w-4" />}
          {triggerText}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
