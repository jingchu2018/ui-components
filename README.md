# ui-components

use umi framework for compile and debug
support chrome brower

recommend use pnpm,pnpm install as flowing

`curl -fsSL https://get.pnpm.io/install.sh | sh -`

download the code to the root directory

run the project

`pnpm run dev`

Then  you can see on your local computer
http://localhost:8000/

Files you can see:

├── package.json
├── pnpm-lock.yaml
├── src
│   ├── assets
│   │   ├── arrow-black.png
│   │   ├── arrow-white.png
│   │   ├── close-back.png
│   │   ├── close-white.png
│   │   ├── from-black.png
│   │   ├── from-white.png
│   │   ├── pen-black.png
│   │   ├── pen-white.png
│   │   ├── time-black.png
│   │   ├── time-white.png
│   │   ├── to-black.png
│   │   └── to-white.png
│   ├── components
│   │   ├── Button.tsx   //basic styled button for footer
│   │   ├── ConfirmButton.tsx  // the footer transfer and cancel button
│   │   ├── DepositAtom.tsx  // the whole component
│   │   ├── Dialog.tsx // dialog component has close button and titile
│   │   ├── FromToContent.tsx // from to component
│   │   ├── InputContent.tsx // the component in FromTo component
│   │   ├── SelectAmountBiz.tsx  // select amount component
│   │   └── Time.tsx // How much time left component
│   ├── layouts
│   │   └── index.tsx // layouts
│   └── pages
│       └── index.tsx // entry file for test  or see result
├── tsconfig.json
└── typings.d.ts

// There is no annotation; the page view isn't that accurate
