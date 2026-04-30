import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { Camera, Upload, Check, RefreshCcw, Star, Sparkles } from 'lucide-react';

const Garment = ({ type, color }: { type: string, color: string }) => {
  return (
    <group position={[0, -1, 0]}>
      {/* Dynamic Garment based on selection */}
      {type === 'Tee' && (
        <mesh position={[0, 1.2, 0]} castShadow>
          <boxGeometry args={[0.8, 0.8, 0.3]} />
          <meshStandardMaterial color={color} roughness={0.7} />
        </mesh>
      )}
      {type === 'Jacket' && (
        <mesh position={[0, 1.2, 0]} castShadow>
          <boxGeometry args={[1, 1, 0.4]} />
          <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
        </mesh>
      )}
      {type === 'Dress' && (
        <mesh position={[0, 1, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.6, 1.5, 32]} />
          <meshStandardMaterial color={color} roughness={0.8} />
        </mesh>
      )}
      
      {/* Base Mannequin */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
};

const StudioPage = () => {
  const [activeColor, setActiveColor] = useState('#2D5A27');
  const [garmentType, setGarmentType] = useState('Jacket');
  const [isUploading, setIsUploading] = useState(false);

  const colors = [
    { name: 'Forest', hex: '#2D5A27' },
    { name: 'Moss', hex: '#4A7C44' },
    { name: 'Sand', hex: '#D2B48C' },
    { name: 'Denim', hex: '#2E5090' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-offcut-dark text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
        
        {/* Controls Panel */}
        <div className="lg:col-span-4 space-y-12 order-2 lg:order-1">
          <div>
            <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">CREATIVE <span className="text-offcut-primary">STUDIO</span></h1>
            <p className="text-offcut-accent text-sm uppercase tracking-widest font-bold">Design. Recycle. Empower.</p>
          </div>

          {/* Dress-Up Game Part */}
          <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-offcut-primary" /> 1. CUSTOMIZE GARMENT
            </h3>
            
            <div className="space-y-8">
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 block">Choose Silhouette</label>
                <div className="flex gap-3">
                  {['Tee', 'Jacket', 'Dress'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setGarmentType(t)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        garmentType === t ? 'bg-offcut-primary text-white' : 'bg-white/10 hover:bg-white/20'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 block">Fabric Tone</label>
                <div className="flex gap-4">
                  {colors.map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => setActiveColor(c.hex)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        activeColor === c.hex ? 'border-white scale-110 shadow-lg' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Upcycling Upload Part */}
          <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <RefreshCcw className="w-5 h-5 text-offcut-primary" /> 2. UPCYCLE YOUR OWN
            </h3>
            <p className="text-gray-400 text-xs mb-6">Upload a photo of your old clothing. Our artisans will suggest a recycled transformation.</p>
            
            <div className="space-y-4">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-[2rem] cursor-pointer hover:bg-white/5 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 text-offcut-primary mb-2" />
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Upload Photo</p>
                </div>
                <input type="file" className="hidden" onChange={() => setIsUploading(true)} />
              </label>

              {isUploading && (
                <div className="bg-offcut-primary/20 p-4 rounded-2xl flex items-center gap-3 animate-in fade-in">
                  <Check className="text-offcut-primary" />
                  <span className="text-[10px] font-bold">IMAGE RECEIVED. OUR ARTISANS ARE REVIEWING.</span>
                </div>
              )}

              <textarea 
                className="w-full bg-white/5 rounded-2xl p-4 text-xs focus:outline-none focus:ring-1 focus:ring-offcut-primary"
                rows={3}
                placeholder="Describe what you like (colors, references, style)..."
              />
            </div>
          </div>
        </div>

        {/* 3D Showcase Panel */}
        <div className="lg:col-span-8 h-[600px] lg:h-auto min-h-[500px] bg-offcut-cream/5 rounded-[4rem] relative overflow-hidden order-1 lg:order-2 border border-white/5">
          <div className="absolute top-10 left-10 z-10">
            <div className="text-[10px] uppercase tracking-[0.4em] text-offcut-primary mb-1 font-black">Interactive Viewport</div>
            <div className="text-3xl font-black italic">v1.0 STUDIO</div>
          </div>

          <Canvas shadows dpr={[1, 2]}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
              <pointLight position={[-10, -10, -10]} />
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Garment type={garmentType} color={activeColor} />
              </Float>
              <Environment preset="city" />
              <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>

          <div className="absolute bottom-10 right-10 flex gap-4">
            <button className="p-4 bg-white text-offcut-dark rounded-2xl hover:bg-offcut-primary hover:text-white transition-all shadow-xl">
              <Camera className="w-6 h-6" />
            </button>
            <button className="px-8 py-4 bg-offcut-primary text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
              Start Production
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudioPage;
