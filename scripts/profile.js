let widgetId = 0;
    let draggedWidget = null;
    let draggedIndex = null;
    
    function addWidget(size, id = null, content = null) {
      widgetId = id ? Math.max(widgetId, id) : widgetId + 1;
      const widget = document.createElement('div');
      widget.className = `widget ${size}`;
      widget.dataset.id = id || widgetId;
      widget.draggable = true;
      
      widget.innerHTML = content || `
        <div class="widget-header">
          <span>${size} виджет #${widgetId}</span>
          <span class="remove-btn" onclick="removeWidget(${widgetId})">×</span>
        </div>
        <div>Размер: ${size}</div>
      `;
      
      widget.addEventListener('dragstart', handleDragStart);
      widget.addEventListener('dragend', handleDragEnd);
      
      document.getElementById('widgetsContainer').appendChild(widget);
      setupDropZones();
      
      return widgetId;
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
            const thisIndex = Array.from(this.parentNode.children).indexOf(this);
            if (draggedIndex < thisIndex) {
              container.insertBefore(draggedWidget, this.nextSibling);
            } else {
              container.insertBefore(draggedWidget, this);
            }
          }
        });
      });
      
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
    
    // Сохраняем текущую раскладку
    function saveLayout() {
      const widgets = document.querySelectorAll('.widget');
      const layout = Array.from(widgets).map(widget => ({
        id: parseInt(widget.dataset.id),
        size: widget.classList.contains('calculator') ? 'calculator' : 
              widget.classList.contains('pupils') ? 'pupils' : 'notes',
        content: widget.innerHTML
      }));
      
      localStorage.setItem('widgetLayout', JSON.stringify(layout));
      alert('Раскладка сохранена!');
    }
    
    // Загружаем сохраненную раскладку
    function loadLayout() {
      const savedLayout = localStorage.getItem('widgetLayout');
      if (savedLayout) {
        clearWidgets();
        const layout = JSON.parse(savedLayout);
        layout.forEach(item => {
          addWidget(item.size, item.id, item.content);
        });
        alert('Раскладка загружена!');
      } else {
        alert('Сохраненная раскладка не найдена!');
      }
    }
    
    // Инициализация при загрузке
    window.addEventListener('DOMContentLoaded', () => {
      setupDropZones();
      // Автозагрузка при открытии страницы (раскомментируйте при необходимости)
      loadLayout();
    });