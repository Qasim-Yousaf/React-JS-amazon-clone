import React ,{useEffect , useState} from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  
  const [{basket}, dispatch] = useStateValue();
  let [total , setTotal]  = useState(0);

useEffect ( () => {
countTotal(); 
},[basket]); 

const countTotal = () => {
  let amount = 0;

  for (let index = 0; index < basket.length; index++) {
    amount = basket[index].price + amount;
  }
  setTotal(amount)

}

  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2} 
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p className="subtotal_txt">
              Subtotal (0 items) : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order Contains  a gift
            </small>
          </>
        )}
      />

      <button onClick={ () =>{console.log('press')}}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
