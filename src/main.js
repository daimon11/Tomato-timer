import './scss/index.scss';

let count = 0;
const imp = ['default', 'important', 'so-so'];
console.log(document.querySelector('.button-importance'));
document.querySelector('.button-importance').addEventListener('click', ({ target }) => {
  count += 1;
  if (count >= imp.length) {
    count = 0;
  }

  for (let i = 0; i < imp.length; i++) {
    if (count === i) {
      target.classList.add(imp[i]);
    } else {
      target.classList.remove(imp[i]);
    }
  }
});

class Implementation {
  constructor(name, count = 0) {
    this.name = name;
    this.count = count;
  };
  changeCount() {
    this.count += 1;
  };
  changeName(newName) {
    this.name = newName;
  };
};
