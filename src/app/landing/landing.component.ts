import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FuncionariosService } from '../services/funcionarios.service';
import { RegistroPontoService } from '../services/registro-ponto.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewInit{
  @ViewChild('clockCanvas', { static: false }) clockCanvas?: ElementRef<HTMLCanvasElement>;
  private ctx?: CanvasRenderingContext2D;
  username: string = '';
  password: string = '';
  constructor(private registroPonto: RegistroPontoService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.desenharRelogio();
  }

  desenharRelogio() {
    const canvas = document.getElementById('meuRelogio') as HTMLCanvasElement;
    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          let raio = canvas.height / 2;
          ctx.translate(raio, raio);
          raio = raio * 0.90;
          setInterval(() => {
            this.desenharFace(ctx, raio);
            this.desenharNumeros(ctx, raio);
            this.desenharTempo(ctx, raio);
          }, 1000);   
        }
      }
  }

  desenharFace(ctx: CanvasRenderingContext2D, raio: number) {
    let grad;
    ctx.beginPath();
    ctx.arc(0, 0, raio, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, raio * 0.95, 0, 0, raio * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = raio * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, raio * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
  }

  desenharNumeros(ctx: CanvasRenderingContext2D, raio: number) {
    let ang;
    let num;
    ctx.font = raio * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -raio * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, raio * 0.85);
      ctx.rotate(-ang);
    }
  }

  desenharTempo(ctx: CanvasRenderingContext2D, raio: number) {
    const agora = new Date();
    let hora = agora.getHours();
    let minuto = agora.getMinutes();
    let segundo = agora.getSeconds();
    hora = hora % 12;
    hora = (hora * Math.PI / 6) + (minuto * Math.PI / (6 * 60)) + (segundo * Math.PI / (360 * 60));
    this.desenharMao(ctx, hora, raio * 0.5, raio * 0.07);
    minuto = (minuto * Math.PI / 30) + (segundo * Math.PI / (30 * 60));
    this.desenharMao(ctx, minuto, raio * 0.8, raio * 0.07);
    segundo = (segundo * Math.PI / 30);
    this.desenharMao(ctx, segundo, raio * 0.9, raio * 0.02);
  }

  desenharMao(ctx: CanvasRenderingContext2D, pos: number, comprimento: number, largura: number): void {
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -comprimento);
    ctx.stroke();
    ctx.rotate(-pos);
}

private drawClock() {
  if (this.clockCanvas && this.ctx) {
      const radius = this.clockCanvas.nativeElement.width / 2;
      this.ctx.translate(radius, radius);
      this.ctx.clearRect(-radius, -radius, this.clockCanvas.nativeElement.width, this.clockCanvas.nativeElement.height);

      this.drawFace(this.ctx, radius);
      this.drawNumbers(this.ctx, radius);
      this.drawTime(this.ctx, radius);
  }
}

  private drawFace(ctx: CanvasRenderingContext2D, radius: number) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = radius * 0.05;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
  }

  private drawNumbers(ctx: CanvasRenderingContext2D, radius: number) {
    let ang;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (let num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  private drawTime(ctx: CanvasRenderingContext2D, radius: number) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Desenha as horas
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    this.drawHand(ctx, hour, radius * 0.5, radius * 0.07);

    // Desenha os minutos
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    this.drawHand(ctx, minute, radius * 0.8, radius * 0.07);

    // Desenha os segundos
    second = (second * Math.PI / 30);
    this.drawHand(ctx, second, radius * 0.9, radius * 0.02);
  }

  private drawHand(ctx: CanvasRenderingContext2D, pos: number, length: number, width: number) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }





  onSubmit() {
    this.registroPonto.registraPonto(this.username, this.password).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Erro ao carregar os funcionários:', error);
      }
    );
  }

}
