function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    console.log("visited: " + pathname);
    return pathname;
  } else {
    console.log("No request handler found for " + pathname);
    return "404 Request Not found";
  }
}
exports.route = route;