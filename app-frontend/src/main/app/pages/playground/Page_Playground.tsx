/*
 * A typescript & react boilerplate with api call example
 *
 * Copyright (C) 2020 Adam van der Kruk aka TacB0sS
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import {
	Playground,
	PlaygroundScreen
} from "@nu-art/thunderstorm/frontend";
import {Page_Home} from "../home/Page_Home";
import {ICONS} from "@res/icons";
import {COLORS} from '@res/colors';

export const selectStyles = {
	container: (provided: any) => ({
		...provided,
		width: 240,
		fontSize: 13,
		outline: "none"
	}),
	control: () => ({
		border: "1px solid",
		color: COLORS.blueGrey,
		display: "flex",
		height: 32,
		fontSize: 13,
		outline: "none"
	}),
	singleValue: (provided: any) => ({
		...provided,
		color: COLORS.blueGrey,
		fontWeight: 500
	}),
	input: (provided: any) => ({
		...provided,
		color: "#fff"
	}),
	option: (provided: any, state: any) => ({
		...provided,
		backgroundColor: "unset",
		color: COLORS.blueGrey,
		':hover': {
			backgroundColor: COLORS.veryLightPink
		}
	}),
};

export class Page_Playground
	extends React.Component<{}> {

	constructor(props: {}) {
		super(props);
		this.state = {};
	}

	render() {
		const screens = this.getScreens();
		return <Playground
			selectStyle={selectStyles}
			iconClose={ICONS.triangle_up(COLORS.veryLightPink, 12)}
			iconOpen={ICONS.triangle_down(COLORS.veryLightPink, 12)}
			screens={screens}
		/>
	}

	getScreens(): PlaygroundScreen[] {
		return [
			{
				name: "Hello",
				getNode: () => <Page_Home/>
			},
		];
	}

}