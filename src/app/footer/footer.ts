import { SiteInfo } from './../post';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServices } from '../data-service/data-services';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  siteInfoDataFooter:SiteInfo;
  private readonly data=inject(DataServices)
  constructor(){
    this.siteInfoDataFooter=this.data.articlePosts.siteInfo
  }
}
