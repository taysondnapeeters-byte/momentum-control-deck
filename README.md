# Momentum Control Deck

Build the foundation of a mobile-first web app called Momentum Deck.



The app is intended to become a control dashboard for a Flipper Zero running Momentum Firmware, but for this first step focus ONLY on creating a stable application structure and polished UI.



TECH STACK



Use:



- React

- TypeScript

- Vite

- Tailwind CSS

- IndexedDB for local application data

- PWA support



Keep the code modular and easy to extend.



IMPORTANT



Do NOT implement Bluetooth yet.



Do NOT implement Flipper communication yet.



Do NOT implement Gemini yet.



Do NOT implement file transfer yet.



Do NOT implement screen streaming yet.



Do NOT implement signal capture yet.



This first step is ONLY the application foundation and UI.



DESIGN



Create a premium dark, technical but clean mobile interface.



The application should feel like a professional mobile control deck rather than a generic dashboard.



Optimize primarily for smartphones.



Use:



- large touch targets;

- rounded cards;

- subtle borders;

- smooth but restrained animations;

- clear typography;

- high contrast;

- responsive layout.



Avoid excessive visual effects.



NAVIGATION



Create these main sections:



- Deck

- Device

- AI

- Files

- Virtual Flipper

- Geo

- Settings



Use a mobile-friendly bottom navigation bar.



The Deck should be the default home screen.



DECK



Create a Stream Deck-style grid.



Show several example buttons such as:



- TV ON

- TV OFF

- LIGHTS

- VOLUME +

- VOLUME -

- CUSTOM



These are UI examples only.



They must NOT execute anything yet.



Each button should have:



- icon;

- name;

- customizable appearance;

- edit action.



Add an "Edit Deck" mode where buttons can be reordered, edited and removed.



Store deck configuration locally using IndexedDB.



DEVICE



Create a Device page with a placeholder connection panel.



Show:



"Flipper Zero"



Status:



"Not connected"



Add a button:



"Connect Flipper"



For now this button should NOT attempt Bluetooth communication.



It may display a message such as:



"Bluetooth integration will be enabled in the next development phase."



AI



Create an AI page.



Show:



"Gemini AI"



Status:



"Not configured"



Add a button:



"Configure Gemini"



For now this should open the Settings page.



Do NOT implement the Gemini API yet.



FILES



Create a Files page with an empty-state interface.



Display:



"Flipper Files"



"Connect a Flipper to browse supported files."



Do not implement file transfer yet.



VIRTUAL FLIPPER



Create a Virtual Flipper page containing a visual placeholder for a Flipper screen and controls:



- Up

- Down

- Left

- Right

- OK

- Back



These controls must not send anything yet.



Clearly indicate:



"Hardware integration pending"



Do not fake a live Flipper display.



GEO



Create a Geo page with a clean map placeholder.



Display:



"Geo-Catcher"



"Signal and GPS functionality will be added later."



Do not implement signal interception or Flipper communication yet.



SETTINGS



Create a proper Settings page.



Include:



Appearance



- Dark mode

- Light mode



Gemini AI



Include:



"Gemini API Key"



A password-style input field.



Add:



- Show/Hide key

- Save API Key

- Remove API Key

- Test Connection



For this first phase, do NOT connect to Gemini.



The API key should be stored locally only if the user chooses to save it.



Never hard-code an API key.



Never include an API key in source code.



Never create a "VITE_GEMINI_API_KEY" variable.



Show a clear warning that API keys are sensitive credentials.



Data



Add:



- Clear local app data



Ask for confirmation before clearing data.



APPLICATION STATE



Create clean application state management for:



- current page;

- deck configuration;

- settings;

- connection status.



Keep hardware communication completely separate from the UI.



Prepare the architecture for future services such as:



FlipperDevice

FlipperBleTransport

FlipperCli

FlipperRpc

FlipperCapabilities

GeminiService



Do NOT implement these services yet unless they are only empty interfaces/placeholders required for architecture.



MOCK DATA



If mock data is used for the UI, clearly keep it separate from real hardware data.



Never display mock data as if it came from a real Flipper.



ERROR HANDLING



Create a clean global error-handling approach.



The application should never crash because a future hardware integration is unavailable.



Show user-friendly error messages.



PERFORMANCE



Keep this first version lightweight.



Do not install unnecessary libraries.



Do not implement large features that are not requested in this phase.



MOST IMPORTANT RULE



Do not attempt to build the entire Momentum/Flipper system in this step.



Build a stable foundation first.



After completing this phase, stop.



Do not automatically implement future phases.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6e859f1d-a26d-4d8b-b495-9badaafb31d9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
