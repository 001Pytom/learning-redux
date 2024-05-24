import { useSelector } from "react-redux";
// import store from "../../store";

function Customer() {
  // to read data from the store
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
