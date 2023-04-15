import { Base } from "../../shared/styles/Base.styles";
import { Container } from "./Main.styles";

export function Main({ children }) {
	return (
		<Container>
			<Base>{children}</Base>
		</Container>
	);
}
