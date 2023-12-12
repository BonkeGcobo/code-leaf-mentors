
document.addEventListener('DOMContentLoaded', function () {
    // Show the home section by default
    document.getElementById('home').style.display = 'block';

    // Handle navigation clicks
    document.querySelectorAll('nav a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Hide all sections
            document.querySelectorAll('main section').forEach(function (section) {
                section.style.display = 'none';
            });

            // Show the selected section
            var targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).style.display = 'block';
        });
    });
});