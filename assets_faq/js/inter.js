const questionElements = document.querySelectorAll('.question');

const handleClick = (e) => {
  const questionElement = e.target.closest('.question');

  // const questionTitleElement = parent.querySelector('h2');
  // questionTitleElement.classList.toggle('title--bold');
  getElementFromParent({
    parent: questionElement,
    element: 'h2',
    classToToggle: 'title--bold',
  });

  // const arrowElement = parent.querySelector('.arrow');
  // arrowElement.classList.toggle('rotate');
  getElementFromParent({
    parent: questionElement,
    element: '.arrow',
    classToToggle: 'rotate',
  });

  // const listElement = parent.parentElement;
  // const paragraphElement = listElement.querySelector('p');
  // paragraphElement.classList.toggle('paragraph--hidden');
  getElementFromParent({
    parent: questionElement.parentElement,
    element: 'p',
    classToToggle: 'paragraph--hidden',
  });
};

const getElementFromParent = ({ parent, element, classToToggle }) => {
  const el = parent.querySelector(element);
  el.classList.toggle(classToToggle);
};

for (const questionElement of questionElements) {
  questionElement.addEventListener('click', handleClick);
}

const obj = {
  name: 'pierre',
  age: 32,
  sports: ['foot', 'tennis'],
};

// const name = obj.name;
// const age = obj.age;
// const sports = obj.sports;

// Equivalent à

// const { name, age, sports } = obj;

// renommer une clé
// const { name: firstName } = obj;
