# React Native Toast Notification

A simple and customizable toast notification system for React Native applications.

## Installation

```bash
npm i @phonehtut/react-native-sonner
# or
yarn add @phonehtut/react-native-sonner
```

## Dependencies

This package requires the following peer dependencies:
- react
- react-native
- moti
- @expo/vector-icons
- tailwind-merge

## Usage

1. Wrap your app with the `ToastProvider`:

```tsx
import { ToastProvider } from '@phonehtut/react-native-sonner';

export default function App() {
  return (
    <ToastProvider>
      {/* Your app components */}
    </ToastProvider>
  );
}
```

2. Use the `useToastContext` hook to show toasts:

```tsx
import { useToastContext } from '@phonehtut/react-native-sonner';

function MyComponent() {
  const { showToast } = useToastContext();

  const handleSuccess = () => {
    showToast('Operation successful!', 'success');
  };

  const handleError = () => {
    showToast('Something went wrong!', 'error');
  };

  const handleInfo = () => {
    showToast('Here is some information', 'info');
  };

  return (
    // Your component JSX
  );
}
```

## API

### ToastProvider

The provider component that enables toast functionality throughout your app.

### useToastContext

A hook that provides access to the toast functionality:

```tsx
const { showToast, toasts, removeToast } = useToastContext();
```
### Add tailwind config

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@phonehtut/react-native-sonner/**/*.{js,jsx,ts,tsx}" /*Add this*/
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### showToast(message: string, type?: 'success' | 'error' | 'info', duration?: number)

Shows a toast notification:
- `message`: The message to display
- `type`: The type of toast ('success', 'error', or 'info')
- `duration`: How long the toast should be visible (in milliseconds, default: 3000)

## License

MIT 