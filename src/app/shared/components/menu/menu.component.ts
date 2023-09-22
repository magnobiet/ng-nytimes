import { Component } from '@angular/core';
import { SectionSlug } from '../../enums/section-slug.enum';

interface Section {
  title: string;
  slug: SectionSlug;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public readonly sections: Array<Section> = [
    { title: 'World', slug: SectionSlug.World },
    { title: 'US', slug: SectionSlug.Us },
    { title: 'Politics', slug: SectionSlug.Politics },
    { title: 'Business', slug: SectionSlug.Business },
    { title: 'Science', slug: SectionSlug.Science },
    { title: 'Health', slug: SectionSlug.Health },
    { title: 'Sports', slug: SectionSlug.Sports },
  ];
}
