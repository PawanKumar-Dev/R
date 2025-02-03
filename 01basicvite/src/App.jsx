function App() {
  const username = "JS"

  return (
    <>
      <div>
        {/* This works */}
        This is text : {username}

        {/* Below code give you error: */}
        {/* {if(username) {username}} */}
      </div>
    </>
  )
}

export default App
