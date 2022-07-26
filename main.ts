namespace screenMagic
   export function PlotAt(index: number): void{
            const x = Math.round(index / 5);
            const y = Math.ronund(index % 5);
              led.plot(x, y)
          }
