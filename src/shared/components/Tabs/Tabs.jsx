import { Tab } from "../../styles/Tab.styles";
import { Container } from "./Tabs.styles";

export function Tabs({ children, ariaLabel, activeColor, value, onChange }) {
	return (
		<Container aria-label={ariaLabel}>
			{children.map((child, index) => (
				<Tab
					key={index}
					activeColor={activeColor}
					active={value === index}
					onClick={() => onChange(index)}
				>
					{child.props.children}
				</Tab>
			))}
		</Container>
	);
}
