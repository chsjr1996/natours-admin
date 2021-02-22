import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    const appModules = [SidebarModule];

    const mat = [
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      MatToolbarModule,
    ];

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        ...appModules,
        ...mat,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tours-admin'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tours-admin');
  });

  it('should render toolbar title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span.app-title').textContent).toContain(
      'Tours Admin'
    );
  });
});
