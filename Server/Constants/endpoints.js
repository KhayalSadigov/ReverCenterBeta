const endpoints = {
  blogs: {
    getAll: "/api/blogs",
    getOne: "/api/blogs/:id",
    delete: "/api/blogs/:id",
    update: "/api/blogs/:id",
    post: "/api/blogs",
  },
  mails: {
    getAll: "/api/mails",
    getOne: "/api/mails/:id",
    delete: "/api/mails/:id",
    update: "/api/mails/:id",
    post: "/api/mails",
  },
  courses: {
    getAll: "/api/courses",
    getOne: "/api/courses/:id",
    delete: "/api/courses/:id",
    update: "/api/courses/:id",
    post: "/api/courses",
  },
  messages: {
    getAll: "/api/messages",
    getOne: "/api/messages/:id",
    delete: "/api/messages/:id",
    update: "/api/messages/:id",
    post: "/api/messages",
  },
  posts: {
    getAll: "/api/posts",
    getOne: "/api/posts/:id",
    delete: "/api/posts/:id",
    update: "/api/posts/:id",
    post: "/api/posts",
  },
  services: {
    getAll: "/api/services",
    getOne: "/api/services/:id",
    delete: "/api/services/:id",
    update: "/api/services/:id",
    post: "/api/services",
  },
  users: {
    getAll: "/api/users",
    getOne: "/api/users/:id",
    delete: "/api/users/:id",
    update: "/api/users/:id",
    post: "/api/users",
  },
  works: {
    getAll: "/api/works",
    getOne: "/api/works/:id",
    delete: "/api/works/:id",
    update: "/api/works/:id",
    post: "/api/works",
  },
};
module.exports = endpoints;
