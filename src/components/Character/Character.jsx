import { memo } from "react";
import { Container, Info } from "./Character.styles";

export const Character = memo(function Character({ character }) {
	return (
		<Container>
			<Info>Name: {character.name}</Info>
			<Info>Status: {character.status}</Info>
			<Info>Gender: {character.gender}</Info>
			<Info>Episodes: {character.episode.length}</Info>
		</Container>
	);
});
