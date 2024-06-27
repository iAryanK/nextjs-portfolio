"use server";

import { quotes } from "@/data/quotes";

export async function getQuotation() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return randomQuote;
}
