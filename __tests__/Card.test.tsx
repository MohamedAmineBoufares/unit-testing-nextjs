import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Card from "../app/marketplace/_components/Card";

const item = {
  src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  title: "Headphones",
  price: "$ 100",
  keywords: ["headphones", "music", "audio"],
};

beforeEach(() => render(<Card {...item} />));

describe("Card", () => {
  it("Checks the title of the card", () => {
    const card = screen.getByTestId("card");

    expect(card).toBeInTheDocument();

    within(card).getByText(item.title);
  });

  it("Checks that the card has 3 keywords", () => {
    const keywords = screen.getByTestId("keyword-container");

    expect(keywords.childElementCount).toBe(3);
  });

  describe("Card Price", () => {
    const user = userEvent.setup();

    it("Checks that the price is not visible initially", () => {
      // query by dosen't throw an error if the element is not found
      const price = screen.queryByTestId("price-container");

      expect(price).not.toBeInTheDocument();
    });

    it("Checks that the price is visible after clicking on the card", async () => {
      const card = screen.getByTestId("img-btn");

      await user.click(card);

      // query by dosen't throw an error if the element is not found
      const price = screen.queryByTestId("price-container");

      expect(price).toBeInTheDocument();
    });

    it("Checks that the price is hided after clicking on the card", async () => {
      const card = screen.getByTestId("img-btn");

      await user.click(card);

      // query by dosen't throw an error if the element is not found
      const price = screen.queryByTestId("price-container");

      expect(price).toBeInTheDocument();

      await user.click(card);

      expect(price).not.toBeInTheDocument();
    });
  });
});
