import "./App.css";
import PhoneNumber from "./components/phone number/PhoneNumber";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PhoneNumber />
    </div>
  );
}

export default App;
