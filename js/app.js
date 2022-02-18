const nextBtn = document.getElementById('nextBtn');
const previousBtn = document.getElementById('previousBtn');

let data = [
    {
        name: 'Krishna Kumar',
        age: 21,
        language: 'JavaScript',
        framework: 'Bootstrap',
        image: '../img/men/11.jpg'
    },
    {
        name: 'Rohan Das',
        age: 25,
        language: 'Python',
        framework: 'Tailwind',
        image: '../img/men/12.jpg'
    },
    {
        name: 'Alexa',
        age: 28,
        language: 'Type Script',
        framework: 'Django',
        image: '../img/women/11.jpg'
    },
    {
        name: 'Soni',
        age: 20,
        language: 'Java',
        framework: 'Jquery',
        image: '../img/women/12.jpg'
    },
    {
        name: 'Kanhaiya',
        age: 21,
        language: 'C++',
        framework: 'React',
        image: '../img/men/13.jpg'
    },
    {
        name: 'Ravi',
        age: 25,
        language: 'PHP',
        framework: 'Angular',
        image: '../img/men/14.jpg'
    },
]

let candidates = cvItrator(data);
nextCV();

function cvItrator(profiles) {
    let nextIndex = 0;
    let next = false;
    let previous = false;
    return {
        next: function () {
            if (nextIndex < profiles.length) {
                if (previous) {
                    nextIndex++;
                }
                next = true;
                previous = false;
                return {
                    value: profiles[nextIndex++],
                    done: false
                }
            }
            else if(nextIndex = profiles.length){
                nextIndex = 0
                if (previous) {
                    nextIndex++;
                }
                next = true;
                previous = false;
                return {
                    value: profiles[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        },
        previous: function () {
            if (nextIndex > 1) {
                if (next) {
                    --nextIndex
                }
                previous = true;
                next = false;
                return {
                    value: profiles[--nextIndex],
                    done: false
                }
            }
            else {
                nextIndex = profiles.length;
                if (next) {
                    --nextIndex
                }
                previous = true;
                next = false;
                return {
                    value: profiles[--nextIndex],
                    done: false
                }
            }
        }
    }
}

// Button Listener for next user profile
nextBtn.addEventListener('click', () => {
    if (!nextBtn.className.includes('disabled')) {
        nextCV();
    }
});

function nextCV() {
    const currentCandidate = candidates.next();
    if (!currentCandidate.done) {
        let image = document.getElementById('image');
        let profile = document.getElementById('profile');
        image.innerHTML = `<img src='${currentCandidate.value.image}' class="d-block m-auto">`
        profile.innerHTML = `<div class="card text-center">
                                <div class="card-header">
                                    Name: ${currentCandidate.value.name}
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">age: ${currentCandidate.value.age} year</li>
                                    <li class="list-group-item">language: ${currentCandidate.value.language}</li>
                                    <li class="list-group-item">Frameword: ${currentCandidate.value.framework}</li>
                                </ul>
                            </div>`;
    }
}

// Button Listener for previous user profile
previousBtn.addEventListener('click', () => {
    if (!previousBtn.className.includes('disabled')) {
        previousCV();
    }
});
function previousCV() {
    const currentCandidate = candidates.previous();
    if (!currentCandidate.done) {
        let image = document.getElementById('image');
        let profile = document.getElementById('profile');
        image.innerHTML = `<img src='${currentCandidate.value.image}' class="d-block m-auto">`
        profile.innerHTML = `<div class="card text-center">
                                <div class="card-header">
                                    Name: ${currentCandidate.value.name}
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">age: ${currentCandidate.value.age} year</li>
                                    <li class="list-group-item">language: ${currentCandidate.value.language}</li>
                                    <li class="list-group-item">Frameword: ${currentCandidate.value.framework}</li>
                                </ul>
                            </div>`;
    }
}