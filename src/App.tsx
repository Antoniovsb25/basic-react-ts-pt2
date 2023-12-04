import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="your name" type="text" />
      <Input id="age" label="your age" type="number" />
      <Button el="button">A Button</Button>
      <Button el="anchor" href="https://google.com" target="_blank">
        A link
      </Button>
    </main>
  );
}

export default App;
