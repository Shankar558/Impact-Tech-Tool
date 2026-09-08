import { Component, Input, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticItem } from '../../models';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() statistics: StatisticItem[] = [];
  @Input() darkTheme: boolean = false;
  @ViewChild('statsContainer') statsContainer!: ElementRef;

  private observer!: IntersectionObserver;
  private animated = false;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.animateAll();
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animated) {
          this.animated = true;
          this.animateAll();
          this.observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    if (this.statsContainer) {
      this.observer.observe(this.statsContainer.nativeElement);
    }
  }

  private animateAll(): void {
    this.statistics.forEach((stat, index) => {
      const element = this.statsContainer?.nativeElement?.querySelectorAll('.statistics__value')[index];
      if (element) {
        this.animateCounter(element as HTMLElement, stat.value, 2000);
      }
    });
  }

  private animateCounter(element: HTMLElement, target: number, duration: number): void {
    const startTime = performance.now();
    const startValue = 0;

    const updateValue = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);

      element.textContent = currentValue.toString();

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      } else {
        element.textContent = target.toString();
      }
    };

    requestAnimationFrame(updateValue);
  }
}
