import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-heptagon',
  templateUrl: './heptagon.component.html',
  styleUrls: ['./heptagon.component.scss']
})
export class HeptagonComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const sides = 7; // Heptagon
    const radius = 100;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const angle = (2 * Math.PI / sides) * i - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.strokeStyle = '#2ECC40'; // Green border
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}
