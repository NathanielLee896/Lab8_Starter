# Lab 8 - Starter
Nathan Lee
Xiande Zeng

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
   1) Within a Github action that runs whenever code is pushed 
   2) We choose this one because just like in the previous lab with the Github actions and exploring it, this will allow us to make sure erroronous code doesn't get into the the working main code and also allows people an easy way to test their code. Comparative to the other options, if we run them manually, it might pass but might not work with the main code. And if we run them all after development, there will be a lot of issues with where the error is coming from and we would have to go back to fix things instead of working sequentially. 
2) Would you use an end to end test to check if a function is returning the correct output?
   1) No
3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   1) No because there are too many edge cases and user cases that are possible where unit testing would not cover them all. Also there could be too many results to check for. 
4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   1) Yes because it would be easy and simple to test. It is an easy case to cover and check. It is also a specific feature that has only a single result (over or under the length).


