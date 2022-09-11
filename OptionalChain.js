// OPTIONAL CHAIN -- ?
// NOTE: Optional chain mean - when access an object somthing.some some was never declear RESULT = UNDEFINED never access next result. if you want to stop undefined just declear after property assign [?].

const books = {
    author: 'sujon sheikh',
    name: 'definitive guide javascript',
    pages: 1250,
    son: ''
}
const result = books.author?.son;
console.log(result)