import { AnimatePresence } from 'moti';
import { View } from 'react-native';
import { ToastItem } from './ToastItem';
import { Toast } from './types';

interface ToastProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
}

export function Toast({ toasts, removeToast }: ToastProps) {
  return (
    <View style={{ position: 'absolute', bottom: 56, left: 0, right: 0, zIndex: 50 }}>
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onHide={removeToast}
          />
        ))}
      </AnimatePresence>
    </View>
  );
} 