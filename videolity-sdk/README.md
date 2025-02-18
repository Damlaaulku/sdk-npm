# Videolity Player

Videolity Player is a React component library that provides automatic resizing for iframe-based video players and images with customizable aspect ratios.

## Features

- Automatic resizing for iframe-based video players and images.
- Customizable aspect ratio (e.g., `16:9`, `4:3`).
- Easy integration with React projects.
- Supports both `iframe` and `img` elements.

---

## Installation

To add the package to your project, run the following command:

```bash
npm install videolity-sdk
```

---

## Usage

VideolityPlayer (for iframes)
You can add an iframe-based video player using the VideolityPlayer component:

```tsx
import React from "react";
import { VideolityPlayer } from "videolity-sdk";

const App = () => (
  <div>
    <h1>Videolity Player Example</h1>
    <VideolityPlayer
      src="https://example.com/video_url_string"
      viewRatio="16:9"
    />
  </div>
);

export default App;
```

VideolityImage (for images)
You can also use the VideolityImage component to display images with dynamic resizing based on the aspect ratio:

```tsx
import React from "react";
import { VideolityImage } from "videolity-sdk";

const App = () => (
  <div>
    <h1>Videolity Image Example</h1>
    <VideolityImage
      src="https://example.com/image_url_string"
      viewRatio="16:9"
    />
  </div>
);

export default App;
```

---

## Props

VideolityPlayer

| Prop        | Tip    | Açıklama                                               | Varsayılan Değer |
| ----------- | ------ | ------------------------------------------------------ | ---------------- |
| `src`       | string | The iframe URL of the video.                           | -                |
| `viewRatio` | string | The aspect ratio of the video.(Format: "width:height") | `"16:9"`         |

VideolityImage

| Prop        | Tip    | Açıklama                                                | Varsayılan Değer |
| ----------- | ------ | ------------------------------------------------------- | ---------------- |
| `src`       | string | The URL of the image to display.                        | -                |
| `viewRatio` | string | The aspect ratio of the image (Format: "width:height"). | `"16:9"`         |

---
