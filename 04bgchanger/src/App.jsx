import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen transition-colors duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-0 left-2 flex gap-3 border-2 bg-white rounded-3xl p-4 mt-auto">
        <Button btnColor="Red" setColor={setColor} />
        <Button btnColor="Green" setColor={setColor} />
        <Button btnColor="Blue" setColor={setColor} />
        <Button btnColor="Olive" setColor={setColor} />
        <Button btnColor="Gray" setColor={setColor} />
        <Button btnColor="Yellow" setColor={setColor} />
        <Button btnColor="Pink" setColor={setColor} />
        <Button btnColor="Purple" setColor={setColor} />
        <Button btnColor="Lavender" setColor={setColor} />
        <Button btnColor="White" setColor={setColor} />
        <Button btnColor="Black" setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
