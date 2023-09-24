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

class TomatoTimer {
  constructor({ workTime = 25, shortBreakTime = 5, longBreakTime = 15, tasks = [] } = {}) {
    this.workTime = workTime;
    this.shortBreakTime = shortBreakTime;
    this.longBreakTime = longBreakTime;
    this.tasks = tasks;
    this.activeTask = null;
    this.counter = 0;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  activateTask(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (!task) {
      console.error(`Task with id ${taskId} not found`);
      return;
    }
    this.activeTask = task;
  }

  startTask() {
    if (!this.activeTask) {
      console.error('No active task');
      return;
    }
    console.log(`Starting task "${this.activeTask.title}" for ${this.workTime} minutes`);
    setTimeout(() => {
      console.log(`Task "${this.activeTask.title}" completed`);
      this.counter++;
      if (this.counter % 3 === 0) {
        console.log(`Starting long break for ${this.longBreakTime} minutes`);
        setTimeout(() => {
          console.log(`Long break completed`);
        }, this.longBreakTime * 60 * 1000);
      } else {
        console.log(`Starting short break for ${this.shortBreakTime} minutes`);
        setTimeout(() => {
          console.log(`Short break completed`);
        }, this.shortBreakTime * 60 * 1000);
      }
    }, this.workTime * 60 * 1000);
  }

  increaseTaskCounter(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (!task) {
      console.error(`Task with id ${taskId} not found`);
      return;
    }
    task.counter++;
  }
}
