import React from "react";

function App() {
  const [color, setColor] = React.useState("white");
  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center
gap-3 shadow-lg bg-white px-3 py-2 rounded-3x1">
          <button
          onClick={() => setColor("RED")}
            className="outline-none px-4 py-1
rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >Red</button>I
                    <button
          onClick={() => setColor("BLUE")}
            className="outline-none px-4 py-1
rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >Blue</button>I
                    <button
          onClick={() => setColor("GREEN")}
            className="outline-none px-4 py-1
rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >Purple</button>I
        </div>
      </div>
    </div>
  )
}
export default App
