## A responsive sidebar that could hide text and  change position based on the current screen width

P.S The active style is built in but the router part is not implemented, so it is now static. You need to implement your own router with
react-router-dom or next/router

For example, you can use Link from next/router or react-router-dom and wrap Nav.Link with that

```js
<Link href="#" pass href>
  <Nav.Link>
    {...}
   </Nav.Link>
</Link>
```

![sidebar_responsive](https://user-images.githubusercontent.com/18433596/152635339-7ee88878-7685-4b53-b22a-ca2c1f585857.gif)
