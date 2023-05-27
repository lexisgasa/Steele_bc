import { useState } from "react"

export default function ShoppingListForm({addItem}){

    const [formData, setFormData] = useState({product: "", quantity: 0})
    const handleChange = e => {
        setFormData(currentData => {
            return {
                ...currentData,
                [e.target.name] : e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
    }
    return (
        <form onSubmit={handleSubmit} >
            <h1>Product is: {formData.product} and quantity is {formData.quantity}</h1>
            <section>
            <label htmlFor="product">Product name:</label>
            <input type="text" placeholder="product name.." name="product" id="product" onChange={handleChange}
            value={formData.product}/>
            </section>
            <section>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" name="quantity" id="quantity" onChange={handleChange}
            value={formData.quantity}/>
            </section>
            <button>Add item</button>
        </form>
    )
}