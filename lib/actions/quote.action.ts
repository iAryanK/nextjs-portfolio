"use server";

export async function getQuotation2() {
  const data = await fetch("https://zenquotes.io/api/quotes", {
    next: { revalidate: 3600 },
  });
  const quotes = await data.json();

  const lengthOfQuotes = quotes.length;
  const randomIdx = Math.floor(Math.random() * lengthOfQuotes);

  console.log(quotes[randomIdx]);
  return quotes[randomIdx];
}
