## react-ts-project-the-zoo
Zoo React App (TypeScript)
Built a single-page React app using TypeScript that fetches animal data from an external API and stores it locally (localStorage). 

### deployed live site 
```
https://reactproject-zoo.netlify.app/
```

### The app includes:
#### Home Page:
Displays a list of animals with names and brief descriptions.
#### Animal Page:
Displays a list of animals with names and brief descriptions. Also shows if the animal is happy or not, depending if it has been fed in the last 4 hours.
#### Animal Detail Page:
Clicking on an animal shows detailed information. 
Users can mark animals as fed, recording feeding times, and temporarily disabling the feed button.
#### Feed Timer:
Automatically resets the feed status after 3 hours, enabling the feeding button again.
#### Notifications:
Displays reminders on the homepage and animal pages when an animal requires feeding (after 4 hours).
#### Error Handling:
Gracefully handles broken image links.
#### Structure: 
Organized codebase with modular components and services for API interactions and calculations.

## Technique
 
- HTML
- Bootstrap
- CSS
- TypeScript
- React 

## demo


### home page
![image](/public/demo/home_page.PNG)

### animal page
![image](/public/demo/animal_page.PNG)

### animal details page
![image](/public/demo/animal_detail_page.PNG)
![image](/public/demo/fed_animal.PNG)


## Installation
 
### 1. Clone this repository
```
https://github.com/miwilicious/react-ts-project-the-zoo
```
 
### 2. Navigate to the project folder
```
cd react-ts-project-the-zoo
```
 
### 3. Install dependencies
```
npm install
```
 
### 4. Run the application
```
npm run dev
```
The application will be available at local: http://localhost:5173/