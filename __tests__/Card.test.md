# Card Test

### Checks the title of the card

```js
const card = screen.getByTestId("card");

expect(card).toBeInTheDocument();

within(card).getByText(item.title);
```

### Checks that the card has 3 keywords

```js
const keywords = screen.getByTestId("keyword-container");

expect(keywords.childElementCount).toBe(3);
```

### Checks that the price is not visible initially

#### [QueryBy](https://testing-library.com/docs/queries/about/)

```js
// queryBy dosen't throw an error if the element is not found
const price = screen.queryByTestId("price-container");

expect(price).not.toBeInTheDocument();
```

### Checks that the price is visible after clicking on the card

```js
const card = screen.getByTestId("img-btn");

await user.click(card);

const price = screen.queryByTestId("price-container");

expect(price).toBeInTheDocument();
```

### Checks that the price is hided after clicking on the card

```js
const card = screen.getByTestId("img-btn");

await user.click(card);

const price = screen.queryByTestId("price-container");

expect(price).toBeInTheDocument();

await user.click(card);

expect(price).not.toBeInTheDocument();
```
