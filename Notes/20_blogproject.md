# Project

- Our project need some additional package beside basic vite. First we install Redux/Toolkit and react-redux
  ```
  npm install @reduxjs/toolkit
  npm install react-redux
  ```

- Then let's install react router dom also.
  ```
  npm i react-router-dom
  ```

- Also add appwrite package. Appwrite is a comprehensive suite of backend services. Similar to Google Firebase.
  ```
  npm i appwrite
  ```

- Next we install tiny mce for our full fledged editor.
  ```
  npm i @tinymce/tinymce-react
  ```

- We also need "html react parser".
  ```
  npm i html-react-parser
  ```

- Also react hook form. Good library for form validation in react.
  ```
  npm install react-hook-form
  ```

- Lastly we must store our environment variables data in seprate file ".env" and in the root folder.
- Similarly ".env.sample" file is copy which contains only dummy data that we can ship everywhere. But actual ".env" file should not be shared anywhere.