import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../photo/photo';
import {PhotoService} from '../photo/photo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  @Input() filter = '';
  constructor(private photoservice: PhotoService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoservice.listFromUser(userName).subscribe(photos => this.photos = photos);
  }

}
