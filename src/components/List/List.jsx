import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../ListItem/ListItem';
import './List.scss';


const List = ({items}) => {
  return (
    <div className='list'>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left'/>
        <div className="container">
            {items.map((item, index) => {
                return <ListItem image={item.image} index={index} />
            })}
        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' />
      </div>
    </div>
  )
}

export default List
