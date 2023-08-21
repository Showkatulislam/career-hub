import { FaShare, FaThumbsUp } from 'react-icons/fa'
const BlockCard = ({cardData}) => {
    const {title,description}=cardData
    return (
        <div className="my-8 text-justify bg-gray-200 p-3 rounded">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{description}</p>
            <p className='flex justify-between text-purple-700 text-2xl items-center my-3'><FaThumbsUp></FaThumbsUp>
            <FaShare></FaShare>
            </p>
        </div>
    );
};

export default BlockCard;