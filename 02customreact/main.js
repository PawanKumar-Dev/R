const mainContainer = document.querySelector("#root")

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  text: 'Visit'
}

function customRender(reactElement, container) {
  let domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.text

  domElement.setAttribute("href", reactElement.props.href)
  domElement.setAttribute("target", reactElement.props.target)

  container.appendChild(domElement)
}

customRender(reactElement, mainContainer)