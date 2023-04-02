import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@material-ui/icons";

import './ListItem.scss';

const ListItem = ({image, index}) => {
    return (
        <div className='listItem' style={{ left: index * 225 - 50 + index * 2.5 }}>
            <img
                src={image}
                alt=""
            />

            <div className='itemCard'>
                <video src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"></video>
                <div className="itemInfo">
                    <div className="itemIcons">
                        <PlayArrow className="icon" />
                        <Add className="icon" />
                        <ThumbUpAltOutlined className="icon" />
                        <ThumbDownOutlined className="icon" />
                    </div>
                    <div className="itemInfoTop">
                        <span>1 hour 14 mins</span>
                        <span className="limit">+16</span>
                        <span>1999</span>
                    </div>
                    <span className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium hic rem eveniet error possimus, neque ex doloribus.</span>
                    <span className="genre">Action</span>
                </div>
            </div>
        </div>
    )
}

export default ListItem
