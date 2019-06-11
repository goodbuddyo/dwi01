

## README FOR 20190610 - Sean ONeill
## dwi-coding-challenge
## Take-home weekend challenge for Direct Wines

## React app packages include Bootstrap, Next.js (with Webpack), Axios and Json-Server 

## git clone https://github.com/goodbuddyo/dwi01.git
## cd to the folder and fire up json-server with:
## $ npm run json-server

## then open 2nd terminal and run:
## $ npm run dev
## navigate to localhost:3000

## With a Monday due date, I'm submitting what I have ( Challenge 1 uses a REST call to a local Json-Server and a json file derived from the 0033008 link provided. Callenge 2 is incomplete).

## Let me know if you have any Q's
## Hope you like what you see.

## Regards
## Sean.ONeill@s-oneill.com








## Workflow
## All submissions should include source code and a readme that explains how their reviewers should download and run the code. Please provide a link to your work hosted on GitHub or Bitbucket (your choice).
## Dev Setup
## Create a local dev server using Webpack or Parcel
## Use the latest version of React to create a standalone app
## Use Bootstrap to style the elements and make it responsive
## Create dev and build commands and make sure your code runs!
## Front-end challenge #1: Build a product listing web component based on a Direct Wines Offer.
## This should outline how comfortable you are with displaying data from a REST API.
##
## Product Listing - On Load
## Requirements
## On page load, the REST API for the offer should be called using this code "0033008".
## There will be 3 products inside of the mainItems array
## Loop through the items and pull out the productName, numberOfBottlers and Price and display it on the page to look like the below
## Front-end challenge #2: Build a ZIP code autocomplete web component
## This should outline how comfortable you are with building a web component that will dynamically changed based on inputs from the user.
## 
## Zip Code Lookup - On Load
## Zip Code Lookup - After Lookup
## Requirements
## The city and state fields should be hidden by default
## When the user enters their zip code, a call to the REST API should happen and pass along the zip code into the URL
## The API will respond with the city / state values
## The city and state fields should show on the page (slide down) and the values should be filled out
## If the user selects CT as in the example below, an additional message should appear.
## If a NY zip code is entered, the message below should be hidden and only the city and state should be shown alongside the zip code.
## ## Resources
## Offer API
## GET Request - https://www.wsjwine.com/api/offer/0033008
## ZIP Code API
## GET Request - https://www.wsjwine.com/api/address/zipcode/12345
## Sample Landing Page
## https://www.wsjwine.com/discovery-club
