# Artlogic Front-end Challenge

## Viewing the project

Run the following commands to view this project:
- `npm install`
- `npm start` 

Or view online
- [damotr0n.github.io/artlogic_fe_task](https://damotr0n.github.io/artlogic_fe_task/)

## Some notes

- The background image is very large, it would be best to optimize it in some way for different device sizes.
- I have decided to import the background image in CSS. This is not a good option for accessibility, however the background does not serve any functional purpose on this page. If the image was important for the functionality, I would import it as a HTML `img` element with the appropriate `alt` text.
- Data fetching is abstracted away in a separate function, so that it can be interchanged or mocked easily in the main function.
- This project has been built with Node v18, please keep this in mind when using older versions e.g. v12
- I took ~2.5h to complete this fully.
