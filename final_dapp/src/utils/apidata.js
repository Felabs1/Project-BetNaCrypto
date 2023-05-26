export const data = fetch(
  "https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=a40e5c3ae99a5914d3cef7bb90fd1c595975285c15d2ebf4ed0a41d1cf71184e&from=2023-04-16&to=2023-04-16",
  {
    headers: {
      Accept: "application/json",
    },
  }
)
  .then((response) => response.json())
  .then((text) => console.log(text));
