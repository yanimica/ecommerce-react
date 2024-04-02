import cart from "../assets/cartBlanco.png";

export const CartWidget = () => {
  return (
    <>
      <img
        className="img-carrito"
        src={cart}
        alt="img cart"
        style={{ width: "25px" }}
      />
      <span className="numero-carrito"> 5 </span>
    </>
  );
};
