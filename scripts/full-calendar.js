document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const eventModal = document.getElementById('eventModal');
    const eventForm = document.getElementById('eventForm');
    const addEventBtn = document.getElementById('addEventBtn');
    const closeBtn = document.querySelector('.close');
    const deleteEventBtn = document.getElementById('deleteEventBtn');
    const modalTitle = document.getElementById('modalTitle');
    
    // Инициализация календаря
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ru',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        buttonText: {
            today: 'Сегодня',
            month: 'Месяц',
            week: 'Неделя',
            day: 'День'
        },
        editable: true,
        selectable: true,
        select: function(info) {
            document.getElementById('eventStart').value = info.startStr.substring(0, 16);
            document.getElementById('eventEnd').value = info.end ? info.endStr.substring(0, 16) : '';
            modalTitle.textContent = 'Добавить событие';
            deleteEventBtn.style.display = 'none';
            openModal();
        },
        eventClick: function(info) {
            const event = info.event;
            document.getElementById('eventTitle').value = event.title;
            document.getElementById('eventStart').value = event.startStr.substring(0, 16);
            document.getElementById('eventEnd').value = event.end ? event.endStr.substring(0, 16) : '';
            document.getElementById('eventDescription').value = event.extendedProps.description || '';
            document.getElementById('eventColor').value = event.backgroundColor || '#7f3d9e';
            
            // Сохраняем ID события для редактирования
            eventForm.dataset.eventId = event.id;
            
            modalTitle.textContent = 'Редактировать событие';
            deleteEventBtn.style.display = 'inline-block';
            openModal();
        },
        events: JSON.parse(localStorage.getItem('calendarEvents')) || []
    });
    
    calendar.render();
    
    function openModal() {
        eventModal.style.display = 'block';
    }
    
    function closeModal() {
        eventModal.style.display = 'none';
        eventForm.reset();
        delete eventForm.dataset.eventId;
        deleteEventBtn.style.display = 'none';
    }
    
    addEventBtn.addEventListener('click', function() {
        eventForm.reset();
        const now = new Date();
        const nowStr = now.toISOString().substring(0, 16);
        document.getElementById('eventStart').value = nowStr;
        document.getElementById('eventColor').value = '#7f3d9e';
        modalTitle.textContent = 'Добавить событие';
        deleteEventBtn.style.display = 'none';
        openModal();
    });
    
    closeBtn.addEventListener('click', closeModal);
    
    // Исправленный обработчик удаления
    deleteEventBtn.addEventListener('click', function() {
        if (!eventForm.dataset.eventId) return;
        
        const eventId = eventForm.dataset.eventId;
        const event = calendar.getEventById(eventId);
        
        if (confirm('Вы уверены, что хотите удалить это событие?')) {
            event.remove();
            
            let events = JSON.parse(localStorage.getItem('calendarEvents')) || [];
            events = events.filter(e => e.id !== eventId);
            localStorage.setItem('calendarEvents', JSON.stringify(events));
            
            closeModal();
        }
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === eventModal) {
            closeModal();
        }
    });
    
    eventForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('eventTitle').value.trim();
        const start = document.getElementById('eventStart').value;
        const end = document.getElementById('eventEnd').value;
        const description = document.getElementById('eventDescription').value.trim();
        const color = document.getElementById('eventColor').value;
        
        if (!title) {
            alert('Пожалуйста, введите название события');
            return;
        }
        
        const eventData = {
            title: title,
            start: start,
            end: end || null,
            description: description,
            backgroundColor: color,
            borderColor: color,
            allDay: !start.includes('T')
        };
        
        let events = JSON.parse(localStorage.getItem('calendarEvents')) || [];
        
        if (eventForm.dataset.eventId) {
            const eventId = eventForm.dataset.eventId;
            const event = calendar.getEventById(eventId);
            
            if (event) {
                event.setProp('title', title);
                event.setStart(start);
                event.setEnd(end);
                event.setExtendedProp('description', description);
                event.setProp('backgroundColor', color);
                event.setProp('borderColor', color);
                
                const index = events.findIndex(e => e.id === eventId);
                if (index !== -1) {
                    events[index] = {
                        id: eventId,
                        ...eventData
                    };
                }
            }
        } else {
            const newEvent = {
                id: Date.now().toString(),
                ...eventData
            };
            
            calendar.addEvent(newEvent);
            events.push(newEvent);
        }
        
        localStorage.setItem('calendarEvents', JSON.stringify(events));
        closeModal();
    });
});