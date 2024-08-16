import { Loader2 } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'flex items-center gap-2 rounded-lg px-5 justify-center font-medium',
  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800  text-zinc-200 hover:bg-zinc-700',
    },
    size: {
      default: 'py-2',
      full: 'w-full h-11',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  loading?: boolean
}

export function Button({
  children,
  variant,
  size,
  loading,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={buttonVariants({ variant, size })}>
      {loading ? <Loader2 className="size-5 animate-spin" /> : children}
    </button>
  )
}
