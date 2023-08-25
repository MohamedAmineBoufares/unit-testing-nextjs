import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { cards } from "@utils/lists";

import Home from "../app/marketplace/page";
import Badge from "../app/marketplace/components/Badge";

beforeEach(() =>
  render(
    <>
      <Badge />
      <Home />
    </>
  )
);

const length = cards.length;
const user = userEvent.setup();

describe("Marketplace page", () => {
  it(`Checks the page has ${length} elements`, () => {
    const page = screen.getByTestId("marketplace-page");

    expect(page.childElementCount).toBe(length);
  });

  describe("Adding removing items", () => {
    it("Adds 2 new items to the store", async () => {
      const btnHeadphones = screen.getByTestId("fav-btn-Headphones");
      const btnSneakers = screen.getByTestId("fav-btn-Sneakers");

      await user.click(btnHeadphones);
      await user.click(btnSneakers);

      const count = screen.getByTestId("favs-count");

      expect(count).toHaveTextContent("2");
    });

    it("Removes 2 items from the store", async () => {
      const btnHeadphones = screen.getByTestId("fav-btn-Headphones");
      const btnSneakers = screen.getByTestId("fav-btn-Sneakers");

      await user.click(btnHeadphones);
      await user.click(btnSneakers);

      const count = screen.getByTestId("favs-count");

      expect(count).toHaveTextContent("0");
    });
  });
});
