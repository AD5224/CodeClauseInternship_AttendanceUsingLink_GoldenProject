document.addEventListener('DOMContentLoaded', function() {
    const attendanceForm = document.getElementById('attendanceForm');
    const rollNoInput = document.getElementById('rollNo');
    const markPresentBtn = document.getElementById('markPresentBtn');
    const markAbsentBtn = document.getElementById('markAbsentBtn');
    const attendanceStatus = document.getElementById('attendanceStatus');
    const statusMessage = document.getElementById('statusMessage');

    markPresentBtn.addEventListener('click', function() {
        markAttendance('present');
    });

    markAbsentBtn.addEventListener('click', function() {
        markAttendance('absent');
    });

    function markAttendance(status) {
        const rollNo = rollNoInput.value.trim();

        if (rollNo === '') {
            setStatus('Please enter roll number', 'red');
            return;
        }

        // Simulate saving attendance record (you can replace this with actual API call)
        setTimeout(function() {
            setStatus(`Attendance marked as ${status.toUpperCase()} for Roll No: ${rollNo}`, 'green');
            rollNoInput.value = '';
        }, 1000);
    }

    function setStatus(message, color) {
        statusMessage.textContent = message;
        statusMessage.style.color = color;
        attendanceStatus.style.display = 'block';

        // Hide status message after 3 seconds
        setTimeout(function() {
            attendanceStatus.style.display = 'none';
        }, 3000);
    }
});
