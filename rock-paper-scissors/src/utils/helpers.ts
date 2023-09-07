export const isUserWin = (aiSelection: string, selection: string) => {
  if (aiSelection === selection) {
    return 0;
  }

  // user win condition
  if (
    (selection === "paper" && aiSelection === "rock") ||
    (selection === "rock" && aiSelection === "scissors") ||
    (selection === "scissors" && aiSelection === "paper")
  ) {
    return true;
  }

  // ai win condition
  if (
    (selection === "rock" && aiSelection === "paper") ||
    (selection === "scissors" && aiSelection === "rock") ||
    (selection === "paper" && aiSelection === "scissors")
  ) {
    return false;
  }
};
