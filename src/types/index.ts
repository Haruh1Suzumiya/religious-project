export interface Product {
    name: string;
    price: number;
    description: string;
    features: string[];
  }
  
  export interface EnlightenmentState {
    isEnlightened: boolean;
    rejectionCount: number;
    showModal: boolean;
  }
  
  export interface EnlightenmentHookReturn extends EnlightenmentState {
    handleEnlightenment: () => void;
    acceptTruth: () => void;
    closeModal: () => void;
  }