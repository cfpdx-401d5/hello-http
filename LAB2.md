<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> POST to Hello HTTP
======

## Directions

Change the "interesting fact" route to return a list of all the interesting facts (maybe rename to `/facts` instead of `/fact`

Add a post method for the `/facts` route that adds the posted body (if it exists) to the in-memory fact array. The post should return the same info that was posted.

## Testing

* Add tests for posting fact. Both the actual POST operation, and subsequent GET includes that fact.

## Bonus

Store your interesting facts in mongodb! (Don't worry about tests because you don't know how to drop db yet)

## Rubric

* HTTP Path and Verb: 2pts
* Read and deserialize body: 4pts
* Correctly manage facts: 2pts
<<<<<<< HEAD
* Tests: 2pts
=======
* Tests: 2pts
>>>>>>> krogseng
