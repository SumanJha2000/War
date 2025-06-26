# War - Node.js App

This is a Node.js console application that simulates a strategic battle scenario between two armies. Each army consists of 5 platoons, and the goal is to find a winning arrangement of your own platoons to defeat the enemy in at least 3 out of 5 one-on-one battles.


##  Tech Stack

- Node.js (v18+)


##  Logic

Each platoon has a type (e.g. Militia, Spearmen, etc.) and a soldier count. Certain unit types have advantages over others. If one platoon has an advantage over the opposing platoon, its soldier count is doubled during comparison.

The app checks all permutations of your army and returns the first arrangement that wins 3 or more battles.


##  How to Run

1. Clone the repository
2. Run the following command from project root:

node ./src/index.js
npm run start
npm run dev
