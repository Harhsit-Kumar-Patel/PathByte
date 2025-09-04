import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check, MoreHorizontal } from 'lucide-react'
import { cn } from '@/utils/cn'

interface DropdownItem {
  id: string
  label?: string
  icon?: React.ComponentType<{ className?: string }>
  onClick?: () => void
  disabled?: boolean
  danger?: boolean
  active?: boolean
  divider?: boolean
  header?: boolean
}

interface DropdownProps {
  trigger: React.ReactNode
  items: DropdownItem[]
  className?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'auto'
  onOpenChange?: (open: boolean) => void
}

export default function Dropdown({
  trigger,
  items,
  className,
  placement = 'bottom',
  width = 'md',
  onOpenChange
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        onOpenChange?.(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onOpenChange])

  const toggleDropdown = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onOpenChange?.(newState)
  }

  const handleItemClick = (item: DropdownItem) => {
    if (item.disabled || item.divider || item.header) return
    
    item.onClick?.()
    setIsOpen(false)
    onOpenChange?.(false)
  }

  const widthClasses = {
    sm: 'min-w-32',
    md: 'min-w-48',
    lg: 'min-w-64',
    xl: 'min-w-80',
    auto: 'min-w-max'
  }

  const placementClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2'
  }

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger}
      </div>

      <div
        className={cn(
          'dropdown',
          widthClasses[width],
          placementClasses[placement],
          isOpen && 'show'
        )}
      >
        {items.map((item, index) => {
          if (item.divider) {
            return <div key={`divider-${index}`} className="dropdown-divider" />
          }

          if (item.header) {
            return (
              <div key={`header-${index}`} className="dropdown-header">
                {item.label}
              </div>
            )
          }

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
              className={cn(
                'dropdown-item',
                item.active && 'active',
                item.danger && 'danger',
                item.disabled && 'disabled'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {item.icon && <item.icon className="h-4 w-4 mr-3" />}
                  <span>{item.label}</span>
                </div>
                {item.active && <Check className="h-4 w-4 text-primary-600" />}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// Specialized dropdown components
export function ProfileDropdown({ user, onLogout }: { user: any; onLogout: () => void }) {
  const items: DropdownItem[] = [
    {
      id: 'profile',
      label: 'Profile',
      icon: MoreHorizontal,
      onClick: () => console.log('Profile clicked')
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: MoreHorizontal,
      onClick: () => console.log('Settings clicked')
    },
    { id: 'divider-1', divider: true },
    {
      id: 'logout',
      label: 'Sign out',
      danger: true,
      onClick: onLogout
    }
  ]

  return (
    <Dropdown
      trigger={
        <div className="flex items-center gap-x-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100">
          <div className="relative">
            <img
              className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 ring-2 ring-white shadow-md"
              src={user?.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
              alt=""
            />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          <span className="hidden lg:flex lg:items-center">
            <span className="sr-only">Your profile</span>
            <span className="text-sm font-semibold leading-6 text-gray-900">
              {user?.firstName || user?.email || 'User'}
            </span>
          </span>
          <ChevronDown className="h-4 w-4 text-gray-400 transition-transform duration-200" />
        </div>
      }
      items={items}
      placement="bottom"
      width="md"
    />
  )
}

export function NotificationDropdown({ notifications, onMarkRead }: { 
  notifications: any[]; 
  onMarkRead: (id: string) => void 
}) {
  const items: DropdownItem[] = [
    {
      id: 'header',
      label: 'Notifications',
      header: true
    },
    ...notifications.map(notification => ({
      id: notification.id,
      label: notification.message,
      onClick: () => onMarkRead(notification.id),
      active: !notification.read
    })),
    { id: 'divider-1', divider: true },
    {
      id: 'view-all',
      label: 'View all notifications',
      onClick: () => console.log('View all clicked')
    }
  ]

  return (
    <Dropdown
      trigger={
        <button className="relative text-gray-400 hover:text-gray-500 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100">
          <span className="sr-only">View notifications</span>
          <div className="h-6 w-6">
            <span className="sr-only">Notifications</span>
            <div className="h-6 w-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-600">3</span>
            </div>
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce-in">
            {notifications.filter(n => !n.read).length}
          </div>
        </button>
      }
      items={items}
      placement="bottom"
      width="lg"
    />
  )
}

export function ActionDropdown({ 
  actions, 
  trigger, 
  placement = 'bottom' 
}: { 
  actions: DropdownItem[]; 
  trigger: React.ReactNode; 
  placement?: 'top' | 'bottom' | 'left' | 'right' 
}) {
  return (
    <Dropdown
      trigger={trigger}
      items={actions}
      placement={placement}
      width="auto"
    />
  )
}

// Enhanced select dropdown
export function SelectDropdown<T extends string>({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  className
}: {
  options: { value: T; label: string; disabled?: boolean }[]
  value: T | null
  onChange: (value: T) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const selectedOption = options.find(opt => opt.value === value)

  return (
    <div className={cn('select-dropdown', className)} ref={dropdownRef}>
      <button
        type="button"
        className="select-trigger"
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-500'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          className={cn(
            'h-4 w-4 text-gray-400 transition-transform duration-200',
            isOpen && 'rotate-180'
          )} 
        />
      </button>

      {isOpen && (
        <div className="select-options">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={cn(
                'select-option',
                value === option.value && 'selected',
                option.disabled && 'disabled'
              )}
              onClick={() => {
                if (!option.disabled) {
                  onChange(option.value)
                  setIsOpen(false)
                }
              }}
              disabled={option.disabled}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
