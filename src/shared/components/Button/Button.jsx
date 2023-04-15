import { Container } from "./Button.styles";

export function Button({ children, startIcon, endIcon, ...props }) {
	return (
		<Container {...props}>
			<span>{startIcon}</span>
			{children}
			<span>{endIcon}</span>
		</Container>
	);
}
