export const scrollPageToElementByID = (elementId) => {
  const selectedElement = document.querySelector(elementId)
  const elementToTop = selectedElement.offsetTop
  window.scrollTo(0, elementToTop)
}
