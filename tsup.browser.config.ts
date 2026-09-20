import { defineConfig } from 'tsup';

/**
 * Standalone browser bundles -- drop-in `<script>` builds that expose a single
 * `Rehive` global and need no bundler, no npm and no module loader.
 *
 * Two flavours, both self-contained (the SDK has no runtime dependencies):
 *   rehive.js      -- core: auth + user + admin (the package's main entry)
 *   rehive.full.js -- core plus every extension client
 *
 * Kept in a separate config from `tsup.config.ts` so the module build stays
 * untouched; `npm run build` runs the module build first (it cleans `dist`)
 * and then this one.
 */
const shared = {
  format: ['iife'] as const,
  globalName: 'Rehive',
  platform: 'browser' as const,
  target: 'es2020',
  outDir: 'dist/browser',
  dts: false,
  splitting: false,
  clean: false,
  // Emit `<name>.js` rather than tsup's default `<name>.global.js`.
  outExtension: () => ({ js: '.js' }),
};

export default defineConfig([
  {
    ...shared,
    entry: { rehive: 'src/index.ts', 'rehive.full': 'src/browser.ts' },
    minify: false,
    // The unminified bundles are readable as-is; a sourcemap for them would add
    // ~3 MB to the published tarball for no real debugging gain.
    sourcemap: false,
  },
  {
    ...shared,
    entry: { 'rehive.min': 'src/index.ts', 'rehive.full.min': 'src/browser.ts' },
    minify: true,
    sourcemap: true,
  },
]);
