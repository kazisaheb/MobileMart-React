const CartStore = (slug) => {
  localStorage.setItem(slug, 1)
}

export { CartStore }