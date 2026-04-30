import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const FloatingFabric = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#2D5A27"
          speed={3}
          distort={0.4}
          radius={1}
          roughness={0.4}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-offcut-cream">
      {/* 3D Background/Interactive Element */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <FloatingFabric />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center w-full">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter text-offcut-dark">
            PURE <br />
            <span className="text-offcut-primary">FUTURE.</span>
          </h1>
          <p className="text-lg md:text-xl text-offcut-secondary max-w-md font-medium">
            Eco-conscious fashion that empowers people and planet. 
            Crafted with love by Egyptian women artisans.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link 
              to="/store"
              className="px-8 py-4 bg-offcut-primary text-white rounded-full font-bold uppercase tracking-widest hover:bg-offcut-dark transition-all transform hover:scale-105 text-center"
            >
              Explore Store
            </Link>
            <Link 
              to="/about"
              className="px-8 py-4 border-2 border-offcut-primary text-offcut-primary rounded-full font-bold uppercase tracking-widest hover:bg-offcut-primary hover:text-white transition-all transform hover:scale-105 text-center"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Scraps */}
      <div className="absolute bottom-10 left-10 text-[10px] uppercase tracking-[0.5em] text-offcut-earth/30 vertical-text hidden md:block">
        Sustainable • Ethical • Recycled • Empowering
      </div>
    </section>
  );
};

export default Hero;
