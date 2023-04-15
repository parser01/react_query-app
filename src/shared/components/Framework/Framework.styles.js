import styled from "styled-components";

export const Container = styled.div`
	padding: 6px 25px;
	border-radius: 5px;
	margin: ${({ margin }) => margin};
	background-color: ${({ color }) => color};
	color: #fff;
	font-size: 16px;
	line-height: 1.2;
`;
