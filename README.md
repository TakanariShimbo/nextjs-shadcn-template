# Ref

install shadcn to vite https://ui.shadcn.com/docs/installation/next

change theme of shadcn https://ui.shadcn.com/themes

# Memo

1. create-next-app

```sh
npx create-next-app@latest .
```

choose like below

```
√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... Yes
√ Would you like to use `src/` directory? ... No
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias (@/*)? ... No
```

2. run shadcn ui cli

```sh
npx shadcn-ui@latest init
```

choose like below

```
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Gray
√ Would you like to use CSS variables for colors? ... yes
```

3. change font

change layout.tsx and tailwind.config.ts

```tsx:layout.tsx
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google" // changed

import { cn } from "@/lib/utils" // added

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})  // changed

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )} // added
      >
        ...
      </body>
    </html>
  )
}
```

```ts:tailwind.config.ts
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
}
```

4. test

add button component

```sh
npx shadcn-ui@latest add button
```

change page.tsx

```tsx:page.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex justify-center flex-col items-center">
      <p className="p-24 text-3xl font-bold text-primary">HELLO WORLD</p>
      <Button onClick={() => setCount((prev) => prev + 1)}>Clicked {count} times</Button>
    </div>
  );
}
```

```sh
npm run dev
```
