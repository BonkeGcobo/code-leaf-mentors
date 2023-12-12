# code-leaf-mentors


### Design Explainations

[Alt text](images/screenShot.png)

 Added the nav tags so one can link to diffent sections of the web-page.

### Code Choices


 ```js
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
```

1) I have added a javascript code here to make the the nav to be always be visible.

2)  Only the clicked section show be displayed and the non-selected to be not displayed.
