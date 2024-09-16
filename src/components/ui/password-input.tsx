import { InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react'

import { Eye, EyeOff } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	startAdornment?: ReactNode
	endAdornment?: ReactNode
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
	({ className, onFocus, ...props }, ref) => {
		const { startAdornment, endAdornment, ...inputProps } = props

		const type = 'password'

		const [isPasswordVisible, setPasswordVisible] = useState(false)

		return (
			<div
				className={cn(
					'flex items-center gap-2 rounded-md border border-input bg-background px-3 py-0 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
				)}
			>
				{startAdornment && <div className='flex h-4 items-center'>{startAdornment}</div>}

				<input
					type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type}
					className={cn(
						'flex h-10 w-full bg-background text-sm outline-none file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
						className,
					)}
					ref={ref}
					{...inputProps}
				/>

				{endAdornment && type !== 'password' && (
					<div className='flex h-4 items-center'>{endAdornment}</div>
				)}
				{type === 'password' && (
					<button
						type='button'
						className='flex h-4 items-center'
						onClick={() => setPasswordVisible(!isPasswordVisible)}
					>
						{isPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
					</button>
				)}
			</div>
		)
	},
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
