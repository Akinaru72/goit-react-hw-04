# goit-react-hw-04

## General requirements

- Create a repository named **goit-react-hw-04**
- When submitting the homework, provide two links:
  - to the repository with the source code
  - to the deployed project page (Vercel)
- The project must be created using [**Vite**](https://vite.dev/)
- There should be no errors or warnings in the console when running the project
- Each component in the `src/components` folder must have its own separate folder that contains:
  - a JSX file of the React component
  - a styles file
- The folder name, component file name (`.jsx`), and styles file name (`.module.css`) must match and correspond to the task requirements
- Use **export default** for exporting components
- Use the **axios** library for HTTP requests
- The code must be clean and formatted using **Prettier**
- Styling must be done using **CSS modules**

---

# Image search

Create an application for searching images by keyword.

[Watch the demo video of the application.](https://github.com/user-attachments/assets/f3b8bf24-e397-4d85-981f-3f949749b3f3)

---

## Image search service

In this task, you will get images from the [**Unsplash**](https://unsplash.com/developers) service using HTTP requests.

### Preparation

1. Register a developer account
2. Create a new application (**New Application**)
3. Come up with a name (for example):
   - Image Gallery
   - Photo Search
4. Get the **Access Key** in the **Keys** section

> ⚠ The free version allows **50 requests per hour**  
> Avoid making unnecessary requests!

---

## Useful documentation sections

- [How to build a request URL](https://unsplash.com/documentation#schema)
- [How to add an access key](https://unsplash.com/documentation#public-authentication)
- [Search images by keyword](https://unsplash.com/documentation#search-photos)

---

## Backend response

The server returns an object containing:

- an array of images
- the total number of pages for pagination

Each image is an object with a large amount of data.

### Main points

In the `urls` property, different image sizes are available:

- `small` — for gallery cards
- `regular` — for the modal window

---

## Additional features

Use more information from the image object:

- author
- number of likes
- description
- other useful data

---

# Components

Independently выдели the necessary components and add basic styling.  
Use the demo video as a reference.

![image](./src/assets/react-4.png)

---

## Header with search form

The **SearchBar** component accepts the prop:

- `onSubmit` — a function to pass the input value on form submit

### DOM structure

```html
<header>
  <form>
    <input
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>
```

## Search field validation

If the text field is empty when the form submit button is clicked:

- Show a notification to the user that they need to enter text to search for images
- The validation is performed in the **SearchBar** component at the moment of form submission
- Use the [**React Hot Toast**](https://react-hot-toast.com/) library for notifications

---

# Image gallery

The **ImageGallery** component is a list of image cards that creates the following DOM structure:

```html
<ul>
  {/* A set of list items with images */}
  <li>
    <div>
      <img src="" alt="" />
    </div>
  </li>
</ul>
```

## Gallery rendering conditions

- The gallery should be rendered **only when** there are loaded images
- It is a good practice **not to include the `<li>` element** inside the card component
- The `<li>` element should remain part of the **ImageGallery** component

---

# Image card

The **ImageCard** component is rendered inside the gallery  
and creates the following DOM structure:

```html
<div>
  <img src="" alt="" />
</div>
```

# Loading indicator

The **Loader** component is displayed under the gallery while images are being loaded.

- You can use any ready-made component, for example [**react-spinners**](https://www.npmjs.com/package/react-spinners) or another one
- While loading, the indicator **must not replace the gallery**
- The Loader should simply be rendered **below the gallery**

> ⚠ This is critically important when loading additional images to the already loaded ones

---

# Error message

The **ErrorMessage** component:

- Is rendered **instead of the gallery** in case of an HTTP request error
- It is enough to implement it as a **text message**

---

# Load more button

The **LoadMoreBtn** component:

- Renders a button with the text **"Load more"**
- On click:
  - the next batch of images is loaded
  - new images are added to the previously loaded ones

### Rendering conditions

- The button is displayed **only if there are loaded images**
- If the images array is empty — the button **is not rendered**

---

# Modal window

The **ImageModal** component:

- Is rendered inside the **App** component
- Receives all necessary data and functions via **props**

### Behavior

- When clicking on an image, a modal window opens
- The modal background is darkened
- The image is displayed in **large format**
- The modal window closes:
  - when pressing the **ESC** key
  - when clicking **outside** the modal window

To implement this functionality, use the [**React Modal**](https://github.com/reactjs/react-modal?tab=readme-ov-file#examples) library

---

**Live page: [Vercel](https://goit-react-hw-04-seven-omega-49.vercel.app/)**
