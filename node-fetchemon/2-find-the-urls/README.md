# Find the URL's

In this set of exercises you are given passing assertions, you need to write the URL to pass the asserts.

The main learning objective is to get used to investigating large APIs and data sets.  There's a lot of data in the PokeApi and you need to find a needle in that haystack.

But you don't have to click through every pokemon on their website, you're a programmer!  Experiment with different ways of searching the Pokemon API in [search-script.js](./search-script.js).

A helpful tip (but not the only strategy!):

> Afaik there is not easy solution with a search.
> Some api do offer that functionality although the documentation of the pokeapi does not indicate that this is possible https://pokeapi.co/api/v2/pokemon?moves=76.

> The way I would go about it is to look for pokemon with the move hustle
> https://pokeapi.co/api/v2/ability/hustle/ intersect that with the pokemon for rivalry https://pokeapi.co/api/v2/ability/rivalry/. For each pokemon that is still left request the moves and check if it is 76.

- [Anthony](https://github.com/HackYourFutureBelgium/class-8/issues/324#issuecomment-626233830)
