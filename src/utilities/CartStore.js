const CartStore = (props) => {
  if (localStorage.getItem(props)) {
    alert('Already added!')
  } else {
    localStorage.setItem(props, 1)
  }
}

export { CartStore }