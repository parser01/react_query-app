import { Flex } from "../../shared/styles/Flex.styles";
import {
	LeftContainer,
	List,
	ListItem,
	RightContainer,
} from "./UserProfile.styles";
import { Avatar } from "../../shared/components/Avatar/Avatar";
import { Typography } from "../../shared/components/Typography/Typography";
import { Button } from "../../shared/components/Button/Button";
import { Chat } from "../../assets/icons/Chat";
import { User } from "../../assets/icons/User";
import { Star } from "../../assets/icons/Star";
import { MapPin } from "../../assets/icons/MapPin";
import { Cake } from "../../assets/icons/Cake";
import { socialMedia } from "../../constants/socialMedia";
import { Link } from "../../shared/styles/Link.styles";
import { Tabs } from "../../shared/components/Tabs/Tabs";
import { tabs } from "../../constants/tabs";
import { useState } from "react";
import { Chip } from "../../shared/components/Chip/Chip";
import { Team } from "../../assets/icons/Team";
import { ExternalLink } from "../../assets/icons/ExternalLink";
import { Framework } from "../../shared/components/Framework/Framework";
import { frameworkColors } from "../../constants/frameworkColors";
import { programmingLanguages } from "../../constants/programmingLanguages";
import { Language } from "../../shared/components/Language/Language";

export function UserProfile(props) {
	const [tabIndex, setTabIndex] = useState(0);

	const handleTabChange = (index) => {
		setTabIndex(index);
	};

	return (
		<Flex justify="center">
			<LeftContainer>
				<Flex direction="column" grow="1">
					<Flex direction="column" align="center" margin="0 0 24px">
						<Avatar
							src={props.avatar}
							alt="Nikita Maksimov"
							size="100px"
						/>
						<Typography
							margin="24px 0 8px"
							color="#fff"
							size="20px"
							align="center"
						>
							{props.name} {props.surname}
						</Typography>
						<Typography color="#fff" size="14px" align="center">
							{props.username}
						</Typography>
					</Flex>
					<Button
						width="100%"
						height="40px"
						border="2px solid #46a11b"
						borderRadius="10px"
						color="#fff"
						margin="0 0 33px"
						endIcon={<Chat />}
					>
						Message
					</Button>
					<List>
						<ListItem>
							<span>
								<User />
							</span>
							<Typography
								component="span"
								color="#fff"
								margin="0 0 0 12px"
							>
								{props.occupation}
							</Typography>
						</ListItem>
						<ListItem>
							<span>
								<Star />
							</span>
							<Typography
								component="span"
								color="#fff"
								margin="0 0 0 12px"
							>
								{props.experience} of experience
							</Typography>
						</ListItem>
						<ListItem>
							<span>
								<MapPin />
							</span>
							<Typography
								component="span"
								color="#fff"
								margin="0 0 0 12px"
							>
								{props.location}
							</Typography>
						</ListItem>
						<ListItem>
							<span>
								<Cake />
							</span>
							<Typography
								component="span"
								color="#fff"
								margin="0 0 0 12px"
							>
								{props.age} years old
							</Typography>
						</ListItem>
						<ListItem>
							<span>
								<Cake />
							</span>
							<Typography
								component="span"
								color="#fff"
								margin="0 0 0 12px"
							>
								{props.email}
							</Typography>
						</ListItem>
					</List>
					{props.socialMedia.length && (
						<Flex justify="center" align="center" margin="0 -13px">
							{props.socialMedia.map((item, index) => (
								<Link
									key={index}
									aria-label={item.ariaLabel}
									href={item.link}
									margin="0 13px"
								>
									{socialMedia[item.name]}
								</Link>
							))}
						</Flex>
					)}
				</Flex>
			</LeftContainer>
			<RightContainer>
				<Tabs
					ariaLabel="Tabs of the user profile info"
					activeColor="#5bd424"
					value={tabIndex}
					onChange={handleTabChange}
				>
					{tabs.map((tab, index) => (
						<div key={index}>{tab}</div>
					))}
				</Tabs>
				{tabIndex === 0 && (
					<Flex direction="column" margin="29px 0 0">
						<Flex direction="column" margin="0 0 16px">
							<Typography color="#fff" margin="0 0 8px">
								About me
							</Typography>
							<Typography component="p" color="#fff" size="14px">
								{props.about}
							</Typography>
						</Flex>
						{props.team && (
							<Flex align="center" margin="0 0 16px">
								<Typography color="#fff" margin="0 16px 0 0">
									Team
								</Typography>
								<Chip icon={<Team />} label={props.team} />
							</Flex>
						)}
						{props.projects.length && (
							<Flex direction="column" margin="0 0 16px">
								<Typography color="#fff" margin="0 0 8px">
									Projects
								</Typography>
								<Flex wrap="wrap">
									{props.projects.map((project, index) => (
										<Link
											key={index}
											aria-label={project.name}
											href="#"
											margin="0 8px 8px 0"
										>
											<Chip
												icon={<ExternalLink />}
												label={project.name}
											/>
										</Link>
									))}
								</Flex>
							</Flex>
						)}
						{props.frameworks.length && (
							<Flex direction="column" margin="-8px 0 16px">
								<Typography color="#fff" margin="0 0 8px">
									Frameworks
								</Typography>
								<Flex maxWidth="316px" wrap="wrap">
									{props.frameworks.map((framework, index) => (
										<Framework
											key={index}
											label={framework}
											color={frameworkColors[framework]}
											margin="0 8px 8px 0"
										/>
									))}
								</Flex>
							</Flex>
						)}
						{props.frameworks.length && (
							<Flex direction="column" margin="-8px 0 16px">
								<Typography color="#fff" margin="0 0 8px">
									Languages
								</Typography>
								<Flex maxWidth="316px" wrap="wrap">
									{props.languages.map((language, index) => (
										<Language
											key={index}
											icon={programmingLanguages[language]}
											margin="0 8px 8px 0"
										/>
									))}
								</Flex>
							</Flex>
						)}
					</Flex>
				)}
				{tabIndex === 1 && (
					<Flex direction="column" margin="29px 0 0">
						<Typography color="#fff" margin="0 0 8px">
							The second tab
						</Typography>
					</Flex>
				)}
			</RightContainer>
		</Flex>
	);
}
