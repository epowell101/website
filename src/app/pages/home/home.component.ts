import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  typewriter_text = 'helm install stable/openebs --name openebs --namespace openebs';
  typewriter_display = '';

  constructor() { }

  ngOnInit() {
    $('#recipeCarousel').carousel({
      interval: 2000
    })

    $('.carousel .carousel-item').each(function () {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i = 0; i < 4; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
      }
    });

    this.typingCallback(this);

  }


  openebs_features = [
    {
      'image_url': 'assets/images/features/icon1.png',
      'image_alt': 'feature1',
      'title': 'Containerized Storage for Containers',
      'description': `Your storage controller is a container that follows around your workloads
      , very different than Yet Another Scale out Storage System(“!YASSS”)`,
    },
    {
      'image_url': 'assets/images/features/icon2.png',
      'image_alt': 'feature2',
      'title': 'Prometheus metrics and Grafana graphs',
      'description': 'Granular monitoring through Prometheus and Grafana',
    },
    {
      'image_url': 'assets/images/features/icon3.png',
      'image_alt': 'feature3',
      'title': 'Snapshots & clones',
      'description': 'Beyond data protection and recovery, helps your workload move from development to testing all the way to production'
    },
    {
      'image_url': 'assets/images/features/icon4.png',
      'image_alt': 'feature4',
      'title': 'Granular Control',
      'description': `Each workload and hence, each team working on dynamic container based workloads
       has their own storage, instead of being managed by central storage`
    },
    {
      'image_url': 'assets/images/features/icon5.png',
      'image_alt': 'feature5',
      'title': 'Save Money',
      'description': 'Use thin provisioning and ephemeral storage instead of expensive cloud storage',
    },
    {
      'image_url': 'assets/images/features/icon6.png',
      'image_alt': 'feature6',
      'title': 'Avoid cloud lock-in',
      'description': `When you write your data to OpenEBS you write to an open source,
       highly flexible data management layer that allows you to manage your exposure to each cloud or data center`
    },
    {
      'image_url': 'assets/images/features/icon7.png',
      'image_alt': 'feature7',
      'title': 'Easy onboarding',
      'description': 'Installation in less than 30 seconds with minimal learning curve',
    },
    {
      'image_url': 'assets/images/features/icon8.png',
      'image_alt': 'feature8',
      'title': 'Configuration management for your data',
      'description': 'Use clones to restore your configurations  with your data'
    },
    {
      'image_url': 'assets/images/features/icon9.png',
      'image_alt': 'feature9',
      'title': 'Run anywhere',
      'description': 'Make multi-cloud real, improve resilience across availability zones'
    }];

  typingCallback(that) {
    const total_length = that.typewriter_text.length;
    const current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
    } else {
      that.typewriter_display = '';
    }
    setTimeout(that.typingCallback, 150, that);
  }

}
