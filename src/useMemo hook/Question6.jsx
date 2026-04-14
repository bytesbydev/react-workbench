import React, { useMemo, useState } from 'react'

const items = [
  { name: "Laptop", price: 99989 },
  { name: "Mobile", price: 10999 },
  { name: "Bike cover", price: 999 },
  { name: "Shampoo", price: 389 },
  { name: "bag", price: 2000 },
  { name: "headphone", price: 1000 },
  { name: "Watches", price: 499 }
]

const Question6 = () => {

  const [cart, setCart] = useState([])

  const add = (item) => {
    setCart(prev => [...prev, item])
  }

  const remove = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  const total = useMemo(() => {
    let sum = 0
    cart.forEach(item => sum += item.price)
    return sum
  }, [cart])

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
      fontFamily: "Segoe UI"
    }}>

      <div style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        width: "340px"
      }}>

        <h2 style={{ textAlign: "center" }}>🛒 Shopping Cart</h2>

        <h4>Products:</h4>
        {items.map((item, index) => (
          <div key={index} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "5px 0",
            padding: "5px",
            background: "#f5f7ff",
            borderRadius: "6px"
          }}>
            <span>{item.name} - ₹{item.price}</span>
            <button
              onClick={() => add(item)}
              style={{
                padding: "4px 8px",
                border: "none",
                borderRadius: "5px",
                background: "#4facfe",
                color: "white",
                cursor: "pointer"
              }}
            >
              Add
            </button>
          </div>
        ))}

        <h4 style={{ marginTop: "10px" }}>Cart:</h4>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "5px 0",
              padding: "5px",
              background: "#fff3e0",
              borderRadius: "6px"
            }}>
              <span>{item.name} - ₹{item.price}</span>
              <button
                onClick={() => remove(index)}
                style={{
                  padding: "4px 8px",
                  border: "none",
                  borderRadius: "5px",
                  background: "#ff6b6b",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p style={{ color: "#999" }}>Cart is empty</p>
        )}

        <h3 style={{
          marginTop: "10px",
          textAlign: "center",
          color: "#333"
        }}>
          Total: ₹{total}
        </h3>

      </div>
    </div>
  )
}

export default Question6