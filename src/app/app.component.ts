import {Component} from '@angular/core'
import {Task, TaskFilter} from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'To Do'
  tasks: Task[] = [
    {
      description: 'papel',
      done: true,
      id: 1
    },
    {
      description: 'vidrio',
      done: false,
      id: 2
    }
  ]
  filter: TaskFilter = 'all'


  filtered(): Task[] {
    if (this.filter == 'open') {
      return this.tasks.filter(task => task.done === false)
    } else if (this.filter === 'done') {
      return this.tasks.filter(task => task.done === true)
    } else {
      return this.tasks
    }
  }

  public addTask(description: string) {
    console.log(description)
    this.tasks.push({
      description,
      done: false,
      id: Date.now()
    })
  }

  filterAll() {
    this.filter = 'all'
  }

  filterOpen() {
    this.filter = 'open'
  }

  filterDone() {
    this.filter = 'done'
  }

  toggle(task: Task) {
    this.tasks = this.tasks.map(item => {
      // lo que tienes que hacer aquí:
      if (task.id === item.id) {
        // le estamos diciendo a el valor que tiene done que se invierta
        item.done = !item.done
        return item
      }
      return item
    })
  }


}
