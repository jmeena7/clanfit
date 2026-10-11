
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  ContactShadows,
  Sparkles,
} from "@react-three/drei";

function Barbell() {
  const group = useRef(null);
  const plates = useRef(null);

  useFrame((state, delta) => {
    if (!group.current || !plates.current) return;

    const t = state.clock.elapsedTime;

    group.current.rotation.y += delta * 0.22;
    group.current.rotation.z = Math.sin(t * 0.8) * 0.08;
    group.current.position.y = Math.sin(t * 1.4) * 0.12;

    plates.current.rotation.x = Math.sin(t * 1.5) * 0.035;
  });

  return (
    <group ref={group} rotation={[0.15, 0, -0.12]}>
      {/* Chrome bar */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.055, 0.055, 3.1, 32]} />
        <meshStandardMaterial
          color="#E5E7EB"
          metalness={1}
          roughness={0.16}
        />
      </mesh>

      {/* Center grip */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.065, 0.065, 0.85, 32]} />
        <meshStandardMaterial
          color="#252925"
          metalness={0.65}
          roughness={0.4}
        />
      </mesh>

      {/* Weight plates */}
      <group ref={plates}>
        {[-1.12, -0.88, 0.88, 1.12].map((x, i) => (
          <group key={x} position={[x, 0, 0]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry
                args={[
                  i % 2 === 0 ? 0.49 : 0.38,
                  i % 2 === 0 ? 0.49 : 0.38,
                  0.2,
                  64,
                ]}
              />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#A3FF12" : "#202520"}
                metalness={0.7}
                roughness={0.23}
                emissive={i % 2 === 0 ? "#4D7C0F" : "#000000"}
                emissiveIntensity={0.6}
              />
            </mesh>

            {/* Glowing center ring */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.13, 0.025, 12, 32]} />
              <meshStandardMaterial
                color="#D9F99D"
                emissive="#84CC16"
                emissiveIntensity={1.5}
                metalness={0.8}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* Neon collars */}
      {[-1.4, 1.4].map((x) => (
        <mesh
          key={x}
          position={[x, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.09, 0.09, 0.09, 32]} />
          <meshStandardMaterial
            color="#A3FF12"
            emissive="#65A30D"
            emissiveIntensity={1.5}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function EnergyRings() {
  const ring = useRef(null);

  useFrame((state, delta) => {
    if (!ring.current) return;

    ring.current.rotation.z += delta * 0.12;
    ring.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
  });

  return (
    <group ref={ring} rotation={[0.7, 0.2, 0]}>
      {[1.7, 1.95, 2.2].map((radius, i) => (
        <mesh key={radius}>
          <torusGeometry args={[radius, 0.008, 8, 120]} />
          <meshBasicMaterial
            color={i === 1 ? "#A3FF12" : "#557A25"}
            transparent
            opacity={i === 1 ? 0.75 : 0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.7} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={2.5}
      />

      <pointLight
        position={[-3, 2, 2]}
        color="#A3FF12"
        intensity={30}
      />

      <pointLight
        position={[3, -2, -3]}
        color="#65A30D"
        intensity={20}
      />

      {/* Animated neon rings */}
      <EnergyRings />

      {/* Floating barbell */}
      <Float
        speed={1.5}
        rotationIntensity={0.12}
        floatIntensity={0.35}
      >
        <Barbell />
      </Float>

      {/* Floating particles */}
      <Sparkles
        count={70}
        scale={5}
        size={2}
        speed={0.35}
        color="#A3FF12"
        opacity={0.8}
      />

      {/* Ground shadow */}
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.4}
        scale={5}
        blur={2.5}
      />
    </>
  );
}

export default function FitnessScene() {
  return (
    <div className="h-[350px] w-full sm:h-[450px] md:h-[520px]">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
