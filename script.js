  let charts = {};
    let metricData = {
      temperature: { values: [], timestamps: [] },
      altitude: { values: [], timestamps: [] },
      pressure: { values: [], timestamps: [] },
      angle: { values: [], timestamps: [] }
    };

    document.addEventListener('DOMContentLoaded', function() {
      lucide.createIcons();
      initializeCharts();
      setInterval(updateMetrics, 2000);
    });

    function initializeCharts() {
      const chartOptions = {
        type: 'line',
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              titleColor: '#2563eb',
              bodyColor: '#dc2626',
              borderColor: 'rgba(37, 99, 235, 0.5)',
              borderWidth: 1
            }
          },
          scales: {
            x: { display: false },
            y: { display: false }
          },
          elements: {
            point: { radius: 2 },
            line: { borderWidth: 2, tension: 0.4 }
          }
        }
      };

      // Temperature Chart
      const tempCtx = document.getElementById('tempChart').getContext('2d');
      charts.temperature = new Chart(tempCtx, {
        ...chartOptions,
        data: {
          labels: [],
          datasets: [{
            data: [],
            borderColor: '#dc2626',
            backgroundColor: 'rgba(220, 38, 38, 0.1)',
            fill: true
          }]
        }
      });

      // Altitude Chart
      const altCtx = document.getElementById('altChart').getContext('2d');
      charts.altitude = new Chart(altCtx, {
        ...chartOptions,
        data: {
          labels: [],
          datasets: [{
            data: [],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            fill: true
          }]
        }
      });

      // Pressure Chart
      const pressCtx = document.getElementById('pressChart').getContext('2d');
      charts.pressure = new Chart(pressCtx, {
        ...chartOptions,
        data: {
          labels: [],
          datasets: [{
            data: [],
            borderColor: '#dc2626',
            backgroundColor: 'rgba(220, 38, 38, 0.1)',
            fill: true
          }]
        }
      });

      // Angle Chart
      const angleCtx = document.getElementById('angleChart').getContext('2d');
      charts.angle = new Chart(angleCtx, {
        ...chartOptions,
        data: {
          labels: [],
          datasets: [{
            data: [],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            fill: true
          }]
        }
      });
    }
    // Generate random values , as of now:)
    function updateMetrics() {
      const now = new Date().toLocaleTimeString();
      
      // Generate realistic data variations
      const variations = {
        temperature: 24.5 + (Math.sin(Date.now() / 10000) * 2) + (Math.random() - 0.5),
        altitude: 1234 + Math.sin(Date.now() / 20000) * 100 + (Math.random() * 20 - 10),
        pressure: 1013 + Math.cos(Date.now() / 15000) * 5 + (Math.random() * 2 - 1),
        angle: 45.2 + Math.sin(Date.now() / 8000) * 10 + (Math.random() * 5 - 2.5)
      };

      Object.keys(variations).forEach(metric => {
        const value = variations[metric];
        
        // Update display
        document.getElementById(metric).innerHTML = 
          `${value.toFixed(1)}<span class="unit">${getUnit(metric)}</span>`;
        
        // Update chart data
        metricData[metric].values.push(value);
        metricData[metric].timestamps.push(now);
        
        // Keep only last 20 data points
        if (metricData[metric].values.length > 20) {
          metricData[metric].values.shift();
          metricData[metric].timestamps.shift();
        }
        
        // Update chart
        charts[metric].data.labels = metricData[metric].timestamps;
        charts[metric].data.datasets[0].data = metricData[metric].values;
        charts[metric].update('none');
      });

      // Update status indicators
      updateBalloonStatus();
      updateLandingPrediction();
    }

    function getUnit(metric) {
      const units = {
        temperature: '°C',
        altitude: 'm',
        pressure: 'hPa',
        angle: '°'
      };
      return units[metric];
    }

    function updateBalloonStatus() {
      const statuses = ['Safe & Stable', 'Ascending', 'Descending', 'Critical'];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      document.getElementById('balloon-status').textContent = status;
      
      const pulse = document.getElementById('balloon-pulse');
      if (status.includes('Critical')) {
        pulse.className = 'status-danger';
        pulse.style.background = 'var(--primary-red)';
      } else if (status.includes('Descending')) {
        pulse.className = 'status-warning';
        pulse.style.background = '#eab308';
      } else {
        pulse.className = 'status-safe';
        pulse.style.background = 'var(--primary-blue)';
      }
    }

    function updateLandingPrediction() {
      const landingTime = 15.0 + (Math.random() * 10 - 5);
      document.getElementById('landing-time').innerHTML = 
        `${landingTime.toFixed(1)}<span class="unit">min</span>`;
    }