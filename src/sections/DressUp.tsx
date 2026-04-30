import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, Float } from '@react-three/drei';
import { Download, Check, Camera } from 'lucide-react';

const Mannequin = ({ color, texture }: { color: string, texture: string }) => {
  return (
    <group position={[0, -1, 0]}>
      {/* Primitive representation of a mannequin/clothing */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <capsuleGeometry args={[0.3, 0.6, 8, 16]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.25, 1, 16]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      {/* Decorative scrap overlay effect */}
      <mesh position={[0.2, 1.2, 0.1]} rotation={[0, 0.2, 0.4]}>
        <planeGeometry args={[0.4, 0.6]} />
        <meshStandardMaterial color="#8B7355" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

const DressUp = () => {
  const [activeColor, setActiveColor] = useState('#2E5090');
  const [activeTexture, setActiveTexture] = useState('denim');

  const colors = [
    { name: 'Indigo Denim', hex: '#2E5090' },
    { name: 'Earth Sand', hex: '#D2B48C' },
    { name: 'Olive Scrap', hex: '#556B2F' },
    { name: 'Deep Rust', hex: '#8B4513' },
  ];

  return (
    <section id="customizer" className="section-padding bg-offcut-dark text-white min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Customizer Controls */}
        <div className="order-2 lg:order-1">
          <span className="text-offcut-earth font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Interactive Studio</span>
          <h2 className="text-5xl md:text-7xl mb-8 leading-none">DESIGN YOUR <br /><span className="text-offcut-earth italic">LEGACY.</span></h2>
          
          <div className="space-y-12">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-offcut-earth" /> Select Fabric Tone
              </h4>
              <div className="flex gap-4">
                {colors.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setActiveColor(c.hex)}
                    className={`w-12 h-12 rounded-full border-4 transition-all transform hover:scale-110 ${
                      activeColor === c.hex ? 'border-white scale-110' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-offcut-earth" /> Choose Avatar
              </h4>
              <div className="flex gap-4">
                {['Minimalist', 'Artisan', 'Futuristic'].map((avatar) => (
                  <button
                    key={avatar}
                    className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition-colors text-sm uppercase tracking-widest font-bold"
                  >
                    {avatar}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <button className="flex items-center gap-3 px-8 py-4 bg-offcut-earth text-white rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-offcut-dark transition-all">
                <Camera className="w-5 h-5" /> Export Image
              </button>
              <button className="flex items-center gap-3 px-8 py-4 border border-white rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-offcut-dark transition-all">
                <Check className="w-5 h-5" /> Submit to Production
              </button>
            </div>
          </div>
        </div>

        {/* 3D Viewport */}
        <div className="order-1 lg:order-2 h-[500px] md:h-[700px] bg-offcut-cream/5 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-8 left-8 z-10">
            <div className="text-[10px] uppercase tracking-[0.4em] text-offcut-earth">Live Preview</div>
            <div className="text-2xl font-black">OFF CUT v1.0</div>
          </div>
          
          <Canvas shadows dpr={[1, 2]}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <Mannequin color={activeColor} texture={activeTexture} />
              </Float>
              <Environment preset="city" />
              <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Suspense>
          </Canvas>

          <div className="absolute bottom-8 right-8 flex flex-col items-end text-right">
            <span className="text-[10px] uppercase tracking-[0.4em] text-offcut-earth">Fabric Composition</span>
            <span className="text-lg font-bold">100% RECYCLED DENIM</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DressUp;
