import React, { useState } from 'react';
import Input from '../ui/Input';

const BuyForm = () => {
    const [quantity,setQuantity] = useState("");
    // const [quantity,setQuantity] = useState("");


    return (
        <div>
             <Input
             label="Quantity"
             id="quantity"
             options={products}
             value={quantity}
             onChange={(e) => setName(e.target.value)}
              />
             <Input />
        </div>
    );
};

export default BuyForm;