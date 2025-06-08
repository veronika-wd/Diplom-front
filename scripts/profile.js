const widgetsData = [
  {type: "calculator", code: "`<div class="calculator">
        <h4>Калькулятор</h4>
        <input type="number" id="num1" placeholder="Первое число">
        <input type="number" id="num2" placeholder="Второе число">
        <button>Подсчитать</button>
        <p id="result">Результат:</p>
    </div>`"}
]



let widgetId = 0;
    let draggedWidget = null;
    let draggedIndex = null;
    
    function addWidget(type) {
      widgetId++;
      const widget = document.createElement('div');
      widget.className = `widget ${type}`;
      widget.dataset.id = widgetId;
      widget.draggable = true;
      
      widget.innerHTML = widgetsData.find(type).code;
      
      // Добавляем обработчики перетаскивания
      widget.addEventListener('dragstart', handleDragStart);
      widget.addEventListener('dragend', handleDragEnd);
      
      document.getElementById('widgetsContainer').appendChild(widget);
      setupDropZones();
    }
    
    function removeWidget(id) {
      const widget = document.querySelector(`.widget[data-id="${id}"]`);
      if (widget) {
        widget.remove();
      }
    }
    
    function clearWidgets() {
      document.getElementById('widgetsContainer').innerHTML = '';
      widgetId = 0;
    }
    
    function handleDragStart(e) {
      draggedWidget = this;
      draggedIndex = Array.from(this.parentNode.children).indexOf(this);
      this.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
    
    function handleDragEnd() {
      this.classList.remove('dragging');
    }
    
    function setupDropZones() {
      const widgets = document.querySelectorAll('.widget');
      const container = document.getElementById('widgetsContainer');
      
      widgets.forEach(widget => {
        widget.addEventListener('dragover', function(e) {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
        });
        
        widget.addEventListener('drop', function(e) {
          e.preventDefault();
          if (draggedWidget !== this) {
            // Меняем местами элементы
            const thisIndex = Array.from(this.parentNode.children).indexOf(this);
            if (draggedIndex < thisIndex) {
              container.insertBefore(draggedWidget, this.nextSibling);
            } else {
              container.insertBefore(draggedWidget, this);
            }
          }
        });
      });
      
      // Обработка для контейнера (на случай пустого пространства)
      container.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      });
      
      container.addEventListener('drop', function(e) {
        e.preventDefault();
        if (draggedWidget) {
          this.appendChild(draggedWidget);
        }
      });
    }
    
    // Инициализация обработчиков при загрузке
    window.addEventListener('DOMContentLoaded', () => {
      setupDropZones();
    });