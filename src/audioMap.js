/* =========================================================================
   AUDIO MAP — Mapping fixed text keys to audio files or speech text
   Generated mp3 files live in /public/assets/audio/<key>.mp3
   Run `npm run generate:audio` to (re)generate them with ElevenLabs "Alice".
   ========================================================================= */
import { PRACTICE_QUESTIONS } from './practiceQuestions.js';

export const AUDIO_MAP = {
  // Wonder Phase
  "wonder_1": {
    text: "To ride the Thunder Coaster you must be at least 120 centimetres tall. Leo is 112 centimetres. Growing 8 centimetres works, but so do 9, 10 and a half, or even 20 centimetres. A whole range of answers! How can we write and solve a problem that has endless answers?",
    style: "question",
    file: "/assets/audio/wonder_1.mp3"
  },

  // Story Phase Slides 1 to 8
  "story_1": {
    text: "An equation like x equals 5 has just one answer. But real life is full of limits, like speed limits, age limits, height rules and budgets, where many numbers work. These are called inequalities!",
    style: "statement",
    file: "/assets/audio/story_1.mp3"
  },
  "story_2": {
    text: "We use four signs. Less than. Greater than. Less than or equal to, which means at most. And greater than or equal to, which means at least.",
    style: "emphasis",
    file: "/assets/audio/story_2.mp3"
  },
  "story_3": {
    text: "We draw the answers on a number line. An open circle means the boundary is not included, for less than or greater than. A filled dot means it is included, for less than or equal to, or greater than or equal to. The arrow points to all the other answers.",
    style: "statement",
    file: "/assets/audio/story_3.mp3"
  },
  "story_4": {
    text: "Solve inequalities using the same steps as equations. For x plus 7 is less than or equal to 15, subtract 7 from both sides to get x is less than or equal to 8. For 3 x is greater than 12, divide both sides by 3 to get x is greater than 4. The sign stays the same!",
    style: "emphasis",
    file: "/assets/audio/story_4.mp3"
  },
  "story_5": {
    text: "When you multiply or divide both sides by a negative number, you must flip the inequality sign. For negative 2 x is less than 10, divide by negative 2 and flip the sign: x is greater than negative 5. Why? 2 is less than 5, but negative 2 is greater than negative 5!",
    style: "emphasis",
    file: "/assets/audio/story_5.mp3"
  },
  "story_6": {
    text: "Solve 4 x minus 5 is greater than or equal to 11. Add 5 to get 4 x is greater than or equal to 16, then divide by 4 to get x is greater than or equal to 4. Check with one value inside the answer and one outside. x equals 5 works, but x equals 3 does not.",
    style: "encouragement",
    file: "/assets/audio/story_6.mp3"
  },
  "story_7": {
    text: "Emma has 50 dollars at the fair. Entry costs 14 dollars and each ride costs 4 dollars. So 14 plus 4 r is at most 50, which gives 4 r is at most 36, and r is at most 9. Emma can go on at most 9 rides!",
    style: "encouragement",
    file: "/assets/audio/story_7.mp3"
  },
  "story_8": {
    text: "Brilliant work! You've learned the four signs, number lines, solving steps and the golden flip rule. Now step into the lab to build number lines, tip the scales and catch sneaky sign flips!",
    style: "celebration",
    file: "/assets/audio/story_8.mp3"
  },

  // Simulate Phase Station Intros
  "sim_1": {
    text: "Welcome to the Number Line Builder! Read the rule, then tap the number line to place the boundary, choose an open circle or a filled dot, and pick the direction of the arrow.",
    style: "encouragement",
    file: "/assets/audio/sim_1.mp3"
  },
  "sim_2": {
    text: "In the Tipping Scale Solver, pick the inequality that matches the story. Then do the same thing to both sides, and decide whether to keep or flip the sign, until x is alone!",
    style: "statement",
    file: "/assets/audio/sim_2.mp3"
  },
  "sim_3": {
    text: "Time to be a Sign-Flip Detective! Each solution hides one sneaky mistake. Tap the wrong line, choose the correct fix, then test values to prove the answer works.",
    style: "question",
    file: "/assets/audio/sim_3.mp3"
  },

  // Simulate Phase Detailed Activity Guidance
  "sim_1_1": {
    text: "Activity 1: Thunder Coaster Height Check. Read the ride safety rule: riders must be at least 120 centimetres tall. Tap the number line to place the boundary, choose an open circle or filled dot, and pick the arrow direction. Then test if Leo can board!",
    style: "instruction",
    file: "/assets/audio/sim_1_1.mp3"
  },
  "sim_1_2": {
    text: "Activity 2: School Zone Speed Radar. The speed camera is active. Drivers may travel at most 40 kilometres per hour. Place the boundary at 40, select whether 40 is included, and show every safe speed on the number line.",
    style: "instruction",
    file: "/assets/audio/sim_1_2.mp3"
  },
  "sim_1_3": {
    text: "Activity 3: Polar Sanctuary Cryo-Pool. The penguin pool water must stay strictly colder than negative 2 degrees Celsius. Build the inequality and test temperatures to make sure the ice shelf stays frozen.",
    style: "instruction",
    file: "/assets/audio/sim_1_3.mp3"
  },
  "sim_2_1": {
    text: "Activity 1: Leo's Carnival Snack Budget. Leo has a 15 dollar budget and buys a 7 dollar popcorn bucket. Pick the inequality that matches the budget, then balance both sides of the scale to solve for x.",
    style: "instruction",
    file: "/assets/audio/sim_2_1.mp3"
  },
  "sim_2_2": {
    text: "Activity 2: Emma's Fair Ride Adventure. Emma has 50 dollars. Admission is 14 dollars and each ride is 4 dollars. Choose the matching inequality and solve step by step to find the greatest number of rides Emma can enjoy.",
    style: "instruction",
    file: "/assets/audio/sim_2_2.mp3"
  },
  "sim_2_3": {
    text: "Activity 3: Science Lab Cryo-Chamber. The chamber cools by 2 degrees per minute. We need it strictly colder than negative 10 degrees. Solve the inequality, and remember the Golden Flip rule when dividing by a negative number!",
    style: "instruction",
    file: "/assets/audio/sim_2_3.mp3"
  },
  "sim_3_1": {
    text: "Case 101: Mason's Missing Negative Flip. Mason calculated the cooling time for his cart, but made a mistake on line 3. Tap the wrong line, choose the correct fix, and test values to prove your solution.",
    style: "instruction",
    file: "/assets/audio/sim_3_1.mp3"
  },
  "sim_3_2": {
    text: "Case 102: Chloe's Two-Step Balance Slip. Chloe was calculating art supplies, but slipped on line 2. Find the inverse operation mistake and restore balance to the inequality.",
    style: "instruction",
    file: "/assets/audio/sim_3_2.mp3"
  },
  "sim_3_3": {
    text: "Case 103: Ava's Theme Park Ticket Trap. Ava needs at least 80 tickets to win the giant plush lion. Spot the error on line 2, select the right inequality sign, and verify the correct level target.",
    style: "instruction",
    file: "/assets/audio/sim_3_3.mp3"
  },

  // Feedback & Common Audio
  "fb_correct": {
    text: "Correct! Brilliant inequality work!",
    style: "celebration",
    file: "/assets/audio/fb_correct.mp3"
  },
  "fb_wrong": {
    text: "Not quite! Let's look at the solution.",
    style: "encouragement",
    file: "/assets/audio/fb_wrong.mp3"
  },
  "sim_success": {
    text: "Great job! You got it!",
    style: "celebration",
    file: "/assets/audio/sim_success.mp3"
  },
  "sim_retry": {
    text: "Not quite. Check the sign and try again!",
    style: "encouragement",
    file: "/assets/audio/sim_retry.mp3"
  },

  // Reflection Phase
  "reflect_1": {
    text: "Fantastic work completing the module! In your own words, explain how solving an inequality is like solving an equation, and when you must flip the sign. Show it with an example of your own.",
    style: "thinking",
    file: "/assets/audio/reflect_1.mp3"
  },
  "reflect_done": {
    text: "Outstanding reflection! Lesson complete!",
    style: "celebration",
    file: "/assets/audio/reflect_done.mp3"
  }
};

// Dynamically populate all 100 Practice Questions and 100 Hints
PRACTICE_QUESTIONS.forEach((worldQuestions, wIdx) => {
  worldQuestions.forEach((q, qIdx) => {
    AUDIO_MAP[`practice_w${wIdx}_q${qIdx}`] = {
      text: q.speechPrompt,
      style: "question",
      file: `/assets/audio/practice_w${wIdx}_q${qIdx}.mp3`
    };
    AUDIO_MAP[`hint_w${wIdx}_q${qIdx}`] = {
      text: q.speechHint,
      style: "encouragement",
      file: `/assets/audio/hint_w${wIdx}_q${qIdx}.mp3`
    };
  });
});
