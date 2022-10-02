import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

  getGifs(category);

  const gifs = [1,2,3,4,5,]
  // aCcgjEvLm31bTMbLOVJQ5w1daf3u39m3
  return (
    <>
      <h3>{ category }</h3>      
    </>
  )
}

