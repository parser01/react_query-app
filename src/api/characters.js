import axios from "axios";

export async function getCharacters(page) {
	const response = await axios.get(
		`https://rickandmortyapi.com/api/character/?page=${page}`
	);
	return response.data;
}
