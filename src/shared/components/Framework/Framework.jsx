import { Container } from "./Framework.styles";

export function Framework({ label, color, margin }) {
	return (
		<Container color={color} margin={margin}>
			{label}
		</Container>
	);
}
