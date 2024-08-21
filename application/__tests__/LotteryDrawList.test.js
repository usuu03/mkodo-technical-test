// __tests__/LotteryDrawList.test.js
import { render } from "@testing-library/react-native";
import React from "react";
import App from "../App";

// Mocking the lottery data
jest.mock("../utils/lotteryData", () => ({
  draws: [
    {
      id: "draw-1",
      drawDate: "2023-05-15",
      number1: "2",
      number2: "16",
      number3: "23",
      number4: "44",
      number5: "47",
      number6: "52",
      bonusBall: "14",
      topPrize: 4000000000,
    },
    {
      id: "draw-2",
      drawDate: "2023-05-22",
      number1: "5",
      number2: "45",
      number3: "51",
      number4: "32",
      number5: "24",
      number6: "18",
      bonusBall: "28",
      topPrize: 6000000000,
    },
    {
      id: "draw-3",
      drawDate: "2023-05-29",
      number1: "34",
      number2: "21",
      number3: "4",
      number4: "58",
      number5: "1",
      number6: "15",
      "bonus-ball": "51",
      topPrize: 6000000000,
    },
  ],
}));

describe("LotteryDrawList", () => {
  it("renders the title 'List of Draws'", () => {
    const { getByText } = render(<App />);

    // Check if the title is rendered correctly
    expect(getByText("List of Draws")).toBeTruthy();
  });

  it("renders the correct number of draws", () => {
    const { getAllByText } = render(<App />);

    // There should be two three dates in the mock data
    const drawItems = getAllByText(/2023-/); // Regex to match the date format
    expect(drawItems.length).toBe(3);
  });

  it("renders each draw's ID and date", () => {
    const { getByText } = render(<App />);

    // Check if specific IDs and dates are rendered
    expect(getByText("draw-1")).toBeTruthy();
    expect(getByText("2023-05-15")).toBeTruthy();
    expect(getByText("draw-2")).toBeTruthy();
    expect(getByText("2023-05-22")).toBeTruthy();
    expect(getByText("draw-3")).toBeTruthy();
    expect(getByText("2023-05-29")).toBeTruthy();
  });
});
