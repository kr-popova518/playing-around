import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/fire-auth/auth.service';
import { getAuth, updateProfile } from 'firebase/auth';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  displayName: any;
  photoURL: any;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      this.displayName = user.displayName || '';
      this.photoURL = user.photoURL || '';
    }
  }

  async onSubmit() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      try {
        await updateProfile(user, {
          displayName: this.displayName,
          photoURL: this.photoURL,
        });

        this.displayName = '';
        this.photoURL = '';
        
        alert('Changes saved successfully!');
        this.router.navigate(['/dashboard']);
      } catch (error) {
        alert('There is a problem, check the console');
        console.log(error);
      }
    }
  }
}
