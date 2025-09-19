import {Component, computed, inject} from '@angular/core';
import {WorkerService} from '../../service/worker-service';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {
  // Access the WorkerService to get the list of workers
  workers = inject(WorkerService).Workers;

  // Properties for the new worker form
  newId: number | null = null;
  newFirstName: string = '';
  newLastName: string = '';
  newPosition: string = '';
  newDepartment: string = '';
  newEmail: string = '';
  newPhone: number | null  = null;

  // Method to add a new worker
  addWorker() {
    if (this.newId !== null
      && this.newFirstName && this.newLastName && this.newPosition
      && this.newDepartment && this.newEmail && this.newPhone !== null) {
      this.workers.push({
        id: this.newId,
        firstname: this.newFirstName,
        lastname: this.newLastName,
        position: this.newPosition,
        department: this.newDepartment,
        email: this.newEmail,
        phone: this.newPhone
      })
      this.newId = null;
      this.newFirstName = '';
      this.newLastName = '';
      this.newPosition = '';
      this.newDepartment = '';
      this.newEmail = '';
      this.newPhone = null;
    }
  }

  // Properties for filtering workers
  filterByFirstName: string = '';
  filterByLastName: string = '';
  filterByPosition: string = '';

  // Computed property to filter workers based on the filter criteria
  filterWorkers = computed(() => {
    this.workers.filter(worker =>
      worker.firstname.toLowerCase().includes(this.filterByFirstName) &&
      worker.lastname.toLowerCase().includes(this.filterByLastName) &&
      worker.position.toLowerCase().includes(this.filterByPosition))
  })

  deleteWorker(index: number){
    this.workers = this.workers.filter(w => w.id !== index);
  }


  editWorkers: number | null = null;
  editWorker(index: number){
    this.editWorkers = index;
  }

  saveEdit(index: number){
    this.editWorkers = null;
  }

  cancelEdit(){
    this.editWorkers = null;
  }

}
