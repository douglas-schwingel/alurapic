import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AluraPic';
  photos = [
    {
      description: 'Environment',
      url: 'https://www.awarenessdays.com/wp-content/uploads/2018/07/iStock-473454180-1024x767.jpg'
    },
    {
      description: 'Environment',
      url: 'http://www-file.huawei.com/-/media/corporate/images/sustainability/2018/sustainability_environment.jpg'
    },
    {
      description: 'Environment',
      url: 'https://www.awarenessdays.com/wp-content/uploads/2018/07/iStock-473454180-1024x767.jpg'
    },
    {
      description: 'Environment',
      url: 'http://www-file.huawei.com/-/media/corporate/images/sustainability/2018/sustainability_environment.jpg'
    }
  ];
}
