import { Container } from "./Typography.styles";

export function Typography({ children, component, ...props }) {
	return (
		<Container as={component} {...props}>
			{children}
		</Container>
	);
}
