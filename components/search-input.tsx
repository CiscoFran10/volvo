import * as React from "react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={
					"flex h-9 max-w-md rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-secondary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring "
				}
				ref={ref}
				{...props}
			/>
		);
	}
);

SearchInput.displayName = "Input";

export default SearchInput;
