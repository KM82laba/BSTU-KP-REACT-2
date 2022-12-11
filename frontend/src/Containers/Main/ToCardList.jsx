import { useSelector } from 'react-redux';
import ToCardItem  from './ToCardItem';


const ToCardList = () => {
    const tocards = useSelector(state => state.tocards.tocards);
    
  return (
    <div>
      {tocards.map((item , index)=>(
        <ToCardItem
          key={index}
          {...item}
          />
        ))}
    </div>
  );
};

export default ToCardList;
