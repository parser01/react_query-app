import { Base } from "../../shared/styles/Base.styles";
import { BurgerContainer, Container } from "./Header.styles";
import { Flex } from "../../shared/styles/Flex.styles";
import { Burger } from "../../assets/icons/Burger";
import { Button } from "../../shared/components/Button/Button";
import { ArrowBack } from "../../assets/icons/ArrowBack";
import { Link } from "../../shared/styles/Link.styles";
import { SiteLogo } from "../../assets/SiteLogo";

export function Header() {
	return (
		<Container>
			<Base>
				<Flex>
					<BurgerContainer>
						<Burger />
					</BurgerContainer>
					<Button
						width="89px"
						height="43px"
						color="#fff"
						fontSize="15px"
						startIcon={<ArrowBack />}
					>
						BACK
					</Button>
					<Flex align="center" justify="center" grow="1" margin="0 25px">
						<Link href="#">
							<SiteLogo />
						</Link>
					</Flex>
				</Flex>
			</Base>
		</Container>
	);
}
