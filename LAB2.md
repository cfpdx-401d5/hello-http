<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> POST to Hello HTTP
======

## Directions

Change the "interesting fact" route to use an random entry from an in-memory array (that has at least one seeded fact).

Add a post method for the `/fact` route that adds the posted body (if it exists) to the in-memory fact array. 
The post should return the new length of facts.

## Testing

* Add a test that verifies that post works (post returns with correct number). Because the return is random, 
don't try and test that the posted fact appears in the `GET /fact` (though try it out manually).

## Rubric

* HTTP Path and Verb: 2pts
* Read and deserialize body: 4pts
* Correctly manage facts: 2pts
* Tests: 2pts
