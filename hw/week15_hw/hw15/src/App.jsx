import { useState } from "react";
import MapContainer from "./components/MapContainer";
import "./App.css";

function App() {
  const [submitData, setSubmitData] = useState(null);

  return (
    <div>
      <MapContainer
        title="🔎 카카오 내비게이션 "
        locationInput={submitData}
        onFormSubmit={setSubmitData}
      />
    </div>
  );
}

export default App;
