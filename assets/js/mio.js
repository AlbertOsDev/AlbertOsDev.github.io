document.querySelector('form').addEventListener('submit', e =>{
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    //alert(JSON.stringify(data))
    var wp = JSON.stringify(data)
    alert(wp.indexOf('name'))
    alert(wp[wp.indexOf('name')])
    
    
})