import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

	const onAddCategory = ( newCategory ) => {
		console.log(newCategory);
		if( categories.includes(newCategory) ) return;

		setCategories([ newCategory, ...categories]);
	}
	
	return (
		<>
			<h1>GifApp</h1>

				<AddCategory 
					// setCategories={ setCategories }
					onNewCategory = {( value ) => onAddCategory(value)}
				/>

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
