import Counter from "./Counter";

type GreetingProps = {
    name: string;
    age: number;
}
const Greetings = ({name, age}: GreetingProps) => {
  return (
    <>
    <div>Hello, {name}! You are {age} years old.</div>
    <Counter/>
    </>
  )
}

export default Greetings