import { Injectable } from '@angular/core';
import {worker} from '../model/worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  Workers: worker[] = [
     {
    id: 1,
    firstname: "John",
    lastname: "Kamara",
    position: "Software Engineer",
    department: "IT",
    email: "john.kamara@example.com",
    phone: 23276123456
  },
  {
    id: 2,
    firstname: "Mariam",
    lastname: "Sesay",
    position: "HR Manager",
    department: "Human Resources",
    email: "mariam.sesay@example.com",
    phone: 23276876543
  },
  {
    id: 3,
    firstname: "David",
    lastname: "Koroma",
    position: "Network Administrator",
    department: "IT",
    email: "david.koroma@example.com",
    phone: 23275345678
  },
  {
    id: 4,
    firstname: "Fatmata",
    lastname: "Bangura",
    position: "Finance Officer",
    department: "Finance",
    email: "fatmata.bangura@example.com",
    phone: 23277123456
  },
  {
    id: 5,
    firstname: "Abdul",
    lastname: "Conteh",
    position: "Marketing Specialist",
    department: "Marketing",
    email: "abdul.conteh@example.com",
    phone: 23278234567
  },
  {
    id: 6,
    firstname: "Isatu",
    lastname: "Kargbo",
    position: "Administrative Assistant",
    department: "Administration",
    email: "isatu.kargbo@example.com",
    phone: 23279345678
  },
  {
    id: 7,
    firstname: "Mohamed",
    lastname: "Jalloh",
    position: "Project Manager",
    department: "Operations",
    email: "mohamed.jalloh@example.com",
    phone: 23270123456
  }
  ];

}
