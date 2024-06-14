"use server";

const options: any = {
  method: "GET",
  headers: { "X-Api-Key": process.env.QUOTE_API! },
  next: { revalidate: 60 },
};

export async function getQuotation() {
  const data = await fetch(
    "https://api.api-ninjas.com/v1/quotes?category=computers",
    options
  );
  const quote = await data.json();
  return quote[0];
}
