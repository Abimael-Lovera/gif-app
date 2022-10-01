import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

	
	return (
		<>
			<h1>GifApp</h1>

				<AddCategory setCategories={ setCategories }/>

			<ol>
				{
					categories.map((category) => {
						return <li key={category}>{category}</li>;
					})
				}
			</ol>
		</>
	);
};
