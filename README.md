# Unhandled Promise Rejection in Express.js Async Handler

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within asynchronous request handlers.  When an asynchronous operation in a route handler throws an error, and that error isn't properly caught, the Express.js application might crash silently or behave unexpectedly.  This example showcases the issue and provides a solution.

## Bug

The `bug.js` file contains an Express.js application with a route handler that uses `someAsyncOperation()`.  This function simulates an asynchronous operation that might reject with an error. The `catch` block logs the error, but Express.js doesn't inherently handle the rejection. The application may still crash, especially in production environments where error logging isn't as prominent.

## Solution

The `bugSolution.js` file demonstrates a solution. It adds proper error handling by using a `try...catch` block and calling `next(error)` to pass the error to the Express.js error-handling middleware. This ensures the application continues to run even if an error occurs within an async request handler, making it more robust.