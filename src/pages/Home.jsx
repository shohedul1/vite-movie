import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import HorizontallScollCard from '../components/HorizontallScollCard'
import useFetch from '../hook/useFech'

const Home = () => {
  const trandingData = useSelector(state => state.movieoData.bannerData);
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRatedData } = useFetch("/movie/top_rated");
  const { data: popularTvShowData } = useFetch("/tv/popular");
  const { data: OnTheAirData  } = useFetch("/tv/on_the_air");




  return (
    <div>
      <BannerHome />
      <HorizontallScollCard data={trandingData} heading={"Trending"} trending={true} />
      <HorizontallScollCard data={nowPlayingData} heading={"Now Playing"} trending={false} />
      <HorizontallScollCard data={topRatedData} heading={"Top Rate Movies"} trending={false} />
      <HorizontallScollCard data={popularTvShowData} heading={"Popular Tv Show"} trending={false} />
      <HorizontallScollCard data={OnTheAirData} heading={"On The Air"} trending={false} />





    </div>
  )
}

export default Home