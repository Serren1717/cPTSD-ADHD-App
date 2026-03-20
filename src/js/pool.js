// The Pool — every task your app can suggest
// Each item is one specific action at one specific capacity level.
// The same activity can appear multiple times for different states.

const taskPool = [
  {
    id: "jp_01",
    name: "Watch 1 minute of anime with subs",
    state: "Shutdown",
    effort: 1,
    duration: 2,
    category: "Learning"
  },
  {
    id: "jp_02",
    name: "Review 5 kanji flashcards",
    state: "Grounded",
    effort: 2,
    duration: 15,
    category: "Learning"
  },
  {
    id: "self_01",
    name: "Wash face with cold water",
    state: "Shutdown",
    effort: 1,
    duration: 2,
    category: "Self-Care"
  },
  {
    id: "self_02",
    name: "Take a full shower",
    state: "Momentum",
    effort: 2,
    duration: 15,
    category: "Self-Care"
  },
  {
    id: "dog_01",
    name: "Let the dog out back",
    state: "Shutdown",
    effort: 1,
    duration: 3,
    category: "Responsibility"
  },
  {
    id: "dog_02",
    name: "Walk dog around the block",
    state: "Grounded",
    effort: 2,
    duration: 20,
    category: "Responsibility"
  }
];

console.table(taskPool);
