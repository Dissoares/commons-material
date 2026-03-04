import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonsMaterial } from './commons-material';

describe('CommonsMaterial', () => {
  let component: CommonsMaterial;
  let fixture: ComponentFixture<CommonsMaterial>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [CommonsMaterial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonsMaterial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', (): void => {
    expect(component).toBeTruthy();
  });
});
