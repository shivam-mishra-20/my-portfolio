// Note: If you see a PostCSS warning about a plugin not passing the `from` option
// ("A PostCSS plugin did not pass the `from` option to postcss.parse"), it
// usually means a plugin is calling `postcss.parse` without a source file.
// This is typically fixed in the plugin itself. Workarounds:
//  - Upgrade the plugin to a fixed version.
//  - If the plugin exposes options, set `from` where appropriate.
//  - As a last resort, wrap or patch the plugin invocation to include a `from`.

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
