import styled from "styled-components";

export const Status = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 24px;
`;

export const Title = styled.div`
	margin: 20px 0;
	text-align: center;
	font-size: 24px;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 15px;
	margin-bottom: 15px;
`;
