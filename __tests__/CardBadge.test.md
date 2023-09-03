# Market place page

### Checks the page has x elements

```js
const page = screen.getByTestId("marketplace-page");

expect(page.childElementCount).toBe(length);
```

### Adds 2 new items to the store

```js
const btnHeadphones = screen.getByTestId("fav-btn-Headphones");
const btnSneakers = screen.getByTestId("fav-btn-Sneakers");

await user.click(btnHeadphones);
await user.click(btnSneakers);

const count = screen.getByTestId("favs-count");

expect(count).toHaveTextContent("2");
```

### Removes 2 items from the store

```js
const btnHeadphones = screen.getByTestId("fav-btn-Headphones");
const btnSneakers = screen.getByTestId("fav-btn-Sneakers");

await user.click(btnHeadphones);
await user.click(btnSneakers);

const count = screen.getByTestId("favs-count");

expect(count).toHaveTextContent("0");
```
