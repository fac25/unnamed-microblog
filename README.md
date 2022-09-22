# [Unnamed Microblog](https://unnamed-microblog.herokuapp.com/)

# Week 1: Server Project Microblogging

### By: Alex, Manoela, Patrick, Paz

You can find our site hosted on Heroku [here](https://unnamed-microblog.herokuapp.com/)

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and `cd` into the directory
2. Run `npm install` to install all the dependencies
3. Run `npm run dev` to start the server.  
   This uses the `nodemon` library to auto-restart the server when you save changes.

## Test

Our test folder contains two tests.

- [x] Test 1 Display the form for the user.
- [x] Test 2 Submitting the form displays as the most recent post

To run:

`npm run test:form`

`npm run test:post`

## Users Stories

- [x] As an opinionated person, I want to: post my thoughts so others can read them

- [x] As a bored person, I want to: read what other people have posted

## Stretch

- [ ] As an impulsive person, I want to: delete my posts so no one can see them anymore

## Acceptance Criteria

- [x] Deployed to Heroku
- [x] A page with a form to submit posts, and a page showing all posts
- [x] No .html files (all HTML responses should be created dynamically within Node)
- [x] No client-side JavaScript (all logic should happen on the server)
- [x] All static assets served correctly (CSS, favicon etc)
- [x] Tests for each server route
- [ ] A responsive, mobile-first design
- [ ] Ensure your app is accessible to as many different users as possible

