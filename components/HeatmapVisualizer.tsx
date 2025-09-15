"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeatmapData {
  x: number;
  y: number;
  timestamp: number;
}

interface HeatmapVisualizerProps {
  enabled?: boolean;
  data?: HeatmapData[];
}

export default function HeatmapVisualizer({ enabled = false, data = [] }: HeatmapVisualizerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [heatmapPoints, setHeatmapPoints] = useState<HeatmapData[]>([]);

  useEffect(() => {
    if (enabled && data.length > 0) {
      setHeatmapPoints(data);
    }
  }, [enabled, data]);

  // Group points by proximity to reduce visual clutter
  const groupedPoints = heatmapPoints.reduce((acc, point) => {
    const key = `${Math.floor(point.x / 50)}-${Math.floor(point.y / 50)}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(point);
    return acc;
  }, {} as Record<string, HeatmapData[]>);

  if (!enabled || heatmapPoints.length === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-50"
        >
          {/* Heatmap Points */}
          {Object.entries(groupedPoints).map(([key, points]) => {
            const avgX = points.reduce((sum, p) => sum + p.x, 0) / points.length;
            const avgY = points.reduce((sum, p) => sum + p.y, 0) / points.length;
            const intensity = Math.min(points.length / 10, 1); // Normalize intensity

            return (
              <motion.div
                key={key}
                className="absolute w-4 h-4 rounded-full bg-red-500"
                style={{
                  left: avgX - 8,
                  top: avgY - 8,
                  opacity: 0.3 + (intensity * 0.7),
                  backgroundColor: `rgba(239, 68, 68, ${0.3 + intensity * 0.7})`
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            );
          })}

          {/* Controls */}
          <div className="fixed top-4 right-4 bg-black/80 text-white p-3 rounded-lg">
            <div className="text-sm font-medium mb-2">Heatmap Data</div>
            <div className="text-xs text-gray-300">
              {heatmapPoints.length} interaction points
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="mt-2 px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-xs"
            >
              Hide Heatmap
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Development-only heatmap toggle
export const HeatmapToggle = () => {
  const [showHeatmap, setShowHeatmap] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        setShowHeatmap(!showHeatmap);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [showHeatmap]);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <>
      <div className="fixed top-4 left-4 bg-black/80 text-white p-2 rounded-lg text-xs z-50">
        Press Ctrl+H to toggle heatmap
      </div>
      {showHeatmap && (
        <HeatmapVisualizer 
          enabled={true}
          data={[]} // This would be populated with actual heatmap data
        />
      )}
    </>
  );
};
