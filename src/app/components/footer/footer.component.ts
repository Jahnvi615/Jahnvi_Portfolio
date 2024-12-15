import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialMedia: any;
  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.socialMedia = this.userDataService.socialMedia;
  }

}
