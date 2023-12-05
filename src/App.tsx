import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input id="name" label="your name" type="text" ref={inputRef} />
      <Input id="age" label="your age" type="number" />
      <Button>A Button</Button>
      <Button href="https://google.com" target="_blank">
        A link
      </Button>
      <Container
        as={Button}
        onClick={() => console.log("clicked!")}
        type="button"
      >
        Click me
      </Container>
    </main>
  );
}

export default App;
