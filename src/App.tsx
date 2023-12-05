import { useRef } from "react";
import Button from "./components/Button";
// import Container from "./components/Container";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log("extractedData:", extractedData);
    formRef.current?.clear();
  };

  return (
    <main>
      <Form ref={formRef} onSave={handleSave}>
        <Input id="name" label="your name" type="text" ref={inputRef} />
        <Input id="age" label="your age" type="number" />
        <Button>Save</Button>
        {/* <Button href="https://google.com" target="_blank">
          A link
        </Button>
        <Container
          as={Button}
          onClick={() => console.log("clicked!")}
          type="button"
        >
          Click me
        </Container> */}
      </Form>
    </main>
  );
}

export default App;
