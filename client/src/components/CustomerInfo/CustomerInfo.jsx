import React from 'react';

function CustomerInfo (Props) {
  return <div>{Props.customer ? <h1>{Props.customer.giveName}</h1> : <p>test</p>}</div>;
}
export default CustomerInfo;
