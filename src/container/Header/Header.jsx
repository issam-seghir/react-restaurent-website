import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
	<div className="app__header app__wrapper section__padding" id="home">
		<div className="app__wrapper_info">
			<SubHeading title="🐔 Bienvenue chez <span class='golden'>O'Poulet </span>🐔" />
			<h1 className="app__header-h1">Crousti 100% </h1>
			<h1 className="app__header-h1">Fait Maison !</h1>
			<p className="p__opensans" style={{ margin: "2rem 0" }}>
				Chez <span className="golden">O'Poulet</span>, nous avons fait le choix du{" "}
				<span className="golden">fait maison</span> pour vous offrir le meilleur du poulet rôti.<br/> Que ce soit les
				épices savamment dosées, les marinades riches en saveurs, ou nos accompagnements uniques — tout est
				préparé sur place avec passion et savoir-faire.{" "}
			</p>
			<button type="button" className="custom__button">
				Explore Menu
			</button>
		</div>

		<div className="app__wrapper_img">
			<img src={"https://assets.lummi.ai/assets/QmVow9RLvfYE5Fky5HZV2Axo1GKU7919Jh5eEsUqYAjrNT?auto=format&w=1500"} alt="header_img" />
		</div>
	</div>
);

export default Header;
