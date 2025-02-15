```javascript
// pages/api/testSolution.js
export default function handler(req, res) {
  // Access query parameters correctly using req.query
  console.log(req.query);

  //Example of handling missing query params
  const myParam = req.query.myParam || 'default value';
  console.log('myParam:', myParam);

  res.status(200).json({ name: 'John Doe', query: req.query });
}
```