import { useRef, useState } from 'react';
import { Toast, ToastType } from './types';

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idCounter = useRef(0);

  const showToast = (
    message: string,
    type: ToastType = 'info',
    duration = 3000
  ) => {
    const id = `toast-${idCounter.current++}`;
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return {
    toasts,
    showToast,
    removeToast,
  };
} 