import { useSelector } from 'react-redux';
import ToAdressItem  from './ToAdressItem';

const ToAdressList = () => {
    const toadresss = useSelector(state => state.toadresss.toadresss);
   
  return (
    <div>
      {toadresss.map((item , index)=>(
        <ToAdressItem
          key={index}
          {...item}
          />
        ))}
      
    </div>
  );
};

export default ToAdressList;
