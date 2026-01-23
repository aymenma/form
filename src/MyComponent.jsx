import MyInput from "./myInputs";
export default function MyComponent({ value, hundelChange, lableName }) {
  return (
    <>
      
      <MyInput
        x={value}
        z={hundelChange}
        y={lableName}
      />
      
    </>
  );
}
