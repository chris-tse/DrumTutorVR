const rstick = document.querySelector('#drumStickRight');

rstick.addEventListener('collide', e => {
    console.log('Stick has hit with body #' + e.detail.body.id);
})