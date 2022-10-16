import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {
	const [categories, setCategories] = useState(['Dragon Ball']);

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

				{
					categories.map((category) => 
						(
							<GifGrid 
								key={ category }
								category={ category }
							/>
						)
					)
				}
		</>
	);
};
