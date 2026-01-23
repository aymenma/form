export default function Model({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div id="model">
        <div id="model-content">
          {/* <h1>The Form Been Submitted Successfully </h1> */}
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The Form Been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
