export default function UseMemoDemo() { const { useState, useMemo } = React;

const [number, setNumber] = useState(0); const [dark, setDark] = useState(false);

// Expensive calculation const squareNumber = useMemo(() => { console.log("Calculating..."); return slowFunction(number); }, [number]);

const themeStyle = { backgroundColor: dark ? "#1e293b" : "#f8fafc", color: dark ? "white" : "black", padding: "20px", marginTop: "20px", borderRadius: "12px", transition: "0.3s ease", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", };

return ( <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to right, #2563eb, #7c3aed)", }} > <div style={{ background: "white", padding: "30px", borderRadius: "16px", width: "350px", textAlign: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.25)", }} > <h1 style={{ color: "#2563eb", marginBottom: "20px" }}> useMemo Hook Demo </h1>

<input
      type="number"
      value={number}
      onChange={(e) => setNumber(Number(e.target.value))}
      placeholder="Enter a number"
      style={{
        width: "90%",
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        marginBottom: "15px",
        fontSize: "16px",
      }}
    />

    <h2>Square: {squareNumber}</h2>

    <button
      onClick={() => setDark(!dark)}
      style={{
        marginTop: "15px",
        padding: "10px 18px",
        border: "none",
        borderRadius: "8px",
        background: "#2563eb",
        color: "white",
        fontSize: "15px",
        cursor: "pointer",
      }}
    >
      Toggle Theme
    </button>

    <div style={themeStyle}>
      <p>
        This section changes theme without recalculating the square value.
      </p>
    </div>
  </div>
</div>

); }
