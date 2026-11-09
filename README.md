# Change Detection Deep Dive

A small Angular application for exploring how Angular change detection updates component templates. The interface combines a counter and a message form, with debug output in each component to make template reevaluation visible in the browser console.

## Requirements

- Node.js and npm

The project uses Angular 18. Install the dependencies from the project root:

```bash
npm install
```

## Run locally

Start the Angular development server:

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200). The server watches source files and reloads the application when they change.

## Using the demo

- Use **Increment** and **Decrement** to update the counter.
- Enter text in **Your Message** and select **Save** to add it to the message list.
- Open the browser developer console and watch the component debug messages as you interact with the page. Each component's `debugOutput` getter logs when its template binding is evaluated.
- The counter also includes a simulated asynchronous user lookup that resolves after two seconds.

These controls and debug bindings are intended as a small, inspectable example rather than a production application.

## Project structure

```text
src/
  main.ts                         Application bootstrap
  styles.css                      Global styles
  app/
    app.component.*               Root page and component composition
    counter/                      Signal-based counter and async lookup
    info-message/                 Informational child component
    messages/                     Message state and message form/list
      new-message/                Form; emits submitted message text
      messages-list/              Displays the required messages input
```

The app is composed of standalone Angular components. The counter and message collection use signals; the message form emits submitted text to its parent, and the parent passes the message array to the list component.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Start the development server (`ng serve`). |
| `npm run build` | Build the app for production into `dist/change-detection-deep-dive/`. |
| `npm run watch` | Rebuild when source files change, using the development configuration. |
| `npm test` | Run the configured Karma/Jasmine test runner. |

## Technology

- Angular 18
- TypeScript
- RxJS
- Karma and Jasmine for unit testing
