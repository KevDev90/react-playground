import React from 'react';
import ReactDOM from 'react-dom';
import Demonym from './Demonym';
import renderer from 'react-test-renderer';

describe('demonym component', () => {

	// Smoke test
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Demonym  />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	// Snapshot
	// it('renders a card as expected', () => {
	// 	const tree = renderer.create(
	// 		<Card title="title" content="content" />
	// 	).toJSON();
	// 	expect(tree).toMatchSnapshot();
	// });

}); 