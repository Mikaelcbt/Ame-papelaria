
// Fix: Added React import to resolve the 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface Category {
  id: string;
  name: string;
  images: string[]; // Alterado de image: string para images: string[]
  description: string;
}

export interface Brand {
  name: string;
}

export interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}
