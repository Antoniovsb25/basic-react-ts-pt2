import { type Timer } from "../store/timer-context.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({ name, duration }: Timer) {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
