import { useState, useCallback } from 'react';
import { EnlightenmentHookReturn } from '../types';

export const useEnlightenment = (): EnlightenmentHookReturn => {
  const [isEnlightened, setIsEnlightened] = useState(false);
  const [rejectionCount, setRejectionCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleEnlightenment = useCallback(() => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const acceptTruth = useCallback(() => {
    setIsEnlightened(true);
    setShowModal(false);
    document.body.style.overflow = 'auto';
  }, []);

  const closeModal = useCallback(() => {
    setRejectionCount(prev => {
      const newCount = prev + 1;
      if (newCount >= 2) {
        alert('あなたの魂が危険です。今すぐ真実を受け入れなければ、永遠の闇に落ちることになります。');
      }
      return newCount;
    });
  }, []);

  return {
    isEnlightened,
    rejectionCount,
    showModal,
    handleEnlightenment,
    acceptTruth,
    closeModal
  };
};