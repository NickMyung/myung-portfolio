'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, RotateCcw, Eye, Layers, Activity, Sparkles, BookOpen } from 'lucide-react';

interface ExoskeletonWorkspace3DProps {
  onPaperClick?: () => void;
}

export const ExoskeletonWorkspace3D: React.FC<ExoskeletonWorkspace3DProps> = ({ onPaperClick }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  // Joint Angles (Degrees)
  const [theta1, setTheta1] = useState<number>(25);  // Flexion/Extension (-20 to 90)
  const [theta2, setTheta2] = useState<number>(10);  // Abduction/Adduction (-15 to 45)
  const [theta3, setTheta3] = useState<number>(5);   // Internal/External Rotation (-25 to 25)

  // Simulation controls
  const [isGaitSimRunning, setIsGaitSimRunning] = useState<boolean>(true);
  const [showWorkspaceCloud, setShowWorkspaceCloud] = useState<boolean>(true);
  const [showCoordinateAxes, setShowCoordinateAxes] = useState<boolean>(true);

  // Computed end-effector position (mm) via Denavit-Hartenberg
  const [endEffector, setEndEffector] = useState<{ x: number; y: number; z: number }>({ x: 0, y: 0, z: 0 });

  // Refs for animation loop
  const anglesRef = useRef({ theta1: 25, theta2: 10, theta3: 5 });
  const gaitSimRef = useRef(true);
  const cloudVisibilityRef = useRef(true);
  const axesVisibilityRef = useRef(true);

  // Update refs when state changes
  useEffect(() => {
    anglesRef.current = { theta1, theta2, theta3 };
  }, [theta1, theta2, theta3]);

  useEffect(() => {
    gaitSimRef.current = isGaitSimRunning;
  }, [isGaitSimRunning]);

  useEffect(() => {
    cloudVisibilityRef.current = showWorkspaceCloud;
  }, [showWorkspaceCloud]);

  useEffect(() => {
    axesVisibilityRef.current = showCoordinateAxes;
  }, [showCoordinateAxes]);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera & Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b1021);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(450, 280, 500);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 2. Technical Floor Grid
    const gridHelper = new THREE.GridHelper(800, 32, 0x00f0ff, 0x1e2b58);
    gridHelper.position.y = -220;
    scene.add(gridHelper);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 1.4);
    dirLight1.position.set(200, 400, 300);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x8b5cf6, 1.0);
    dirLight2.position.set(-300, 200, -200);
    scene.add(dirLight2);

    // 4. Robotic Kinematic Hierarchy (3-DoF Hip Exoskeleton)
    const baseGroup = new THREE.Group();
    baseGroup.position.set(0, 80, 0);
    scene.add(baseGroup);

    // Pelvis Mount Bracket (Base Fixed Frame)
    const pelvisGeo = new THREE.BoxGeometry(90, 40, 70);
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x1a233a,
      roughness: 0.3,
      metalness: 0.8,
    });
    const cyanNeonMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00a3cc,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.7,
    });
    const magentaNeonMat = new THREE.MeshStandardMaterial({
      color: 0xec4899,
      emissive: 0xbe185d,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.7,
    });
    const emeraldNeonMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.7,
    });

    const pelvisMesh = new THREE.Mesh(pelvisGeo, darkMetalMat);
    baseGroup.add(pelvisMesh);

    // JOINT 1: Sagittal Flexion/Extension (Theta 1)
    const joint1Group = new THREE.Group();
    baseGroup.add(joint1Group);

    const joint1Cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(24, 24, 50, 32),
      cyanNeonMat
    );
    joint1Cylinder.rotation.z = Math.PI / 2;
    joint1Group.add(joint1Cylinder);

    // Link 1: Thigh Upper Support
    const link1Geo = new THREE.CylinderGeometry(14, 16, 160, 24);
    const link1Mesh = new THREE.Mesh(link1Geo, darkMetalMat);
    link1Mesh.position.y = -80;
    joint1Group.add(link1Mesh);

    // JOINT 2: Frontal Abduction/Adduction (Theta 2)
    const joint2Group = new THREE.Group();
    joint2Group.position.y = -160;
    joint1Group.add(joint2Group);

    const joint2Cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(20, 20, 45, 32),
      magentaNeonMat
    );
    joint2Cylinder.rotation.x = Math.PI / 2;
    joint2Group.add(joint2Cylinder);

    // Link 2: Thigh Lower Structural Tube
    const link2Geo = new THREE.CylinderGeometry(12, 14, 150, 24);
    const link2Mesh = new THREE.Mesh(link2Geo, darkMetalMat);
    link2Mesh.position.y = -75;
    joint2Group.add(link2Mesh);

    // JOINT 3: Transverse Internal/External Rotation (Theta 3)
    const joint3Group = new THREE.Group();
    joint3Group.position.y = -150;
    joint2Group.add(joint3Group);

    const joint3Cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(18, 18, 35, 32),
      emeraldNeonMat
    );
    joint3Group.add(joint3Cylinder);

    // Distal Assistive Cuff (End-Effector)
    const cuffGeo = new THREE.TorusGeometry(32, 8, 16, 32, Math.PI * 1.5);
    const cuffMesh = new THREE.Mesh(cuffGeo, cyanNeonMat);
    cuffMesh.rotation.x = Math.PI / 2;
    cuffMesh.position.y = -35;
    joint3Group.add(cuffMesh);

    // End-Effector marker sphere
    const markerGeo = new THREE.SphereGeometry(10, 24, 24);
    const markerMesh = new THREE.Mesh(markerGeo, new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true }));
    markerMesh.position.y = -35;
    joint3Group.add(markerMesh);

    // 5. Workspace Point Cloud Generation (Simulated from paper calculations)
    const pointCount = 2800;
    const positions = new Float32Array(pointCount * 3);
    const colors = new Float32Array(pointCount * 3);

    const L1 = 160;
    const L2 = 150;
    const L3 = 35;

    for (let i = 0; i < pointCount; i++) {
      // Sample reachable joint space
      const t1 = ((-20 + Math.random() * 110) * Math.PI) / 180; // Sagittal Flexion/Extension
      const t2 = ((-15 + Math.random() * 55) * Math.PI) / 180;  // Abduction/Adduction
      const t3 = ((-25 + Math.random() * 50) * Math.PI) / 180;  // Internal/External Rotation

      // Forward kinematics approximation
      const px = L1 * Math.sin(t1) * Math.cos(t2) + L2 * Math.sin(t1 + t2) + L3 * Math.sin(t3);
      const py = 80 - (L1 * Math.cos(t1) + L2 * Math.cos(t1 + t2) + L3 * Math.cos(t3));
      const pz = L1 * Math.sin(t2) + L2 * Math.sin(t2) * Math.cos(t1) + (Math.random() - 0.5) * 40;

      positions[i * 3] = px;
      positions[i * 3 + 1] = py;
      positions[i * 3 + 2] = pz;

      // Color gradient based on reachability height
      const ratio = (py + 220) / 400;
      colors[i * 3] = 0.0 + 0.9 * ratio;     // R
      colors[i * 3 + 1] = 0.8 * (1 - ratio); // G
      colors[i * 3 + 2] = 1.0;               // B
    }

    const cloudGeometry = new THREE.BufferGeometry();
    cloudGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    cloudGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const cloudMaterial = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const workspacePointCloud = new THREE.Points(cloudGeometry, cloudMaterial);
    scene.add(workspacePointCloud);

    // 6. Coordinate Reference Frame
    const axesHelper = new THREE.AxesHelper(120);
    axesHelper.position.set(-180, -210, -180);
    scene.add(axesHelper);

    // 7. Interactive Orbit / Drag Camera
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let cameraAngle = { theta: 0.8, phi: 0.5, radius: 680 };

    const updateCameraPosition = () => {
      camera.position.x = cameraAngle.radius * Math.sin(cameraAngle.theta) * Math.cos(cameraAngle.phi);
      camera.position.y = cameraAngle.radius * Math.sin(cameraAngle.phi) + 50;
      camera.position.z = cameraAngle.radius * Math.cos(cameraAngle.theta) * Math.cos(cameraAngle.phi);
      camera.lookAt(0, -60, 0);
    };
    updateCameraPosition();

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      cameraAngle.theta -= deltaX * 0.007;
      cameraAngle.phi = Math.max(0.1, Math.min(1.4, cameraAngle.phi + deltaY * 0.007));

      updateCameraPosition();
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraAngle.radius = Math.max(300, Math.min(950, cameraAngle.radius + e.deltaY * 0.5));
      updateCameraPosition();
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    // 8. Animation & Kinematics Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      let currentT1 = anglesRef.current.theta1;
      let currentT2 = anglesRef.current.theta2;
      let currentT3 = anglesRef.current.theta3;

      // Automated Gait Simulation Cycle (Sinusoidal gait pattern)
      if (gaitSimRef.current) {
        const gaitPhase = elapsedTime * 2.2;
        // Human hip flexion/extension during typical gait cycle: -10° to 35°
        currentT1 = 15 + 25 * Math.sin(gaitPhase);
        // Abduction/adduction minor sway: 0° to 8°
        currentT2 = 5 + 4 * Math.sin(gaitPhase * 2);
        // Internal/external rotation: -4° to 4°
        currentT3 = 4 * Math.cos(gaitPhase);
      }

      // Apply rotations to joints (Denavit-Hartenberg frames)
      joint1Group.rotation.x = THREE.MathUtils.degToRad(currentT1);
      joint2Group.rotation.z = THREE.MathUtils.degToRad(currentT2);
      joint3Group.rotation.y = THREE.MathUtils.degToRad(currentT3);

      // Cloud and Axes visibility
      workspacePointCloud.visible = cloudVisibilityRef.current;
      axesHelper.visible = axesVisibilityRef.current;

      // Subtle rotation of workspace cloud for depth perspective
      if (cloudVisibilityRef.current) {
        workspacePointCloud.rotation.y += 0.001;
      }

      // Compute world position of end effector
      const worldPos = new THREE.Vector3();
      markerMesh.getWorldPosition(worldPos);

      // Scale to physical millimeters (relative to hip center)
      const computedX = Math.round(worldPos.x * 1.8);
      const computedY = Math.round((worldPos.y - 80) * 1.8);
      const computedZ = Math.round(worldPos.z * 1.8);

      setEndEffector({ x: computedX, y: computedY, z: computedZ });

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#0b1021] shadow-2xl">
      {/* Top Header / Status bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
            Interactive 3D Kinematics & Workspace Simulator
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
            D-H Matrix Model
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {onPaperClick && (
            <button
              onClick={onPaperClick}
              className="flex items-center space-x-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-indigo-950/80 hover:bg-indigo-900 text-indigo-300 border border-indigo-700/50 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Ver Paper (CMAAE 2021)</span>
            </button>
          )}

          <button
            onClick={() => setIsGaitSimRunning(!isGaitSimRunning)}
            className={`flex items-center space-x-1.5 px-3 py-1 text-xs font-mono rounded-lg transition-all ${
              isGaitSimRunning
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-700 hover:bg-emerald-900'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
            }`}
          >
            {isGaitSimRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isGaitSimRunning ? 'Pausar Marcha' : 'Simular Marcha'}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Container */}
      <div className="relative w-full h-[460px] sm:h-[540px] cursor-grab active:cursor-grabbing" ref={mountRef}>
        {/* Floating Telemetry & Kinematics HUD */}
        <div className="absolute top-4 left-4 z-10 p-3 sm:p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/20 font-mono text-xs max-w-[280px] shadow-lg pointer-events-none">
          <div className="flex items-center space-x-2 text-cyan-400 mb-2 font-semibold">
            <Activity className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>FORWARD KINEMATICS (D-H)</span>
          </div>

          <div className="space-y-1.5 text-slate-300 text-[11px]">
            <div className="flex justify-between border-b border-slate-800/80 pb-1">
              <span className="text-slate-400">θ₁ (Sagittal Flex/Ext):</span>
              <span className="text-cyan-300 font-bold">{theta1.toFixed(1)}°</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/80 pb-1">
              <span className="text-slate-400">θ₂ (Frontal Abd/Add):</span>
              <span className="text-pink-400 font-bold">{theta2.toFixed(1)}°</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/80 pb-1">
              <span className="text-slate-400">θ₃ (Transverse Rot):</span>
              <span className="text-emerald-400 font-bold">{theta3.toFixed(1)}°</span>
            </div>
            <div className="pt-2">
              <span className="text-slate-400 block text-[10px] uppercase tracking-wide">Coordenadas Efector Final (mm):</span>
              <div className="grid grid-cols-3 gap-1 mt-1 text-center font-bold">
                <span className="bg-slate-900 px-1 py-0.5 rounded text-cyan-400">X: {endEffector.x}</span>
                <span className="bg-slate-900 px-1 py-0.5 rounded text-pink-400">Y: {endEffector.y}</span>
                <span className="bg-slate-900 px-1 py-0.5 rounded text-emerald-400">Z: {endEffector.z}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Orbit Hint */}
        <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-sm border border-slate-800 text-[11px] font-mono text-slate-400 pointer-events-none flex items-center space-x-2">
          <span>🖱️ Arrastra para orbitar 360° | Rueda para zoom</span>
        </div>

        {/* Viewport Toggles (Right) */}
        <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
          <button
            onClick={() => setShowWorkspaceCloud(!showWorkspaceCloud)}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all backdrop-blur-md ${
              showWorkspaceCloud
                ? 'bg-cyan-950/90 text-cyan-300 border border-cyan-500/50 shadow-cyan-950/50 shadow-md'
                : 'bg-slate-900/80 text-slate-400 border border-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Nube Espacio de Trabajo</span>
            <span className="sm:hidden">Nube 3D</span>
          </button>

          <button
            onClick={() => setShowCoordinateAxes(!showCoordinateAxes)}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all backdrop-blur-md ${
              showCoordinateAxes
                ? 'bg-indigo-950/90 text-indigo-300 border border-indigo-500/50'
                : 'bg-slate-900/80 text-slate-400 border border-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ejes de Coordenadas</span>
            <span className="sm:hidden">Ejes</span>
          </button>
        </div>
      </div>

      {/* Manual Joint Sliders Control Tray */}
      <div className="p-4 sm:p-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-800">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
            Control Manual de Articulaciones (3 Grados de Libertad)
          </h4>
          {isGaitSimRunning && (
            <span className="text-[11px] font-mono text-amber-400">
              * Pausa la simulación para ajustar manualmente
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {/* Theta 1 Slider */}
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center mb-1">
              <span className="text-cyan-400 font-semibold">θ₁ Flexión / Extensión</span>
              <span className="text-cyan-300">{theta1}°</span>
            </div>
            <input
              type="range"
              min="-20"
              max="90"
              value={theta1}
              disabled={isGaitSimRunning}
              onChange={(e) => setTheta1(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 disabled:opacity-40"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>-20° (Extensión)</span>
              <span>+90° (Flexión)</span>
            </div>
          </div>

          {/* Theta 2 Slider */}
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center mb-1">
              <span className="text-pink-400 font-semibold">θ₂ Abducción / Aducción</span>
              <span className="text-pink-300">{theta2}°</span>
            </div>
            <input
              type="range"
              min="-15"
              max="45"
              value={theta2}
              disabled={isGaitSimRunning}
              onChange={(e) => setTheta2(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500 disabled:opacity-40"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>-15° (Aducción)</span>
              <span>+45° (Abducción)</span>
            </div>
          </div>

          {/* Theta 3 Slider */}
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center mb-1">
              <span className="text-emerald-400 font-semibold">θ₃ Rotación Interna/Externa</span>
              <span className="text-emerald-300">{theta3}°</span>
            </div>
            <input
              type="range"
              min="-25"
              max="25"
              value={theta3}
              disabled={isGaitSimRunning}
              onChange={(e) => setTheta3(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 disabled:opacity-40"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>-25° (Externa)</span>
              <span>+25° (Interna)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
