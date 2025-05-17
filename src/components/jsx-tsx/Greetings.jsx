function Greeting({ name, age }) {
    const [isHappy, setIsHappy] = useState(false);
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <button onClick={() => setIsHappy(!isHappy)}>
          {isHappy ? "😊" : "😢"}
        </button>
      </div>
    );
  }