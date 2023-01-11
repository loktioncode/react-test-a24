# Textual Answers
-react focused test

1. Nullish operator (??), beacuse it makes my code safer (less breaking).
2. I have used it to provide default values for undefined/null values in my code.
3. Besides shorter syntax, arrow functions do not have an arguments object like traditional functions do,
   so you will need to list arguments.
4. The order of execution is different. First one the result of foo++ is parsed to the function and function is executed, next one the function recieves the value foo and then function is executed and an incement on foo will happen.
5. A function defines independent units of logic while classes create a blueprint for creating objects with properties and methods.
## CSS
6. This is what dertemines which style is to be applied first to an element with many styles for example an ID has higher specificity so it will be applied first before a class. 
7. !important gives higher priority in css styles and you would use this when trying to override a style and might cause unexpected behaviours when using it with css libraries.
8. I prefer using grid because it's easy to layout my rows and columns and place containers neatly  on the users screen. 
9. They are legal, it pulls targeted element out of the holding container.
10. The way the box model works is that all margins do not take up space if not specified, so when a margin is specified for the child element it affects the parent <div>. One way to prevent this is to set the overflow to hidden to contain child elements margins.

## UNIT TESTS
11. I have used the React testing library
12. Yes there were some pitfalls like not using meaningful queries as I often find myself using querues that are not specific enough.
13. When using  RTL i can create a test that uses the query getBy queries (getByLabelText, getByTestId .etc) to find the child component and check the props it consumed.


