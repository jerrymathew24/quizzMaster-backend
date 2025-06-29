const routeNotFound = (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Page not found",
  });
}

export { routeNotFound };