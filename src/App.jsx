import LandingPage from './Pages/LandingPage';
// import {  PreviewProvider } from '@dowelllabs/dowell-living-lab-maps/Context/PreviewContext';
import { PreviewProvider } from "./Context/PreviewContext";

function App() {
  return (
    <PreviewProvider>
      <LandingPage />
    </PreviewProvider>
  );
}

export default App;
