import * as THREE from 'three';
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Scene({ isDarkMode = true, ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/IkLyWrRJs1Uq5Ge6/scene.splinecode')

  const sceneRef = useRef();
  const cameraRef = useRef();
  const roofCupRef = useRef();

  useFrame((state, delta) => {
    if (cameraRef.current) {
      const { pointer } = state;
      const newPosition = [pointer.x * 2, 1 + pointer.y * 1.5, 16 + Math.atan(pointer.x * 2)];
      cameraRef.current.position.lerp(new THREE.Vector3(...newPosition), 0.1);
      cameraRef.current.lookAt(sceneRef.current.position);
    }

    if (roofCupRef.current) {
      roofCupRef.current.rotation.y += delta * 0.5; // Adjust rotation speed by changing 0.5
    }
  });

  return (
    <>
      {/* <color attach="background" args={['#1D1D1F']} /> */}
      <color attach="background" args={[isDarkMode ? '#2B273F' : '#FFB88C']} />
      <group {...props} dispose={null} position={[10, 1, 0]}>
        <scene name="Scene 1" ref={sceneRef}>
          <pointLight position={[10, 10, 10]} intensity={10} color="#8B0000" />
          <group name="cafe scene" position={[-170, -260, 0]} scale={0.6} rotation={[0, 0, 0]}>
            <group name="Cafe sign post" position={[-306.61, 213.02, 550.48]} rotation={[0, Math.PI / 9, 0.09]} scale={1}>
              <group name="Sign 2" position={[-8.27, 8.37, -10.85]} rotation={[Math.PI, 0, 2.79]} scale={0.74}>
                <mesh
                  name="Text"
                  geometry={nodes.Text.geometry}
                  material={materials['Text Material']}
                  castShadow
                  receiveShadow
                  position={[-7.65, 6.09, 5.26]}
                />
                <mesh
                  name="Wooden Post"
                  geometry={nodes['Wooden Post'].geometry}
                  material={materials['Wooden Post Material']}
                  castShadow
                  receiveShadow
                  position={[-93.62, 27.37, -5.26]}
                />
              </group>
              <group name="Coffee Sign" position={[10.85, 105.67, 10.9]} rotation={[0, 0, 0.17]} scale={1}>
                <mesh
                  name="Text1"
                  geometry={nodes.Text1.geometry}
                  material={materials['Text1 Material']}
                  castShadow
                  receiveShadow
                  position={[-7.65, 6.09, 5.26]}
                />
                <mesh
                  name="Wooden Post1"
                  geometry={nodes['Wooden Post1'].geometry}
                  material={materials['Wooden Post1 Material']}
                  castShadow
                  receiveShadow
                  position={[-93.62, 27.37, -5.26]}
                />
              </group>
              <mesh
                name="Cylinder"
                geometry={nodes.Cylinder.geometry}
                material={materials['Cylinder Material']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.2, 1, 0.2]}
              />
            </group>
            <group name="Building Bricks" position={[371.55, 285.06, 312.75]}>
              <mesh
                name="Brick 9"
                geometry={nodes['Brick 9'].geometry}
                material={materials['Brick 9 Material']}
                castShadow
                receiveShadow
                position={[-535.82, 130.09, 57.34]}
                rotation={[0, 0, 0]}
                scale={[1, 0.38, 0.43]}
              />
              <mesh
                name="Brick 7"
                geometry={nodes['Brick 7'].geometry}
                material={materials['Brick 7 Material']}
                castShadow
                receiveShadow
                position={[-145.19, 147.96, 57.34]}
                rotation={[0, 0, 0]}
                scale={[1, 0.38, 0.43]}
              />
              <mesh
                name="Brick 6"
                geometry={nodes['Brick 6'].geometry}
                material={materials['Brick 6 Material']}
                castShadow
                receiveShadow
                position={[0, 151.62, -593.85]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 0.38, 0.43]}
              />
              <mesh
                name="Brick 5"
                geometry={nodes['Brick 5'].geometry}
                material={materials['Brick 5 Material']}
                castShadow
                receiveShadow
                position={[0, 132.47, -520.13]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 0.38, 0.43]}
              />
              <mesh
                name="Brick 2"
                geometry={nodes['Brick 2'].geometry}
                material={materials['Brick 2 Material']}
                castShadow
                receiveShadow
                position={[0, 40.6, -15.97]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 0.38, 0.43]}
              />
              <mesh
                name="Brick 4"
                geometry={nodes['Brick 4'].geometry}
                material={materials['Brick 4 Material']}
                castShadow
                receiveShadow
                position={[0, 147.49, -331.65]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 0.38, 0.43]}
              />
              <mesh
                name="Brick 3"
                geometry={nodes['Brick 3'].geometry}
                material={materials['Brick 3 Material']}
                castShadow
                receiveShadow
                position={[0, -71.68, 11.22]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 0.38, 0.43]}
              />
              <mesh
                name="Brick"
                geometry={nodes.Brick.geometry}
                material={materials['Brick Material']}
                castShadow
                receiveShadow
                position={[0, 71.68, 15.97]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 0.38, 0.43]}
              />
            </group>
            <group name="Cup Floating Pad" position={[4.02, 645.5, -22.21]}>
              <mesh
                name="Top"
                geometry={nodes.Top.geometry}
                material={materials['Top Material']}
                castShadow
                receiveShadow
                position={[0, -1.96, 0]}
              />
              <mesh
                name="Medium"
                geometry={nodes.Medium.geometry}
                material={materials['Medium Material']}
                castShadow
                receiveShadow
                position={[0, -14.41, 0]}
                scale={[1, 0.71, 1]}
              />
              <mesh
                name="Bottom"
                geometry={nodes.Bottom.geometry}
                material={materials['Bottom Material']}
                castShadow
                receiveShadow
                position={[0, -35.59, 0]}
              />
            </group>
            <group name="Vent 2" position={[-332.69, 641.6, 278.06]} scale={0.35}>
              <mesh
                name="Boolean 3"
                geometry={nodes['Boolean 3'].geometry}
                material={nodes['Boolean 3'].material}
                castShadow
                receiveShadow
                position={[0, 45.26, 0]}
              />
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials['Cube Material']}
                castShadow
                receiveShadow
                position={[0, -57.46, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.62, 1, 0.68]}
              />
            </group>
            <group name="Vent" position={[-284.97, 617.72, 298.71]} scale={0.35}>
              <mesh
                name="Boolean 31"
                geometry={nodes['Boolean 31'].geometry}
                material={nodes['Boolean 31'].material}
                castShadow
                receiveShadow
                position={[0, 45.26, 0]}
              />
              <mesh
                name="Cube1"
                geometry={nodes.Cube1.geometry}
                material={materials['Cube1 Material']}
                castShadow
                receiveShadow
                position={[0, -23.35, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.62, 1, 0.68]}
              />
            </group>
            <group name="Side Sign" position={[420.56, 320.45, 314.74]}>
              <mesh
                name="Text2"
                geometry={nodes.Text2.geometry}
                material={materials['Text2 Material']}
                castShadow
                receiveShadow
                position={[7.19, -0.4, 2.93]}
                rotation={[0, 0, -Math.PI / 2]}
              />
              <mesh
                name="Boolean 32"
                geometry={nodes['Boolean 32'].geometry}
                material={nodes['Boolean 32'].material}
                castShadow
                receiveShadow
                position={[13.93, 0, 0]}
              />
              <mesh
                name="Cube 4"
                geometry={nodes['Cube 4'].geometry}
                material={materials['Cube 4 Material']}
                castShadow
                receiveShadow
                position={[-18.74, -33.73, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.43, 0.52, 0.35]}
              />
              <mesh
                name="Cube 3"
                geometry={nodes['Cube 3'].geometry}
                material={materials['Cube 3 Material']}
                castShadow
                receiveShadow
                position={[-33.02, -33.73, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.52, 0.52, 0.54]}
              />
              <mesh
                name="Cube 2"
                geometry={nodes['Cube 2'].geometry}
                material={materials['Cube 2 Material']}
                castShadow
                receiveShadow
                position={[-18.74, 35.07, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.43, 0.52, 0.35]}
              />
              <mesh
                name="Cube2"
                geometry={nodes.Cube2.geometry}
                material={materials['Cube2 Material']}
                castShadow
                receiveShadow
                position={[-33.02, 35.07, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.52, 0.52, 0.54]}
              />
            </group>
            <group name="Welcome Mat" position={[134.16, 46, 454.79]}>
              <mesh
                name="Text3"
                geometry={nodes.Text3.geometry}
                material={materials['Text3 Material']}
                castShadow
                receiveShadow
                position={[0.17, 1.35, 6.24]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle 4"
                geometry={nodes['Rectangle 4'].geometry}
                material={materials['Rectangle 4 Material']}
                castShadow
                receiveShadow
                position={[0, -2, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
            </group>
            <mesh
              name="Plate 2"
              geometry={nodes['Plate 2'].geometry}
              material={materials['Plate 2 Material']}
              castShadow
              receiveShadow
              position={[330.11, 218.04, -91.3]}
            />
            <mesh
              name="Plate"
              geometry={nodes.Plate.geometry}
              material={materials['Plate Material']}
              castShadow
              receiveShadow
              position={[648.06, 155.91, -5.19]}
            />
            <group name="Cup 5" position={[321.12, 209.65, -227.49]} rotation={[0, 0.8, 0]} scale={0.05}>
              <mesh
                name="Path"
                geometry={nodes.Path.geometry}
                material={materials['Path Material']}
                castShadow
                receiveShadow
                position={[158.2, 146.68, -0.87]}
              />
              <mesh
                name="Cylinder1"
                geometry={nodes.Cylinder1.geometry}
                material={materials['Cylinder1 Material']}
                castShadow
                receiveShadow
                position={[-56.18, -1.29, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
            </group>
            <group name="Cup 3" position={[319.73, 209.65, 26.01]} rotation={[0, -0.35, 0]} scale={0.05}>
              <mesh
                name="Path1"
                geometry={nodes.Path1.geometry}
                material={materials['Path1 Material']}
                castShadow
                receiveShadow
                position={[158.2, 146.68, -0.87]}
              />
              <mesh
                name="Cylinder2"
                geometry={nodes.Cylinder2.geometry}
                material={materials['Cylinder2 Material']}
                castShadow
                receiveShadow
                position={[-56.18, -1.29, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
            </group>
            <group name="Cup 2" position={[330.29, 209.65, 124.27]} rotation={[0, -0.87, 0]} scale={0.05}>
              <mesh
                name="Path2"
                geometry={nodes.Path2.geometry}
                material={materials['Path2 Material']}
                castShadow
                receiveShadow
                position={[158.2, 146.68, -0.87]}
              />
              <mesh
                name="Cylinder3"
                geometry={nodes.Cylinder3.geometry}
                material={materials['Cylinder3 Material']}
                castShadow
                receiveShadow
                position={[-56.18, -1.29, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
            </group>
            <group name="Cup" position={[742.46, 148.18, -39.27]} scale={0.05}>
              <mesh
                name="Path3"
                geometry={nodes.Path3.geometry}
                material={materials['Path3 Material']}
                castShadow
                receiveShadow
                position={[158.2, 146.68, -0.87]}
              />
              <mesh
                name="Cylinder4"
                geometry={nodes.Cylinder4.geometry}
                material={materials['Cylinder4 Material']}
                castShadow
                receiveShadow
                position={[-56.18, -1.29, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
            </group>
            <group name="Roof Box 2" position={[184.35, 630.96, -332]}>
              <mesh
                name="Torus"
                geometry={nodes.Torus.geometry}
                material={materials['Torus Material']}
                castShadow
                receiveShadow
                position={[-2.26, 31.19, 0.88]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 0.55]}
              />
              <mesh
                name="Pipe"
                geometry={nodes.Pipe.geometry}
                material={materials['Pipe Material']}
                castShadow
                receiveShadow
                position={[-0.45, -1.26, 46.73]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Cube 21"
                geometry={nodes['Cube 21'].geometry}
                material={materials['Cube 21 Material']}
                castShadow
                receiveShadow
                position={[-1.36, 30.98, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.5, 0.31, 0.03]}
              />
              <mesh
                name="Cube 41"
                geometry={nodes['Cube 41'].geometry}
                material={materials['Cube 41 Material']}
                castShadow
                receiveShadow
                position={[-0.74, -0.47, 45.81]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.48, 0.17, 0.36]}
              />
              <mesh
                name="Cube 31"
                geometry={nodes['Cube 31'].geometry}
                material={materials['Cube 31 Material']}
                castShadow
                receiveShadow
                position={[31.26, -0.47, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.48, 0.24, 0.36]}
              />
              <mesh
                name="Cube3"
                geometry={nodes.Cube3.geometry}
                material={materials['Cube3 Material']}
                castShadow
                receiveShadow
                position={[-1.36, -0.47, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.48, 0.29, 0.48]}
              />
            </group>
            <group name="Roof Box" position={[273.43, 630.96, -332]}>
              <mesh
                name="Torus1"
                geometry={nodes.Torus1.geometry}
                material={materials['Torus1 Material']}
                castShadow
                receiveShadow
                position={[-2.26, 31.19, 0.88]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 0.55]}
              />
              <mesh
                name="Pipe1"
                geometry={nodes.Pipe1.geometry}
                material={materials['Pipe1 Material']}
                castShadow
                receiveShadow
                position={[-0.45, -1.26, 46.73]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Cube 22"
                geometry={nodes['Cube 22'].geometry}
                material={materials['Cube 22 Material']}
                castShadow
                receiveShadow
                position={[-1.36, 30.98, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.5, 0.31, 0.03]}
              />
              <mesh
                name="Cube 42"
                geometry={nodes['Cube 42'].geometry}
                material={materials['Cube 42 Material']}
                castShadow
                receiveShadow
                position={[-0.74, -0.47, 45.81]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.48, 0.17, 0.36]}
              />
              <mesh
                name="Cube 32"
                geometry={nodes['Cube 32'].geometry}
                material={materials['Cube 32 Material']}
                castShadow
                receiveShadow
                position={[31.26, -0.47, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.48, 0.24, 0.36]}
              />
              <mesh
                name="Cube4"
                geometry={nodes.Cube4.geometry}
                material={materials['Cube4 Material']}
                castShadow
                receiveShadow
                position={[-1.36, -0.47, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.48, 0.29, 0.48]}
              />
            </group>
            <group name="Standup Sign" position={[-15.79, 118.79, 547.7]} rotation={[0, -Math.PI / 2, 0]} scale={1.42}>
              <mesh
                name="Text4"
                geometry={nodes.Text4.geometry}
                material={materials['Text4 Material']}
                castShadow
                receiveShadow
                position={[12.17, 14.83, -0.55]}
                rotation={[-Math.PI / 2, 1.31, Math.PI / 2]}
                scale={0.7}
              />
              <group name="Back" position={[-13.77, -0.36, 0]} scale={[1, 0.99, 1]}>
                <mesh
                  name="Pole 2"
                  geometry={nodes['Pole 2'].geometry}
                  material={materials['Pole 2 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, -34.93]}
                  rotation={[-Math.PI / 2, 0.26, 0]}
                  scale={[0.12, 0.12, 2.21]}
                />
                <mesh
                  name="Back 3"
                  geometry={nodes['Back 3'].geometry}
                  material={materials['Back 3 Material']}
                  castShadow
                  receiveShadow
                  position={[3.63, 13.56, -0.04]}
                  rotation={[-Math.PI / 2, 0.26, 0]}
                  scale={[0.08, 1.44, 1.6]}
                />
                <mesh
                  name="Pole 21"
                  geometry={nodes['Pole 21'].geometry}
                  material={materials['Pole 21 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 35.02]}
                  rotation={[-Math.PI / 2, 0.26, 0]}
                  scale={[0.12, 0.12, 2.21]}
                />
              </group>
              <group name="Front" position={[13.63, 0, 0]} rotation={[0, 0, 0.26]} scale={[1, 1.01, 1]}>
                <mesh
                  name="Sign"
                  geometry={nodes.Sign.geometry}
                  material={materials['Sign Material']}
                  castShadow
                  receiveShadow
                  position={[1.05, 14.04, -0.04]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.08, 0.99, 1.24]}
                />
                <mesh
                  name="Pole"
                  geometry={nodes.Pole.geometry}
                  material={materials['Pole Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, -34.93]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.12, 0.12, 2.21]}
                />
                <mesh
                  name="Back1"
                  geometry={nodes.Back1.geometry}
                  material={materials['Back1 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 14.04, -0.04]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.08, 1.44, 1.6]}
                />
                <mesh
                  name="Pole1"
                  geometry={nodes.Pole1.geometry}
                  material={materials['Pole1 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 35.02]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.12, 0.12, 2.21]}
                />
              </group>
            </group>
            <group
              name="Roof Coffee Cup"
              //original x was -52
              position={[2.22, 886.28, -25.31]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
              ref={roofCupRef}
            >
              <group name="Coffee Cup" rotation={[0, 0, -0.26]}>
                <mesh
                  name="Lid"
                  geometry={nodes.Lid.geometry}
                  material={nodes.Lid.material}
                  castShadow
                  receiveShadow
                  position={[48.32, 192.61, 0.33]}
                />
                <mesh
                  name="Sleeve"
                  geometry={nodes.Sleeve.geometry}
                  material={materials['Sleeve Material']}
                  castShadow
                  receiveShadow
                  position={[0.88, -28.55, -0.68]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                  name="Base"
                  geometry={nodes.Base.geometry}
                  material={materials['Base Material']}
                  castShadow
                  receiveShadow
                  position={[0.88, -50.7, -0.68]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
              </group>
            </group>
            <group name="Rotated Umbrella" position={[695.22, 262.08, -1.86]} scale={0.8}>
              <group name="Umbrella" position={[0, 0, 0]} rotation={[0.06, 0, 0]}>
                <mesh
                  name="Pole2"
                  geometry={nodes.Pole2.geometry}
                  material={materials['Pole2 Material']}
                  castShadow
                  receiveShadow
                  position={[0.22, -5.67, 5.07]}
                  rotation={[-0.07, -0.19, 0]}
                  scale={0.15}
                />
                <mesh
                  name="Sphere"
                  geometry={nodes.Sphere.geometry}
                  material={materials['Sphere Material']}
                  castShadow
                  receiveShadow
                  position={[-0.3, 148.68, -2.39]}
                  rotation={[-1.62, -0.01, -0.19]}
                  scale={0.15}
                />
                <mesh
                  name="Sphere 8"
                  geometry={nodes['Sphere 8'].geometry}
                  material={materials['']}
                  castShadow
                  receiveShadow
                  position={[0.55, 6.81, 4.44]}
                  rotation={[3.1, 0.98, 3.13]}
                  scale={0.15}
                />
                <mesh
                  name="Sphere 7"
                  geometry={nodes['Sphere 7'].geometry}
                  material={materials['']}
                  castShadow
                  receiveShadow
                  position={[0.55, 6.81, 4.44]}
                  rotation={[3.09, -0.59, 3.13]}
                  scale={0.15}
                />
                <mesh
                  name="Sphere 6"
                  geometry={nodes['Sphere 6'].geometry}
                  material={materials['']}
                  castShadow
                  receiveShadow
                  position={[0.55, 6.81, 4.44]}
                  rotation={[-0.04, -0.98, 0.01]}
                  scale={0.15}
                />
                <mesh
                  name="Sphere 5"
                  geometry={nodes['Sphere 5'].geometry}
                  material={materials['']}
                  castShadow
                  receiveShadow
                  position={[0.55, 6.81, 4.44]}
                  rotation={[-0.05, 0.59, 0.01]}
                  scale={0.15}
                />
                <mesh
                  name="Sphere 4"
                  geometry={nodes['Sphere 4'].geometry}
                  material={materials['']}
                  castShadow
                  position={[0.55, 6.81, 4.44]}
                  rotation={[-0.08, 1.38, 0.03]}
                  scale={0.15}
                />
                <mesh
                  name="Sphere 3"
                  geometry={nodes['Sphere 3'].geometry}
                  material={materials['']}
                  castShadow
                  position={[0.55, 6.81, 4.44]}
                  rotation={[3.09, 0.19, 3.14]}
                  scale={0.15}
                />
                <mesh
                  name="Sphere 2"
                  geometry={nodes['Sphere 2'].geometry}
                  material={materials['']}
                  castShadow
                  position={[0.55, 6.81, 4.44]}
                  rotation={[3.06, -1.38, 3.11]}
                  scale={0.15}
                />
                <mesh
                  name="Sphere1"
                  geometry={nodes.Sphere1.geometry}
                  material={materials['']}
                  castShadow
                  position={[0.55, 6.81, 4.44]}
                  rotation={[-0.05, -0.19, 0.01]}
                  scale={0.15}
                />
              </group>
            </group>
            <group name="Coffee Cup1" position={[706.75, 157.4, 48.94]} rotation={[0, 0, 0]} scale={0.11}>
              <mesh
                name="Lid1"
                geometry={nodes.Lid1.geometry}
                material={materials['Lid1 Material']}
                castShadow
                receiveShadow
                position={[0, 104.61, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 0.81, 1]}
              />
              <mesh
                name="Sleeve1"
                geometry={nodes.Sleeve1.geometry}
                material={materials['Sleeve1 Material']}
                castShadow
                receiveShadow
                position={[0.88, -28.55, -0.68]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name="Base1"
                geometry={nodes.Base1.geometry}
                material={materials['Base1 Material']}
                castShadow
                receiveShadow
                position={[0.88, -50.7, -0.68]}
                rotation={[0, -Math.PI / 2, 0]}
              />
            </group>
            <group name="Fence" position={[710.18, 125.58, 43.26]}>
              <mesh
                name="Fence Shape 4"
                geometry={nodes['Fence Shape 4'].geometry}
                material={materials['Fence Shape 4 Material']}
                castShadow
                receiveShadow
                position={[1.64, -33.08, 380.07]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.06, 0.19, 0.39]}
              />
              <mesh
                name="Fence Shape 3"
                geometry={nodes['Fence Shape 3'].geometry}
                material={materials['Fence Shape 3 Material']}
                castShadow
                receiveShadow
                position={[1.64, -33.08, -376.78]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.06, 0.19, 0.39]}
              />
              <mesh
                name="Fence Shape 2"
                geometry={nodes['Fence Shape 2'].geometry}
                material={materials['Fence Shape 2 Material']}
                castShadow
                receiveShadow
                position={[234.03, -33.08, 3.55]}
                scale={[0.06, 0.19, 0.62]}
              />
              <mesh
                name="Fence Shape 41"
                geometry={nodes['Fence Shape 41'].geometry}
                material={materials['Fence Shape 41 Material']}
                castShadow
                receiveShadow
                position={[1.64, 24.56, 380.07]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.06, 0.19, 0.39]}
              />
              <mesh
                name="Fence Shape 31"
                geometry={nodes['Fence Shape 31'].geometry}
                material={materials['Fence Shape 31 Material']}
                castShadow
                receiveShadow
                position={[1.64, 24.56, -376.78]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.06, 0.19, 0.39]}
              />
              <mesh
                name="Fence Shape"
                geometry={nodes['Fence Shape'].geometry}
                material={materials['Fence Shape Material']}
                castShadow
                receiveShadow
                position={[234.03, 24.56, 3.55]}
                scale={[0.06, 0.19, 0.62]}
              />
              <group name="Fence Post 3" position={[-233.56, 0, 376.8]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh
                  name="Fence Bottom"
                  geometry={nodes['Fence Bottom'].geometry}
                  material={materials['Fence Bottom Material']}
                  castShadow
                  receiveShadow
                  position={[0, -76.83, 0]}
                  scale={[0.27, 0.33, 0.27]}
                />
                <mesh
                  name="Fence Top"
                  geometry={nodes['Fence Top'].geometry}
                  material={materials['Fence Top Material']}
                  castShadow
                  receiveShadow
                  position={[0, 71.64, 0]}
                  scale={[0.27, 0.33, 0.27]}
                />
                <mesh
                  name="Fence Column"
                  geometry={nodes['Fence Column'].geometry}
                  material={materials['Fence Column Material']}
                  castShadow
                  receiveShadow
                  position={[0, -7.42, 0]}
                  scale={[0.2, 0.33, 0.2]}
                />
              </group>
              <group name="Fence Post 2" position={[-233.56, 0, -380.05]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh
                  name="Fence Bottom1"
                  geometry={nodes['Fence Bottom1'].geometry}
                  material={materials['Fence Bottom1 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -76.83, 0]}
                  scale={[0.27, 0.33, 0.27]}
                />
                <mesh
                  name="Fence Top1"
                  geometry={nodes['Fence Top1'].geometry}
                  material={materials['Fence Top1 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 71.64, 0]}
                  scale={[0.27, 0.33, 0.27]}
                />
                <mesh
                  name="Fence Column1"
                  geometry={nodes['Fence Column1'].geometry}
                  material={materials['Fence Column1 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -7.42, 0]}
                  scale={[0.2, 0.33, 0.2]}
                />
              </group>
              <group name="Fence Post" position={[233.56, 0, 380.05]}>
                <mesh
                  name="Fence Bottom2"
                  geometry={nodes['Fence Bottom2'].geometry}
                  material={materials['Fence Bottom2 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -76.83, 0]}
                  scale={[0.27, 0.33, 0.27]}
                />
                <mesh
                  name="Fence Top2"
                  geometry={nodes['Fence Top2'].geometry}
                  material={materials['Fence Top2 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 71.64, 0]}
                  scale={[0.27, 0.33, 0.27]}
                />
                <mesh
                  name="Fence Column2"
                  geometry={nodes['Fence Column2'].geometry}
                  material={materials['Fence Column2 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -7.42, 0]}
                  scale={[0.2, 0.33, 0.2]}
                />
              </group>
            </group>
            <group
              name="Chair 3"
              position={[817.37, 74.42, 1.65]}
              rotation={[-1.15, 1.56, 1.14]}
              scale={[0.91, 0.83, 0.91]}
            >
              <mesh
                name="Cube 5"
                geometry={nodes['Cube 5'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[-16.92, -4.55, 15.9]}
                rotation={[-1.63, 0.06, -2.35]}
                scale={1}
              />
              <mesh
                name="Cube 43"
                geometry={nodes['Cube 43'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[16.13, -4.55, 15.9]}
                rotation={[-1.63, -0.06, -0.79]}
                scale={1}
              />
              <mesh
                name="Cube 51"
                geometry={nodes['Cube 51'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[16.13, -4.55, -17.15]}
                rotation={[-1.51, -0.06, -2.35]}
              />
              <mesh
                name="Cube 33"
                geometry={nodes['Cube 33'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[-16.92, -4.55, -17.15]}
                rotation={[-1.51, 0.06, -0.79]}
                scale={1}
              />
              <mesh
                name="Cylinder5"
                geometry={nodes.Cylinder5.geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[0, 33.81, 0]}
              />
            </group>
            <group
              name="Chair 2"
              position={[698.42, 74.28, 123.07]}
              rotation={[-1.15, 1.56, 1.14]}
              scale={[0.91, 0.83, 0.91]}
            >
              <mesh
                name="Cube 52"
                geometry={nodes['Cube 52'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[-16.92, -4.55, 15.9]}
                rotation={[-1.63, 0.06, -2.35]}
                scale={1}
              />
              <mesh
                name="Cube 44"
                geometry={nodes['Cube 44'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[16.13, -4.55, 15.9]}
                rotation={[-1.63, -0.06, -0.79]}
                scale={1}
              />
              <mesh
                name="Cube 53"
                geometry={nodes['Cube 53'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[16.13, -4.55, -17.15]}
                rotation={[-1.51, -0.06, -2.35]}
              />
              <mesh
                name="Cube 34"
                geometry={nodes['Cube 34'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[-16.92, -4.55, -17.15]}
                rotation={[-1.51, 0.06, -0.79]}
                scale={1}
              />
              <mesh
                name="Cylinder6"
                geometry={nodes.Cylinder6.geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[0, 33.81, 0]}
              />
            </group>
            <group
              name="Chair 4"
              position={[696.67, 72.77, -124.48]}
              rotation={[-1.15, 1.56, 1.14]}
              scale={[0.91, 0.83, 0.91]}
            >
              <mesh
                name="Cube 54"
                geometry={nodes['Cube 54'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[-16.92, -4.55, 15.9]}
                rotation={[-1.63, 0.06, -2.35]}
                scale={1}
              />
              <mesh
                name="Cube 45"
                geometry={nodes['Cube 45'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[16.13, -4.55, 15.9]}
                rotation={[-1.63, -0.06, -0.79]}
                scale={1}
              />
              <mesh
                name="Cube 55"
                geometry={nodes['Cube 55'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[16.13, -4.55, -17.15]}
                rotation={[-1.51, -0.06, -2.35]}
              />
              <mesh
                name="Cube 35"
                geometry={nodes['Cube 35'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[-16.92, -4.55, -17.15]}
                rotation={[-1.51, 0.06, -0.79]}
                scale={1}
              />
              <mesh
                name="Cylinder7"
                geometry={nodes.Cylinder7.geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[0, 33.81, 0]}
              />
            </group>
            <group
              name="Chair"
              position={[572.68, 72.61, 1.12]}
              rotation={[-1.15, 1.56, 1.14]}
              scale={[0.91, 0.83, 0.91]}
            >
              <mesh
                name="Cube 56"
                geometry={nodes['Cube 56'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[-16.92, -4.55, 15.9]}
                rotation={[-1.63, 0.06, -2.35]}
                scale={1}
              />
              <mesh
                name="Cube 46"
                geometry={nodes['Cube 46'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[16.13, -4.55, 15.9]}
                rotation={[-1.63, -0.06, -0.79]}
                scale={1}
              />
              <mesh
                name="Cube 57"
                geometry={nodes['Cube 57'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[16.13, -4.55, -17.15]}
                rotation={[-1.51, -0.06, -2.35]}
              />
              <mesh
                name="Cube 36"
                geometry={nodes['Cube 36'].geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[-16.92, -4.55, -17.15]}
                rotation={[-1.51, 0.06, -0.79]}
                scale={1}
              />
              <mesh
                name="Cylinder8"
                geometry={nodes.Cylinder8.geometry}
                material={materials.Table}
                castShadow
                receiveShadow
                position={[0, 33.81, 0]}
              />
            </group>
            <group name="Outside Table" position={[694.61, 87.67, 0.59]}>
              <mesh
                name="Rectangle 3"
                geometry={nodes['Rectangle 3'].geometry}
                material={materials['Rectangle 3 Material']}
                castShadow
                receiveShadow
                position={[-0.11, 32.8, -0.18]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Cylinder9"
                geometry={nodes.Cylinder9.geometry}
                material={materials['Cylinder9 Material']}
                castShadow
                receiveShadow
                position={[2.29, -1.46, 1.97]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.81}
              />
              <mesh
                name="Ellipse"
                geometry={nodes.Ellipse.geometry}
                material={materials['Ellipse Material']}
                castShadow
                receiveShadow
                position={[0, -44.51, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
            </group>
            <group name="Exterior Arches" position={[21.53, 381.55, 25.54]}>
              <mesh
                name="Shape 2"
                geometry={nodes['Shape 2'].geometry}
                material={materials['Shape 2 Material']}
                castShadow
                receiveShadow
                position={[208.35, -17.39, 381.06]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 1, 0.66]}
              />
              <mesh
                name="Shape 3"
                geometry={nodes['Shape 3'].geometry}
                material={materials['Shape 3 Material']}
                castShadow
                receiveShadow
                position={[391.97, -17.39, 223.12]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 1, 2.73]}
              />
              <mesh
                name="Shape"
                geometry={nodes.Shape.geometry}
                material={materials['Shape Material']}
                castShadow
                receiveShadow
                position={[-391.99, -17.39, 381.06]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 1, 2.73]}
              />
            </group>
            <group name="Open Sign" position={[134.35, 326.27, 372.43]}>
              <mesh
                name="Open Sign Text"
                geometry={nodes['Open Sign Text'].geometry}
                material={materials['Open Sign Text Material']}
                castShadow
                receiveShadow
                position={[0.15, -19.77, 1.87]}
              />
              <mesh
                name="Open Sign1"
                geometry={nodes['Open Sign1'].geometry}
                material={materials['Open Sign1 Material']}
                castShadow
                receiveShadow
                position={[0, -19.77, -1.51]}
              />
              <group name="Sign Strings" position={[-2.52, 16.2, -1.49]}>
                <mesh
                  name="Path 2"
                  geometry={nodes['Path 2'].geometry}
                  material={materials['Path 2 Material']}
                  castShadow
                  receiveShadow
                  position={[32.68, -20.08, 0]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={1}
                />
                <mesh
                  name="Path4"
                  geometry={nodes.Path4.geometry}
                  material={materials['Path4 Material']}
                  castShadow
                  receiveShadow
                  position={[-32.68, -20.08, 0]}
                />
              </group>
            </group>
            <group name="Door" position={[134.5, 214.88, 364.82]}>
              <group name="Door Frame" position={[-0.21, -0.32, 4.98]}>
                <mesh
                  name="Push 5"
                  geometry={nodes['Push 5'].geometry}
                  material={materials['Push 5 Material']}
                  castShadow
                  receiveShadow
                  position={[75.63, -0.35, 0]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[0.05, 0.99, 1]}
                />
                <mesh
                  name="Push 4"
                  geometry={nodes['Push 4'].geometry}
                  material={materials['Push 4 Material']}
                  castShadow
                  receiveShadow
                  position={[-75.63, -0.35, 0]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[0.05, 0.99, 1]}
                />
                <mesh
                  name="Push 3"
                  geometry={nodes['Push 3'].geometry}
                  material={materials['Push 3 Material']}
                  castShadow
                  receiveShadow
                  position={[0.21, -162.44, 0]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[0.05, 0.99, 1]}
                />
                <mesh
                  name="Push 2"
                  geometry={nodes['Push 2'].geometry}
                  material={materials['Push 2 Material']}
                  castShadow
                  receiveShadow
                  position={[0.21, 162.44, 0]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[0.05, 0.99, 1]}
                />
              </group>
              <mesh
                name="Push"
                geometry={nodes.Push.geometry}
                material={materials['Push Material']}
                castShadow
                receiveShadow
                position={[0, -37.84, 4.98]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.05, 0.53, 1]}
              />
              <mesh
                name="Door Main"
                geometry={nodes['Door Main'].geometry}
                material={materials['Door Main Material']}
                castShadow
                receiveShadow
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.99, 1]}
              />
            </group>
            <group name="Cafe Sign" position={[-203.91, 582.03, 457.99]} scale={1.15}>
              <group name="E" position={[353.68, 0, 0]}>
                <mesh
                  name="Cube5"
                  geometry={nodes.Cube5.geometry}
                  material={materials['Cube5 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -4.05, -1.65]}
                  scale={[1, 1, 0.34]}
                />
                <mesh
                  name="Text5"
                  geometry={nodes.Text5.geometry}
                  material={materials['Text5 Material']}
                  castShadow
                  receiveShadow
                  position={[0.79, 6.55, 15.31]}
                />
              </group>
              <group name="F" position={[229.35, 0, 0]}>
                <mesh
                  name="Cube6"
                  geometry={nodes.Cube6.geometry}
                  material={materials['Cube6 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -4.05, -1.65]}
                  scale={[1, 1, 0.34]}
                />
                <mesh
                  name="Text6"
                  geometry={nodes.Text6.geometry}
                  material={materials['Text6 Material']}
                  castShadow
                  receiveShadow
                  position={[0.79, 6.55, 15.31]}
                />
              </group>
              <group name="A" position={[102.14, -0.75, 0]} rotation={[0, 0, -0.17]} scale={1}>
                <mesh
                  name="Cube7"
                  geometry={nodes.Cube7.geometry}
                  material={materials['Cube7 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -4.05, -1.65]}
                  scale={[1, 1, 0.34]}
                />
                <mesh
                  name="Text7"
                  geometry={nodes.Text7.geometry}
                  material={materials['Text7 Material']}
                  castShadow
                  receiveShadow
                  position={[0.79, 6.55, 15.31]}
                />
              </group>
              <group name="C" position={[-23.24, 0, 0]}>
                <mesh
                  name="Cube8"
                  geometry={nodes.Cube8.geometry}
                  material={materials['Cube8 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -4.05, -1.65]}
                  scale={[1, 1, 0.34]}
                />
                <mesh
                  name="Text8"
                  geometry={nodes.Text8.geometry}
                  material={materials['Text8 Material']}
                  castShadow
                  receiveShadow
                  position={[0.79, 6.55, 15.31]}
                />
              </group>
            </group>
            <mesh
              name="Ceiling"
              geometry={nodes.Ceiling.geometry}
              material={nodes.Ceiling.material}
              castShadow
              receiveShadow
              position={[0, 577.68, 0]}
              scale={1.13}
            />
            <mesh
              name="Main Building 2"
              geometry={nodes['Main Building 2'].geometry}
              material={materials['Main Building 2 Material']}
              castShadow
              receiveShadow
              position={[0, 528.16, 0]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
              name="Building Ceiling Base"
              geometry={nodes['Building Ceiling Base'].geometry}
              material={materials['Building Ceiling Base Material']}
              castShadow
              receiveShadow
              position={[0, 471.34, 0]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
            <group
              name="PLACEHOLDER"
              position={[252.35, 195.28, -160.23]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1.47, 1.28, 1]}
            >
              <mesh
                name="Window Till"
                geometry={nodes['Window Till'].geometry}
                material={materials['Window Till Material']}
                castShadow
                receiveShadow
                position={[-73.55, 55.57, 6.12]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.05, 1.96, 1]}
              />
              <mesh
                name="Left Window"
                geometry={nodes['Left Window'].geometry}
                material={materials['Left Window Material']}
                castShadow
                receiveShadow
                position={[-73.46, 0, -3.79]}
                scale={[0.33, 1, 0.1]}
              />
            </group>
            <group name="Left Window1" position={[-91, 256.33, 363.68]}>
              <mesh
                name="Window Till1"
                geometry={nodes['Window Till1'].geometry}
                material={materials['Window Till1 Material']}
                castShadow
                receiveShadow
                position={[-73.55, -16.02, 6.12]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.05, 1.96, 1]}
              />
              <mesh
                name="Left Window2"
                geometry={nodes['Left Window2'].geometry}
                material={materials['Left Window2 Material']}
                castShadow
                receiveShadow
                position={[-73.46, 0, -3.79]}
                scale={[0.33, 1, 0.1]}
              />
            </group>
            <group name="Right Window" position={[300.97, 256.33, 359.89]} scale={[1.04, 1, 1]}>
              <mesh
                name="Window Till2"
                geometry={nodes['Window Till2'].geometry}
                material={materials['Window Till2 Material']}
                castShadow
                receiveShadow
                position={[1.33, -16.02, 9.91]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.05, 1.96, 1]}
              />
              <mesh
                name="Right Window1"
                geometry={nodes['Right Window1'].geometry}
                material={materials['Right Window1 Material']}
                castShadow
                receiveShadow
                scale={[0.33, 1, 0.1]}
              />
            </group>
            <group name="Side Shelf" position={[330.98, 120.24, -53.99]}>
              <mesh
                name="Side Shelf1"
                geometry={nodes['Side Shelf1'].geometry}
                material={materials['Side Shelf1 Material']}
                castShadow
                receiveShadow
                position={[0, 63.57, 0]}
                scale={[0.2, 0.09, 0.48]}
              />
              <mesh
                name="Side Wall"
                geometry={nodes['Side Wall'].geometry}
                material={materials['Side Wall Material']}
                castShadow
                receiveShadow
                position={[-3.64, -10.35, 0]}
                scale={[0.13, 0.42, 0.48]}
              />
            </group>
            <mesh
              name="Boolean 2"
              geometry={nodes['Boolean 2'].geometry}
              material={nodes['Boolean 2'].material}
              castShadow
              receiveShadow
              position={[-1, 280.46, -1]}
            />
            <mesh
              name="Floor"
              geometry={nodes.Floor.geometry}
              material={materials['Floor Material']}
              castShadow
              receiveShadow
              position={[278.8, -0.5, 0]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1.26, 1, 1]}
            />
            <directionalLight
              name="Directional Light 2"
              castShadow
              intensity={isDarkMode ? 2.0 : 1.8}
              shadow-mapSize-width={4096}
              shadow-mapSize-height={4096}
              shadow-camera-near={-10000}
              shadow-camera-far={100000}
              shadow-camera-left={-2000}
              shadow-camera-right={2000}
              shadow-camera-top={2000}
              shadow-camera-bottom={-2000}
              shadow-bias={-0.00005}
              color={isDarkMode ? "#ff9999" : "#FF9A6C"}
              position={[370.71, 1519.2, -309.92]}
            />
            <directionalLight
              name="Directional Light"
              castShadow
              intensity={isDarkMode ? 0.8 : 0.6}
              shadow-mapSize-width={4096}
              shadow-mapSize-height={4096}
              shadow-camera-near={-10000}
              shadow-camera-far={100000}
              shadow-camera-left={-2000}
              shadow-camera-right={2000}
              shadow-camera-top={2000}
              shadow-camera-bottom={-2000}
              shadow-bias={-0.00005}
              color={isDarkMode ? "#b3d9ff" : "#FFCBA4"}
              position={[2227.31, 1115.98, 1880.85]}
            />
            {/* <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} /> */}
            {/* <OrthographicCamera ref={cameraRef} name="1" makeDefault={true} position={[2000, 20000, 2000]} rotation={[0, 0, 0]} far={10000} near={-50000} /> */}
            <hemisphereLight name="Default Ambient Light" intensity={isDarkMode ? 0.15 : 0.35} color={isDarkMode ? "#eaeaea" : "#FFDAB9"} />
          </group>
          <OrthographicCamera ref={cameraRef} name="1" makeDefault={true} position={[20000, 20000, 200]} rotation={[0, 0, 0]} far={10000} near={-50000} />
        </scene>
      </group>
    </>
  )
}
