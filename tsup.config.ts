import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    auth: 'src/auth/index.ts',
    user: 'src/platform/user/index.ts',
    admin: 'src/platform/admin/index.ts',
    'extensions/conversion': 'src/extensions/conversion/index.ts',
    'extensions/mass-send': 'src/extensions/mass-send/index.ts',
    'extensions/notifications': 'src/extensions/notifications/index.ts',
    'extensions/products': 'src/extensions/products/index.ts',
    'extensions/rewards': 'src/extensions/rewards/index.ts',
    'extensions/stellar': 'src/extensions/stellar/index.ts',
    'extensions/stellar-testnet': 'src/extensions/stellar-testnet/index.ts',
    'extensions/business': 'src/extensions/business/index.ts',
    'extensions/payment-requests': 'src/extensions/payment-requests/index.ts',
    'extensions/bridge': 'src/extensions/bridge/index.ts',
    'extensions/app': 'src/extensions/app/index.ts',
    react: 'src/react.tsx',
  },
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  outDir: 'dist',
  splitting: true,
  clean: true,
});
