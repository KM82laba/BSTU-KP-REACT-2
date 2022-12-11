const ToAdressItem = ({ name , street, city, country}) => {
  return (
    <div>
      <span>{name}</span>
      <span>{street}</span>
      <span>{city}</span>
      <span>{country}</span>
    </div>
  );
};

export default ToAdressItem ;
