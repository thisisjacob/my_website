import React from 'react';

var NavBar = function NavBar(props) {
	return React.createElement(
		'nav',
		{ 'class': 'navbar navbar-expand-lg navbar-dark bg-primary fixed-top' },
		React.createElement(
			'a',
			{ 'class': 'navbar-brand', href: '#' },
			'Jacob\'s Website'
		),
		React.createElement(
			'ul',
			{ 'class': 'navbar-nav' },
			React.createElement(
				'li',
				{ 'class': 'nav-item active' },
				React.createElement(
					'a',
					{ 'class': 'nav-link', href: '#' },
					'Home'
				)
			)
		)
	);
};

ReactDOM.render(NavBar, document.getElementById('navigation'));
