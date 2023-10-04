
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsPaper = ({value}) => {


    const {title,image_url,details,_id}=value
    return (
        <div>
           <div className="card w-full bg-base-100 shadow-xl my-10 bottom-2">
           <figure><img src={image_url} className='w-full h-80' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {details.length>200 ?<p>{details.slice(0,200)}
     <Link to={`/news/${_id}`} className='text-xl font-bold text-blue-900'>More details...</Link></p>:<p>{details}</p>}
   
  </div>
</div>
        </div>
    );
};
NewsPaper.propTypes={
    value:PropTypes.object
}
export default NewsPaper;