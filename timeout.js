function displaytrafficlight(light) {
    console.log(light)
}

setTimeout(displaytrafficlight, 5000, '🟢')
setTimeout(displaytrafficlight, 3000, '🟡')

displaytrafficlight('🔴')