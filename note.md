## Getting Started

Enter the values in the `.env.development.sample`, `.env.staging.sample`, `.env.production.sample` files to be used for each environments.

## Using Docker and Makefile

### Development environment - for doing testing

```
make build-development
make start-development
```

Open http://localhost:3001

### Staging environment - for doing UAT testing

```
make build-staging
make start-staging
```

Open http://localhost:3002

### Production environment - for users

```
make build-production
make start-production
```

Open http://localhost:3003

## Running Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Area of Improvement:

1. Mutation Hook Repetition
2. Data Transformation Repetition
3. Form Modal Pattern Repetition
4. Service Layer Could Be More Generic
5. Abstract form modal pattern
6. Consider generic CRUD service
7. Add more comprehensive error boundaries
8. Consider adding a state management pattern for complex forms

Filter Architecture

1. User visits /teachers
2. Types "john" in search → Debounced API call
3. Selects "Science" position → URL updates
4. FilterBar appears showing active filters
5. User can clear individual filters or all
6. User bookmarks the page → Saves current filters
7. User shares URL → Others see same filtered view
8. User clicks Back → Returns to previous filter state

   getModuleFilters,
   setFilter,
   setFilters,
   clearFilter,
   clearAllFilters,
   hasActiveFilters,
   getActiveFilterCount
