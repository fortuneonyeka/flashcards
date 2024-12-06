export const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  },
  {
    id: 5253,
    question: "What are React Hooks? Why are they useful?",
    answer: "React Hooks are functions that let you use state and lifecycle features in functional components. Examples include useState, useEffect, and useContext.",
  },
  {
    id: 6781,
    question: "How does React manage updates to the DOM?",
    answer: "React uses a virtual DOM. When state or props change, React computes the difference (diffing) between the new and old virtual DOM trees. It then updates only the specific parts of the real DOM that changed, improving performance."
  },
  {
    id: 4571,
    question: "What is the Context API?",
    answer: "The Context API allows React components to share data without passing props down through multiple levels. It is used for global state management, like themes or user authentication."
  },
  {
    id: 3284,
    question: "Explain the difference between useEffect and useLayoutEffect.",
    answer: "useEffect: Runs asynchronously after the render is committed to the screen. Good for data fetching and subscriptions.useLayoutEffect: Runs synchronously after render but before the browser paints the screen. Ideal for DOM measurements and layout updates."
  },
  {
    id: 8912,
    question:"How do you handle performance optimization in React?",
    answer: "Use memoization with React.memo for components.Use useCallback and useMemo to prevent unnecessary re-renders.Optimize large lists with libraries like react-window or react-virtualized.Split code with React.lazy and Suspense."
  },
  {
    id: 7498,
    question: "Why are keys important in React lists?",
    answer: "Keys help React identify which items in a list have changed, been added, or removed. They optimize reconciliation by reducing unnecessary DOM operations."
  }
];