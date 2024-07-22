import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'flex items-center gap-2 rounded-lg px-5 py-2 font-medium',
  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800  text-zinc-200 hover:bg-zinc-700',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={buttonVariants({ variant })}>
      {children}
    </button>
  )
}
