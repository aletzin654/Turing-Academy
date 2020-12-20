// Despliega calendario de eventos
document.addEventListener('DOMContentLoaded', function (){
    
    var calendarUI = document.getElementById('calendario')
    var calendar = new FullCalendar.Calendar(calendarUI, {
        timeZone: 'local',
        locale: 'es',
    });
    calendar.render();
});