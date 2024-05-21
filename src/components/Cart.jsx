import moment from 'moment'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Cart = ({ data, index, trending }) => {
    const imageURL = useSelector(state => state.movieoData.imageURL);


    return (
        <Link to={"/" + data.media_type + "/" + data.id} className='w-full max-w-[230px] min-w-[230px] h-80  overflow-hidden  rounded relative'>
            <img src={imageURL + data?.poster_path} alt='image' />
            <div className='absolute top-4'>
                {
                    trending && (
                        <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
                            #{index}Tranding
                        </div>
                    )
                }

            </div>

            <div className='absolute bottom-0 h-14 backdrop-blur-3xl w-full bg-black/50'>
                <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h2>
                <div className='text-sm text-neutral-400 flex justify-between'>
                    <p>{moment(data.release_date).format('MMMM Do YYYY')}</p>
                    <p className='bg-black px-1 rounded-full text-xs text-white'>
                        Rating:{Number(data.vote_average).toFixed(1)}
                    </p>
                    {/* */}
                </div>

            </div>

        </Link>
    )
}

export default Cart