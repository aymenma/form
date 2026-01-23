import MyInput from "./myInputs";
export default function MyComponent({ value, hundelChange, lableName }) {
  return (
    <>
      <h1>header {value} </h1>
      <MyInput
        x={value}
        z={hundelChange}
        y={lableName}
      />
      <h1>footer</h1>
    </>
  );
}
