import { Suspense, lazy } from 'react';
import Drawing from './Pages/Drawing';
import Square from './Pages/Square';
import SnowMan from './Pages/SnowMan';
import AnimateCircle from './Pages/AnimateCircle';
const GifCreator = lazy(()=>import('./Pages/GifCreator')) ;

function App() {
  return (
   <Suspense fallback={<div>Loading...</div>}>
    {/* <Drawing/> */}
    {/* <Square/> */}
    {/* <SnowMan/> */}
    {/* <AnimateCircle/> */}
    <GifCreator/>
   </Suspense>
  );
}

export default App;
