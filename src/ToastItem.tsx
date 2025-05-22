import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ToastType } from './types';

interface ToastItemProps {
  id: string;
  message: string;
  type?: ToastType;
  onHide: (id: string) => void;
  duration?: number;
}

const toastStyles = {
  success: 'border-l-4 border-green-500',
  error: 'border-l-4 border-red-500',
  info: 'border-l-4 border-blue-500',
};

const toastIcons = {
  success: 'checkmark-circle-outline',
  error: 'alert-circle-outline',
  info: 'information-circle-outline',
} as const;

export function ToastItem({
  id,
  message,
  type = 'info',
  onHide,
  duration = 3000,
}: ToastItemProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onHide(id);
    }, duration);

    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 20 }}
      style={{ marginBottom: 8 }}
    >
      <View
        className={`flex-row items-center justify-between w-[90vw] mx-auto px-4 py-5 rounded-lg shadow-lg bg-black ${toastStyles[type]}`}
      >
        <View className="flex-row items-center flex-1">
          <Ionicons 
            name={toastIcons[type]} 
            size={20} 
            color={type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#3b82f6'} 
            style={{ marginRight: 8 }}
          />
          <Text className="text-white font-medium flex-1">{message}</Text>
        </View>
        <Pressable onPress={() => onHide(id)}>
          <Text className="text-white ml-4 font-bold">✕</Text>
        </Pressable>
      </View>
    </MotiView>
  );
} 