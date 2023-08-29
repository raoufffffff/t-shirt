import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';
import Back from './back';
import CameraRing from './camera';
import Shirt from './shirt';

const CanvasModel = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
        <CameraRing >
          <Back />
          <Center>
            <Shirt />
          </Center>
        </CameraRing>
      </Canvas>
    </>
  )
}

export default CanvasModel