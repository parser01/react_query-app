import { Container } from "./App.styles";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { UserProfile } from "../UserProfile/UserProfile";
import { user } from "../../data";

export function App() {
	return (
		<Container>
			<Header />
			<Main>
				<UserProfile {...user} />
			</Main>
		</Container>
	);
}
