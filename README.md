# LSCC Contact Page — React + Tailwind CSS

A standalone, integration-friendly Contact page for **Leaders' School & College Chattogram**.

## Included

- React + Vite
- Tailwind CSS
- Interactive live map using React Leaflet + OpenStreetMap tiles
- Animated/pulsing campus marker
- Responsive desktop/tablet/mobile layout
- Glassmorphism + premium education-institution visual style
- Chairman and Principal profile cards
- Exact contact/address/phone/email content from the supplied reference
- Google Maps external navigation button
- No backend required

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

## Integration into another React project

The main reusable page is:

`src/components/ContactPage.jsx`

Copy that component and the two image assets into the target project, then install:

```bash
npm install leaflet react-leaflet lucide-react
```

If the host project already uses Tailwind, keep the Tailwind utility classes and copy the animation/map rules from:

`src/index.css`

Also import Leaflet CSS:

```js
import "leaflet/dist/leaflet.css";
```

## Map

The map uses the official published coordinates for Leaders' School & College Chattogram:

- Latitude: `22.409991`
- Longitude: `91.819672`

No Google Maps API key is required for the embedded interactive map.

## Asset note

`chairman.png` is the supplied chairman portrait.

`principal.png` is cropped from the supplied reference screenshot because a separate principal image was not supplied.
