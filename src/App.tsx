import React from 'react';
import './Style/App.css';
import DragAndUploadWithModal from "./Components/DragAndUpload/DragAndUploadWithModal";
import {ResponsiveSideBar} from "./Components/ResponsiveSideBar/ResponsiveSideBar";
import CircularNavigation from "./Components/CircularNavigation/CircularNavigation";
import GlassmorphismCard from "./Components/GlassmorphismCard/GlassmorphismCard";

function App() {
  return (
    <div className="App">
        {/*<DragAndUploadWithModal />*/}
        {/*<ResponsiveSideBar />*/}
        {/*<CircularNavigation />*/}
        <GlassmorphismCard />
    </div>
  );
}

export default App;

