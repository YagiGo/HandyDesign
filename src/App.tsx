import React from 'react';
import './Style/App.css';
import DragAndUploadWithModal from "./Components/DragAndUpload/DragAndUploadWithModal";
import {ResponsiveSideBar} from "./Components/ResponsiveSideBar/ResponsiveSideBar";

function App() {
  return (
    <div className="App">
        <ResponsiveSideBar />
    </div>
  );
}

export default App;

