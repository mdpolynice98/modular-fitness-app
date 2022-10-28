const searchbar = document.getElementById ('searchbar')

const searchform = document.getElementById ('searchform')
const workoutscontainer = document.getElementById('workouts-container')
console.log(searchform);
console.log(searchbar);
console.log('testing');

searchform.onsubmit = async function (event){
    event.preventDefault()
    const response = await fetch(`/api/fitness/search?category=${searchbar.value}`)   
    const data = await response.json()
    console.log(data);
    if (data){
        const newelement = document.createElement('p')
        newelement.textContent = data[0].name
        workoutscontainer.appendChild(newelement)
    }
}