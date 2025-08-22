import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-about',
  imports: [  ],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const sides = 8; // Octagon
    const radius = 100;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const angle = (2 * Math.PI / sides) * i - Math.PI / 2; // Start at top
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.strokeStyle = '#FF4136'; // Red border
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}
