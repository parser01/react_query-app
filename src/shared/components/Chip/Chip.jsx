import { Container } from "./Chip.styles";

export function Chip({ icon, label }) {
	return (
		<Container>
			<span>{icon}</span>
			{label}
		</Container>
	);
}
