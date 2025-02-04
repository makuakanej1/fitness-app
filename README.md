<h1>Fitness App Project</h1>

<h2>The original idea was to create a simple workout planner that could be used to schedule workouts.</h2>

<h2>Original ideas I wanted incorporated:</h2>
- Multiple pages that could be navigated to
- Journal area where you could see all of your workouts
- Form that could be filled out with workouts and submitted to a json file
- Editing page that could be used to edit workout
- Buttons that are attached to each workout on the workout page, allowing for editing and deleting of that particular workout
- Filtering option to search through existing workouts
- I wanted to create a layout that applied certain components to all pages
- I wanted to create a CSS wrapper component to be applied to each workout displayed

<h2>Things that I learned throughout the project:</h2>

** (contents in here are struggles I ran into) **

- I learned about react-router-dom and how to utilize a few of its' components in my project (used createBrowserRouter and createRouteFromElements for page routing)
- I learned a lot more about useState and useEffect (using useEffect to fetch my API data)
- I learned how to utilize useParams() in order to take the id from that particular workout and make sure you are editing just that specific workout (I spent a lot of time on this as I struggled to figure out how to edit the existing data, replacing the original data with   the updated one, and then displaying it again)
  ** Although I got my edit button to lead to an edit workout page that allowed for editing, I still have not figured out how to pre-fill the data of that workout **
- I learned how to use forms more and submitting that information to my mock api and store it in a certain way I defined
- I learned how to use json server in order to store my workout data due to not being able to find a good enough free existing API
- I got more practice with using async/await functions
- Learned and use some of the HTTP methods to store (POST), edit (PUT), and delete (DELETE) data in my mock API
- Deepened my knowledge of how to use higher-order array methods such as .map (in order to render my data to the page) and .filter (in order to get my filter search input working and have it look for whatever is inputted)
  ** My input for exercises is just a text area - I spent way too long on this portion of the project due to not being able to figure out how to either display each workout on its own line in the journal page or how to create a new "exercise" input that generated its' own unique ID and storing it/displaying it separately **
  - I got to implement some NavLink functionality to show which page you are currently on within the NavBar
  - I also got to use the navigate functionality in order to move to and from a page after finishing a particular purpose


  
