import { BsFillCreditCardFill} from 'react-icons/bs';
const ToCardItem = ({ cardholder , cardnumber, date, cvc}) => {
  return (
    <div>
      <p className="conteiner-checkout-payment-text">
      {cardholder}
      {cardnumber}
      {date}
      {cvc}
      </p>
    </div>
  );
};

export default ToCardItem ;
