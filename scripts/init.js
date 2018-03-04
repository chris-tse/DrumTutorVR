const transparentBlue = new THREE.MeshBasicMaterial({color: 0x6262E3, opacity: 0.5});

const toMakeBlue = [...document.querySelectorAll(".makeBlue")];
const objToScale = [...document.querySelectorAll("a-entity")];

toMakeBlue.forEach(drum => {
    drum.setAttribute('material', {
        color: '#6262E3',
        opacity: 0.5
    })
})

objToScale.forEach(obj => {
    obj.setAttribute('scale', {
        x: 0.5,
        y: 0.5,
        z: 0.5
    })
})