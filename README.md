# Bookshelf by Kent C. Dodds

This is an app from Epic React workshop by Kent C. Dodds.

I wanted to have a slightly different experience when going through this
workshop. Instead of solving each exercise on a separate branch, I'd rather work
on the `main` branch to see **exactly** how the app evolves over time.

Also, I'm completely recreating the project as I go, starting from CRA
TypeScript template. Although I'm using TypeScript, I intentionally don't enable
`strict` mode, because the original app is written in JavaScript, so I don't
want to spend time migrating each module over to TypeScript. I just want to get
a bit of type safety and leave the door open for eventual future experiments
using TypeScript.

## Resources

- [Make Your Own DevTools](https://kentcdodds.com/blog/make-your-own-dev-tools)

## Scripts

```shell
npm install
npm start
npm test
```

### App Data Model

- User

  - id: string
  - username: string

- List Item

  - id: string
  - bookId: string
  - ownerId: string
  - rating: number (-1 is no rating, otherwise it's 1-5)
  - notes: string
  - startDate: number (`Date.now()`)
  - finishDate: number (`Date.now()`)

> For convenience, our friendly backend engineers also return a `book` object on
> each list item which is the book it's associated to. Thanks backend folks!

> /me wishes we could use GraphQL

If your "database" gets out of whack, you can purge it via:

```javascript
window.__bookshelf.purgeUsers()
window.__bookshelf.purgeListItems()
```

- Book

  - id: string
  - title: string
  - author: string
  - coverImageUrl: string
  - pageCount: number
  - publisher: string
  - synopsis: string
