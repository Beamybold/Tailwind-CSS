import React from "react";
import Button from "./Btn";

function App() {
  return (
    <div className="space-y-4 p-6">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="primary" size="large">Large Button</Button>
      <Button variant="primary" size="small">Small Button</Button>
    </div>
  );
}

export default App;
