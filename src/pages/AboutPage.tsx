import React, { Suspense } from 'react';
import About from '../sections/About';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Icosahedron } from '@react-three/drei';

const GreenCanvas = () => {
  return (
    <div className="h-[400px] w-full bg-offcut-dark rounded-[3rem] my-12 overflow-hidden relative">
      <div className="absolute top-8 left-8 z-10 text-white">
        <h3 className="text-2xl font-black">STORY IN 3D</h3>
        <p className="text-offcut-accent text-sm">Interactive sustainability model</p>
      </div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <Icosahedron args={[1, 15]}>
              <MeshDistortMaterial
                color="#4A7C44"
                speed={5}
                distort={0.3}
                radius={1}
              />
            </Icosahedron>
          </Float>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-offcut-cream">
      <div className="max-w-7xl mx-auto px-6">
        <About />
        <GreenCanvas />
        <div className="py-20 text-center">
          <h2 className="text-4xl font-black text-offcut-primary mb-8 uppercase italic">Future of Fashion</h2>
          <p className="text-offcut-secondary max-w-3xl mx-auto text-lg leading-relaxed">
            By 2030, OFF CUT aims to recycle over 100 tons of textile waste annually. 
            Our commitment to the planet is integrated into every fiber of our business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
