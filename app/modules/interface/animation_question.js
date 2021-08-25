function animacion_opciones() {
    var bar = new ProgressBar.Circle(html, {
        color: '#86fa0',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {color: '#86fa0', a:0},
        to: {color: 'rgb(127, 230, 127)', a:1},
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
        }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0
    
    var bar = new ProgressBar.Circle(css, {
    color: '#86fa0',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#86fa0', a:0},
    to: {color: 'rgb(127, 230, 127)', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
    }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0
    
    var bar = new ProgressBar.Circle(js, {
        color: '#86fa0',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {color: '#86fa0', a:0},
        to: {color: 'rgb(127, 230, 127)', a:1},
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0
    
    var bar = new ProgressBar.Circle(figma, {
        color: '#86fa0',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {color: '#86fa0', a:0},
        to: {color: 'rgb(127, 230, 127)', a:1},
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0
    
    var bar = new ProgressBar.Circle(ux, {
        color: '#86fa0',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {color: '#86fa0', a:0},
        to: {color: 'rgb(127, 230, 127)', a:1},
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0
}

export {animacion_opciones}