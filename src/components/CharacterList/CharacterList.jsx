import { useQuery } from "react-query";
import { Character } from "../Character/Character";
import { Grid, Status, Title } from "./CharacterList.styles";
import { Pagination } from "@mui/material";
import { useMemo, useState } from "react";
import { getCharacters } from "../../api/characters";
import { SearchInput } from "../UI/SearchInput";

export function CharacterList() {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);

	const { isLoading, isError, data } = useQuery({
		queryKey: ["characters", page],
		queryFn: () => getCharacters(page),
		keepPreviousData: true,
	});

	const characters = useMemo(() => {
		return data?.results || [];
	}, [data]);

	const searchedCharacters = useMemo(() => {
		return characters.filter((character) => {
			return character.name.toLowerCase().includes(search.toLowerCase());
		});
	}, [search, characters]);

	if (isLoading) {
		return <Status>Loading...</Status>;
	}

	if (isError) {
		return <Status>Error</Status>;
	}

	return (
		<div>
			<SearchInput
				characters={characters}
				search={search}
				setSearch={setSearch}
			/>
			<Title>Characters</Title>
			<Grid>
				{searchedCharacters.map((character) => (
					<Character key={character.id} character={character} />
				))}
			</Grid>
			<Pagination
				count={data.info.pages}
				page={page}
				onChange={(e, value) => setPage(value)}
				showFirstButton
				showLastButton
				variant="outlined"
				size="large"
			/>
		</div>
	);
}
