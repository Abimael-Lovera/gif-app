import { useState } from 'react';

export const GifApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
	console.log(categories);
	return (
		<>
			<h1>GifApp</h1>
			<ol>
				{
					categories.map((category) => {
						return <li key={category}>{category}</li>;
					})
				}
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ol>
		</>
	);
};
