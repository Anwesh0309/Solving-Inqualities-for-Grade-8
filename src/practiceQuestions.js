/* =========================================================================
   PRACTICE QUESTIONS — 10 Worlds × 10 Questions = 100 Curated Grade 8 Questions
   Each question has:
   - prompt: On-screen mathematical text
   - speechPrompt: Phonetically accurate text for ElevenLabs / TTS
   - options: 4 distinct multiple-choice options
   - correctIndex: Index of correct option (0-3)
   - hint: On-screen hint text
   - speechHint: Phonetically accurate hint for ElevenLabs / TTS
   - explanation: Solution explanation
   - visual: Diagram configuration for InequalityDiagram
   ========================================================================= */

export const PRACTICE_QUESTIONS = [
  // =========================================================================
  // WORLD 1: Height Check Park (Theme: Keywords, Height limits, Simple Add/Sub)
  // =========================================================================
  [
    {
      id: "w0_q0",
      rule: "KEYWORD RULE",
      prompt: "Riders on the Thunder Coaster must be at least 120 cm tall. Which inequality describes every allowed height h?",
      speechPrompt: "Riders on the Thunder Coaster must be at least 120 centimetres tall. Which inequality describes every allowed height h?",
      options: ["h ≥ 120", "h > 120", "h ≤ 120", "h = 120"],
      correctIndex: 0,
      hint: "'At least 120' means 120 or taller, so 120 is included.",
      speechHint: "At least 120 means 120 centimetres or taller, so 120 is included using the greater than or equal to sign.",
      explanation: "'At least' translates to greater than or equal to (≥). So h ≥ 120.",
      visual: { kind: "phrase", text: "Riders must be at least 120 cm tall to ride.", keys: ["at least"] }
    },
    {
      id: "w0_q1",
      rule: "KEYWORD RULE",
      prompt: "The Toddler Train ride allows children who are at most 105 cm tall. Which inequality describes allowed height h?",
      speechPrompt: "The Toddler Train ride allows children who are at most 105 centimetres tall. Which inequality describes allowed height h?",
      options: ["h < 105", "h ≤ 105", "h ≥ 105", "h > 105"],
      correctIndex: 1,
      hint: "'At most 105' means 105 is the upper limit and is included.",
      speechHint: "At most 105 means 105 is the maximum limit and is included using the less than or equal to sign.",
      explanation: "'At most' translates to less than or equal to (≤). So h ≤ 105.",
      visual: { kind: "phrase", text: "Children may be at most 105 cm tall.", keys: ["at most"] }
    },
    {
      id: "w0_q2",
      rule: "KEYWORD RULE",
      prompt: "Splash Mountain requires riders to be strictly taller than 130 cm. Which inequality represents allowed height h?",
      speechPrompt: "Splash Mountain requires riders to be strictly taller than 130 centimetres. Which inequality represents allowed height h?",
      options: ["h > 130", "h ≥ 130", "h < 130", "h ≤ 130"],
      correctIndex: 0,
      hint: "'Strictly taller than' means greater than, and 130 is NOT included.",
      speechHint: "Strictly taller than means greater than, and 130 is not included, so use the open greater than sign.",
      explanation: "'Strictly taller than' means greater than (>). So h > 130.",
      visual: { kind: "phrase", text: "Riders must be strictly taller than 130 cm.", keys: ["strictly taller than"] }
    },
    {
      id: "w0_q3",
      rule: "KEYWORD RULE",
      prompt: "The Mini Ferris Wheel is for children under 115 cm tall. Which inequality represents height h?",
      speechPrompt: "The Mini Ferris Wheel is for children under 115 centimetres tall. Which inequality represents height h?",
      options: ["h ≤ 115", "h < 115", "h > 115", "h ≥ 115"],
      correctIndex: 1,
      hint: "'Under 115 cm' means less than 115, excluding 115 itself.",
      speechHint: "Under 115 centimetres means less than 115, excluding 115 itself, so use the less than sign.",
      explanation: "'Under' means less than (<). So h < 115.",
      visual: { kind: "phrase", text: "Children must be under 115 cm tall.", keys: ["under"] }
    },
    {
      id: "w0_q4",
      rule: "SOLVE RULE",
      prompt: "Leo is 112 cm tall. He needs to grow g cm to reach at least 120 cm: 112 + g ≥ 120. Solve for g.",
      speechPrompt: "Leo is 112 centimetres tall. He needs to grow g centimetres to reach at least 120 centimetres: 112 plus g is greater than or equal to 120. Solve for g.",
      options: ["g ≥ 8", "g ≤ 8", "g > 8", "g ≥ 232"],
      correctIndex: 0,
      hint: "Subtract 112 from both sides of the inequality.",
      speechHint: "Subtract 112 from both sides of the inequality. The sign does not change.",
      explanation: "Subtract 112 from both sides: g ≥ 120 − 112, so g ≥ 8 cm.",
      visual: { kind: "ineq", lhs: "112 + g", sign: "≥", rhs: "120" }
    },
    {
      id: "w0_q5",
      rule: "SOLVE RULE",
      prompt: "Solve: h + 6 ≤ 135",
      speechPrompt: "Solve: h plus 6 is less than or equal to 135.",
      options: ["h ≤ 129", "h < 129", "h ≥ 129", "h ≤ 141"],
      correctIndex: 0,
      hint: "What operation undoes adding 6? Subtract 6 from both sides.",
      speechHint: "What operation undoes adding 6? Subtract 6 from both sides.",
      explanation: "Subtract 6 from both sides: h ≤ 135 − 6, so h ≤ 129.",
      visual: { kind: "ineq", lhs: "h + 6", sign: "≤", rhs: "135" }
    },
    {
      id: "w0_q6",
      rule: "NUMBER LINE RULE",
      prompt: "Which inequality is shown by a closed dot at 120 with an arrow pointing to the right?",
      speechPrompt: "Which inequality is shown by a closed dot at 120 with an arrow pointing to the right?",
      options: ["h ≥ 120", "h > 120", "h ≤ 120", "h < 120"],
      correctIndex: 0,
      hint: "Closed dot means included (≥ or ≤). Arrow pointing right means greater than.",
      speechHint: "A closed dot means included, and an arrow pointing to the right means greater than.",
      explanation: "Closed dot at 120 and arrow right means greater than or equal to: h ≥ 120.",
      visual: { kind: "numline", min: 110, max: 130, step: 2, point: 120, closed: true, dir: "right" }
    },
    {
      id: "w0_q7",
      rule: "NUMBER LINE RULE",
      prompt: "Which inequality is shown by an open circle at 100 with an arrow pointing to the right?",
      speechPrompt: "Which inequality is shown by an open circle at 100 with an arrow pointing to the right?",
      options: ["h > 100", "h ≥ 100", "h < 100", "h ≤ 100"],
      correctIndex: 0,
      hint: "An open circle means 100 is NOT included (> or <).",
      speechHint: "An open circle means 100 is not included, and the arrow to the right means greater than.",
      explanation: "Open circle at 100 and arrow right means strictly greater than: h > 100.",
      visual: { kind: "numline", min: 90, max: 110, step: 2, point: 100, closed: false, dir: "right" }
    },
    {
      id: "w0_q8",
      rule: "TEST RULE",
      prompt: "A roller coaster rule is h ≥ 120. Is Leo, who is 118 cm tall, allowed to ride?",
      speechPrompt: "A roller coaster rule is h is greater than or equal to 120. Is Leo, who is 118 centimetres tall, allowed to ride?",
      options: ["No, because 118 < 120", "Yes, because 118 is close to 120", "Yes, because 118 > 120", "No, because 118 = 120"],
      correctIndex: 0,
      hint: "Test whether 118 is greater than or equal to 120.",
      speechHint: "Test whether 118 is greater than or equal to 120. Since 118 is less than 120, the condition is false.",
      explanation: "118 ≥ 120 is FALSE because 118 is less than 120. Leo cannot ride yet.",
      visual: { kind: "phrase", text: "Test value: h = 118 cm in rule h ≥ 120 cm", keys: ["h = 118 cm", "h ≥ 120 cm"] }
    },
    {
      id: "w0_q9",
      rule: "SOLVE RULE",
      prompt: "Jack's height plus 5 cm must be at least 125 cm: x + 5 ≥ 125. What is Jack's minimum current height?",
      speechPrompt: "Jack's height plus 5 centimetres must be at least 125 centimetres: x plus 5 is greater than or equal to 125. What is Jack's minimum current height?",
      options: ["120 cm", "125 cm", "130 cm", "115 cm"],
      correctIndex: 0,
      hint: "Subtract 5 from 125 to find the boundary value.",
      speechHint: "Subtract 5 from 125 to find the minimum boundary value.",
      explanation: "x ≥ 125 − 5 gives x ≥ 120 cm. So his minimum current height is 120 cm.",
      visual: { kind: "ineq", lhs: "x + 5", sign: "≥", rhs: "125" }
    }
  ],

  // =========================================================================
  // WORLD 2: Number Line Lane (Theme: Boundaries, Circles, Rays, Test values)
  // =========================================================================
  [
    {
      id: "w1_q0",
      rule: "NUMBER LINE RULE",
      prompt: "Which inequality is represented by an open circle at 4 and an arrow pointing to the right?",
      speechPrompt: "Which inequality is represented by an open circle at 4 and an arrow pointing to the right?",
      options: ["x > 4", "x ≥ 4", "x < 4", "x ≤ 4"],
      correctIndex: 0,
      hint: "Open circle means strictly greater than or less than. Arrow right means greater than.",
      speechHint: "An open circle means strictly greater than or less than. An arrow to the right means greater than.",
      explanation: "Open circle at 4 means 4 is not included; arrow right means greater than: x > 4.",
      visual: { kind: "numline", min: 0, max: 8, step: 1, point: 4, closed: false, dir: "right" }
    },
    {
      id: "w1_q1",
      rule: "NUMBER LINE RULE",
      prompt: "Which inequality is represented by a closed dot at −2 and an arrow pointing to the left?",
      speechPrompt: "Which inequality is represented by a closed dot at negative 2 and an arrow pointing to the left?",
      options: ["x ≤ −2", "x < −2", "x ≥ −2", "x > −2"],
      correctIndex: 0,
      hint: "Closed dot means 'or equal to'. Arrow left means less than.",
      speechHint: "A closed dot means or equal to. An arrow pointing left means less than.",
      explanation: "Closed dot at −2 and arrow left means less than or equal to: x ≤ −2.",
      visual: { kind: "numline", min: -6, max: 2, step: 1, point: -2, closed: true, dir: "left" }
    },
    {
      id: "w1_q2",
      rule: "NUMBER LINE RULE",
      prompt: "Which circle type and arrow direction represent the inequality x < 0?",
      speechPrompt: "Which circle type and arrow direction represent the inequality x is less than 0?",
      options: ["Open circle at 0, arrow left", "Closed dot at 0, arrow left", "Open circle at 0, arrow right", "Closed dot at 0, arrow right"],
      correctIndex: 0,
      hint: "< has no equal bar (open circle), and points to smaller numbers (left).",
      speechHint: "Less than has no equal bar, so use an open circle, pointing left toward smaller numbers.",
      explanation: "x < 0 has no equality bar (open circle at 0) and values smaller than 0 are to the left.",
      visual: { kind: "numline", min: -4, max: 4, step: 1, point: 0, closed: false, dir: "left" }
    },
    {
      id: "w1_q3",
      rule: "NUMBER LINE RULE",
      prompt: "Which circle type and arrow direction represent the inequality x ≥ 3?",
      speechPrompt: "Which circle type and arrow direction represent the inequality x is greater than or equal to 3?",
      options: ["Closed dot at 3, arrow right", "Open circle at 3, arrow right", "Closed dot at 3, arrow left", "Open circle at 3, arrow left"],
      correctIndex: 0,
      hint: "≥ includes 3 (closed dot) and covers larger numbers (arrow right).",
      speechHint: "Greater than or equal to includes 3 with a closed dot, and covers larger numbers with an arrow to the right.",
      explanation: "≥ has an equality bar (closed dot) and greater values are to the right.",
      visual: { kind: "numline", min: -1, max: 7, step: 1, point: 3, closed: true, dir: "right" }
    },
    {
      id: "w1_q4",
      rule: "TEST RULE",
      prompt: "Does the value x = 4 satisfy the inequality x > 4?",
      speechPrompt: "Does the value x equals 4 satisfy the inequality x is greater than 4?",
      options: ["No, 4 is not strictly greater than 4", "Yes, 4 is equal to 4", "Yes, 4 is on the boundary", "No, 4 is negative"],
      correctIndex: 0,
      hint: "An open circle at 4 means 4 itself is excluded.",
      speechHint: "An open circle at 4 means 4 itself is excluded from the solution.",
      explanation: "4 > 4 is FALSE. For strict inequalities, the boundary number is not a solution.",
      visual: { kind: "ineq", lhs: "x", sign: ">", rhs: "4" }
    },
    {
      id: "w1_q5",
      rule: "TEST RULE",
      prompt: "Does the value x = −2 satisfy the inequality x ≤ −2?",
      speechPrompt: "Does the value x equals negative 2 satisfy the inequality x is less than or equal to negative 2?",
      options: ["Yes, because −2 is equal to −2", "No, −2 is not less than −2", "No, −2 is negative", "Yes, because −2 < −2"],
      correctIndex: 0,
      hint: "≤ means less than OR equal to.",
      speechHint: "Less than or equal to means either strictly less than, or equal to.",
      explanation: "−2 ≤ −2 is TRUE because −2 is equal to −2. The closed dot includes the boundary.",
      visual: { kind: "ineq", lhs: "x", sign: "≤", rhs: "−2" }
    },
    {
      id: "w1_q6",
      rule: "NUMBER LINE RULE",
      prompt: "A number line shows an open circle at 5 with an arrow pointing to the left. Which inequality is it?",
      speechPrompt: "A number line shows an open circle at 5 with an arrow pointing to the left. Which inequality is it?",
      options: ["x < 5", "x ≤ 5", "x > 5", "x ≥ 5"],
      correctIndex: 0,
      hint: "Open circle means no equal sign. Arrow pointing left means less than.",
      speechHint: "An open circle means no equal bar. An arrow pointing to the left means less than.",
      explanation: "Open circle at 5 with arrow left corresponds to x < 5.",
      visual: { kind: "numline", min: 1, max: 9, step: 1, point: 5, closed: false, dir: "left" }
    },
    {
      id: "w1_q7",
      rule: "NUMBER LINE RULE",
      prompt: "A number line shows a closed dot at −1 with an arrow pointing to the right. Which inequality is it?",
      speechPrompt: "A number line shows a closed dot at negative 1 with an arrow pointing to the right. Which inequality is it?",
      options: ["x ≥ −1", "x > −1", "x ≤ −1", "x < −1"],
      correctIndex: 0,
      hint: "Closed dot means equal to. Arrow to the right means greater than.",
      speechHint: "A closed dot means equal to. An arrow to the right means greater than.",
      explanation: "Closed dot at −1 with arrow right corresponds to x ≥ −1.",
      visual: { kind: "numline", min: -5, max: 3, step: 1, point: -1, closed: true, dir: "right" }
    },
    {
      id: "w1_q8",
      rule: "TEST RULE",
      prompt: "Which of the following values is in the solution set of x < −1?",
      speechPrompt: "Which of the following values is in the solution set of x is less than negative 1?",
      options: ["−3", "−1", "0", "2"],
      correctIndex: 0,
      hint: "Numbers to the left of −1 on the number line are smaller, like −2, −3, −4.",
      speechHint: "Numbers to the left of negative 1 on the number line are more negative and smaller, such as negative 3.",
      explanation: "−3 < −1 is TRUE. −1 is not included, and 0 and 2 are greater than −1.",
      visual: { kind: "numline", min: -5, max: 3, step: 1, point: -1, closed: false, dir: "left" }
    },
    {
      id: "w1_q9",
      rule: "SOLVE RULE",
      prompt: "Solve x − 3 > 2 and identify its graph.",
      speechPrompt: "Solve x minus 3 is greater than 2 and identify its graph.",
      options: ["x > 5 (open circle at 5, arrow right)", "x ≥ 5 (closed dot at 5, arrow right)", "x < 5 (open circle at 5, arrow left)", "x > −1 (open circle at −1, arrow right)"],
      correctIndex: 0,
      hint: "Add 3 to both sides to isolate x.",
      speechHint: "Add 3 to both sides to isolate x. The sign stays greater than.",
      explanation: "Add 3 to both sides: x > 5. On the number line, this is an open circle at 5 with arrow right.",
      visual: { kind: "ineq", lhs: "x − 3", sign: ">", rhs: "2" }
    }
  ],

  // =========================================================================
  // WORLD 3: Speed Limit Strip (Theme: Speed limits, Multiply/Divide Positive)
  // =========================================================================
  [
    {
      id: "w2_q0",
      rule: "KEYWORD RULE",
      prompt: "The school zone speed limit is 40 km/h: drivers may not exceed 40 km/h. Which inequality represents legal speed v?",
      speechPrompt: "The school zone speed limit is 40 kilometres per hour: drivers may not exceed 40 kilometres per hour. Which inequality represents legal speed v?",
      options: ["v ≤ 40", "v < 40", "v ≥ 40", "v > 40"],
      correctIndex: 0,
      hint: "'May not exceed' means 40 is allowed, but faster speeds are illegal.",
      speechHint: "May not exceed means 40 is allowed as the maximum, so use less than or equal to 40.",
      explanation: "'May not exceed 40' means speed v can be up to 40 km/h: v ≤ 40.",
      visual: { kind: "phrase", text: "Drivers may not exceed 40 km/h in the school zone.", keys: ["may not exceed"] }
    },
    {
      id: "w2_q1",
      rule: "KEYWORD RULE",
      prompt: "The highway minimum speed is 60 km/h: drivers must travel at least 60 km/h. Which inequality is this?",
      speechPrompt: "The highway minimum speed is 60 kilometres per hour: drivers must travel at least 60 kilometres per hour. Which inequality is this?",
      options: ["v ≥ 60", "v > 60", "v ≤ 60", "v = 60"],
      correctIndex: 0,
      hint: "'At least 60' means 60 km/h or faster.",
      speechHint: "At least 60 means 60 kilometres per hour or faster, using greater than or equal to.",
      explanation: "'At least 60' translates to greater than or equal to: v ≥ 60.",
      visual: { kind: "phrase", text: "Drivers must travel at least 60 km/h.", keys: ["at least"] }
    },
    {
      id: "w2_q2",
      rule: "SOLVE RULE",
      prompt: "Solve: 3v ≤ 90",
      speechPrompt: "Solve: 3 v is less than or equal to 90.",
      options: ["v ≤ 30", "v < 30", "v ≥ 30", "v ≤ 270"],
      correctIndex: 0,
      hint: "Divide both sides by positive 3. Does the sign flip?",
      speechHint: "Divide both sides by positive 3. Dividing by a positive number never flips the sign.",
      explanation: "Divide both sides by +3: v ≤ 30. Dividing by a positive number preserves the sign.",
      visual: { kind: "ineq", lhs: "3v", sign: "≤", rhs: "90" }
    },
    {
      id: "w2_q3",
      rule: "SOLVE RULE",
      prompt: "Solve: 4s > 48",
      speechPrompt: "Solve: 4 s is greater than 48.",
      options: ["s > 12", "s ≥ 12", "s < 12", "s > 52"],
      correctIndex: 0,
      hint: "Divide both sides by 4.",
      speechHint: "Divide both sides by 4. 48 divided by 4 is 12.",
      explanation: "Divide both sides by +4: s > 12.",
      visual: { kind: "ineq", lhs: "4s", sign: ">", rhs: "48" }
    },
    {
      id: "w2_q4",
      rule: "SOLVE RULE",
      prompt: "Solve: 2x + 10 ≤ 70",
      speechPrompt: "Solve: 2 x plus 10 is less than or equal to 70.",
      options: ["x ≤ 30", "x ≤ 40", "x ≥ 30", "x < 30"],
      correctIndex: 0,
      hint: "First subtract 10 from both sides, then divide by 2.",
      speechHint: "First subtract 10 from both sides to get 60, then divide by 2 to get 30.",
      explanation: "2x ≤ 70 − 10 → 2x ≤ 60 → x ≤ 30.",
      visual: { kind: "ineq", lhs: "2x + 10", sign: "≤", rhs: "70" }
    },
    {
      id: "w2_q5",
      rule: "SOLVE RULE",
      prompt: "A delivery scooter travels for 3 hours at speed s, covering at most 120 km: 3s ≤ 120. What is the maximum speed?",
      speechPrompt: "A delivery scooter travels for 3 hours at speed s, covering at most 120 kilometres: 3 s is less than or equal to 120. What is the maximum speed?",
      options: ["40 km/h", "30 km/h", "50 km/h", "120 km/h"],
      correctIndex: 0,
      hint: "Divide 120 by 3.",
      speechHint: "Divide 120 by 3 to find the maximum allowed speed.",
      explanation: "3s ≤ 120 → s ≤ 40. The maximum speed is 40 km/h.",
      visual: { kind: "ineq", lhs: "3s", sign: "≤", rhs: "120" }
    },
    {
      id: "w2_q6",
      rule: "SOLVE RULE",
      prompt: "A racing car travels 5 laps at speed s, requiring 5s ≥ 450. Solve for s.",
      speechPrompt: "A racing car travels 5 laps at speed s, requiring 5 s is greater than or equal to 450. Solve for s.",
      options: ["s ≥ 90", "s > 90", "s ≤ 90", "s ≥ 45"],
      correctIndex: 0,
      hint: "Divide 450 by 5.",
      speechHint: "Divide 450 by 5. 450 divided by 5 is 90.",
      explanation: "Divide both sides by 5: s ≥ 90.",
      visual: { kind: "ineq", lhs: "5s", sign: "≥", rhs: "450" }
    },
    {
      id: "w2_q7",
      rule: "SOLVE RULE",
      prompt: "When you divide both sides of 6x ≤ 42 by positive 6, what happens to the inequality sign?",
      speechPrompt: "When you divide both sides of 6 x is less than or equal to 42 by positive 6, what happens to the inequality sign?",
      options: ["The sign stays the same (≤)", "The sign flips to ≥", "The sign becomes an equal sign (=)", "The sign disappears"],
      correctIndex: 0,
      hint: "Dividing by a positive number never flips the sign.",
      speechHint: "Dividing by a positive number never flips the sign. The sign stays exactly the same.",
      explanation: "Dividing or multiplying by a positive number keeps the inequality sign unchanged.",
      visual: { kind: "ineq", lhs: "6x", sign: "≤", rhs: "42" }
    },
    {
      id: "w2_q8",
      rule: "TEST RULE",
      prompt: "The speed limit is v ≤ 50 km/h. Which of the following speeds is legal?",
      speechPrompt: "The speed limit is v is less than or equal to 50 kilometres per hour. Which of the following speeds is legal?",
      options: ["45 km/h", "52 km/h", "55 km/h", "60 km/h"],
      correctIndex: 0,
      hint: "Look for a speed that is less than or equal to 50.",
      speechHint: "Look for a speed that is less than or equal to 50. 45 is within the legal limit.",
      explanation: "45 ≤ 50 is TRUE, so 45 km/h is legal. All other speeds exceed 50 km/h.",
      visual: { kind: "phrase", text: "Legal speed limit: v ≤ 50 km/h", keys: ["v ≤ 50 km/h"] }
    },
    {
      id: "w2_q9",
      rule: "TEST RULE",
      prompt: "In a v ≤ 30 km/h school zone, which of the following speeds is illegal?",
      speechPrompt: "In a v is less than or equal to 30 kilometres per hour school zone, which of the following speeds is illegal?",
      options: ["35 km/h", "20 km/h", "25 km/h", "30 km/h"],
      correctIndex: 0,
      hint: "Illegal speeds are strictly greater than 30 km/h.",
      speechHint: "Illegal speeds are strictly greater than 30 kilometres per hour. 35 exceeds 30.",
      explanation: "35 ≤ 30 is FALSE (35 > 30), so 35 km/h violates the speed limit.",
      visual: { kind: "phrase", text: "School zone limit: v ≤ 30 km/h", keys: ["v ≤ 30 km/h"] }
    }
  ],

  // =========================================================================
  // WORLD 4: Budget Bazaar (Theme: Budgets, At most, Rounding DOWN)
  // =========================================================================
  [
    {
      id: "w3_q0",
      rule: "BUDGET RULE",
      prompt: "Emma has $50 at the fair. Entry is $14 and each ride costs $4. Which inequality models the number of rides r?",
      speechPrompt: "Emma has 50 dollars at the fair. Entry is 14 dollars and each ride costs 4 dollars. Which inequality models the number of rides r?",
      options: ["14 + 4r ≤ 50", "14 + 4r < 50", "14 + 4r ≥ 50", "4r − 14 ≤ 50"],
      correctIndex: 0,
      hint: "She can spend up to her $50 budget, so total cost is at most 50.",
      speechHint: "She can spend up to her 50 dollar budget, so the total cost is less than or equal to 50.",
      explanation: "Admission ($14) plus $4 per ride cannot exceed $50: 14 + 4r ≤ 50.",
      visual: { kind: "ineq", lhs: "14 + 4r", sign: "≤", rhs: "50" }
    },
    {
      id: "w3_q1",
      rule: "SOLVE RULE",
      prompt: "Solve Emma's fair budget inequality: 14 + 4r ≤ 50. What is the greatest number of rides r she can take?",
      speechPrompt: "Solve Emma's fair budget inequality: 14 plus 4 r is less than or equal to 50. What is the greatest number of rides r she can take?",
      options: ["9 rides", "8 rides", "10 rides", "12 rides"],
      correctIndex: 0,
      hint: "Subtract 14 to get 4r ≤ 36, then divide by 4.",
      speechHint: "Subtract 14 to get 4 r is less than or equal to 36, then divide by 4 to get 9 rides.",
      explanation: "4r ≤ 36 → r ≤ 9. Emma can take at most 9 rides.",
      visual: { kind: "ineq", lhs: "4r", sign: "≤", rhs: "36" }
    },
    {
      id: "w3_q2",
      rule: "BUDGET RULE",
      prompt: "Alex has $30. He buys a burger for $8 and smoothies for $5 each: 8 + 5s ≤ 30. What is the greatest number of smoothies he can buy?",
      speechPrompt: "Alex has 30 dollars. He buys a burger for 8 dollars and smoothies for 5 dollars each: 8 plus 5 s is less than or equal to 30. What is the greatest number of smoothies he can buy?",
      options: ["4 smoothies", "5 smoothies", "3 smoothies", "6 smoothies"],
      correctIndex: 0,
      hint: "5s ≤ 22 → s ≤ 4.4. Can he buy 0.4 of a smoothie?",
      speechHint: "5 s is less than or equal to 22, so s is less than or equal to 4 point 4. Round down to the nearest whole smoothie.",
      explanation: "5s ≤ 22 → s ≤ 4.4. Whole smoothies only, so round down to 4 smoothies.",
      visual: { kind: "ineq", lhs: "8 + 5s", sign: "≤", rhs: "30" }
    },
    {
      id: "w3_q3",
      rule: "BUDGET RULE",
      prompt: "Sophia has $45 to buy books costing $7 each: 7b ≤ 45. What is the maximum number of books she can purchase?",
      speechPrompt: "Sophia has 45 dollars to buy books costing 7 dollars each: 7 b is less than or equal to 45. What is the maximum number of books she can purchase?",
      options: ["6 books", "7 books", "5 books", "8 books"],
      correctIndex: 0,
      hint: "Divide 45 by 7: 45 / 7 = 6.42. Round down.",
      speechHint: "Divide 45 by 7 to get 6 point 42. Since you cannot buy part of a book, round down to 6.",
      explanation: "7b ≤ 45 → b ≤ 6.42. Whole books only, so she can buy at most 6 books.",
      visual: { kind: "ineq", lhs: "7b", sign: "≤", rhs: "45" }
    },
    {
      id: "w3_q4",
      rule: "BUDGET RULE",
      prompt: "In a real-life budget problem where r ≤ 4.8 rides, why must we round DOWN to 4 instead of up to 5?",
      speechPrompt: "In a real-life budget problem where r is less than or equal to 4 point 8 rides, why must we round down to 4 instead of up to 5?",
      options: ["5 rides would exceed the budget limit", "5 is an odd number", "Rounding down is easier", "You always round up in math"],
      correctIndex: 0,
      hint: "If you buy 5 rides, total cost will exceed the money you have.",
      speechHint: "If you buy 5 rides, the total cost would be more than the money you have in your budget.",
      explanation: "Buying 5 rides would cost more money than the available budget. We must round down.",
      visual: { kind: "phrase", text: "Budget constraint: r ≤ 4.8 → Maximum whole items = 4", keys: ["r ≤ 4.8"] }
    },
    {
      id: "w3_q5",
      rule: "BUDGET RULE",
      prompt: "Lucas has $25. Arcade entry is $4 and tokens cost $3 each: 4 + 3t ≤ 25. How many tokens can he buy?",
      speechPrompt: "Lucas has 25 dollars. Arcade entry is 4 dollars and tokens cost 3 dollars each: 4 plus 3 t is less than or equal to 25. How many tokens can he buy?",
      options: ["7 tokens", "8 tokens", "6 tokens", "9 tokens"],
      correctIndex: 0,
      hint: "3t ≤ 21. Divide 21 by 3.",
      speechHint: "3 t is less than or equal to 21. Divide 21 by 3 to get 7.",
      explanation: "3t ≤ 25 − 4 → 3t ≤ 21 → t ≤ 7 tokens.",
      visual: { kind: "ineq", lhs: "4 + 3t", sign: "≤", rhs: "25" }
    },
    {
      id: "w3_q6",
      rule: "SOLVE RULE",
      prompt: "Solve: 5x + 12 ≤ 47",
      speechPrompt: "Solve: 5 x plus 12 is less than or equal to 47.",
      options: ["x ≤ 7", "x ≤ 8", "x < 7", "x ≥ 7"],
      correctIndex: 0,
      hint: "Subtract 12 from 47 to get 35, then divide by 5.",
      speechHint: "Subtract 12 from 47 to get 35, then divide by 5 to get 7.",
      explanation: "5x ≤ 47 − 12 → 5x ≤ 35 → x ≤ 7.",
      visual: { kind: "ineq", lhs: "5x + 12", sign: "≤", rhs: "47" }
    },
    {
      id: "w3_q7",
      rule: "BUDGET RULE",
      prompt: "A gift card has $60. After buying a $15 shirt, socks cost $8 a pair: 15 + 8p ≤ 60. What is the greatest number of sock pairs?",
      speechPrompt: "A gift card has 60 dollars. After buying a 15 dollar shirt, socks cost 8 dollars a pair: 15 plus 8 p is less than or equal to 60. What is the greatest number of sock pairs?",
      options: ["5 pairs", "6 pairs", "4 pairs", "7 pairs"],
      correctIndex: 0,
      hint: "8p ≤ 45 → p ≤ 5.625. Round down.",
      speechHint: "8 p is less than or equal to 45, which gives p less than or equal to 5 point 6 2 5. Round down to 5 pairs.",
      explanation: "8p ≤ 45 → p ≤ 5.625. Round down to 5 pairs of socks.",
      visual: { kind: "ineq", lhs: "15 + 8p", sign: "≤", rhs: "60" }
    },
    {
      id: "w3_q8",
      rule: "BUDGET RULE",
      prompt: "Liam has $20. A movie ticket is $11, and candy boxes are $3.50 each: 11 + 3.5c ≤ 20. How many boxes can he afford?",
      speechPrompt: "Liam has 20 dollars. A movie ticket is 11 dollars, and candy boxes are 3 dollars and 50 cents each: 11 plus 3 point 5 c is less than or equal to 20. How many boxes can he afford?",
      options: ["2 boxes", "3 boxes", "1 box", "4 boxes"],
      correctIndex: 0,
      hint: "3.5c ≤ 9. 9 / 3.5 ≈ 2.57. Round down.",
      speechHint: "3 point 5 c is less than or equal to 9. 9 divided by 3 point 5 is approximately 2 point 5 7. Round down to 2 boxes.",
      explanation: "3.5c ≤ 9 → c ≤ 2.57. Liam can afford at most 2 boxes of candy.",
      visual: { kind: "ineq", lhs: "11 + 3.5c", sign: "≤", rhs: "20" }
    },
    {
      id: "w3_q9",
      rule: "KEYWORD RULE",
      prompt: "Which inequality represents: 'The total bill cannot exceed 100 dollars'?",
      speechPrompt: "Which inequality represents: The total bill cannot exceed 100 dollars?",
      options: ["B ≤ 100", "B < 100", "B ≥ 100", "B = 100"],
      correctIndex: 0,
      hint: "'Cannot exceed' means up to and including 100.",
      speechHint: "Cannot exceed means up to and including 100, using less than or equal to.",
      explanation: "'Cannot exceed 100' translates to less than or equal to: B ≤ 100.",
      visual: { kind: "phrase", text: "Total bill cannot exceed $100", keys: ["cannot exceed"] }
    }
  ],

  // =========================================================================
  // WORLD 5: Flip Factory (Theme: The Golden Flip Rule with Negative Numbers)
  // =========================================================================
  [
    {
      id: "w4_q0",
      rule: "FLIP RULE",
      prompt: "Solve: −2x < 10",
      speechPrompt: "Solve: negative 2 x is less than 10.",
      options: ["x > −5", "x < −5", "x > 5", "x < 5"],
      correctIndex: 0,
      hint: "Divide by −2. When dividing by a negative number, remember to FLIP the sign!",
      speechHint: "Divide both sides by negative 2. Remember the golden rule: when dividing by a negative number, flip less than to greater than.",
      explanation: "Divide both sides by −2 and FLIP the sign: < becomes >. So x > −5.",
      visual: { kind: "ineq", lhs: "−2x", sign: "<", rhs: "10" }
    },
    {
      id: "w4_q1",
      rule: "FLIP RULE",
      prompt: "Solve: −3x ≥ 12",
      speechPrompt: "Solve: negative 3 x is greater than or equal to 12.",
      options: ["x ≤ −4", "x ≥ −4", "x ≤ 4", "x < −4"],
      correctIndex: 0,
      hint: "Divide by −3 and flip ≥ to ≤.",
      speechHint: "Divide both sides by negative 3 and flip greater than or equal to, into less than or equal to.",
      explanation: "Divide both sides by −3 and FLIP ≥ to ≤: x ≤ −4.",
      visual: { kind: "ineq", lhs: "−3x", sign: "≥", rhs: "12" }
    },
    {
      id: "w4_q2",
      rule: "FLIP RULE",
      prompt: "Solve: −5y ≤ −25",
      speechPrompt: "Solve: negative 5 y is less than or equal to negative 25.",
      options: ["y ≥ 5", "y ≤ 5", "y ≥ −5", "y < 5"],
      correctIndex: 0,
      hint: "Divide by −5 and flip ≤ to ≥. A negative divided by a negative is positive.",
      speechHint: "Divide by negative 5 and flip the sign to greater than or equal to. Negative 25 divided by negative 5 is positive 5.",
      explanation: "Divide both sides by −5 and FLIP sign: y ≥ 5.",
      visual: { kind: "ineq", lhs: "−5y", sign: "≤", rhs: "−25" }
    },
    {
      id: "w4_q3",
      rule: "FLIP RULE",
      prompt: "Solve: −x > 7",
      speechPrompt: "Solve: negative x is greater than 7.",
      options: ["x < −7", "x > −7", "x < 7", "x ≥ −7"],
      correctIndex: 0,
      hint: "Multiply or divide both sides by −1 and flip > to <.",
      speechHint: "Multiply or divide both sides by negative 1 and flip greater than to less than.",
      explanation: "Multiply both sides by −1 and FLIP sign: x < −7.",
      visual: { kind: "ineq", lhs: "−x", sign: ">", rhs: "7" }
    },
    {
      id: "w4_q4",
      rule: "FLIP RULE",
      prompt: "Why does the inequality sign flip when you multiply or divide by a negative number?",
      speechPrompt: "Why does the inequality sign flip when you multiply or divide by a negative number?",
      options: ["Negatives reverse the order of numbers on the number line", "It is an arbitrary convention", "Positive numbers are always bigger", "Signs only flip on Tuesdays"],
      correctIndex: 0,
      hint: "Think: 2 < 5, but on the negative side, −2 is to the right of −5, so −2 > −5.",
      speechHint: "Think about the number line: 2 is less than 5, but negative 2 is greater than negative 5. Negatives reverse order.",
      explanation: "Multiplying by a negative reverses positions relative to zero, flipping the order on the number line.",
      visual: { kind: "phrase", text: "2 < 5, but −2 > −5 → Negatives reverse order!", keys: ["−2 > −5"] }
    },
    {
      id: "w4_q5",
      rule: "FLIP RULE",
      prompt: "Solve: −4m < −20",
      speechPrompt: "Solve: negative 4 m is less than negative 20.",
      options: ["m > 5", "m < 5", "m > −5", "m ≤ 5"],
      correctIndex: 0,
      hint: "Divide by −4 and flip < to >.",
      speechHint: "Divide by negative 4 and flip less than to greater than.",
      explanation: "Divide by −4 and FLIP sign: m > 5.",
      visual: { kind: "ineq", lhs: "−4m", sign: "<", rhs: "−20" }
    },
    {
      id: "w4_q6",
      rule: "FLIP RULE",
      prompt: "Solve: −6x ≥ 18",
      speechPrompt: "Solve: negative 6 x is greater than or equal to 18.",
      options: ["x ≤ −3", "x ≥ −3", "x ≤ 3", "x < −3"],
      correctIndex: 0,
      hint: "Divide 18 by −6 and flip ≥ to ≤.",
      speechHint: "Divide 18 by negative 6 to get negative 3, and flip the sign to less than or equal to.",
      explanation: "Divide by −6 and FLIP sign: x ≤ −3.",
      visual: { kind: "ineq", lhs: "−6x", sign: "≥", rhs: "18" }
    },
    {
      id: "w4_q7",
      rule: "SOLVE RULE",
      prompt: "Does dividing 2x < −10 by POSITIVE 2 flip the sign?",
      speechPrompt: "Does dividing 2 x is less than negative 10 by positive 2 flip the sign?",
      options: ["No, only dividing by a NEGATIVE number flips the sign", "Yes, because −10 is negative", "Yes, all divisions flip", "No, signs never flip"],
      correctIndex: 0,
      hint: "Check what you are DIVIDING by: +2 is positive, so the sign stays <.",
      speechHint: "Check the number you are dividing by. Since 2 is positive, the sign stays less than.",
      explanation: "The divisor (+2) is positive. Having a negative number on the other side does NOT cause a flip: x < −5.",
      visual: { kind: "ineq", lhs: "2x", sign: "<", rhs: "−10" }
    },
    {
      id: "w4_q8",
      rule: "FLIP RULE",
      prompt: "Solve: −x / 3 ≤ 4",
      speechPrompt: "Solve: negative x over 3 is less than or equal to 4.",
      options: ["x ≥ −12", "x ≤ −12", "x ≥ 12", "x < −12"],
      correctIndex: 0,
      hint: "Multiply both sides by −3 and flip ≤ to ≥.",
      speechHint: "Multiply both sides by negative 3 and flip less than or equal to into greater than or equal to.",
      explanation: "Multiply both sides by −3 and FLIP sign: x ≥ −12.",
      visual: { kind: "ineq", lhs: "−x/3", sign: "≤", rhs: "4" }
    },
    {
      id: "w4_q9",
      rule: "TEST RULE",
      prompt: "Test x = −6 in −3x ≥ 12. Does it satisfy the inequality?",
      speechPrompt: "Test x equals negative 6 in negative 3 x is greater than or equal to 12. Does it satisfy the inequality?",
      options: ["Yes, because −3(−6) = 18 and 18 ≥ 12", "No, because −6 is negative", "No, 18 is not equal to 12", "Yes, because −3(−6) = −18"],
      correctIndex: 0,
      hint: "Negative times negative is positive: −3 × (−6) = +18.",
      speechHint: "A negative times a negative is positive. Negative 3 times negative 6 is positive 18, which is greater than or equal to 12.",
      explanation: "−3(−6) = 18. Since 18 ≥ 12 is TRUE, x = −6 satisfies the inequality.",
      visual: { kind: "ineq", lhs: "−3(−6)", sign: "≥", rhs: "12" }
    }
  ],

  // =========================================================================
  // WORLD 6: Thermo Tundra (Theme: Sub-zero temps, Multi-step, Number lines)
  // =========================================================================
  [
    {
      id: "w5_q0",
      rule: "KEYWORD RULE",
      prompt: "The polar pool must stay strictly colder than −2 °C. Which inequality represents allowed water temperature t?",
      speechPrompt: "The polar pool must stay strictly colder than negative 2 degrees Celsius. Which inequality represents allowed water temperature t?",
      options: ["t < −2", "t ≤ −2", "t > −2", "t ≥ −2"],
      correctIndex: 0,
      hint: "'Strictly colder than' means strictly less than, so −2 is excluded.",
      speechHint: "Strictly colder than means strictly less than, so negative 2 is not included.",
      explanation: "'Strictly colder than −2' translates to less than: t < −2.",
      visual: { kind: "phrase", text: "Water must stay strictly colder than −2 °C.", keys: ["strictly colder than"] }
    },
    {
      id: "w5_q1",
      rule: "FLIP RULE",
      prompt: "A cryo-chamber cools by 2 °C per minute (−2m) and must reach colder than −10 °C: −2m < −10. Solve for m.",
      speechPrompt: "A cryo-chamber cools by 2 degrees per minute, negative 2 m, and must reach colder than negative 10 degrees: negative 2 m is less than negative 10. Solve for m.",
      options: ["m > 5", "m < 5", "m ≥ 5", "m > −5"],
      correctIndex: 0,
      hint: "Divide by −2 and flip < to >.",
      speechHint: "Divide by negative 2 and flip less than to greater than. Negative 10 divided by negative 2 is positive 5.",
      explanation: "Divide both sides by −2 and FLIP sign: m > 5 minutes.",
      visual: { kind: "ineq", lhs: "−2m", sign: "<", rhs: "−10" }
    },
    {
      id: "w5_q2",
      rule: "FLIP RULE",
      prompt: "Temperature drops 3 °C per hour: −3h ≤ −15. Solve for hours h.",
      speechPrompt: "Temperature drops 3 degrees per hour: negative 3 h is less than or equal to negative 15. Solve for hours h.",
      options: ["h ≥ 5", "h ≤ 5", "h > 5", "h ≥ −5"],
      correctIndex: 0,
      hint: "Divide by −3 and flip ≤ to ≥.",
      speechHint: "Divide both sides by negative 3 and flip less than or equal to, into greater than or equal to.",
      explanation: "Divide by −3 and FLIP sign: h ≥ 5 hours.",
      visual: { kind: "ineq", lhs: "−3h", sign: "≤", rhs: "−15" }
    },
    {
      id: "w5_q3",
      rule: "SOLVE RULE",
      prompt: "Solve: 2t − 7 < −1",
      speechPrompt: "Solve: 2 t minus 7 is less than negative 1.",
      options: ["t < 3", "t ≤ 3", "t > 3", "t < −4"],
      correctIndex: 0,
      hint: "Add 7 to both sides: −1 + 7 = 6. Then divide by 2.",
      speechHint: "Add 7 to both sides to get 6, then divide by 2 to get t is less than 3.",
      explanation: "2t < −1 + 7 → 2t < 6 → t < 3.",
      visual: { kind: "ineq", lhs: "2t − 7", sign: "<", rhs: "−1" }
    },
    {
      id: "w5_q4",
      rule: "FLIP RULE",
      prompt: "Solve: −4t + 8 ≤ −12",
      speechPrompt: "Solve: negative 4 t plus 8 is less than or equal to negative 12.",
      options: ["t ≥ 5", "t ≤ 5", "t ≥ −5", "t < 5"],
      correctIndex: 0,
      hint: "Subtract 8 to get −4t ≤ −20. Then divide by −4 and FLIP!",
      speechHint: "Subtract 8 to get negative 4 t is less than or equal to negative 20. Then divide by negative 4 and flip the sign to greater than or equal to 5.",
      explanation: "−4t ≤ −20. Divide by −4 and FLIP sign: t ≥ 5.",
      visual: { kind: "ineq", lhs: "−4t + 8", sign: "≤", rhs: "−12" }
    },
    {
      id: "w5_q5",
      rule: "TEST RULE",
      prompt: "Which temperature is strictly colder than −5 °C?",
      speechPrompt: "Which temperature is strictly colder than negative 5 degrees Celsius?",
      options: ["−8 °C", "−5 °C", "−2 °C", "0 °C"],
      correctIndex: 0,
      hint: "Colder temperatures are further left on the thermometer (more negative).",
      speechHint: "Colder temperatures are more negative, located further to the left. Negative 8 is colder than negative 5.",
      explanation: "−8 < −5 is TRUE. −8 °C is colder than −5 °C.",
      visual: { kind: "numline", min: -10, max: 0, step: 1, point: -5, closed: false, dir: "left" }
    },
    {
      id: "w5_q6",
      rule: "NUMBER LINE RULE",
      prompt: "Which number line graph represents the solution t < −2?",
      speechPrompt: "Which number line graph represents the solution t is less than negative 2?",
      options: ["Open circle at −2, arrow left", "Closed dot at −2, arrow left", "Open circle at −2, arrow right", "Closed dot at −2, arrow right"],
      correctIndex: 0,
      hint: "< has no equal sign (open circle) and points to smaller numbers (left).",
      speechHint: "Less than has no equal bar, so use an open circle at negative 2 with an arrow pointing left.",
      explanation: "Open circle at −2 and arrow left represents t < −2.",
      visual: { kind: "numline", min: -6, max: 2, step: 1, point: -2, closed: false, dir: "left" }
    },
    {
      id: "w5_q7",
      rule: "FLIP RULE",
      prompt: "Solve: −t + 5 > 2",
      speechPrompt: "Solve: negative t plus 5 is greater than 2.",
      options: ["t < 3", "t > 3", "t < −3", "t ≥ 3"],
      correctIndex: 0,
      hint: "Subtract 5: −t > −3. Multiply by −1 and FLIP!",
      speechHint: "Subtract 5 to get negative t is greater than negative 3. Multiply by negative 1 and flip the sign to t is less than 3.",
      explanation: "−t > −3 → Multiply by −1 and FLIP sign: t < 3.",
      visual: { kind: "ineq", lhs: "−t + 5", sign: ">", rhs: "2" }
    },
    {
      id: "w5_q8",
      rule: "KEYWORD RULE",
      prompt: "A deep freezer must stay at most −18 °C. Which inequality is this?",
      speechPrompt: "A deep freezer must stay at most negative 18 degrees Celsius. Which inequality is this?",
      options: ["T ≤ −18", "T < −18", "T ≥ −18", "T > −18"],
      correctIndex: 0,
      hint: "'At most' means less than or equal to.",
      speechHint: "At most means less than or equal to, including negative 18.",
      explanation: "'At most −18' translates to T ≤ −18.",
      visual: { kind: "phrase", text: "Freezer must stay at most −18 °C.", keys: ["at most"] }
    },
    {
      id: "w5_q9",
      rule: "FLIP RULE",
      prompt: "Solve: −3x − 6 ≥ 9",
      speechPrompt: "Solve: negative 3 x minus 6 is greater than or equal to 9.",
      options: ["x ≤ −5", "x ≥ −5", "x ≤ 5", "x < −5"],
      correctIndex: 0,
      hint: "Add 6: −3x ≥ 15. Divide by −3 and FLIP!",
      speechHint: "Add 6 to get negative 3 x is greater than or equal to 15. Divide by negative 3 and flip the sign to less than or equal to negative 5.",
      explanation: "−3x ≥ 15 → Divide by −3 and FLIP sign: x ≤ −5.",
      visual: { kind: "ineq", lhs: "−3x − 6", sign: "≥", rhs: "9" }
    }
  ],

  // =========================================================================
  // WORLD 7: Score Stadium (Theme: Minimum targets, At least, Rounding UP)
  // =========================================================================
  [
    {
      id: "w6_q0",
      rule: "AT LEAST RULE",
      prompt: "Ava needs at least 80 tickets to win the prize. She has 35 and earns 9 per game: 35 + 9L ≥ 80. Solve for games L.",
      speechPrompt: "Ava needs at least 80 tickets to win the prize. She has 35 and earns 9 per game: 35 plus 9 L is greater than or equal to 80. Solve for games L.",
      options: ["L ≥ 5 games", "L ≤ 5 games", "L ≥ 6 games", "L ≥ 4 games"],
      correctIndex: 0,
      hint: "9L ≥ 80 − 35 = 45. Divide 45 by 9.",
      speechHint: "9 L is greater than or equal to 45. Divide 45 by 9 to get 5 games.",
      explanation: "9L ≥ 45 → L ≥ 5 games. Ava needs to play at least 5 games.",
      visual: { kind: "ineq", lhs: "35 + 9L", sign: "≥", rhs: "80" }
    },
    {
      id: "w6_q1",
      rule: "AT LEAST RULE",
      prompt: "Ethan needs at least 50 points. He has 12 and earns 8 per quiz: 12 + 8q ≥ 50. What is the LEAST number of quizzes he must take?",
      speechPrompt: "Ethan needs at least 50 points. He has 12 and earns 8 per quiz: 12 plus 8 q is greater than or equal to 50. What is the least number of quizzes he must take?",
      options: ["5 quizzes", "4 quizzes", "6 quizzes", "7 quizzes"],
      correctIndex: 0,
      hint: "8q ≥ 38 → q ≥ 4.75. 4 quizzes only gives 44 points! Round UP.",
      speechHint: "8 q is greater than or equal to 38, so q is greater than or equal to 4 point 7 5. Since 4 quizzes give only 44 points, round up to 5.",
      explanation: "8q ≥ 38 → q ≥ 4.75. Whole quizzes only; round UP to 5 quizzes.",
      visual: { kind: "ineq", lhs: "12 + 8q", sign: "≥", rhs: "50" }
    },
    {
      id: "w6_q2",
      rule: "AT LEAST RULE",
      prompt: "Why do we round UP from 4.75 to 5 in a minimum points problem?",
      speechPrompt: "Why do we round up from 4 point 7 5 to 5 in a minimum points problem?",
      options: ["4 quizzes would fall short of the required target", "5 is a whole number", "Rounding up is always used", "4 is not allowed"],
      correctIndex: 0,
      hint: "Calculate points for 4 quizzes: 12 + 8(4) = 44 points, which is less than 50.",
      speechHint: "Calculate points for 4 quizzes: 12 plus 32 equals 44 points, which is less than the required 50 points.",
      explanation: "At 4 quizzes, Ethan has only 44 points (< 50). To reach at least 50, he must complete 5 quizzes.",
      visual: { kind: "phrase", text: "Minimum target: q ≥ 4.75 → Round UP to 5 quizzes", keys: ["q ≥ 4.75"] }
    },
    {
      id: "w6_q3",
      rule: "SOLVE RULE",
      prompt: "Solve: 6x − 14 ≥ 28",
      speechPrompt: "Solve: 6 x minus 14 is greater than or equal to 28.",
      options: ["x ≥ 7", "x ≤ 7", "x > 7", "x ≥ 8"],
      correctIndex: 0,
      hint: "Add 14 to both sides: 28 + 14 = 42. Divide by 6.",
      speechHint: "Add 14 to both sides to get 42. Divide 42 by 6 to get 7.",
      explanation: "6x ≥ 42 → x ≥ 7.",
      visual: { kind: "ineq", lhs: "6x − 14", sign: "≥", rhs: "28" }
    },
    {
      id: "w6_q4",
      rule: "AT LEAST RULE",
      prompt: "A basketball team needs at least 75 points. They have 48 points and score 3-pointers: 48 + 3p ≥ 75. Minimum 3-pointers needed?",
      speechPrompt: "A basketball team needs at least 75 points. They have 48 points and score 3-pointers: 48 plus 3 p is greater than or equal to 75. Minimum 3-pointers needed?",
      options: ["9 three-pointers", "8 three-pointers", "10 three-pointers", "12 three-pointers"],
      correctIndex: 0,
      hint: "3p ≥ 75 − 48 = 27. Divide 27 by 3.",
      speechHint: "3 p is greater than or equal to 27. Divide 27 by 3 to get 9.",
      explanation: "3p ≥ 27 → p ≥ 9 three-pointers.",
      visual: { kind: "ineq", lhs: "48 + 3p", sign: "≥", rhs: "75" }
    },
    {
      id: "w6_q5",
      rule: "SOLVE RULE",
      prompt: "Solve: 4y + 15 ≥ 39",
      speechPrompt: "Solve: 4 y plus 15 is greater than or equal to 39.",
      options: ["y ≥ 6", "y ≤ 6", "y > 6", "y ≥ 7"],
      correctIndex: 0,
      hint: "Subtract 15: 39 − 15 = 24. Divide by 4.",
      speechHint: "Subtract 15 to get 24. Divide 24 by 4 to get 6.",
      explanation: "4y ≥ 24 → y ≥ 6.",
      visual: { kind: "ineq", lhs: "4y + 15", sign: "≥", rhs: "39" }
    },
    {
      id: "w6_q6",
      rule: "AT LEAST RULE",
      prompt: "Mia has 20 stickers and gets 6 per pack. She wants no less than 50 stickers: 20 + 6p ≥ 50. Minimum packs needed?",
      speechPrompt: "Mia has 20 stickers and gets 6 per pack. She wants no less than 50 stickers: 20 plus 6 p is greater than or equal to 50. Minimum packs needed?",
      options: ["5 packs", "4 packs", "6 packs", "7 packs"],
      correctIndex: 0,
      hint: "6p ≥ 30. Divide 30 by 6.",
      speechHint: "6 p is greater than or equal to 30. Divide 30 by 6 to get 5 packs.",
      explanation: "6p ≥ 30 → p ≥ 5 packs.",
      visual: { kind: "ineq", lhs: "20 + 6p", sign: "≥", rhs: "50" }
    },
    {
      id: "w6_q7",
      rule: "KEYWORD RULE",
      prompt: "Which inequality means: 'Jack's test score s is no less than 70'?",
      speechPrompt: "Which inequality means: Jack's test score s is no less than 70?",
      options: ["s ≥ 70", "s > 70", "s ≤ 70", "s < 70"],
      correctIndex: 0,
      hint: "'No less than 70' means 70 or higher.",
      speechHint: "No less than 70 means 70 or higher, using greater than or equal to.",
      explanation: "'No less than 70' translates to s ≥ 70.",
      visual: { kind: "phrase", text: "Score must be no less than 70", keys: ["no less than"] }
    },
    {
      id: "w6_q8",
      rule: "SOLVE RULE",
      prompt: "Solve: 7n − 5 ≥ 37",
      speechPrompt: "Solve: 7 n minus 5 is greater than or equal to 37.",
      options: ["n ≥ 6", "n ≤ 6", "n > 6", "n ≥ 5"],
      correctIndex: 0,
      hint: "Add 5 to get 42, then divide by 7.",
      speechHint: "Add 5 to get 42, then divide by 7 to get 6.",
      explanation: "7n ≥ 42 → n ≥ 6.",
      visual: { kind: "ineq", lhs: "7n − 5", sign: "≥", rhs: "37" }
    },
    {
      id: "w6_q9",
      rule: "TEST RULE",
      prompt: "A gamer needs score s ≥ 100. Does a score of 100 qualify?",
      speechPrompt: "A gamer needs score s is greater than or equal to 100. Does a score of 100 qualify?",
      options: ["Yes, because 100 ≥ 100 is true", "No, it must be higher than 100", "No, 100 is the limit", "Yes, but only if they score 101"],
      correctIndex: 0,
      hint: "≥ includes the exact boundary number.",
      speechHint: "Greater than or equal to includes the exact boundary number 100.",
      explanation: "100 ≥ 100 is TRUE. The boundary value is included.",
      visual: { kind: "ineq", lhs: "100", sign: "≥", rhs: "100" }
    }
  ],

  // =========================================================================
  // WORLD 8: Elevator Tower (Theme: Weight capacities, Crate counts, Limits)
  // =========================================================================
  [
    {
      id: "w7_q0",
      rule: "BUDGET RULE",
      prompt: "An elevator carries at most 600 kg. The operator weighs 80 kg and each crate weighs 65 kg: 80 + 65c ≤ 600. Solve for crates c.",
      speechPrompt: "An elevator carries at most 600 kilograms. The operator weighs 80 kilograms and each crate weighs 65 kilograms: 80 plus 65 c is less than or equal to 600. Solve for crates c.",
      options: ["c ≤ 8 crates", "c ≤ 9 crates", "c < 8 crates", "c ≤ 7 crates"],
      correctIndex: 0,
      hint: "65c ≤ 520. Divide 520 by 65.",
      speechHint: "65 c is less than or equal to 520. Divide 520 by 65 to get 8 crates.",
      explanation: "65c ≤ 520 → c ≤ 8 crates.",
      visual: { kind: "ineq", lhs: "80 + 65c", sign: "≤", rhs: "600" }
    },
    {
      id: "w7_q1",
      rule: "BUDGET RULE",
      prompt: "A freight lift has maximum capacity 1000 kg. Worker is 70 kg, boxes are 80 kg: 70 + 80b ≤ 1000. Greatest whole number of boxes?",
      speechPrompt: "A freight lift has maximum capacity 1000 kilograms. Worker is 70 kilograms, boxes are 80 kilograms: 70 plus 80 b is less than or equal to 1000. Greatest whole number of boxes?",
      options: ["11 boxes", "12 boxes", "10 boxes", "13 boxes"],
      correctIndex: 0,
      hint: "80b ≤ 930 → b ≤ 11.625. Round down.",
      speechHint: "80 b is less than or equal to 930, so b is less than or equal to 11 point 6 2 5. Round down to 11 boxes.",
      explanation: "80b ≤ 930 → b ≤ 11.625. Maximum whole boxes = 11.",
      visual: { kind: "ineq", lhs: "70 + 80b", sign: "≤", rhs: "1000" }
    },
    {
      id: "w7_q2",
      rule: "FLIP RULE",
      prompt: "Cable safety margin: −5t + 100 ≥ 20. Solve for tension factor t.",
      speechPrompt: "Cable safety margin: negative 5 t plus 100 is greater than or equal to 20. Solve for tension factor t.",
      options: ["t ≤ 16", "t ≥ 16", "t ≤ −16", "t < 16"],
      correctIndex: 0,
      hint: "Subtract 100 to get −5t ≥ −80. Divide by −5 and FLIP!",
      speechHint: "Subtract 100 to get negative 5 t is greater than or equal to negative 80. Divide by negative 5 and flip the sign to t is less than or equal to 16.",
      explanation: "−5t ≥ −80 → Divide by −5 and FLIP sign: t ≤ 16.",
      visual: { kind: "ineq", lhs: "−5t + 100", sign: "≥", rhs: "20" }
    },
    {
      id: "w7_q3",
      rule: "SOLVE RULE",
      prompt: "Solve: 3x + 25 ≤ 85",
      speechPrompt: "Solve: 3 x plus 25 is less than or equal to 85.",
      options: ["x ≤ 20", "x ≤ 30", "x < 20", "x ≥ 20"],
      correctIndex: 0,
      hint: "Subtract 25: 85 − 25 = 60. Divide by 3.",
      speechHint: "Subtract 25 to get 60. Divide 60 by 3 to get 20.",
      explanation: "3x ≤ 60 → x ≤ 20.",
      visual: { kind: "ineq", lhs: "3x + 25", sign: "≤", rhs: "85" }
    },
    {
      id: "w7_q4",
      rule: "KEYWORD RULE",
      prompt: "An elevator alarm triggers if weight exceeds 800 kg. Safe weights w satisfy which inequality?",
      speechPrompt: "An elevator alarm triggers if weight exceeds 800 kilograms. Safe weights w satisfy which inequality?",
      options: ["w ≤ 800", "w < 800", "w ≥ 800", "w > 800"],
      correctIndex: 0,
      hint: "Exceeds means strictly greater than, so safe weights are at most 800 kg.",
      speechHint: "Exceeds means strictly greater than, so safe weights are less than or equal to 800 kilograms.",
      explanation: "Weights that do not exceed 800 kg satisfy w ≤ 800.",
      visual: { kind: "phrase", text: "Safe weight: cannot exceed 800 kg", keys: ["cannot exceed"] }
    },
    {
      id: "w7_q5",
      rule: "BUDGET RULE",
      prompt: "Lift base weight is 50 kg, each crate is 40 kg, max limit is 350 kg: 50 + 40c ≤ 350. Greatest whole number of crates?",
      speechPrompt: "Lift base weight is 50 kilograms, each crate is 40 kilograms, maximum limit is 350 kilograms: 50 plus 40 c is less than or equal to 350. Greatest whole number of crates?",
      options: ["7 crates", "8 crates", "6 crates", "9 crates"],
      correctIndex: 0,
      hint: "40c ≤ 300 → c ≤ 7.5. Round down.",
      speechHint: "40 c is less than or equal to 300, so c is less than or equal to 7 point 5. Round down to 7 crates.",
      explanation: "40c ≤ 300 → c ≤ 7.5. Whole crates only: at most 7 crates.",
      visual: { kind: "ineq", lhs: "50 + 40c", sign: "≤", rhs: "350" }
    },
    {
      id: "w7_q6",
      rule: "FLIP RULE",
      prompt: "Solve: −2k + 30 ≤ 10",
      speechPrompt: "Solve: negative 2 k plus 30 is less than or equal to 10.",
      options: ["k ≥ 10", "k ≤ 10", "k ≥ −10", "k < 10"],
      correctIndex: 0,
      hint: "Subtract 30 to get −2k ≤ −20. Divide by −2 and FLIP!",
      speechHint: "Subtract 30 to get negative 2 k is less than or equal to negative 20. Divide by negative 2 and flip the sign to k is greater than or equal to 10.",
      explanation: "−2k ≤ −20 → Divide by −2 and FLIP sign: k ≥ 10.",
      visual: { kind: "ineq", lhs: "−2k + 30", sign: "≤", rhs: "10" }
    },
    {
      id: "w7_q7",
      rule: "TEST RULE",
      prompt: "An elevator sign states: 'Capacity: at most 12 passengers'. Can 12 passengers enter legally?",
      speechPrompt: "An elevator sign states: Capacity: at most 12 passengers. Can 12 passengers enter legally?",
      options: ["Yes, 12 is included in 'at most 12'", "No, only up to 11 are allowed", "No, exactly 12 triggers the alarm", "Yes, but only if they stand still"],
      correctIndex: 0,
      hint: "'At most 12' means p ≤ 12, so 12 is allowed.",
      speechHint: "At most 12 means less than or equal to 12, so exactly 12 is allowed.",
      explanation: "≤ includes the boundary value. Exactly 12 passengers is legal.",
      visual: { kind: "phrase", text: "Capacity: at most 12 passengers", keys: ["at most 12"] }
    },
    {
      id: "w7_q8",
      rule: "SOLVE RULE",
      prompt: "Solve: 4x − 12 < 24",
      speechPrompt: "Solve: 4 x minus 12 is less than 24.",
      options: ["x < 9", "x ≤ 9", "x > 9", "x < 3"],
      correctIndex: 0,
      hint: "Add 12 to get 36, then divide by 4.",
      speechHint: "Add 12 to get 36, then divide by 4 to get x is less than 9.",
      explanation: "4x < 36 → x < 9.",
      visual: { kind: "ineq", lhs: "4x − 12", sign: "<", rhs: "24" }
    },
    {
      id: "w7_q9",
      rule: "SOLVE RULE",
      prompt: "Solve: 100 − 5x ≥ 25",
      speechPrompt: "Solve: 100 minus 5 x is greater than or equal to 25.",
      options: ["x ≤ 15", "x ≥ 15", "x ≤ −15", "x < 15"],
      correctIndex: 0,
      hint: "Subtract 100: −5x ≥ −75. Divide by −5 and FLIP!",
      speechHint: "Subtract 100 to get negative 5 x is greater than or equal to negative 75. Divide by negative 5 and flip the sign to x is less than or equal to 15.",
      explanation: "−5x ≥ −75 → Divide by −5 and FLIP sign: x ≤ 15.",
      visual: { kind: "ineq", lhs: "100 − 5x", sign: "≥", rhs: "25" }
    }
  ],

  // =========================================================================
  // WORLD 9: Whole Number Woods (Theme: Counting integer solutions, Compound)
  // =========================================================================
  [
    {
      id: "w8_q0",
      rule: "COUNT RULE",
      prompt: "How many WHOLE numbers (0, 1, 2, …) satisfy: 2 < x < 7?",
      speechPrompt: "How many whole numbers satisfy: 2 is less than x which is less than 7?",
      options: ["4 whole numbers (3, 4, 5, 6)", "5 whole numbers", "3 whole numbers", "6 whole numbers"],
      correctIndex: 0,
      hint: "Both ends are strict (<), so neither 2 nor 7 is included.",
      speechHint: "Both ends are strict, so neither 2 nor 7 is included. The whole numbers are 3, 4, 5, and 6.",
      explanation: "The integers strictly between 2 and 7 are 3, 4, 5, 6 → exactly 4 whole numbers.",
      visual: { kind: "numline", min: 0, max: 9, step: 1, point: 2, closed: false, dir: "between", point2: 7, closed2: false }
    },
    {
      id: "w8_q1",
      rule: "COUNT RULE",
      prompt: "How many WHOLE numbers satisfy: 0 ≤ x ≤ 4?",
      speechPrompt: "How many whole numbers satisfy: 0 is less than or equal to x which is less than or equal to 4?",
      options: ["5 whole numbers (0, 1, 2, 3, 4)", "4 whole numbers", "3 whole numbers", "6 whole numbers"],
      correctIndex: 0,
      hint: "Both ends are included (≤), and 0 is a whole number!",
      speechHint: "Both ends are included with closed dots, and 0 is a whole number. Count 0, 1, 2, 3, 4.",
      explanation: "The whole numbers are 0, 1, 2, 3, 4 → 5 whole numbers.",
      visual: { kind: "numline", min: -1, max: 6, step: 1, point: 0, closed: true, dir: "between", point2: 4, closed2: true }
    },
    {
      id: "w8_q2",
      rule: "COUNT RULE",
      prompt: "How many WHOLE numbers satisfy: −3 < x ≤ 3?",
      speechPrompt: "How many whole numbers satisfy: negative 3 is less than x which is less than or equal to 3?",
      options: ["4 whole numbers (0, 1, 2, 3)", "7 whole numbers", "3 whole numbers", "6 whole numbers"],
      correctIndex: 0,
      hint: "Remember: whole numbers cannot be negative! They start at 0.",
      speechHint: "Remember that whole numbers cannot be negative. They start at 0, giving 0, 1, 2, and 3.",
      explanation: "Whole numbers are non-negative (0, 1, 2, …). So the solutions are 0, 1, 2, 3 → 4 whole numbers.",
      visual: { kind: "numline", min: -4, max: 5, step: 1, point: -3, closed: false, dir: "between", point2: 3, closed2: true }
    },
    {
      id: "w8_q3",
      rule: "COUNT RULE",
      prompt: "How many WHOLE numbers satisfy: x < 5?",
      speechPrompt: "How many whole numbers satisfy: x is less than 5?",
      options: ["5 whole numbers (0, 1, 2, 3, 4)", "4 whole numbers", "Infinite whole numbers", "6 whole numbers"],
      correctIndex: 0,
      hint: "Whole numbers start at 0 and go up to 4.",
      speechHint: "Whole numbers start at 0 and go up to 4, giving 5 whole numbers.",
      explanation: "Whole numbers less than 5 are 0, 1, 2, 3, 4 → 5 whole numbers.",
      visual: { kind: "numline", min: -2, max: 7, step: 1, point: 5, closed: false, dir: "left" }
    },
    {
      id: "w8_q4",
      rule: "COUNT RULE",
      prompt: "How many WHOLE numbers satisfy: 1 ≤ x < 6?",
      speechPrompt: "How many whole numbers satisfy: 1 is less than or equal to x which is less than 6?",
      options: ["5 whole numbers (1, 2, 3, 4, 5)", "6 whole numbers", "4 whole numbers", "7 whole numbers"],
      correctIndex: 0,
      hint: "1 is included (≤), but 6 is not (<).",
      speechHint: "1 is included, but 6 is excluded. The numbers are 1, 2, 3, 4, and 5.",
      explanation: "The whole numbers are 1, 2, 3, 4, 5 → 5 whole numbers.",
      visual: { kind: "numline", min: 0, max: 8, step: 1, point: 1, closed: true, dir: "between", point2: 6, closed2: false }
    },
    {
      id: "w8_q5",
      rule: "KEYWORD RULE",
      prompt: "Is −2 classified as a WHOLE number?",
      speechPrompt: "Is negative 2 classified as a whole number?",
      options: ["No, whole numbers are non-negative: 0, 1, 2, 3…", "Yes, all integers are whole numbers", "Yes, because it has no decimals", "Only on negative number lines"],
      correctIndex: 0,
      hint: "Integers include negatives, but whole numbers start at 0.",
      speechHint: "Integers include negative numbers, but whole numbers are non-negative and start at 0.",
      explanation: "Whole numbers are {0, 1, 2, 3, …}. Negative numbers are integers, but NOT whole numbers.",
      visual: { kind: "phrase", text: "Whole Numbers = {0, 1, 2, 3, 4, …} (Non-negative)", keys: ["{0, 1, 2, 3, 4, …}"] }
    },
    {
      id: "w8_q6",
      rule: "COUNT RULE",
      prompt: "How many WHOLE numbers satisfy: 3 < x ≤ 4?",
      speechPrompt: "How many whole numbers satisfy: 3 is less than x which is less than or equal to 4?",
      options: ["1 whole number (just 4)", "2 whole numbers", "0 whole numbers", "Infinitely many"],
      correctIndex: 0,
      hint: "3 is excluded, and 4 is included.",
      speechHint: "3 is excluded by the less than sign, and 4 is included, leaving only the number 4.",
      explanation: "The only integer in this interval is 4 → exactly 1 whole number.",
      visual: { kind: "numline", min: 1, max: 6, step: 1, point: 3, closed: false, dir: "between", point2: 4, closed2: true }
    },
    {
      id: "w8_q7",
      rule: "COUNT RULE",
      prompt: "How many WHOLE numbers satisfy: −5 ≤ x < 0?",
      speechPrompt: "How many whole numbers satisfy: negative 5 is less than or equal to x which is less than 0?",
      options: ["0 whole numbers (none)", "5 whole numbers", "1 whole number", "6 whole numbers"],
      correctIndex: 0,
      hint: "All numbers in this interval are negative, but whole numbers cannot be negative.",
      speechHint: "All numbers in this interval are negative, but whole numbers cannot be negative. The count is zero.",
      explanation: "All values are strictly negative (−5, −4, −3, −2, −1). There are 0 whole numbers.",
      visual: { kind: "numline", min: -6, max: 2, step: 1, point: -5, closed: true, dir: "between", point2: 0, closed2: false }
    },
    {
      id: "w8_q8",
      rule: "COUNT RULE",
      prompt: "How many WHOLE numbers satisfy: 4 ≤ x ≤ 8?",
      speechPrompt: "How many whole numbers satisfy: 4 is less than or equal to x which is less than or equal to 8?",
      options: ["5 whole numbers (4, 5, 6, 7, 8)", "4 whole numbers", "6 whole numbers", "3 whole numbers"],
      correctIndex: 0,
      hint: "Both endpoints are included: 8 − 4 + 1 = 5.",
      speechHint: "Both endpoints are included. Count 4, 5, 6, 7, and 8, giving 5 whole numbers.",
      explanation: "4, 5, 6, 7, 8 → 5 whole numbers.",
      visual: { kind: "numline", min: 2, max: 10, step: 1, point: 4, closed: true, dir: "between", point2: 8, closed2: true }
    },
    {
      id: "w8_q9",
      rule: "COUNT RULE",
      prompt: "Solve 2x < 10. How many WHOLE numbers satisfy the solution?",
      speechPrompt: "Solve 2 x is less than 10. How many whole numbers satisfy the solution?",
      options: ["5 whole numbers (0, 1, 2, 3, 4)", "4 whole numbers", "Infinite whole numbers", "6 whole numbers"],
      correctIndex: 0,
      hint: "2x < 10 → x < 5. Whole numbers start at 0.",
      speechHint: "2 x is less than 10 means x is less than 5. The whole numbers are 0, 1, 2, 3, and 4.",
      explanation: "x < 5. The whole numbers are 0, 1, 2, 3, 4 → 5 whole numbers.",
      visual: { kind: "ineq", lhs: "2x", sign: "<", rhs: "10" }
    }
  ],

  // =========================================================================
  // WORLD 10: Inequality HQ (Theme: Master challenges combining all rules)
  // =========================================================================
  [
    {
      id: "w9_q0",
      rule: "SOLVE RULE",
      prompt: "Solve: 3x − 7 > 14",
      speechPrompt: "Solve: 3 x minus 7 is greater than 14.",
      options: ["x > 7", "x ≥ 7", "x < 7", "x > 21"],
      correctIndex: 0,
      hint: "Add 7 to 14 to get 21, then divide by 3.",
      speechHint: "Add 7 to 14 to get 21, then divide by 3 to get x is greater than 7.",
      explanation: "3x > 21 → x > 7.",
      visual: { kind: "ineq", lhs: "3x − 7", sign: ">", rhs: "14" }
    },
    {
      id: "w9_q1",
      rule: "FLIP RULE",
      prompt: "Solve: −4x + 6 ≤ 26",
      speechPrompt: "Solve: negative 4 x plus 6 is less than or equal to 26.",
      options: ["x ≥ −5", "x ≤ −5", "x ≥ 5", "x < −5"],
      correctIndex: 0,
      hint: "Subtract 6 to get −4x ≤ 20. Divide by −4 and FLIP!",
      speechHint: "Subtract 6 to get negative 4 x is less than or equal to 20. Divide by negative 4 and flip the sign to x is greater than or equal to negative 5.",
      explanation: "−4x ≤ 20 → Divide by −4 and FLIP sign: x ≥ −5.",
      visual: { kind: "ineq", lhs: "−4x + 6", sign: "≤", rhs: "26" }
    },
    {
      id: "w9_q2",
      rule: "FLIP RULE",
      prompt: "Solve: 5 − 2x < 11",
      speechPrompt: "Solve: 5 minus 2 x is less than 11.",
      options: ["x > −3", "x < −3", "x > 3", "x ≥ −3"],
      correctIndex: 0,
      hint: "Subtract 5: −2x < 6. Divide by −2 and FLIP!",
      speechHint: "Subtract 5 to get negative 2 x is less than 6. Divide by negative 2 and flip the sign to x is greater than negative 3.",
      explanation: "−2x < 6 → Divide by −2 and FLIP sign: x > −3.",
      visual: { kind: "ineq", lhs: "5 − 2x", sign: "<", rhs: "11" }
    },
    {
      id: "w9_q3",
      rule: "SOLVE RULE",
      prompt: "Solve: 2(x + 3) ≤ 16",
      speechPrompt: "Solve: 2 times the quantity x plus 3 is less than or equal to 16.",
      options: ["x ≤ 5", "x < 5", "x ≥ 5", "x ≤ 8"],
      correctIndex: 0,
      hint: "Divide by 2 to get x + 3 ≤ 8, then subtract 3.",
      speechHint: "Divide both sides by 2 to get x plus 3 is less than or equal to 8, then subtract 3 to get x is less than or equal to 5.",
      explanation: "x + 3 ≤ 8 → x ≤ 5.",
      visual: { kind: "ineq", lhs: "2(x + 3)", sign: "≤", rhs: "16" }
    },
    {
      id: "w9_q4",
      rule: "NUMBER LINE RULE",
      prompt: "Which number line shows the solution to −3x ≥ −9?",
      speechPrompt: "Which number line shows the solution to negative 3 x is greater than or equal to negative 9?",
      options: ["Closed dot at 3, arrow left", "Closed dot at 3, arrow right", "Open circle at 3, arrow left", "Closed dot at −3, arrow left"],
      correctIndex: 0,
      hint: "Divide by −3 and FLIP: x ≤ 3. Closed dot at 3, arrow pointing left.",
      speechHint: "Divide by negative 3 and flip the sign to x is less than or equal to 3. That is a closed dot at 3 with an arrow to the left.",
      explanation: "−3x ≥ −9 → x ≤ 3. On a number line, this is a closed dot at 3 with an arrow left.",
      visual: { kind: "numline", min: -1, max: 7, step: 1, point: 3, closed: true, dir: "left" }
    },
    {
      id: "w9_q5",
      rule: "FLIP RULE",
      prompt: "Solve: 8 − 3x ≥ 23",
      speechPrompt: "Solve: 8 minus 3 x is greater than or equal to 23.",
      options: ["x ≤ −5", "x ≥ −5", "x ≤ 5", "x < −5"],
      correctIndex: 0,
      hint: "Subtract 8: −3x ≥ 15. Divide by −3 and FLIP!",
      speechHint: "Subtract 8 to get negative 3 x is greater than or equal to 15. Divide by negative 3 and flip the sign to x is less than or equal to negative 5.",
      explanation: "−3x ≥ 15 → Divide by −3 and FLIP sign: x ≤ −5.",
      visual: { kind: "ineq", lhs: "8 − 3x", sign: "≥", rhs: "23" }
    },
    {
      id: "w9_q6",
      rule: "SOLVE RULE",
      prompt: "Chloe solves 2x − 5 < 9. What is the correct FIRST step to isolate x?",
      speechPrompt: "Chloe solves 2 x minus 5 is less than 9. What is the correct first step to isolate x?",
      options: ["Add 5 to both sides", "Subtract 5 from both sides", "Divide both sides by 2", "Flip the inequality sign"],
      correctIndex: 0,
      hint: "The inverse of subtracting 5 is adding 5.",
      speechHint: "The inverse of subtracting 5 is adding 5 to both sides to maintain balance.",
      explanation: "To undo −5, you must ADD 5 to both sides: 2x < 14.",
      visual: { kind: "ineq", lhs: "2x − 5", sign: "<", rhs: "9" }
    },
    {
      id: "w9_q7",
      rule: "FLIP RULE",
      prompt: "Mason solves −3x ≥ 12 and writes x ≥ −4. What was his mistake?",
      speechPrompt: "Mason solves negative 3 x is greater than or equal to 12 and writes x is greater than or equal to negative 4. What was his mistake?",
      options: ["He forgot to flip the inequality sign when dividing by −3", "He calculated 12 divided by −3 incorrectly", "He should have subtracted 3", "There was no mistake"],
      correctIndex: 0,
      hint: "He divided by a negative number (−3) but kept the sign ≥.",
      speechHint: "He divided by a negative number, negative 3, but forgot to flip greater than or equal to into less than or equal to.",
      explanation: "Dividing by −3 requires flipping the sign: ≥ must become ≤. The correct answer is x ≤ −4.",
      visual: { kind: "phrase", text: "Mason: −3x ≥ 12 → x ≥ −4 (Forgot to flip!)", keys: ["Forgot to flip!"] }
    },
    {
      id: "w9_q8",
      rule: "FLIP RULE",
      prompt: "Solve: −5x − 10 > 15",
      speechPrompt: "Solve: negative 5 x minus 10 is greater than 15.",
      options: ["x < −5", "x > −5", "x < 5", "x ≤ −5"],
      correctIndex: 0,
      hint: "Add 10: −5x > 25. Divide by −5 and FLIP!",
      speechHint: "Add 10 to get negative 5 x is greater than 25. Divide by negative 5 and flip the sign to x is less than negative 5.",
      explanation: "−5x > 25 → Divide by −5 and FLIP sign: x < −5.",
      visual: { kind: "ineq", lhs: "−5x − 10", sign: ">", rhs: "15" }
    },
    {
      id: "w9_q9",
      rule: "KEYWORD RULE",
      prompt: "Master Challenge: What is the single most important rule when multiplying or dividing an inequality by a negative number?",
      speechPrompt: "Master Challenge: What is the single most important rule when multiplying or dividing an inequality by a negative number?",
      options: ["Always FLIP the inequality sign", "Keep the sign the same", "Change the sign to equals", "Multiply by zero"],
      correctIndex: 0,
      hint: "The Golden Flip Rule!",
      speechHint: "The Golden Flip Rule: whenever you multiply or divide by a negative number, always flip the inequality sign.",
      explanation: "Golden Flip Rule: Multiplying or dividing both sides by a negative number reverses the direction of the inequality sign.",
      visual: { kind: "phrase", text: "GOLDEN FLIP RULE: × or ÷ by a negative → FLIP the sign!", keys: ["FLIP the sign!"] }
    }
  ]
];
