
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hand of a computer'
}
var template = (
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two </li>
    </ol>
</div>
);

var user = {
    name: "Mike",
    age: 26,
    location: 'Philadelphia'
}
function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>;
  } 
 
}
var template2 = (
<div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>Age: {user.age}</p>
   
    {getLocation(user.location)}

</div>    
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);

